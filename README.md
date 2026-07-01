<div align="center">

<img src="https://files.catbox.moe/x9rntx.png" width="150px" style="border-radius:50%;margin-bottom:10px"/>

```
███████╗██╗  ██╗███████╗██╗  ██╗██████╗  █████╗ ███████╗    ███╗   ███╗██████╗
██╔════╝██║  ██║██╔════╝██║  ██║██╔══██╗██╔══██╗╚════██║    ████╗ ████║██╔══██╗
███████╗███████║█████╗  ███████║██████╔╝███████║    ██╔╝    ██╔████╔██║██║  ██║
╚════██║██╔══██║██╔══╝  ██╔══██║██╔══██╗██╔══██║   ██╔╝     ██║╚██╔╝██║██║  ██║
███████║██║  ██║███████╗██║  ██║██████╔╝██║  ██║   ██║      ██║ ╚═╝ ██║██████╔╝
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝     ╚═╝╚═════╝
```

### 〔 ⚡ Advanced WhatsApp Multi-Device Bot 〕

<br/>

[![Version](https://img.shields.io/badge/Version-4.5.6-blueviolet?style=for-the-badge&logo=github)](.)
[![Node](https://img.shields.io/badge/Node.js-20%2B-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-7.0.0--rc13-0088cc?style=for-the-badge)](https://github.com/WhiskeySockets/Baileys)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![License](https://img.shields.io/badge/License-MIT-f0c040?style=for-the-badge)](LICENSE)
[![Stars](https://img.shields.io/github/stars/shehbaz-dev/shehbaz-md?style=for-the-badge&logo=starship&color=ff6b6b)](https://github.com/shehbaz-dev/shehbaz-md/stargazers)
[![Forks](https://img.shields.io/github/forks/shehbaz-dev/shehbaz-md?style=for-the-badge&color=54a0ff)](https://github.com/shehbaz-dev/shehbaz-md/forks)

<br/>

> **The most powerful WhatsApp bot you'll ever need.**  
> Built on Baileys v7 · Multi-session · AI-powered · Anti-Delete · ViewOnce Bypass

<br/>

[🌟 Features](#-features) &nbsp;·&nbsp;
[🚀 Quick Start](#-quick-start) &nbsp;·&nbsp;
[⚙️ Configuration](#️-configuration) &nbsp;·&nbsp;
[📋 Commands](#-all-commands) &nbsp;·&nbsp;
[☁️ Deploy to Cloud](#️-deploy-to-cloud) &nbsp;·&nbsp;
[🤝 Support](#-support)

</div>

<br/>

---

<br/>

## 🌟 Features

<table>
<tr>
<td width="50%">

### 🛡️ Security & Protection
- **Anti-Delete** — Deleted messages forwarded to your inbox instantly with sender info + original media (images, videos, audio, stickers, documents)
- **Anti-Call** — Auto-reject all incoming calls silently
- **Anti-Link** — Remove group invite links from non-admins automatically
- **Anti-Bot** — Block other bots from interacting
- **Anti-Bad Word** — Auto-remove abusive messages in groups

</td>
<td width="50%">

### 👁️ Privacy Guard
- **ViewOnce Bypass** — Reply to any 👁️ message and `.vv` reveals it instantly — photo, video, or audio
- **Auto ViewOnce Intercept** — Every view-once sent to you is silently copied to your inbox before it disappears
- **Auto Status Seen** — View all WhatsApp statuses automatically in the background

</td>
</tr>
<tr>
<td width="50%">

### 🤖 AI-Powered Chat
- **Direct AI Query** — `.ai <question>` anywhere in any chat
- **AI DM Auto-Reply** — `.ai on` turns your bot into a smart assistant that replies automatically in private chats
- **Free AI Engine** — Uses **Pollinations.ai** (zero cost, no API key required)
- **OpenAI Compatible** — Plug in your `OPENAI_API_KEY` for GPT-3.5/GPT-4
- **Custom Endpoint** — Any OpenAI-compatible API (OpenRouter, Together.ai, etc.)

</td>
<td width="50%">

### ⚙️ Group Management
- Promote / Demote admins
- Kick members
- Mute / Unmute groups
- Silent hidetag (tag all without notification)
- Warning system with tracking
- Broadcast to all groups at once

</td>
</tr>
<tr>
<td width="50%">

### 📥 Media Downloaders
- 🎬 **YouTube** — Video & audio download
- 🎵 **TikTok** — No watermark download
- 📸 **Instagram** — Reels, photos, stories
- 📘 **Facebook** — Video download
- ☁️ **Google Drive** — Direct download
- 🔥 **MediaFire** — Direct download
- 📦 **APK Finder** — Find & share Android apps

</td>
<td width="50%">

### 🎨 Tools & Media
- **Sticker Maker** — Image/video/GIF → WhatsApp sticker
- **Background Remover** — AI-powered `.removebg`
- **Image Enhancer** — Upscale with `.remini`
- **Fancy Text** — 30+ unicode font styles
- **Calculator** — Math solver
- **URL Shortener** — Compress any link
- **Wikipedia Search** — Instant summaries
- **Weather** — Real-time weather by city
- **SIM Info** — Number lookup

</td>
</tr>
<tr>
<td width="50%">

### ⚡ Performance
- **Multi-Session** — Connect multiple WhatsApp numbers to one instance
- **Auto Typing** — Shows typing indicator while processing
- **Auto React** — Random emoji reactions to messages
- **Smart Reconnect** — Auto-reconnect with exponential backoff on disconnect
- **MongoDB Session** — Session persists across restarts, no re-scan needed

</td>
<td width="50%">

### 🌐 Web Panel
- Browser-based pairing at `your-server:3092`
- QR code scan or pairing code (no phone required on server)
- Works on Heroku, Railway, Replit, VPS — anywhere

</td>
</tr>
</table>

<br/>

---

<br/>

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, make sure you have:

| Requirement | Version | Download |
|------------|---------|---------|
| Node.js | v20 or higher | [nodejs.org](https://nodejs.org) |
| npm | v9 or higher | *(comes with Node.js)* |
| Git | Latest | [git-scm.com](https://git-scm.com) |
| MongoDB | Free Atlas account | [mongodb.com](https://mongodb.com/cloud/atlas) |

<br/>

### 💻 Local Installation (VPS / PC / Server)

**1️⃣ Clone the repository**
```bash
git clone https://github.com/shehbaz-dev/shehbaz-md.git
cd shehbaz-md
```

**2️⃣ Install all dependencies**
```bash
npm install
```

**3️⃣ Set up environment**
```bash
cp .env.example .env
```
Open `.env` in any text editor and fill in your values *(see [Configuration](#️-configuration) below)*

**4️⃣ Start the bot**
```bash
npm start
```

**5️⃣ Pair your WhatsApp**

Open your browser → `http://localhost:3092`

- **Option A:** Scan the QR code with WhatsApp
- **Option B:** Enter your phone number to get a pairing code (no phone needed on server)

> ✅ Once paired, the bot is live. Session is saved to MongoDB — no need to re-pair on restart.

<br/>

---

<br/>

## ⚙️ Configuration

Rename `.env.example` → `.env` and fill in your values:

```env
# ╔══════════════════════════════════════╗
# ║        SHEHBAZ-MD CONFIGURATION     ║
# ╚══════════════════════════════════════╝

# ── 👑 Owner ───────────────────────────────────────────────────
OWNER_NUMBER=923XXXXXXXXX           # Your WhatsApp number (no + or spaces)
OWNER_NAME=Shehbaz                  # Your name (shown in .owner command)

# ── 🤖 Bot ─────────────────────────────────────────────────────
BOT_NAME=SHEHBAZ-MD                 # Bot display name
PREFIX=.                            # Command prefix (. or ! or / etc.)
MODE=public                         # public = everyone | private = owner only

# ── 🗄️ Database (REQUIRED — bot won't start without this) ──────
MONGODB_URI=mongodb+srv://USER:PASS@cluster.mongodb.net/shehbazmd

# ── 🛡️ Protection Features ─────────────────────────────────────
ANTI_DELETE=true                    # Forward deleted messages to your inbox
ANTI_CALL=false                     # Auto-reject incoming calls
ANTI_LINK=true                      # Remove group invite links
ANTI_BAD=false                      # Remove bad words in groups
ANTI_BOT=true                       # Block other bots
ANTI_VV=true                        # Intercept view-once → send to your inbox

# ── 🔄 Automation ───────────────────────────────────────────────
AUTO_STATUS_SEEN=true               # Auto-view all statuses
AUTO_REACT=false                    # React to messages with random emoji
AUTO_REPLY=false                    # Enable away message
AUTO_REPLY_MSG=Hi! I'm busy right now, will reply soon.
AUTO_REPLY_DELAY=60                 # Seconds between auto-replies per person

# ── 🤖 AI Chat ──────────────────────────────────────────────────
AI_ENABLED=false                    # Auto-reply DMs with AI (.ai on to toggle live)
OPENAI_API_KEY=                     # Optional — leave blank to use FREE Pollinations.ai
AI_MODEL=gpt-3.5-turbo              # Model to use (gpt-4, gpt-3.5-turbo, etc.)
AI_BASE_URL=                        # Custom endpoint (OpenRouter, Together, etc.)
AI_SYSTEM_PROMPT=You are a helpful WhatsApp assistant. Keep responses short and friendly.

# ── 🌐 Server ───────────────────────────────────────────────────
PORT=3092
```

### 📊 Full Settings Reference

| Variable | Required | Default | What it does |
|----------|:--------:|---------|-------------|
| `OWNER_NUMBER` | ✅ Yes | — | Your WhatsApp number — gives you owner-only commands |
| `MONGODB_URI` | ✅ Yes | — | MongoDB connection string — stores session & data |
| `BOT_NAME` | ❌ No | `SHEHBAZ-MD` | Name shown in menu and messages |
| `PREFIX` | ❌ No | `.` | Character before commands (e.g. `.menu`) |
| `MODE` | ❌ No | `public` | `public` lets everyone use the bot; `private` is owner-only |
| `ANTI_DELETE` | ❌ No | `true` | Forwards deleted messages + media to your DM |
| `ANTI_CALL` | ❌ No | `false` | Automatically rejects all incoming WhatsApp calls |
| `ANTI_LINK` | ❌ No | `true` | Deletes group invite links posted by non-admins |
| `ANTI_VV` | ❌ No | `true` | Silently copies every view-once to your inbox |
| `AUTO_STATUS_SEEN` | ❌ No | `true` | Auto-views all statuses |
| `AUTO_REACT` | ❌ No | `false` | Reacts to messages with a random emoji |
| `AUTO_REPLY` | ❌ No | `false` | Sends an away message in DMs |
| `AI_ENABLED` | ❌ No | `false` | Enables AI auto-reply in DMs |
| `OPENAI_API_KEY` | ❌ No | — | Your OpenAI key — blank = free Pollinations.ai |
| `AI_MODEL` | ❌ No | `gpt-3.5-turbo` | Which AI model to use |
| `AI_SYSTEM_PROMPT` | ❌ No | *(friendly assistant)* | Customize the AI's personality |

<br/>

---

<br/>

## 📋 All Commands

> Default prefix: **`.`** — change with `PREFIX` in `.env`

### 👑 Owner Commands
| Command | Description |
|---------|-------------|
| `.settings` | View all current bot settings and feature status |
| `.ai on` | Enable AI auto-reply for private DMs |
| `.ai off` | Disable AI auto-reply |
| `.broadcast <message>` | Send a message to all your groups |
| `.restart` | Restart the bot process |

### 🛡️ Admin Commands
| Command | Description |
|---------|-------------|
| `.promote @user` | Promote user to group admin |
| `.demote @user` | Remove user's admin rights |
| `.kick @user` | Remove user from the group |
| `.mute` | Lock the group — only admins can send messages |
| `.unmute` | Unlock the group |
| `.hidetag <message>` | Silently tag all group members |
| `.warn @user` | Issue a warning to a user |

### 👁️ Privacy Commands
| Command | Description |
|---------|-------------|
| `.vv` | **Reply to a 👁️ view-once** → bot reveals the photo/video/audio |

### 🤖 AI Commands
| Command | Description |
|---------|-------------|
| `.ai <question>` | Ask AI anything — works anywhere |
| `.ai on` | Turn on AI DM auto-reply *(owner only)* |
| `.ai off` | Turn off AI DM auto-reply *(owner only)* |

### 🎨 Media & Tools
| Command | Description |
|---------|-------------|
| `.sticker` | Convert image / video / GIF to WhatsApp sticker |
| `.removebg` | Remove background from image (AI-powered) |
| `.remini` | Enhance and upscale low-quality images |
| `.fancy <text>` | Convert text into stylish unicode fonts |
| `.calc <expression>` | Solve any math expression |
| `.shorturl <url>` | Shorten a URL |

### 📥 Downloaders
| Command | Description |
|---------|-------------|
| `.yt <search query>` | Search and download YouTube video |
| `.tiktok <url>` | Download TikTok video (no watermark) |
| `.ig <url>` | Download Instagram reel or photo |
| `.fb <url>` | Download Facebook video |
| `.gdrive <url>` | Download file from Google Drive |
| `.mediafire <url>` | Download from MediaFire |
| `.apk <app name>` | Find APK download link |
| `.wallpaper <query>` | Search and send HD wallpapers |

### 🔍 Search & Info
| Command | Description |
|---------|-------------|
| `.wiki <topic>` | Get Wikipedia summary on any topic |
| `.weather <city>` | Real-time weather information |
| `.simdb <number>` | SIM card owner information lookup |

### ℹ️ General
| Command | Description |
|---------|-------------|
| `.menu` | Show the full command menu |
| `.owner` | Display owner contact information |

<br/>

---

<br/>

## ☁️ Deploy to Cloud

<br/>

<details>
<summary><b>🟣 Heroku (Recommended for beginners)</b></summary>

<br/>

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/shehbaz-dev/shehbaz-md)

1. Click **Deploy to Heroku** above
2. Create a free Heroku account if you don't have one
3. Fill in all environment variables in the form
4. Click **Deploy App** and wait for build
5. Click **Open App** → scan QR or enter pairing code
6. ✅ Done — bot is live 24/7

> 💡 Use Heroku's free eco dynos or paid basic plan for always-on hosting

</details>

<br/>

<details>
<summary><b>🔵 Railway</b></summary>

<br/>

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

1. Click deploy above and connect your GitHub
2. Set all environment variables in the **Variables** tab
3. Railway auto-deploys from your repo
4. Visit the generated URL to pair your WhatsApp
5. ✅ Done

</details>

<br/>

<details>
<summary><b>🟡 Replit</b></summary>

<br/>

1. Fork this repl or upload the zip
2. Go to **Secrets** tab (🔒 icon on sidebar)
3. Add each environment variable as a secret
4. Click **Run ▶**
5. Open the **Webview** tab and pair your number
6. ✅ Done

> 💡 Enable **Always On** in Replit to keep the bot running 24/7

</details>

<br/>

<details>
<summary><b>🖥️ VPS / Linux Server</b></summary>

<br/>

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (process manager — keeps bot running)
npm install -g pm2

# Clone repo
git clone https://github.com/shehbaz-dev/shehbaz-md.git
cd shehbaz-md

# Install dependencies
npm install

# Configure
cp .env.example .env
nano .env   # fill in your values

# Start with PM2
pm2 start index.js --name shehbaz-md

# Auto-start on server reboot
pm2 startup
pm2 save
```

**Useful PM2 commands:**
```bash
pm2 status          # Check bot status
pm2 logs shehbaz-md # View live logs
pm2 restart shehbaz-md
pm2 stop shehbaz-md
```

</details>

<br/>

---

<br/>

## 🔑 Setting Up MongoDB (Free in 5 minutes)

MongoDB stores your bot session so you don't have to re-scan QR on every restart.

1. Go to **[mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)** and sign up free
2. Click **Create** → choose **M0 Free** cluster → any region
3. Create a **database user** (username + password — remember these)
4. Go to **Network Access** → Add IP → click **Allow Access from Anywhere**
5. Go to **Database** → click **Connect** → **Drivers**
6. Copy the connection string — it looks like:
   ```
   mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/
   ```
7. Replace `<password>` with your actual password
8. Add `/shehbazmd` at the end:
   ```
   mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/shehbazmd
   ```
9. Paste this as `MONGODB_URI` in your `.env`

<br/>

---

<br/>

## 🗂️ Project Structure

```
📁 shehbaz-md/
│
├── 📄 index.js                 ← Main bot entry point
├── 📄 setting.js               ← Config loader (reads .env)
├── 📄 pair.js                  ← Web pairing server
├── 📄 .env.example             ← Environment variable template
├── 📄 package.json
│
├── 📁 lib/
│   ├── 📄 antiDelete.js        ← Anti-delete: cache + media resend to owner
│   ├── 📄 command.js           ← Plugin registration helper
│   ├── 📄 commandRegistry.js   ← Central command store
│   └── 📄 mongoAuth.js         ← MongoDB auth state manager
│
├── 📁 plugins/                 ← All bot commands live here
│   ├── 📄 ai.js                ← AI chat (.ai, auto-reply)
│   ├── 📄 vv.js                ← ViewOnce bypass
│   ├── 📄 sticker.js           ← Sticker maker
│   ├── 📄 features.js          ← Core features + .settings command
│   ├── 📄 menu.js              ← Bot menu
│   ├── 📄 autotyping.js        ← Auto typing indicator
│   ├── 📄 YouTube.js           ← YouTube downloader
│   ├── 📄 TikTok.js            ← TikTok downloader
│   └── 📄 ...                  ← 20+ more plugins
│
├── 📁 public/                  ← Web pairing panel (HTML + CSS + JS)
└── 📁 data/                    ← Persistent bot config storage
```

<br/>

---

<br/>

## 🤝 Support

<div align="center">

Stuck somewhere? Need help? We've got you covered.

<br/>

[![WhatsApp Support](https://img.shields.io/badge/💬_WhatsApp-Support_Group-25D366?style=for-the-badge)](https://chat.whatsapp.com/YOUR_LINK_HERE)
[![GitHub Issues](https://img.shields.io/badge/🐛_GitHub-Report_Issue-181717?style=for-the-badge)](https://github.com/shehbaz-dev/shehbaz-md/issues/new)

<br/>

**Before opening an issue, please:**
- ✅ Make sure Node.js v20+ is installed
- ✅ Check your `MONGODB_URI` is correct
- ✅ Read the error in the terminal carefully
- ✅ Search existing issues to see if it's already solved

</div>

<br/>

---

<br/>

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/shehbaz-md.git

# 3. Create a feature branch
git checkout -b feature/my-awesome-plugin

# 4. Make your changes, then commit
git commit -m "feat: add my awesome plugin"

# 5. Push and open a Pull Request
git push origin feature/my-awesome-plugin
```

> Want to add a plugin? Drop a `.js` file in `/plugins/` using the `cmd()` helper — it gets auto-loaded on start. See existing plugins for the pattern.

<br/>

---

<br/>

## ⚠️ Legal Disclaimer

> This project is intended for **personal and educational use only**.  
> Using this bot to spam, harass, scrape data, or violate [WhatsApp's Terms of Service](https://www.whatsapp.com/legal/terms-of-service) is strictly prohibited.  
> The developer holds **no responsibility** for account bans, data loss, or misuse of this software.  
> Use at your own risk.

<br/>

---

<br/>

<div align="center">

## 📄 License

Released under the **MIT License** — free to use, modify, and distribute.  
See [LICENSE](LICENSE) for full details.

<br/>

---

<br/>

```
╭━━━〔 SHEHBAZ-MD 〕━━━┈⊷
┃ ⋄ Built with ❤️ by Shehbaz—Dev
┃ ⋄ Powered by @whiskeysockets/baileys
┃ ⋄ Star ⭐ the repo if this helped you!
╰━━━━━━━━━━━━━━━━━━┈⊷
```

[![Star History](https://img.shields.io/github/stars/shehbaz-dev/shehbaz-md?style=social)](https://github.com/shehbaz-dev/shehbaz-md/stargazers)

*If SHEHBAZ-MD made your life easier, a ⭐ star means the world. Thank you!*

</div>
