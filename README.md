PromptBase + ChatGPT Playground

Tailwind CSS + React + Vite

| 部分   | 技术                        |
| ---- | ------------------------- |
| 网页框架 | React                     |
| 样式设计 | Tailwind CSS              |
| 数据来源 | 静态 JSON 文件 or 本地 Markdown |
| 内容结构 | 自己整理 20-30 条高质量 Prompt    |
| 部署上线 | Netlify / Vercel          |

部署:Netlify / Vercel

项目介绍:从 0 做出来的 Prompt 内容策展 Demo 网站。它前端由 React + Tailwind 实现，支持本地上传、搜索、收藏、点赞、注册功能。独立开发 Prompt 内容策展平台，支持分类浏览、高质量 prompt 测试、OpenAI API 连接与安全调用，提升 AI 工程使用体验。
未来我将继续拓展用户系统与后端存储，并开放开源供更多人使用。部署 API（用 Supabase 或 Vercel Serverless Function），以后再接 AI、推荐算法、评论系统都方便

项目灵感： 仿照「神算」诊断站玩法，用前端产品形式呈现「Prompt 工程内容策展」的理念，适合作为开源项目 + 技术写作主题。


```
promptllery/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
├─ components/
│  └─ PromptCard.jsx   ← 
    ├── App.jsx      ← 
    ├── main.jsx
    └── index.css    ← Tailwind 样式入口
```

卡片:
```
┌────────────────────────────┐
│ ✨ Title: 写故事的提示词        │
│ 📄 Prompt: 给我写一个感人至深的 │
│    科幻悬疑故事…               │
│ 🏷️ Tag: 创意 | 文学 | GPT-4     │
└────────────────────────────┘
```
快速开始：

```bash
npm install
npm run dev
````


---
基础功能: 静态展示

1. ✅ 首页 UI 搭建好，卡片能展示
    
2. ✅ 支持搜索、分类、点赞、收藏、上传
    
3. ✅ 假登录系统也完成，状态同步都正常
    
4. ✅ 数据结构从 `tag: "A | B"` 成功换成 `tag: ["A", "B"]`
    
5. ✅ 详情页

6. ✅ 生成二维码 / 一键分享 prompt 链接

7. ✅ 静态数据导出,查看 JSON 源文件

8. ✅ 排行页(最新和最热)

9. ✅ 独立分类页


---
  

核心功能: 接入 OpenAI 接口 + Prompt 测试界面 (涉及KEY, 请勿将自己的密钥上传 GitHub)


1. ✅ 创建 `PromptDetailPage.jsx` 页面
    
2. ✅ 配置路由 + 传入 prompt 内容
    
3. ✅ 显示完整 prompt 信息 + 示例 / 说明区
    
4. ✅ 添加 “测试 Prompt” 输入区（可以加上下文）
    
5. ✅ 请求 OpenAI 接口并显示回复
    
6. ✅ 模型选择滑块组件（ModelSelector）-> 未来可适配多种模型

---

全栈功能: 链接后端, 使用supabase

1. ✅ 把 prompts 从 JSON 切换成 Supabase 查询数据
2. ✅ 点赞写入数据库（like_count +1）
3. ✅ 收藏功能写入数据库（新建 favorites 表）
4. ✅ 登录系统接入 Supabase Auth（邮箱/密码 或 GitHub 登陆）
5. ✅ Prompt 按用户名归属（和用户绑定）
6. ✅ 登录使用第三方（GitHub / Magic Link）认证

7. ✅ RLS 策略 & 安全性

---

最终demo展示

---
如果报错, 请
Step 1：安装 nvm（Node Version Manager）

在终端运行：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

安装完之后，复制下面这段贴进你的 `~/.zshrc`（或者运行下面命令加进去）：

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```

然后关闭 Terminal，重新打开！



 Step 2：安装并使用 Node.js v20

```bash
nvm install 20
nvm use 20
```

检查成功：

```bash
node -v   # 应该输出 v20.x.x
npm -v    # 一般会是 v10+
```

查看nvm配置:
```
code ~/.zshrc
```
---

License
