# English Buddy 项目交接文档

> **用法**：下次开新对话时，**把这整份文档粘贴到新 Claude（或 Cowork）的输入框**，它就能接着你之前的进度继续干，不会丢失任何上下文。

---

## 一、项目基本信息

**项目名**：English Buddy（英语学习 App）

**目标用户**：
- 主要：家长自己的四年级孩子（用 iPhone Safari）
- 次要：家长老板的初二孩子（共享 App）

**项目目标**：基于译林版 4B（2026 春新版）课本，6 个月让孩子达到日常对话流利

**家长背景**：完全不懂代码、Windows 电脑、有 GitHub 账号（用户名 Cherrywuma）、有 Anthropic API key

**当前已部署网址**：https://cherrywuma.github.io/english-buddy/

**GitHub 仓库**：https://github.com/Cherrywuma/english-buddy

**本地工作目录**：F:\MQ\english-buddy

---

## 二、版本历史

| 版本 | 内容 | 状态 |
|---|---|---|
| v0.1 | 旧版译林 4B (2012 版) | ❌ 作废 |
| v0.2 | 同 v0.1 + Story Time | ❌ 作废 |
| v0.3 | **真实新版 8 单元课本数据** | ✅ 已部署 GitHub Pages |
| v0.4 | 加 300 句型 + 20 剧本 | ⚠️ 用户**未下载部署** |
| v0.5 | 加 AI 对话 + 测试卷 + 语法系统 | ⚠️ **进行中，未完成** |

**重要**：用户明确说**不想分批更新**，要求**一次性到位**。所以 v0.5 必须做完所有内容再让用户下载。

---

## 三、教材数据 - 译林版 4B 2026 春新版

家长已上传完整课本扫描 PDF，所有 8 个 Unit 内容**已基于真实课本扫描录入**。

### 8 个 Unit 一览

| Unit | 主题 | 词汇数 | 核心句型 | 语法 |
|---|---|---|---|---|
| 1 | We become good friends | 21 | There is/are | There be 句型 |
| 2 | Helping others at school | 23 | Is/Are there...? | There be 疑问句 |
| 3 | Road Safety | 17 | 祈使句 + can/can't | 祈使句 |
| 4 | Caring about others | 15 | What's the matter? | be 动词描述感觉 |
| 5 | Eating out | 20 | What would you like?/I'd like | 礼貌点餐 |
| 6 | Jobs | 21 | What's your...job?/He's a... | 复数职业 |
| 7 | Chores | 17 | What are you doing? | 现在进行时 |
| 8 | In the kitchen | 17 | Are you V-ing? | 进行时疑问 |

每 Unit 含真实 Story Time + Cartoon Time 对话（带角色名）、Big Question、Learning Objectives、Sounds in focus。

### Story/Cartoon 列表（含角色）

- Unit 1: Story "The lion and the mouse" / Cartoon "Thank you for the carrots" (Ruby 兔子)
- Unit 2: Story "Let me show you around" (Yang Ling, Nancy) / Cartoon "Are you OK?" (Sam, Bobby)
- Unit 3: Story "Crossing the road" (Mum, Haohao, Taotao) / Cartoon "On the road" (Bobby, Tina)
- Unit 4: Story "What's the matter, Mum?" (Mum, Su Hai, Su Yang, Dad) / Cartoon "I'm hot and thirsty, Bobby" (Tom, Bobby)
- Unit 5: Story "Eating out in a Chinese restaurant" (Dad, Mike, waitress) / Cartoon "A hot dog?" (Bobby and friends)
- Unit 6: Story "Happy Labour Day!" (Su Hai, Liu Tao, Yang Ling) / Cartoon "He's John too" (Bobby, Henry)
- Unit 7: Story "A busy weekend" (Liu Tao 家庭) / Cartoon "Good job!" (Sam, Bobby, mum mouse)
- Unit 8: Story "A happy dinner" (Taotao, Haohao, Mum, Dad) / Cartoon "Sam's fish soup" (Sam, Bobby, Dad)

**缺少内容**：Project 1（My school model，约 2 页）家长还没拍。Project 2（A good helper）已经上传。

---

## 四、项目文件结构（v0.5 当前状态）

工作目录：`/home/claude/eb/`（容器内）

```
english-buddy/
├── index.html                    主页 (需更新到 v0.5)
├── css/style.css                 样式
├── js/core.js                    核心库 (Storage/Speech/Recognition/SRS/AI/Tracking/Pronunciation)
├── data/
│   ├── vocab-4b.js               ✅ 151 词 + 16 篇课文 (Unit 1-8 全部)
│   ├── phrases.js                ✅ 300 句型 (12 场景)
│   ├── scripts.js                ✅ 20 情景剧本 (217 对话句)
│   ├── quizzes.js                ✅ 8 套单元测试卷 (听+词+语法+读)
│   └── grammar.js                ✅ 8 大语法点
├── pages/
│   ├── vocab-learn.html          ✅ 学新单词
│   ├── vocab-review.html         ✅ 复习
│   ├── speak.html                ✅ 跟读练习
│   ├── reading.html              ✅ 课文精读
│   ├── settings.html             ✅ 设置
│   ├── phrases.html              ✅ 句型库
│   ├── scripts.html              ✅ 情景对话
│   ├── ai-chat.html              ✅ AI 自由对话 (需先配置 Worker)
│   ├── quiz.html                 ✅ 测试卷
│   └── grammar.html              ✅ 语法系统
├── cloudflare-worker/worker.js   AI 中转代码 (待部署)
├── README.md                     需更新到 v0.5
├── DEPLOY.md                     部署教程
└── PARENT-GUIDE.md               家长陪练手册
```

---

## 五、v0.5 完成度（截至本次对话中断时）

### ✅ 已完成（数据 + 页面）

1. **AI 自由对话页**（pages/ai-chat.html）
   - 6 个话题（学校/家人/爱好/食物/天气/自由）
   - 每日限 30 次调用
   - 接 Cloudflare Worker + Claude Haiku
   - 系统提示词要求 AI 简短回复 + 中文翻译

2. **8 套单元测试卷**（data/quizzes.js + pages/quiz.html）
   - 每套约 25 题，满分 100
   - 含听力（20分）+ 词汇（30分）+ 语法（30分）+ 阅读（20分）
   - 自动批改 + 错题分析

3. **8 大语法系统**（data/grammar.js + pages/grammar.html）
   - 每个语法点：公式 + 详细讲解 + 4 例句 + 4 道练习题（带解析）

### ⏳ 待完成（关键！必须做完才能给用户）

1. **更新主页 index.html**
   - 加入 3 个新模块入口：AI 陪练 / 单元测试 / 语法系统
   - 版本号更新到 v0.5
   - 移除"敬请期待"区或简化

2. **更新 README.md**
   - 反映 v0.5 全部新功能

3. **打包 zip**到 `/mnt/user-data/outputs/english-buddy-v0.5.zip`

4. **给用户最终汇报**：
   - 完成清单
   - 部署指引（Cowork 怎么部署）
   - AI 对话需要先在 settings.html 配置 Worker URL 和密码
   - Cloudflare Worker 代码已在项目里，需要部署到 Cloudflare（需要用户的 ANTHROPIC_API_KEY 和自定义密码）

---

## 六、用户的明确要求

1. **不分批**："你别管,能做多少做多少（可能出错）"
2. **要求一次性到位**：不想下载多个版本
3. **完全不懂代码**：所有技术操作交给 Cowork 桌面端
4. **沟通直接**：不需要客套，直接给方案

## 七、用户的工具分工

| 工具 | 做什么 | 现状 |
|---|---|---|
| **Chat（我）** | 做内容创作 + 规划 | 当前 |
| **Cowork** | 文件操作、部署、Git 操作 | 已成功部署 v0.3 |
| **Code** | 不用 | 用户不懂 |

用户经常会把 Cowork 的回复**误粘到 Chat**（我这里），看到这种情况就提醒她切回 Cowork 标签。

---

## 八、6 个月学习路线图（与用户达成共识）

| 月 | 阶段 | 内容 |
|---|---|---|
| 1 | 地基期 | 译林 4B 完整学完 + 16 篇课文熟读 + 100 高频句 |
| 2 | 扩展期 | 300 句型 + 8 个对话场景 + 词汇 500 |
| 3 | 突破期 | 句型变换 + 16 个场景 + 语法系统 + 词汇 800 |
| 4 | 应用期 | 时态系统 + 能讲故事 + 词汇 1100 |
| 5 | 表达期 | 复杂表达 + 拓展阅读 + 词汇 1300 |
| 6 | 固化期 | 日常对话不卡壳 + 综合测试 + 词汇 1500 |

---

## 九、v0.6+ 后续规划

- 拓展阅读（20+ 分级读物）
- 期中期末模拟卷（2-3 套完整卷）
- 家长陪练手册完整版扩充
- AI 对话改进（基于真实使用反馈）
- Project 1 内容（家长补拍 2 页课本后）

---

## 十、技术细节备忘

- **纯静态 HTML/CSS/JS**，无框架
- **localStorage** 存进度
- **Speech.speak()** 朗读，**Recognition.start()** 识别
- **SRS 艾宾浩斯算法** 复习
- **core.js** 提供所有工具模块
- **AI 模块**用法：`AI.chat(messages, {system, maxTokens, model: 'claude-haiku-4-5-20251001'})`
- Cloudflare Worker URL 和 password 存在 localStorage，用户在 settings.html 设置

---

## 十一、下次对话开场指令

把上面这整份文档粘贴给新 Claude 后，再加一句具体指令，比如：

**情况 A：要接着完成 v0.5**

> "请接着完成 v0.5 剩下的工作：更新主页加 3 个新入口、更新 README、打包 zip、给我最终汇报。"

**情况 B：v0.5 已部署后，要做 v0.6**

> "v0.5 已经部署成功了。请开始 v0.6：拓展阅读 + 期中期末模拟卷 + 家长陪练手册完整版。"

**情况 C：用了几天后想优化**

> "v0.5 部署后我孩子用了 X 天，反馈是 [XX]。请基于反馈调整。"

---

## 十二、关键文件外部链接

如果新 Claude 想看真实课本扫描，告诉用户重新上传：
- 译林版 4B 2026 春新版完整课本扫描（约 60 页）
- 书末 Word lists（第 76-77 页）

---

## 备注

写于 2026-05-20，v0.5 制作过程中。用户已选"方案 C：能做多少做多少"，本次对话尽量做完所有 v0.5 内容。

如果新对话开始时发现 v0.5 已经做完（用户已部署），就直接进入 v0.6 规划。
