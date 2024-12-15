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
    name: "MyLittleExploree",
    image: "/images/MainMenu_Background.png",
    description: "A charming exploration game where players discover a magical world filled with wonder and challenges.",
    platform: "PC",
    contributions: [
      "Managed the project and team, including organizing meetings and delegating tasks",
      "Developed initial prototype and enhanced game functionalities, including tweaking mechanics",
      "Collaborated on bug fixing with the team to refine gameplay experience",
      "Optimized block and rock animations to enhance obstacle interactions",
      "Implemented core game systems and mechanics"
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      website: "https://steelchunk.eu/games/MyLittleExploree/releases/latest.zip",
    },
    gallery: [
      "https://youtu.be/dZoKc4O0xWQ",
      "/images/MLE_Main.png",
      "/images/MLE_Pause.png",
      "/images/MLE_Credits.png"
    ]
  },
  {
    id: 2,
    name: "Game Launcher",
    image: "/api/placeholder/400/300",
    description: "Simple game launcher for launching games.\nThis laucher is still being worked on and the UI is not on its final form.",
    platform: "PC",
    contributions: [
      "Developed the launcher from scratch",
      "Implemented the core functionalities of the launcher",
      "Auto updates the games before launch",
    ],
    projectInfo: {
      technologies: ["Processing, Unity"],
      languages: ["Java", "C#"],
      communication: ["Discord", "Github Projects"],
      management: "Forgejo"
    },
    links: {
      website: "https://steelchunk.eu/launcher/releases/latest_stable.zip",
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
      communication: ["Discord", "Github Projects"],
      management: "Github"
    },
    links: {
      website: "https://steelchunk.eu/games/CloudShooter/releases/latest.zip",
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
      communication: ["Discord", "Github Projects"],
      management: "SyncThing"
    },
    links: {
      website: "https://steelchunk.eu/games/MistSolitude/releases/latest.zip",
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