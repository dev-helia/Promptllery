# Promptllery | AI Prompt Curation Playground

<p align="center">
  🌟 A full-stack React + Supabase playground for Prompt Engineers 🌟  
  <br/>
  <img src="https://img.shields.io/github/license/dev-helia/promptllery?style=flat-square" />
  <img src="https://img.shields.io/badge/react-18.x-blue?logo=react&style=flat-square" />
  <img src="https://img.shields.io/badge/tailwindcss-3.x-blueviolet?logo=tailwindcss&style=flat-square" />
  <img src="https://img.shields.io/badge/supabase-%E2%9C%85-green?logo=supabase&style=flat-square" />
</p>


*From zero to full-stack AI product – by Helia*

Chinese version: [点击这里查看中文文档 →](./README.zh.md)


**Promptllery** is a lightweight, full-featured AI prompt platform for creators and engineers.  
It lets users **upload, test, and collect prompts** — with real-time AI integration and an intuitive interface.

Built with **React + Tailwind + Supabase**, it showcases how modern frontend can pair with prompt engineering to prototype AI-native products.


>Inspired by 神算乐园, Promptllery is designed to showcase and organize high-quality and interesting prompts in a usable, interactive way — combining prompt engineering with front-end product thinking.

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
├── public/                      # Public assets (logo, favicon, etc.)
│
├── src/
│   ├── assets/                 # Images, fonts, shared resources
│   ├── components/            # Reusable UI components (PromptCard, Button, Modal)
│   ├── pages/                 # Page components (HomePage, LoginPage, etc.)
│   ├── hooks/                 # Custom React hooks (e.g., useSupabasePrompts)
│   ├── lib/                   # Utility files and configuration (supabaseClient, api setup)
│   ├── data/                  # Static data (e.g., prompt mock data)
│   ├── styles/                # Tailwind CSS and global styles
│   │   └── index.css
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React app entry point
│   └── router.jsx             # Extracted routing logic
│
├── .env.local                 # Environment variables
├── .gitignore                 # Git ignore file
├── index.html                 # App HTML entry
├── package.json               # Project dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS plugins
├── vite.config.js             # Vite configuration

```

---

## Example Prompt Card

```
┌────────────────────────────┐
│ Title: Sci-Fi Story Prompt │
│ Prompt: Write a touching   │
│    sci-fi suspense story...   │
│ Tag: creative | literature │
└────────────────────────────┘
```

---

## License

MIT License © 2025-present by Helia

