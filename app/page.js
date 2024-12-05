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
      "Developed and enhanced game functionalities, including redesigning mechanics from the initial prototype",
      "Collaborated on bug fixing with the team to refine gameplay experience",
      "Optimized block and rock animations to enhance obstacle interactions",
      "Implemented core game systems and mechanics"
    ],
    projectInfo: {
      technologies: ["Unity", "Cinemachine", "Post Processing Stack"],
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
    description: "An exciting chase game that tests players' reflexes and strategic thinking.",
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
    description: "A fast-paced aerial combat game set among the clouds.",
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
    description: "An atmospheric adventure game set in a mysterious, mist-covered world.",
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