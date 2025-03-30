Tailwind CSS + React + Vite
部署:Netlify / Vercel
项目介绍:从 0 做出来的 Prompt 内容策展 Demo 网站。它前端由 React + Tailwind 实现，支持本地上传、搜索、收藏、点赞、注册功能。未来我将继续拓展用户系统与后端存储，并开放开源供更多人使用。
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

---

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


- ✅ 首页 UI 搭建好，卡片能展示
    
- ✅ 支持搜索、分类、点赞、收藏、上传
    
- ✅ 假登录系统也完成，状态同步都正常
    
- ✅ 数据结构从 `tag: "A | B"` 成功换成 `tag: ["A", "B"]`
    
- ✅“详情页”和“静态数据导出”
