# 🎮 Game Developer Portfolio

[![DEMO](http://demo.portfolio.steelchunk.eu/)

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS. Designed to showcase game development projects with interactive features and smooth animations.

## ✨ Features

- 🚀 **Modern Stack**: Built with Next.js 15, Tailwind CSS, and Turbopack
- 🎯 **Interactive Portfolio**: Modals with detailed game information, image galleries, and video support
- 🕹️ **Game Integration**: WebGL game viewer with external window support
- 📱 **Responsive Design**: Mobile-first approach with hamburger menu and adaptive layouts
- 🖼️ **Image Gallery**: Touch and keyboard-enabled carousel with video support
- ⬇️ **Download System**: Integrated game download management with status notifications
- 🎨 **Clean UI**: Glass-morphism design with blue gradient theme
- 🌟 **Animations**: Smooth transitions and hover effects using Framer Motion

## 🛠️ Tech Stack

- 🔧 **Framework**: Next.js 15
- 💅 **Styling**: Tailwind CSS, Chakra UI
- 🧩 **UI Components**: Chakra UI, Lucide React
- ✨ **Animations**: Framer Motion
- 📝 **Typography**: Inter (Google Fonts)
- 🔄 **State Management**: React Hooks
- 📦 **Modal System**: Chakra UI Modal
- 🎨 **Icons**: Chakra Icons
- 🚀 **Deployment**: PM2

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── DownloadButton.js  # Game download handler with API integration
│   │   ├── GameModal.js       # Detailed game information modal
│   │   ├── GameViewer.js      # WebGL game launcher component
│   │   ├── Hero.js           # Landing page introduction
│   │   ├── ImageCarousel.js   # Gallery viewer with video support
│   │   ├── Navigation.js      # Responsive header with mobile menu
│   │   └── Portfolio.js       # Game projects grid layout
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── images/               # Game screenshots and thumbnails
│   └── games/               # WebGL game builds
├── ecosystem.config.js       # PM2 deployment configuration
├── jsconfig.json            # Path aliases configuration
├── tailwind.config.js       # Theme and styling configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn

### Installation

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

Visit `http://localhost:3000` to view the site.

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Start with PM2:
```bash
pm2 start ecosystem.config.js
```

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file:
```
NODE_ENV=production
PORT=3000
```

## Adding Projects

Add new games to the `games` array in `page.js`:

```javascript
{
  id: "unique-id",
  name: "Game Name", // Used by DownloadButton for API requests
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
    website: "website-url",      // Used for direct downloads
    github: "github-url",        // Repository link
    webglUrl: "/games/demo",     // WebGL demo path
  },
  gallery: [
    "/images/screenshot1.jpg",
    "/images/screenshot2.jpg"
  ]
}
```

### Download API Integration

The project includes a DownloadButton component that integrates with a game download API:

- **Endpoint**: `https://steelchunk.eu/api/games/{gameName}`
- **Method**: GET
- **Parameters**: `gameName` (automatically converted to lowercase)
- **Expected Response**:
```json
{
  "url": "https://example.com/downloads/game.zip"
}
```

The DownloadButton component handles:
- API request management
- Download initiation
- Loading states
- Success/error notifications via toast messages

## Customization

### Tailwind Configuration

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

### Path Aliases

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

## Configuration

### Next.js Configuration

Configure CORS and security headers in `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/games/:path*',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};
```

### Environment Setup

Required environment variables in `.env`:
```bash
NODE_ENV=production
PORT=3000
```

### PM2 Deployment

Configure PM2 in `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'portfolio',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

### Styling Configuration

Theme customization in `globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

Tailwind configuration in `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
};
```

## 📞 Contact

- 👨‍💻 **Name**: Cláudio Pinheiro
- 📧 **Email**: claudiosilva@pm.me
- 🌐 **Portfolio**: [claudiopinheiro.pt](http://claudiopinheiro.pt)
- 🐙 **GitHub**: [@syl3n7](https://github.com/syl3n7)

## 📄 License

This project is available under the MIT License.
