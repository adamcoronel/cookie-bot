# cookie-bot

A lightweight Node.js Discord bot built from scratch using only the official Discord API. Designed to manage a streamer’s community with custom commands, automation, and integrations — all without third-party libraries.

---


## Features
- Connects directly to Discord Gateway (no helper libraries)
- Handles commands and events
- Minimal dependencies
- Built for live streamers

---

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/adamcoronel/cookie-bot.git
cd cookie-bot
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
- Copy .env.example to .env
- Add your bot token and application ID:
```env
DISCORD_TOKEN=your-bot-token-here
DISCORD_APP_ID=your-app-id-here
```

### 4. Run the Bot
```bash
npm run build
npm start
```

---

## Branching Strategy
- `main` -> stable bot for production
- `dev` -> active development branch
- `feature/x` -> per-feature work
- `hotfix/x` -> urgent bug fixes for production

---

## License
This project is licensed under the MIT License — see the LICENSE file for details.
