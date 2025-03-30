## Promptllery

### 项目介绍 

从 0 做出来的 **Prompt 内容策展平台**（PromptBase + ChatGPT Playground），支持上传、点赞、收藏、搜索、高亮展示，并接入 OpenAI API 实现 Prompt 测试。  
项目从 0 到 1 实现完整交互、用户体系与后端联动，未来将作为 AI 产品原型持续迭代。

> 项目灵感 | Project Inspiration
> 仿照「神算」Prompt 展示平台，用前端产品形式策展 Prompt，提升用户在 AI 的使用体验。

---

### 技术栈 | Tech Stack

- 前端 React + TailwindCSS + Vite  
- 后端 Supabase (Database + Auth)
- AI 接口  OpenAI Completion API  
- 部署 Netlify / Vercel

---


## 项目功能 

### 基础前端功能

- 首页卡片展示（Tag 分类 + Prompt 摘要）  
 
- 搜索过滤 + 多标签筛选  

- 点赞 / 收藏交互 + 排行榜页  

- 上传新 Prompt（表单 + 本地弹窗）  
  
- 详情页查看 + 生成二维码分享  
 
- Prompt 测试接口（GPT 测试区）  
 
- 模型选择滑块（支持扩展）  
 

---

### 后端支持 

- Prompt 数据持久化（写入 like_count）  
 
- 收藏功能：独立 favorites 表按用户存储  
 
- 登录系统：邮箱注册 / 登录  

- 我的作品：展示当前用户上传内容  

- 数据刷新：点赞 / 收藏 / 上传同步页面更新  


---

### 后续计划 

- 评论系统 / 多维度排行页  

- 多模型支持（Claude / Gemini / local）  

- AI 推荐系统 + 内容审核机制  

- 国际化支持（i18n）  
  

---

## 快速开始

bash
npm install
npm run dev


---

## nvm 环境配置（如遇报错） 
**Step 1: 安装 NVM**

bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash


**Step 2: 更新 shell 配置并使用 v20**

bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

nvm install 20
nvm use 20


检查是否安装成功：

bash
node -v   # v20.x.x
npm -v    # 通常是 v10+


---

## 目录结构 
```
promptllery/
├── public/                      # 公共资源（logo、icon）
│
├── src/
│   ├── assets/                 # 图片、字体、通用资源
│   ├── components/            # 通用 UI 组件（如 PromptCard、Button、Modal）
│   ├── pages/                 # 页面组件（如 HomePage, LoginPage）
│   ├── hooks/                 # 自定义 hooks（如 useSupabasePrompts）
│   ├── lib/                   # 工具类 / 配置（supabaseClient、api 封装等）
│   ├── data/                  # 静态数据(test)
│   ├── styles/                # 样式相关（Tailwind、index.css）
│   │   └── index.css
│   ├── App.jsx                # 主组件
│   ├── main.jsx               # 应用入口
│   └── router.jsx             # 路由单独抽出
│
├── .env.local
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
```

---

## 示例卡片样式 
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
