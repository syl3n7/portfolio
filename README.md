# Game Developer Portfolio

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, showcasing game development projects and professional experience. Features a clean, minimalist design with a focus on showcasing interactive game projects.

## 🚀 Features

- Modern, responsive design with a blue gradient theme
- Interactive game portfolio with detailed modal views
- Smooth scroll navigation
- Dynamic content loading
- SEO optimized with Next.js metadata
- Optimized for performance with Turbopack

## 🛠 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React for icons
- **Font**: Inter (Google Fonts)
- **Deployment**: PM2 for production

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── GameModal.js    # Game details modal
│   │   ├── Hero.js         # Hero section
│   │   ├── Navigation.js   # Navigation bar
│   │   ├── Portfolio.js    # Game projects grid
│   │   └── Resume.js       # Resume section
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js            # Main page with game data
├── public/
│   └── images/            # Image assets
├── ecosystem.config.js    # PM2 configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json          # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Production Build

1. Build the application
```bash
npm run build
```

2. Start production server
```bash
npm start
```

### PM2 Deployment

The project includes PM2 configuration for production deployment:

```bash
pm2 start ecosystem.config.js
```

## 💻 Development

### Available Scripts

- `npm run dev`: Starts development server with Turbopack
- `npm run build`: Creates production build
- `npm start`: Starts production server
- `npm run lint`: Runs ESLint

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
    twitter: "social-url"
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
theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
}
```

### Components

All components are in the `app/components` directory and can be customized as needed:
- `Navigation.js`: Header and navigation
- `Hero.js`: Introduction section
- `Portfolio.js`: Game projects grid
- `GameModal.js`: Game details modal
- `Resume.js`: Professional experience

## 📱 Browser Support

The portfolio is optimized for modern browsers and is fully responsive for mobile devices.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

Cláudio Pinheiro - claudiosilva@pm.me

Project Link: [[http://claudiopinheiro.pt](http://claudiopinheiro.pt)]
