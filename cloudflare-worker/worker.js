// English Buddy - Cloudflare Worker 中转
// 保护 Anthropic API Key,加密码验证,限制速率
//
// 部署步骤见 DEPLOY.md
// 部署前需要在 Cloudflare Dashboard 配置 2 个环境变量(Secrets):
//   ANTHROPIC_API_KEY = 你的 Claude API key
//   APP_PASSWORD = 你设置的家庭密码(要和 App 里设的一致)

export default {
  async fetch(request, env, ctx) {
    // 1. CORS 处理
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-App-Password',
      'Access-Control-Max-Age': '86400'
    };
    
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { 
        status: 405, 
        headers: corsHeaders 
      });
    }
    
    // 2. 密码验证 (第一道防线)
    const submittedPwd = request.headers.get('X-App-Password');
    if (!submittedPwd || submittedPwd !== env.APP_PASSWORD) {
      return new Response(JSON.stringify({ error: '密码错误,无权访问' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    // 3. 速率限制 (第二道防线)
    // 简单方案: 按 IP + 日期 限流, 每天最多 200 次
    try {
      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const today = new Date().toISOString().slice(0, 10);
      const rateKey = `rate:${ip}:${today}`;
      
      // 这里用 Cloudflare KV (可选, 如果你不开 KV 也能跑, 只是没有限流)
      if (env.RATE_LIMIT_KV) {
        const used = parseInt(await env.RATE_LIMIT_KV.get(rateKey) || '0');
        if (used >= 200) {
          return new Response(JSON.stringify({ 
            error: '今日调用次数已达上限(200次),请明天再来' 
          }), {
            status: 429,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
        // 不阻塞主流程地更新计数
        ctx.waitUntil(
          env.RATE_LIMIT_KV.put(rateKey, String(used + 1), { 
            expirationTtl: 60 * 60 * 25 
          })
        );
      }
    } catch (e) {
      // 限流不可用不阻断主流程
    }
    
    // 4. 调用 Anthropic API
    try {
      const body = await request.json();
      
      // 验证必要字段
      if (!body.messages || !Array.isArray(body.messages)) {
        return new Response(JSON.stringify({ error: '缺少 messages 字段' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
      
      // 限制 max_tokens, 防止超量计费
      const maxTokens = Math.min(body.max_tokens || 300, 1000);
      
      const anthropicReq = {
        model: body.model || 'claude-haiku-4-5-20251001',
        max_tokens: maxTokens,
        messages: body.messages,
        temperature: body.temperature !== undefined ? body.temperature : 0.7
      };
      if (body.system) anthropicReq.system = body.system;
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(anthropicReq)
      });
      
      const result = await response.text();
      
      return new Response(result, {
        status: response.status,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        }
      });
      
    } catch (err) {
      return new Response(JSON.stringify({ 
        error: '内部错误: ' + err.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};
