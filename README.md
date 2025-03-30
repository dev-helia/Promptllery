
# Promptllery | AI Prompt Curation Playground
Chinese version: [点击这里查看中文文档 →](./README.zh.md)

**Promptllery** is a full-stack prompt curation playground built with React, TailwindCSS, Supabase, and OpenAI API.  
It supports uploading, searching, liking, bookmarking, testing prompts, and managing user-authenticated content.  
This project aims to grow into an open-source AI product prototype.

>Inspired by 神算乐园, Promptllery is designed to showcase and organize >high-quality and interesting prompts in a usable, interactive way — combining prompt engineering with front-end >product thinking.

---

## Tech Stack

- **Frontend**: React + TailwindCSS + Vite  
- **Backend**: Supabase (PostgreSQL + Auth)  
- **AI API**: OpenAI Completion API  
- **Deployment**: Netlify / Vercel

---

## Features

### Frontend

- Homepage with tag-filtered prompt cards  
- Multi-tag filtering and keyword search  
- Like / bookmark prompts  
- Prompt upload with modal form  
- View full prompt details + generate QR code  
- OpenAI-powered prompt testing  
- Model selector component (easily extensible)

### Backend (Supabase)

- Prompt data stored in Supabase (`like_count`, `user_email`)  
- Favorites table linked to authenticated user  
- Auth system (email sign up / login)  
- Filter "My Prompts" by user email  
- Auto-refresh UI on like/bookmark/upload

---

## Coming Soon

- Comment system  
- Hot-ranking leaderboard  
- Claude/Gemini model support  
- Prompt recommendation algorithm  
- Content moderation  
- Internationalization (i18n)

---

## Quick Start

```bash
npm install
npm run dev
```

---

## Node.js Setup (Optional)

Install and set up Node v20 with NVM:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

nvm install 20
nvm use 20
```

---

## Project Structure

```
promptllery/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── data/
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── index.html
├── .env.local
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
```

---

## Example Prompt Card

```
┌────────────────────────────┐
│ ✨ Title: Sci-Fi Story Prompt │
│ 📄 Prompt: Write a touching   │
│    sci-fi suspense story...   │
│ 🏷️ Tag: creative | literature │
└────────────────────────────┘
```

---

## 📜 License

MIT License © 2025-present by Helia

