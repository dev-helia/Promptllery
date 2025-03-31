
<p align="center">
  <img alt="Promptllery Logo" src="https://img.shields.io/badge/Promptllery-AI%20Prompt%20Playground-red?style=flat-square&logo=OpenAI" />
  <br/>
  <img src="https://img.shields.io/github/license/dev-helia/Promptllery?style=flat-square" />
  <img src="https://img.shields.io/github/stars/dev-helia/Promptllery?style=flat-square" />
  <img src="https://img.shields.io/github/issues/dev-helia/Promptllery?style=flat-square" />
  <img src="https://img.shields.io/github/actions/workflow/status/dev-helia/Promptllery/ci.yml?label=GitHub%20Actions&logo=github&style=flat-square" />
  <img src="https://img.shields.io/vercel/deploy-status?label=Vercel&logo=vercel&style=flat-square" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" />

</p>


# Promptllery | AI Prompt Curation Playground
![CI](https://github.com/dev-helia/Promptllery/actions/workflows/ci.yml/badge.svg)
![npm package](https://img.shields.io/badge/npm-promptllery-blue)
[![codecov](https://codecov.io/gh/dev-helia/Promptllery/branch/main/graph/badge.svg)](https://codecov.io/gh/dev-helia/Promptllery)


*From zero to full-stack AI product – by Helia(Hetao)*

Chinese version: [点击这里查看中文文档 →](./README.zh.md)
Tech blog: [Learning notes]()


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

## Demo Preview
Here’s a visual walkthrough of Promptllery’s core features:

1. Upload a new Prompt
<img src="/public/static/1.png" width="600"/> Users can submit prompts with title, description, category tags and sample input/output — powered by Supabase form handling.


2. Search & Filter
<img src="/public/static/2.png" width="600"/> Browse uploaded prompts using keyword search and multi-tag filtering. Discover prompts by theme, model or usage.


3. Like / Save a Prompt
<img src="/public/static/3.png" width="600"/> Click heart to like prompts or bookmark for future access. Votes are stored in Supabase.


4. Inline Prompt Testing
<img src="/public/static/4.png" width="600"/> Each prompt supports input testing — enter your own message, choose GPT-3.5 or GPT-4 (if available), and get live AI feedback.


5. Prompt Detail Page
<img src="/public/static/7.png" width="600"/> Full prompt preview with usage metadata, tags, and quick-copy feature.


6. Share via QR Code
<img src="/public/static/8.png" width="600"/> Generate shareable links and QR codes for any prompt. Useful for mobile sharing or publishing on social platforms.


7. Leaderboard
<img src="/public/static/6.png" width="600"/> Ranking of most liked prompts — updated in real time to promote quality contributions.


8. Auth Flow
<img src="/public/static/5.png" width="600"/> Simple login/register flow using Supabase auth. Uploads are tied to user accounts.


## License

MIT License © 2025-present by He Tao

