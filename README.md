# English Buddy 🎒

为四年级孩子打造的英语学习 App,基于**译林版 4B (2026 春新版)** 课本完整内容。

---

## 当前版本: v0.5 (功能完整版)

### v0.5 新增 🆕

- **AI 自由对话** (Claude Haiku 陪练,6 个话题,每日 30 次)
- **8 套单元测试卷** (听+词+语法+读,100 分制,自动批改)
- **8 大语法系统** (公式+讲解+例句+练习)

### 已有功能

- 译林 4B 完整数据 (151 词 + 16 篇课文 + 58 题)
- 300 高频句型库 (12 大场景)
- 20 情景对话剧本 (217 句对话)
- 学新单词 (闪卡 + 音标)
- 复习 (艾宾浩斯曲线)
- 跟读练习 (语音识别评分)
- 课文精读 (Story + Cartoon)

---

## 模块总览

### 📚 课本学习
- 学新单词 - 151 词
- 课文精读 - 16 篇 Story/Cartoon
- 复习 - 艾宾浩斯曲线

### 💬 拓展会话
- 句型库 - 300 句 12 场景
- 情景对话 - 20 剧本
- 跟读练习 - 三种来源
- AI 陪练 🆕 - 自由对话

### 📝 测试 & 语法
- 语法系统 🆕 - 8 大语法
- 单元测试 🆕 - 8 套卷

### ⚙️ 设置
- AI 配置
- 进度查看
- 家长入口

---

## AI 对话使用前提

⚠️ AI 对话需要先配置 Cloudflare Worker:

1. 部署 `cloudflare-worker/worker.js` 到 Cloudflare
2. 设置环境变量:
   - `ANTHROPIC_API_KEY` (你的 API key)
   - `APP_PASSWORD` (自己设密码)
3. 在 App 的"设置"页填入 Worker URL 和密码

详见 DEPLOY.md。

---

## 文件结构

```
english-buddy/
├── index.html
├── HANDOFF.md                    🆕 交接文档(给下次对话用)
├── css/style.css
├── js/core.js
├── data/
│   ├── vocab-4b.js               课本数据
│   ├── phrases.js                300 句型
│   ├── scripts.js                20 剧本
│   ├── quizzes.js                🆕 测试卷
│   └── grammar.js                🆕 语法
├── pages/
│   ├── vocab-learn.html
│   ├── vocab-review.html
│   ├── speak.html
│   ├── reading.html
│   ├── phrases.html
│   ├── scripts.html
│   ├── ai-chat.html              🆕
│   ├── quiz.html                 🆕
│   ├── grammar.html              🆕
│   └── settings.html
├── cloudflare-worker/worker.js
├── README.md
├── DEPLOY.md
└── PARENT-GUIDE.md
```

---

## 数据汇总

| 内容 | 数量 |
|---|---|
| 单元 | 8 个 + 2 个 Project |
| 词汇 | 151 词 (带音标) |
| 课文 | 16 篇 (Story + Cartoon) |
| 阅读理解题 | 58 题 |
| 日常句型 | 300 句 (12 场景) |
| 情景剧本 | 20 个 (217 对话句) |
| 测试卷 | 8 套 (约 200 题) |
| 语法点 | 8 大语法 (32 道练习) |
| **总学习内容** | **800+ 条** |

---

## 给家长

App 是工具,你才是真正的教练。每天 10-15 分钟陪孩子用英语对话,胜过 1 小时孤独使用 App。

详见 PARENT-GUIDE.md。
