# 部署教程 - 手把手版 🚀

**目标读者**:完全不懂代码的家长。本教程只教你**最基础的部署**——让孩子能用 iPhone 打开学习。

部署成功后效果:孩子打开 Safari → 输入网址 → 立刻能学英语,不需要每次重新解压。

---

## 第一阶段:本地验证 (5 分钟)

**先确认 App 能用,再去部署**。

1. 解压下载的 zip 文件
2. 找到 `index.html` 文件
3. **用 Safari 浏览器双击打开它** (不要用 Chrome,后面 Cloudflare 用 Chrome)
4. 看到主页就 OK 了

✅ 看到 "English Buddy" 主页 + "译林版 4B · 2026春新版" 标签 → 第一阶段完成
❌ 报错 → 检查文件是否完整,重新下载

---

## 第二阶段:上传到 GitHub Pages (15 分钟)

### Step 1 - 注册 GitHub 账号 (如果没有)

1. 打开 https://github.com
2. 点击右上角 "Sign up"
3. 输入邮箱、密码、用户名 (记住用户名,后面会用)
4. 验证邮箱

### Step 2 - 创建新仓库

1. 登录后,点击右上角 "+" → "New repository"
2. **Repository name** 填: `english-buddy`
3. **Description** 留空
4. 选择 **Public** (必须公开,Pages 才能用)
5. **不要**勾选任何"Initialize"选项
6. 点击 "Create repository"

### Step 3 - 上传文件

GitHub 会显示一个空仓库页面。看到一行小字 "uploading an existing file" 就**点击它**。

或者直接进:
`https://github.com/你的用户名/english-buddy/upload/main`

1. 把解压的 **english-buddy 文件夹里所有内容** 拖进网页
   - ⚠️ 拖**里面的内容**,不要拖整个文件夹本身
   - 应该看到 `index.html`, `css/`, `js/`, `data/`, `pages/` 等
2. 滚动到底部,点击绿色按钮 "Commit changes"
3. 等待上传完成 (1-2 分钟)

### Step 4 - 启用 GitHub Pages

1. 在仓库主页,点击顶部 "Settings"
2. 左侧菜单往下滚,找到 "Pages"
3. 在 "Source" 下:
   - Branch 选 **main**
   - 文件夹选 **/ (root)**
4. 点击 "Save"
5. 等待 1-2 分钟,页面顶部会出现:
   `Your site is live at https://你的用户名.github.io/english-buddy/`

### Step 5 - 测试访问

1. 复制那个网址
2. 用 iPhone Safari 打开
3. 看到主页 → **大功告成!**

---

## 第三阶段:添加到 iPhone 主屏 (1 分钟)

让 App 像原生 App 一样在桌面打开。

1. 用 Safari 打开你的网址
2. 点底部中间的"分享"按钮 (方框+向上箭头)
3. 滚动找到 **"添加到主屏幕"**
4. 起名 "英语小伙伴" → 添加
5. 桌面上就有一个 App 图标了!点击直接打开

---

## 第四阶段 (可选):部署 AI 中转 (高级)

**如果你不需要 AI 对话功能,可以跳过这一步。** 当前版本的核心学习功能 (单词、课文、跟读) **不需要 AI**。

### 为什么需要中转?

孩子直接调 Anthropic API 会暴露你的 API key,被人盗用就完了。Cloudflare Worker 是一个免费的"中转站",保护 API key + 限制每天最多调用次数。

### 步骤

1. **注册 Cloudflare 账号**: https://dash.cloudflare.com/sign-up
2. 进入控制台 → 左侧 "Workers & Pages" → "Create" → "Hello World" 模板
3. 给 Worker 起名 `english-buddy-ai`
4. 部署后,点击 "Edit code"
5. 把整个代码替换为本项目 `cloudflare-worker/worker.js` 的内容
6. 保存并部署
7. **配置环境变量**:
   - Worker 详情页 → Settings → Variables
   - 添加 `ANTHROPIC_API_KEY` = 你的 Anthropic API key
   - 添加 `APP_PASSWORD` = 自己想一个密码 (孩子用 App 时要输入)
8. 复制 Worker 的网址 (类似 `https://english-buddy-ai.你的子域.workers.dev`)
9. 在 App 的"设置"页填入这个网址和密码

---

## 常见问题

**Q: 上传到 GitHub 后访问 404?**
A: 等 2-3 分钟再试。GitHub Pages 第一次启用需要时间。

**Q: 我改了内容,网站没更新?**
A: 重新上传文件到 GitHub (覆盖)。Pages 会自动更新,但有缓存,Safari 可以"长按刷新"。

**Q: 孩子的 iPhone 提示"不支持语音识别"?**
A: 必须用 **Safari 浏览器**,不能用 Chrome。

**Q: 我不想公开仓库,可以私有吗?**
A: 私有仓库的 Pages 需要付费 GitHub Pro。建议保持 Public——不会泄露 API key,因为 API key 不在前端代码里。

**Q: 怎么更新 App 内容?**
A: 等我下次给你新版 zip,你重新上传覆盖即可。

---

## 下一步

部署完成后,告诉我"已部署",我会继续做下一批内容:
- 300+ 日常对话句型
- 20+ 情景对话剧本
- AI 陪练对话
- 语法系统
- 测试卷

加油!💪
