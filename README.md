
## Promptllery

### 项目介绍 | Project Introduction

从 0 做出来的 **Prompt 内容策展平台**（PromptBase + ChatGPT Playground），支持上传、点赞、收藏、搜索、高亮展示，并接入 OpenAI API 实现 Prompt 测试。  
项目从 0 到 1 实现完整交互、用户体系与后端联动，未来将作为 AI 产品原型持续迭代。

**Promptllery** is a fully functional prompt curation platform, built from scratch with React + TailwindCSS + Supabase + OpenAI API.  
It supports prompt uploading, liking, bookmarking, testing, filtering, and user system – designed to scale into an AI-first product.

> 项目灵感 | Project Inspiration
> 仿照「神算」Prompt 展示平台，用前端产品形式策展高质量 Prompt，提升开发者在 AI 工程中的使用体验。
> Inspired by tools like *PromptBase* and *ChatGPT Playground*, this project aims to curate and showcase prompt engineering ideas in a usable product format.

---

### 技术栈 | Tech Stack

- **前端 | Frontend**: React + TailwindCSS + Vite  
- **后端 | Backend**: Supabase (Database + Auth)  
- **AI 接口 | AI API**: OpenAI Completion API  
- **部署 | Deployment**: Netlify / Vercel

---


## 项目功能 | Features

### 基础前端功能 | Frontend Features

- 首页卡片展示（Tag 分类 + Prompt 摘要）  
  Homepage with tag-filtered prompt cards
- 搜索过滤 + 多标签筛选  
  Search & filter prompts by keywords and tags
- 点赞 / 收藏交互 + 排行榜页  
  Like / bookmark support with a ranking page
- 上传新 Prompt（表单 + 本地弹窗）  
  Upload new prompts through popup forms
- 详情页查看 + 生成二维码分享  
  View details and share prompts with QR code
- Prompt 测试接口（GPT 测试区）  
  Built-in playground using OpenAI Completion API
- 模型选择滑块（支持扩展）  
  ModelSelector component for different models

---

### 后端支持 | Supabase Integration

- Prompt 数据持久化（写入 like_count）  
  Persist all prompt data with likes
- 收藏功能：独立 `favorites` 表按用户存储  
  Bookmarking system with separate favorites table
- 登录系统：邮箱注册 / 登录  
  Email-based user authentication
- 我的作品：展示当前用户上传内容  
  Filter to view "My Prompts"
- 数据刷新：点赞 / 收藏 / 上传同步页面更新  
  Automatic UI sync on data updates

---

### 后续计划 | Coming Features

- 评论系统 / 多维度排行页  
  Comment system and hot ranking pages
- 多模型支持（Claude / Gemini / local）  
  Support for multi-model selection
- AI 推荐系统 + 内容审核机制  
  AI-based recommendation + moderation
- 国际化支持（i18n）  
  Internationalization and multilingual UI

---

## 快速开始 | Quick Start

```bash
npm install
npm run dev
```

---

## nvm 环境配置（如遇报错） | Setup Node Environment

**Step 1: 安装 NVM**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

**Step 2: 更新 shell 配置并使用 v20**

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

nvm install 20
nvm use 20
```

检查是否安装成功：

```bash
node -v   # v20.x.x
npm -v    # 通常是 v10+
```

---

## 目录结构 | Project Structure

```
promptllery/
├── index.html
├── package.json
├── tailwind.config.js
├── public/
└── src/
    ├── components/
    │   └── PromptCard.jsx   ← 卡片组件
    ├── App.jsx              ← 主页面逻辑
    ├── main.jsx
    └── index.css            ← Tailwind 样式入口
```

---

## 示例卡片样式 | Example Prompt Card

```
┌────────────────────────────┐
│ Title: 写故事的提示词        │
│ Prompt: 给我写一个感人至深的 │
│    科幻悬疑故事…               │
│ Tag: 创意 | 文学 | GPT-4     │
└────────────────────────────┘
```

---

## License

MIT License © 2025-present by Helia


