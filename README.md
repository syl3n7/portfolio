# 🎮 Game Developer Portfolio

[![HomeLab Deployment](https://github.com/syl3n7/portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/syl3n7/portfolio/actions/workflows/main.yml)

A modern, responsive portfolio website built with **Next.js 15** and **Tailwind CSS**, showcasing game development projects and professional experience. Designed with a clean, minimalist aesthetic, this portfolio highlights interactive game projects with smooth animations and dynamic content.

---

## ✨ Features

- **Modern Design**: A sleek, responsive design with a blue gradient theme.
- **Interactive Portfolio**: Showcase your game projects with detailed modal views, including descriptions, contributions, and galleries.
- **Smooth Animations**: Powered by **Framer Motion** for smooth transitions and hover effects.
- **Dynamic Content**: Easily add new games and update project details.
- **SEO Optimized**: Built with Next.js for optimal search engine visibility.
- **Performance**: Optimized with **Turbopack** for fast load times.
- **Play Games**: Play WebGL games directly within the portfolio using an embedded game viewer.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Chakra UI](https://chakra-ui.com/) and [Lucide React](https://lucide.dev/) for icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Deployment**: PM2 for production

---

## 📁 Project Structure

portfolio/
├── app/
│ ├── components/
│ │ ├── GameModal.js # Game details modal
│ │ ├── GameViewer.js # Game viewer for WebGL games
│ │ ├── Hero.js # Hero section
│ │ ├── ImageCarousel.js # Image carousel for game galleries
│ │ ├── Navigation.js # Navigation bar
│ │ ├── Portfolio.js # Game projects grid
│ ├── globals.css # Global styles
│ ├── layout.js # Root layout
│ └── page.js # Main page with game data
├── public/
│ ├── images/ # Image assets
│ └── games/ # WebGL game builds
├── ecosystem.config.js # PM2 configuration
├── jsconfig.json # Path aliasing configuration
├── tailwind.config.js # Tailwind configuration
├── package.json # Project dependencies
└── README.md # Project documentation

---

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
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

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`.

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### PM2 Deployment

The project includes PM2 configuration for production deployment. Update the `ecosystem.config.js` file if needed, then run:
```bash
pm2 start ecosystem.config.js
```

## 💻 Development

### Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Creates a production build.
- `npm start`: Starts the production server.
- `npm run lint`: Runs ESLint for code linting.

### Environment Variables

The following environment variables can be set in `.env`:
```env
NODE_ENV=production
PORT=3000
```

## 🎮 Adding New Games

Add new games to the `games` array in `page.js`:
```javascript
{
  id: uniqueId,
  name: "Game Name",
  image: "/path/to/image.png",
  description: "Game description",
  platform: "PC",
  contributions: [
    "Contribution 1",
    "Contribution 2"
  ],
  projectInfo: {
    technologies: ["Technology 1", "Technology 2"],
    languages: ["Language 1"],
    communication: ["Tool 1", "Tool 2"],
    management: "Management Method"
  },
  links: {
    store: "store-url",
    website: "website-url",
    twitter: "social-url",
    webglUrl: "/path/to/webgl/game"
  },
  gallery: [
    "/path/to/screenshot1.jpg",
    "/path/to/screenshot2.jpg"
  ]
}
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:
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
  plugins: [],
};
```

### Path Aliasing

The project uses `jsconfig.json` for path aliasing, making imports cleaner:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 📱 Browser Support

The portfolio is optimized for modern browsers and is fully responsive for mobile devices.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Cláudio Pinheiro
Email: claudiosilva@pm.me
Portfolio: [http://claudiopinheiro.pt](http://claudiopinheiro.pt)
GitHub: [https://github.com/syl3n7](https://github.com/syl3n7)
