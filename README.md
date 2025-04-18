
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

*Currently this data space is not open :/*

Chinese version: [点击这里查看中文文档 → ](./README.zh.md)

Tech blog: [Learning notes → ](https://dev-helia.github.io/Tech-Blog-Website/posts/promptllery/)

Demo video: (pending)


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
<img width="307" alt="image" src="https://github.com/user-attachments/assets/53b6832a-a687-41c2-b9c3-fc9c04741574" />

Simple login/register flow using Supabase auth. Uploads are tied to user accounts.

- This project has the front end as the protagonist, the back end is the hosting service provided by Supabase, and the database is PostgreSQL. I don't need to maintain the server logic Maintain server logic, at this point, nor do I have the traditional MVC controller structure, but use React to manage state and Supabase to manage data. It is not a "traditional three-layer architecture", but a lightweight architecture model with "front-end dominance + BaaS support".
Now let’s layer:
  - ✅ 1️⃣ User Interface Layer (User Interface)
   React: Component-based construction of UI (PromptCard, upload form, display page, etc.)
   JSX: HTML in JS, used to quickly write page structure
   Tailwind CSS: Quickly design beautiful UI (like Prompt cards, search bar)
   Vite: Project launcher and packaging tool to enhance development experience
   👉 This layer can be painted as the "main stage", and all user interactions occur from here!

  - ✅ 2️⃣ State Management & Functional Logic Layer (Frontend Logic Layer)
   useState / useEffect: manage the status of likes, collections, searches, uploads, etc.
   OpenAI API: Interface calls to the model conversation when testing prompt
   Clipboard & QR lib: Implementation of sharing functions
   👉 This layer is the "logical brain" behind the UI - not the traditional backend, but the front-end component logic and external service collaboration

  - ✅ 3️⃣ Backend Service Layer (BaaS/API Layer)
 Supabase:
     Provide database connection (PostgreSQL)
     Provide Authentication (Auth)
     Provide REST API calls (you use .insert(), .update(), etc.)
 👉 This layer is a "transparent" hosting layer, I don't have to write code, but it takes up most of the responsibilities of the traditional backend!

  - ✅ 4️⃣ Database Layer
 PostgreSQL: Hosted by Supabase, stores all Prompt data, user information, like relationships, etc.

  - ✅ 5️⃣ Development Tools (Dev Tools)
 Jest + React Testing Library: You use to write component tests
 Vercel: One-click deployment, front-end code hosting
 👉 This layer is a tool that "assists you in development and online.


 
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

[video demo](https://youtu.be/JtV62_bn-bA?si=LuRTUHlxJUxVLkDl)

Here’s a visual walkthrough of Promptllery’s core features:

1. Upload a new Prompt
<img src="/public/static/1.png" width="600"/>

Users can submit prompts with title, description, category tags and sample input/output — powered by Supabase form handling.


3. Search & Filter
<img src="/public/static/2.png" width="600"/>

Browse uploaded prompts using keyword search and multi-tag filtering. Discover prompts by theme, model or usage.


5. Like / Save a Prompt
<img src="/public/static/3.png" width="600"/>

Click heart to like prompts or bookmark for future access. Votes are stored in Supabase.


7. Inline Prompt Testing
<img src="/public/static/4.png" width="600"/>

Each prompt supports input testing — enter your own message, choose GPT-3.5 or GPT-4 (if available), and get live AI feedback.


9. Prompt Detail Page
<img src="/public/static/7.png" width="600"/>

Full prompt preview with usage metadata, tags, and quick-copy feature.


11. Share via QR Code
<img src="/public/static/8.png" width="600"/>

Generate shareable links and QR codes for any prompt. Useful for mobile sharing or publishing on social platforms.


13. Leaderboard
<img src="/public/static/6.png" width="600"/>

Ranking of most liked prompts — updated in real time to promote quality contributions.


15. Auth Flow
<img src="/public/static/5.png" width="600"/>





## License

MIT License © 2025-present by He Tao

