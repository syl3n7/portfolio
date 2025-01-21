# 🎮 Game Developer Portfolio

[![HomeLab Deployment](https://github.com/syl3n7/portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/syl3n7/portfolio/actions/workflows/main.yml)

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS. Designed to showcase game development projects with interactive features and smooth animations. ✨

## 🌟 Features

- 🎨 **Modern Stack**: Built with Next.js 15, Tailwind CSS, and Turbopack
- 🎯 **Interactive Portfolio**: Detailed project modals with descriptions and galleries
- 🕹️ **Game Integration**: WebGL game viewer for playable demos
- 📱 **Responsive Design**: Mobile-first approach with smooth animations
- ⚡ **Performance Optimized**: Fast load times and SEO friendly
- 💎 **Clean UI**: Minimalist design with a blue gradient theme

## 🛠️ Tech Stack

- 🚀 **Framework**: Next.js 15
- 🎨 **Styling**: Tailwind CSS
- 🧩 **UI Components**: Chakra UI, Lucide React
- ✨ **Animations**: Framer Motion
- 📝 **Typography**: Inter (Google Fonts)
- 🔧 **Deployment**: PM2

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── GameModal.js
│   │   ├── GameViewer.js
│   │   ├── Hero.js
│   │   ├── ImageCarousel.js
│   │   ├── Navigation.js
│   │   └── Portfolio.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── images/
│   └── games/
├── ecosystem.config.js
├── jsconfig.json
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### ⚙️ Prerequisites

- Node.js (LTS version)
- npm or yarn

### 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/syl3n7/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the site. ✨

### 🌐 Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start with PM2:
```bash
pm2 start ecosystem.config.js
```

## 👨‍💻 Development

### 📜 Scripts

- 🔥 `npm run dev` - Start development server
- 🏗️ `npm run build` - Create production build
- 🚀 `npm start` - Start production server
- ✨ `npm run lint` - Run ESLint

### 🔒 Environment Variables

Create a `.env` file:
```
NODE_ENV=production
PORT=3000
```

## 🎮 Adding Projects

Add new games to the `games` array in `page.js`:

```javascript
{
  id: "unique-id",
  name: "Game Name",
  image: "/images/game.png",
  description: "Game description",
  platform: "PC",
  contributions: ["Contribution 1", "Contribution 2"],
  projectInfo: {
    technologies: ["Tech 1", "Tech 2"],
    languages: ["Language 1"],
    communication: ["Tool 1"],
    management: "Management Method"
  },
  links: {
    store: "store-url",
    website: "website-url",
    twitter: "social-url",
    webglUrl: "/games/demo"
  },
  gallery: [
    "/images/screenshot1.jpg",
    "/images/screenshot2.jpg"
  ]
}
```

## ⚙️ Customization

### 🎨 Tailwind Configuration

Customize theme in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      }
    }
  }
};
```

### 🔗 Path Aliases

Configure imports in `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 📫 Contact

- 👨‍💻 **Name**: Cláudio Pinheiro
- 📧 **Email**: claudiosilva@pm.me
- 🌐 **Portfolio**: [claudiopinheiro.pt](http://claudiopinheiro.pt)
- 🐱 **GitHub**: [@syl3n7](https://github.com/syl3n7)

## 📄 License

This project is available under the MIT License. ⚖️
