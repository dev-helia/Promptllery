# 🧠 Promptllery
## 项目介绍
从 0 做出来的 **Prompt 内容策展平台**(PromptBase + ChatGPT Playground)，支持上传、点赞、收藏、搜索、高亮展示，并接入 OpenAI API 实现 Prompt 测试。项目从 0 到 1 实现完整交互、用户体系与后端联动，未来将作为 AI 产品原型持续迭代。

技术栈：React + TailwindCSS + Supabase + OpenAI API  
部署方式：支持本地运行 / Netlify / Vercel 在线部署  
项目定位：结合 Prompt 工程 + 前端产品设计的AI 使用体验的增强工具

> 项目灵感： 仿照「神算」诊断站玩法，用前端产品形式呈现「Prompt 工程内容策展」的理念，适合作为开源项目 + 技术写作主题。


- 预览首页卡片
```
┌────────────────────────────┐
│ ✨ Title: 写故事的提示词        │
│ 📄 Prompt: 给我写一个感人至深的 │
│    科幻悬疑故事…               │
│ 🏷️ Tag: 创意 | 文学 | GPT-4     │
└────────────────────────────┘
```
### 基础前端
- 首页卡片展示（Tag 分类、Prompt 摘要）
- 搜索过滤 + 多标签筛选（`tag: [A, B]` 格式）
- 点赞 / 收藏交互 + 排行榜页
- 上传新 Prompt（本地弹窗表单）
- 详情页查看全文、生成二维码
- 模型调用测试（接入 OpenAI 接口 + model selector）

### 后端支持（Supabase）

- Prompt 数据持久化（`like_count` 可计数）
- 收藏功能：独立 `favorites` 表，按用户筛选
- 用户系统：支持邮箱注册 / 登录
- 我的作品：上传内容与用户绑定，支持“我的 Prompt”筛选
- 自动同步数据更新（点赞 / 收藏 / 上传后刷新）

## 快速开始(本地运行)

```bash
npm install
npm run dev
```

## 后续更新

- 加入评论系统、点赞排行榜页面
    
- 接入更多大模型选择（Claude / Gemini）
    
- 构建内容审核、推荐算法机制
    
- 国际化支持（多语言 prompt 展示）

---
## 📜 License

MIT © 2025-present by Helia

---

## 备注
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

