'use client'

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import GameModal from './components/GameModal';

const games = [
  {
    id: 1,
    name: "Open Weather Map Unity Project",
    image: "/images/bg.jpg",
    description: "API that bridges open weather map with Geonames.",
    platform: "PC",
    contributions: [
      "Developed everything from scratch, but the Class serialization that was teached at uni.",
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["NA"],
      management: "NA"
    },
    links: {
      website: "https://github.com/syl3n7/APAI-OWM-Fork/releases/download/v0.7/APAIProject_OpenWeatherMap.zip",
      github: "https://github.com/syl3n7/APAI-OWM-Fork",
    },
    gallery: [
      "/images/captura1.png",
      "/images/captura2.png"
    ]
  },
  {
    id: 2,
    name: "Game Launcher",
    image: "/images/game-launcher-styled.svg",
    description: "Simple game launcher for launching games.\nThis laucher is still being worked on and the UI is not on its final form.",
    platform: "PC",
    contributions: [
      "Developed the launcher from scratch",
      "Implemented the core functionalities of the launcher",
      "Auto updates the games before launch",
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord"],
      management: "Forgejo, Plane"
    },
    links: {
      website: "https://steelchunk.eu/launcher/releases/latest_stable.zip",
      github: "https://github.com/syl3n7/Game_Launcher",
    },
    gallery: [
      "/images/Launcher_Main.png"
    ]
  },
  {
    id: 3,
    name: "CloudShooter",
    image: "/api/placeholder/400/300",
    description: "A fast-paced aerial combat game set among the clouds.\nThis game is being currently ported from java to unity.",
    platform: "PC",
    contributions: [
      "Developed the game from scratch, including core game systems and mechanics",
      "Helped the art team to implement the art assets into the game",
      "Level design, including creating and balancing levels for the game",
    ],
    projectInfo: {
      technologies: ["Processing, Unity"],
      languages: ["Java", "C#"],
      communication: ["Discord"],
      management: "Github Projects"
    },
    links: {
      website: "https://steelchunk.eu/games/CloudShooter/releases/latest.zip",
      github: "https://github.com/syl3n7/CloudShooter",
    }
  },
  {
    id: 4,
    name: "MistSolitude",
    image: "/api/placeholder/400/300",
    description: "An atmospheric adventure game set in a mysterious, mist-covered world.",
    platform: "PC",
    contributions: [
      "Developed all the game mechanics and systems",
      "Implemented the core gameplay features",
      "Implemented animations and visual effects",
      "Optimized the game for better performance",
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord"],
      management: "Github Projects"
    },
    links: {
      website: "https://steelchunk.eu/games/MistSolitude/releases/latest.zip",
      github: "https://github.com/Mariana041/MistSolitude",
    }
  }
];

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);
  
  // Debug: Log when selected game changes
  useEffect(() => {
    if (selectedGame) {
      console.log('Modal opened for game:', selectedGame.name);
    }
  }, [selectedGame]);

  // Handler for selecting a game
  const handleGameSelect = (game) => {
    console.log('Game selected:', game.name);
    setSelectedGame(game);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    console.log('Closing modal');
    setSelectedGame(null);
  };

  // Error boundary for modal
  const handleModalError = (error) => {
    console.error('Modal error:', error);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Portfolio 
          games={games} 
          onGameSelect={handleGameSelect} 
        />
        <Resume />
      </main>

      {selectedGame && (
        <div className="modal-wrapper">
          <GameModal 
            game={selectedGame} 
            onClose={handleCloseModal}
            onError={handleModalError}
          />
        </div>
      )}
    </div>
  );
}