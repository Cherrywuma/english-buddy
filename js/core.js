// English Buddy 核心工具库

// ===== 本地存储管理 =====
const Storage = {
  PREFIX: 'eb_',
  
  get(key, defaultVal = null) {
    try {
      const v = localStorage.getItem(this.PREFIX + key);
      return v ? JSON.parse(v) : defaultVal;
    } catch(e) { return defaultVal; }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
      return true;
    } catch(e) { return false; }
  },
  
  remove(key) {
    localStorage.removeItem(this.PREFIX + key);
  }
};

// ===== 语音合成（让 App 念英语）=====
const Speech = {
  voices: [],
  preferredVoice: null,
  
  init() {
    if (!('speechSynthesis' in window)) return;
    const loadVoices = () => {
      this.voices = speechSynthesis.getVoices();
      // 优先选英音/美音的女声（孩子更喜欢）
      this.preferredVoice = 
        this.voices.find(v => v.lang === 'en-US' && v.name.includes('Samantha')) ||
        this.voices.find(v => v.lang === 'en-GB' && /female|woman|samantha|karen/i.test(v.name)) ||
        this.voices.find(v => v.lang.startsWith('en')) ||
        this.voices[0];
    };
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  },
  
  speak(text, opts = {}) {
    if (!('speechSynthesis' in window)) {
      alert('您的浏览器不支持语音合成,建议使用 Safari 或 Chrome');
      return;
    }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = opts.lang || 'en-US';
    u.rate = opts.rate || 0.85;
    u.pitch = opts.pitch || 1;
    u.volume = opts.volume || 1;
    if (this.preferredVoice && opts.lang !== 'zh-CN') u.voice = this.preferredVoice;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
  },
  
  stop() {
    speechSynthesis.cancel();
  }
};

// ===== 语音识别（识别孩子说的英语）=====
const Recognition = {
  recognition: null,
  isListening: false,
  
  isSupported() {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  },
  
  init() {
    if (!this.isSupported()) return false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SR();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;
    return true;
  },
  
  listen(onResult, onError) {
    if (!this.recognition) {
      if (!this.init()) {
        onError && onError('浏览器不支持语音识别,请用 iPhone Safari');
        return;
      }
    }
    if (this.isListening) {
      this.recognition.stop();
      return;
    }
    
    this.recognition.onresult = (event) => {
      const results = event.results[0];
      const alternatives = [];
      for (let i = 0; i < results.length; i++) {
        alternatives.push({
          text: results[i].transcript,
          confidence: results[i].confidence
        });
      }
      this.isListening = false;
      onResult && onResult(alternatives);
    };
    this.recognition.onerror = (e) => {
      this.isListening = false;
      onError && onError(e.error);
    };
    this.recognition.onend = () => {
      this.isListening = false;
    };
    
    this.isListening = true;
    this.recognition.start();
  },
  
  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
};

// ===== 发音相似度计算（评分用）=====
const Pronunciation = {
  // 简化版相似度算法
  similarity(said, expected) {
    if (!said || !expected) return 0;
    const a = said.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    const b = expected.toLowerCase().replace(/[^a-z\s]/g, '').trim();
    if (a === b) return 100;
    
    // 词级匹配
    const aWords = a.split(/\s+/);
    const bWords = b.split(/\s+/);
    let matches = 0;
    bWords.forEach(w => {
      if (aWords.includes(w)) matches++;
      else if (aWords.some(aw => this.editDistance(aw, w) <= Math.max(1, Math.floor(w.length / 4)))) matches += 0.7;
    });
    return Math.round((matches / bWords.length) * 100);
  },
  
  editDistance(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({length: m+1}, () => Array(n+1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = a[i-1] === b[j-1] 
          ? dp[i-1][j-1] 
          : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
      }
    }
    return dp[m][n];
  },
  
  getScoreLabel(score) {
    if (score >= 90) return { label: '完美!', color: '#34C759', emoji: '🌟' };
    if (score >= 75) return { label: '很棒!', color: '#34C759', emoji: '👍' };
    if (score >= 60) return { label: '不错', color: '#FF9500', emoji: '😊' };
    if (score >= 40) return { label: '再试试', color: '#FF9500', emoji: '💪' };
    return { label: '加油', color: '#FF3B30', emoji: '🔄' };
  }
};

// ===== 艾宾浩斯遗忘曲线算法 =====
const SRS = {
  // 复习间隔(天): 1, 2, 4, 7, 15, 30
  INTERVALS: [1, 2, 4, 7, 15, 30],
  
  // 获取单词学习状态
  getWordState(wordKey) {
    return Storage.get('word_' + wordKey, {
      level: 0,      // 0-5,等级越高越熟
      lastSeen: 0,   // 上次复习时间戳
      nextReview: 0, // 下次该复习的时间戳
      correct: 0,    // 总答对次数
      wrong: 0,      // 总答错次数
      added: 0       // 首次学习时间
    });
  },
  
  // 单词答对
  markCorrect(wordKey) {
    const state = this.getWordState(wordKey);
    if (!state.added) state.added = Date.now();
    state.correct++;
    state.lastSeen = Date.now();
    state.level = Math.min(5, state.level + 1);
    const dayMs = 24 * 60 * 60 * 1000;
    state.nextReview = Date.now() + this.INTERVALS[state.level - 1] * dayMs;
    Storage.set('word_' + wordKey, state);
  },
  
  // 单词答错
  markWrong(wordKey) {
    const state = this.getWordState(wordKey);
    if (!state.added) state.added = Date.now();
    state.wrong++;
    state.lastSeen = Date.now();
    state.level = Math.max(0, state.level - 1);
    const dayMs = 24 * 60 * 60 * 1000;
    state.nextReview = Date.now() + dayMs;  // 答错的当天就要复习
    Storage.set('word_' + wordKey, state);
  },
  
  // 是否需要复习
  needsReview(wordKey) {
    const state = this.getWordState(wordKey);
    if (!state.added) return false;
    return Date.now() >= state.nextReview;
  },
  
  // 是否完全掌握
  isMastered(wordKey) {
    const state = this.getWordState(wordKey);
    return state.level >= 5 && state.correct >= 5;
  },
  
  // 获取今日复习队列
  getReviewQueue(allWords) {
    return allWords.filter(w => {
      const state = this.getWordState(w.en);
      return state.added && Date.now() >= state.nextReview && state.level < 5;
    });
  },
  
  // 获取统计信息
  getStats(allWords) {
    let learning = 0, mastered = 0, due = 0, notStarted = 0;
    allWords.forEach(w => {
      const state = this.getWordState(w.en);
      if (!state.added) notStarted++;
      else if (state.level >= 5) mastered++;
      else {
        learning++;
        if (Date.now() >= state.nextReview) due++;
      }
    });
    return { learning, mastered, due, notStarted, total: allWords.length };
  }
};

// ===== 打卡 / 学习记录 =====
const Tracking = {
  // 今天的日期 key (YYYY-MM-DD)
  todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  },
  
  // 记录学习行为
  log(action, detail) {
    const today = this.todayKey();
    const records = Storage.get('records_' + today, []);
    records.push({ action, detail, time: Date.now() });
    Storage.set('records_' + today, records);
    
    // 更新打卡
    this.checkIn(today);
  },
  
  // 打卡
  checkIn(dateKey) {
    const checkins = Storage.get('checkins', []);
    if (!checkins.includes(dateKey)) {
      checkins.push(dateKey);
      Storage.set('checkins', checkins);
    }
  },
  
  // 获取连续打卡天数
  getStreak() {
    const checkins = Storage.get('checkins', []);
    if (checkins.length === 0) return 0;
    const set = new Set(checkins);
    let streak = 0;
    let d = new Date();
    while (true) {
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      if (set.has(key)) {
        streak++;
        d.setDate(d.getDate() - 1);
      } else {
        // 如果今天还没打卡,从昨天算起
        if (streak === 0 && key === this.todayKey()) {
          d.setDate(d.getDate() - 1);
          continue;
        }
        break;
      }
    }
    return streak;
  },
  
  // 获取今日学习量
  getTodayCount(action) {
    const records = Storage.get('records_' + this.todayKey(), []);
    if (action) return records.filter(r => r.action === action).length;
    return records.length;
  }
};

// ===== AI 对话接入 =====
const AI = {
  WORKER_URL: '', // 部署 Cloudflare Worker 后填入
  
  setWorkerUrl(url) {
    Storage.set('worker_url', url);
    this.WORKER_URL = url;
  },
  
  getWorkerUrl() {
    if (!this.WORKER_URL) this.WORKER_URL = Storage.get('worker_url', '');
    return this.WORKER_URL;
  },
  
  setPassword(pwd) {
    Storage.set('app_password', pwd);
  },
  
  getPassword() {
    return Storage.get('app_password', '');
  },
  
  async chat(messages, opts = {}) {
    const url = this.getWorkerUrl();
    const pwd = this.getPassword();
    if (!url) throw new Error('请先在设置中配置 Cloudflare Worker 地址');
    if (!pwd) throw new Error('请先设置访问密码');
    
    const res = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-App-Password': pwd
      },
      body: JSON.stringify({
        messages,
        model: opts.model || 'claude-haiku-4-5-20251001',
        max_tokens: opts.maxTokens || 300,
        system: opts.system || '',
        temperature: opts.temperature !== undefined ? opts.temperature : 0.7
      })
    });
    
    if (!res.ok) {
      const err = await res.text();
      throw new Error('AI 调用失败: ' + err);
    }
    
    const data = await res.json();
    return data;
  }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  Speech.init();
  Recognition.init();
});

// ===== v0.3 兼容扩展 =====
// 给新版页面用的简化 API,内部调用现有 SRS / Recognition / Pronunciation

SRS.markLearned = function(wordKey) {
  this.markCorrect(wordKey);
};

SRS.markDifficult = function(wordKey) {
  const state = this.getWordState(wordKey);
  if (!state.added) state.added = Date.now();
  state.difficult = true;
  state.lastSeen = Date.now();
  // 难记词第二天就要复习
  const dayMs = 24 * 60 * 60 * 1000;
  state.nextReview = Date.now() + dayMs;
  Storage.set('word_' + wordKey, state);
};

SRS.getStatus = function(wordKey) {
  const state = this.getWordState(wordKey);
  if (!state.added) return 'new';
  if (state.level >= 5) return 'mastered';
  return 'learning';
};

SRS.getDue = function(allWords) {
  return this.getReviewQueue(allWords);
};

SRS.getDifficult = function(allWords) {
  return allWords.filter(w => {
    const state = this.getWordState(w.en);
    return state.difficult === true;
  });
};

SRS.review = function(wordKey, correct) {
  if (correct) this.markCorrect(wordKey);
  else this.markWrong(wordKey);
};

// 给 getStats 补充 difficult 字段
const _origGetStats = SRS.getStats;
SRS.getStats = function(allWords) {
  const base = _origGetStats.call(this, allWords);
  let difficult = 0;
  allWords.forEach(w => {
    const state = this.getWordState(w.en);
    if (state.difficult) difficult++;
  });
  base.difficult = difficult;
  return base;
};

// Recognition 简化 API
Recognition.supported = function() { return this.isSupported(); };
Recognition.start = function(opts) {
  this.listen(
    (alternatives) => {
      const heard = alternatives && alternatives[0] ? alternatives[0].text : '';
      opts.onResult && opts.onResult(heard);
    },
    (err) => opts.onError && opts.onError(err)
  );
};

// Pronunciation.score 返回带高亮的对象
Pronunciation.score = function(target, heard) {
  const score = this.similarity(heard, target);
  // 单词级 highlight
  const targetWords = target.toLowerCase().replace(/[^\w\s']/g, '').split(/\s+/).filter(Boolean);
  const heardWords = (heard || '').toLowerCase().replace(/[^\w\s']/g, '').split(/\s+/).filter(Boolean);
  const heardSet = new Set(heardWords);
  
  const highlighted = targetWords.map(w => {
    if (heardSet.has(w)) return `<span class="match">${w}</span>`;
    // 看是否有近似词
    const near = heardWords.find(hw => this.editDistance(hw, w) <= Math.max(1, Math.floor(w.length / 4)));
    if (near) return `<span class="match">${w}</span>`;
    return `<span class="miss">${w}</span>`;
  }).join(' ');
  
  return { score, highlighted, heard: heard || '(没听到)' };
};
