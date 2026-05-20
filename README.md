# English Buddy 🎒

为四年级孩子打造的英语学习 App,基于**译林版 4B (2026 春新版)** 课本完整内容,目标 6 个月达到日常对话流利。

---

## 当前版本: v0.3 (2026春新版完整版)

### 已完成 ✅

- **完整 8 单元 + 词汇表** (151 词,全部带音标和页码)
- **16 篇课文精读** (8 个 Story Time + 8 个 Cartoon Time,带角色对话)
- **58 道阅读理解题** (扫除阅读盲点)
- **每单元核心句型 + 语法点 + 发音重点** 
- **单词学习模块** (闪卡 + 中文遮罩 + 音标 + 自动朗读)
- **艾宾浩斯遗忘曲线复习系统** (今日复习 + 难记词 + 随机抽测)
- **跟读练习模块** (Story / Cartoon / 核心句型三模式,iPhone 语音识别评分)
- **AI 对话架构就绪** (Cloudflare Worker 中转,保护 API key)

### 即将推出 ⏳

- 300+ 日常对话句型库
- 20+ 情景对话剧本
- AI 自由对话 (Claude Haiku 陪练员)
- 语法系统化教学 (动画 + 图表 + 游戏化练习)
- 单元测试卷 + 期中期末模拟卷
- 拓展阅读 (分级读物)
- 家长陪练手册完整版

---

## 译林版 4B (2026 春新版) 全册概览

| Unit | 主题 (英) | 主题 (中) | 词汇 | Story Time | Cartoon Time | 核心句型 |
|---|---|---|---|---|---|---|
| 1 | We become good friends | 我们成为好朋友 | 21 | 狮子和老鼠 | Thank you for the carrots | There is/are |
| 2 | Helping others at school | 在校帮助他人 | 23 | Let me show you around | Are you OK? | Is/Are there...? |
| 3 | Road Safety | 道路安全 | 17 | Crossing the road | On the road | 祈使句 + can/can't |
| 4 | Caring about others | 关心他人 | 15 | What's the matter, Mum? | I'm hot and thirsty | What's the matter? |
| 5 | Eating out | 外出就餐 | 20 | Eating out in a Chinese restaurant | A hot dog? | What would you like? + I'd like |
| 6 | Jobs | 职业 | 21 | Happy Labour Day! | He's John too | What's your...job? |
| 7 | Chores | 家务 | 17 | A busy weekend | Good job! | 现在进行时 V-ing |
| 8 | In the kitchen | 在厨房 | 17 | A happy dinner | Sam's fish soup | Are you V-ing? |
| **总计** | | | **151 词** | **8 篇** | **8 篇** | **8 大语法** |

---

## 快速开始

### 方法一: 本地试用 (5 分钟)

1. 下载所有文件,解压
2. 用 Safari 打开 `index.html`
3. 立刻可以开始学习!(不需要联网,不需要配置)

### 方法二: 部署到 GitHub Pages (推荐,孩子用手机就能学)

详见 [DEPLOY.md](DEPLOY.md) - 手把手图文教程

---

## 6 个月学习路线图

| 阶段 | 时间 | 目标 |
|---|---|---|
| 第 1 月 | 地基期 | 译林 4B 学完 + 16 篇课文精读熟练 + 100 高频句脱口而出 |
| 第 2 月 | 扩展期 | 300 句型 + 8 个对话场景 + 词汇 500 |
| 第 3 月 | 突破期 | 句型变换 + 16 个场景 + 语法系统 + 词汇 800 |
| 第 4 月 | 应用期 | 时态系统 + 能讲故事 + 词汇 1100 |
| 第 5 月 | 表达期 | 复杂表达 + 拓展阅读 + 词汇 1300 |
| 第 6 月 | 固化期 | 日常对话不卡壳 + 综合测试 + 词汇 1500 |

---

## 文件结构

```
english-buddy/
├── index.html              主页 (含统计 + 模块入口)
├── css/style.css           样式
├── js/core.js              核心库 (Speech / Recognition / SRS / AI / Tracking)
├── data/vocab-4b.js        译林 4B 新版完整数据 (151 词 + 16 篇课文 + 58 题)
├── pages/
│   ├── vocab-learn.html    学新单词 (闪卡式 + 音标)
│   ├── vocab-review.html   复习 (3 种模式)
│   ├── speak.html          跟读练习 (3 种来源)
│   ├── reading.html        课文精读 ⭐ Story + Cartoon 双模块
│   └── settings.html       设置 (AI 配置 + 进度 + 家长入口)
├── cloudflare-worker/
│   └── worker.js           AI 中转 (Claude Haiku)
├── README.md               本文档
├── DEPLOY.md               部署教程
└── PARENT-GUIDE.md         家长陪练手册 (含 100 句陪练英语)
```

---

## 设计原则

1. **真实课本数据** — 所有内容直接来自课本扫描,与孩子学校教学进度对齐
2. **iPhone 优先** — 孩子用手机,设计针对手机屏优化
3. **不打扰式** — 没有广告、没有弹窗、没有诱导,只有学习
4. **家长可控** — 进度、AI 用量、密码全在家长手中
5. **数据本地化** — 学习数据存在浏览器本地,不上传服务器

---

## 给家长的话

**App 是工具,家长才是真正的英语教练**。每天 10-15 分钟陪孩子用英语对话,胜过 1 小时孤独使用 App。

详见 [PARENT-GUIDE.md](PARENT-GUIDE.md)。
