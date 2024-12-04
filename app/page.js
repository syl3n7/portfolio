'use client'

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import GameModal from './components/GameModal';

// Game data can be moved to a separate file later if needed
const games = [
  {
    id: 1,
    name: "MyLittleExploree",
    image: "/public/images/MainMenu_Background.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    platform: "PC",
    contributions: [
      "Developed and enhanced game functionalities, such as redesigning mechanics from the initial prototype",
      "Bug fixing, with the rest of the team to adjust the game to our preferences",
      "Helped to adjust certain animations from the blocks/rocks on the game so that they feel more like an obstacle"
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      store: "#",
      website: "#",
      twitter: "#"
    },
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ]
  },
  {
    id: 2,
    name: "CatchMeIfYouCan",
    image: "/api/placeholder/400/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    platform: "PC",
    contributions: [
      "Developed and enhanced game functionalities, such as redesigning mechanics from the initial prototype",
      "Bug fixing, with the rest of the team to adjust the game to our preferences",
      "Helped to adjust certain animations from the blocks/rocks on the game so that they feel more like an obstacle"
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      store: "#",
      website: "#",
      twitter: "#"
    },
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ]
  },
  {
    id: 3,
    name: "CloudShooter",
    image: "/api/placeholder/400/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    platform: "PC",
    contributions: [
      "Developed and enhanced game functionalities, such as redesigning mechanics from the initial prototype",
      "Bug fixing, with the rest of the team to adjust the game to our preferences",
      "Helped to adjust certain animations from the blocks/rocks on the game so that they feel more like an obstacle"
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      store: "#",
      website: "#",
      twitter: "#"
    },
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ]
  },
  {
    id: 4,
    name: "MistSolitude",
    image: "/api/placeholder/400/300",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    platform: "PC",
    contributions: [
      "Developed and enhanced game functionalities, such as redesigning mechanics from the initial prototype",
      "Bug fixing, with the rest of the team to adjust the game to our preferences",
      "Helped to adjust certain animations from the blocks/rocks on the game so that they feel more like an obstacle"
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      store: "#",
      website: "#",
      twitter: "#"
    },
    gallery: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ]
  }
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Portfolio games={games} onGameSelect={setSelectedGame} />
        <Resume />
      </main>

      {selectedGame && (
        <GameModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  );
}