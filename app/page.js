'use client'

import { useState, useEffect } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import GameModal from './components/GameModal'

const games = [
  {
    id: 1,
    name: "Open Weather Map Unity Project",
    image: "/images/bg.jpg",
    description: "API that bridges open weather map with Geonames.\nThe purpose of this bridge is to find the latitude and longitude provided from geonames when the location is entered and only then we send the data request to open weather map, so that we fetch all the text data and textures for the images.",
    platform: "PC",
    contributions: [
      "Open weather map and geonames classes serializations",
      "Handling of webrequests to fetch the data",
      "Handling of the data to send for each part of the UI",
      "UI for entering the app, with background looping video",
      "UI for the information provided to the final user",
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
      "/images/captura2.png",
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
    image: "/images/background1080p.png",
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
      webglUrl: "/games/cloudshooter/index.html",
    }
  },
  {
    id: 4,
    name: "Arctic Escape",
    image: "/images/arcticescape.png",
    description: "An exciting escape adventure game set in the Arctic environment.",
    platform: "PC / Web",
    contributions: [
      "Game development and implementation",
    ],
    projectInfo: {
      technologies: ["Unity"],
      languages: ["C#"],
      communication: ["NA"],
      management: "NA"
    },
    links: {
      website: "https://steelchunk.eu/games/ArcticEscape/releases/latest.zip",
      github: "https://github.com/syl3n7/Winterjam2025",
      webglUrl: "/games/arcticescape/index.html"
    },
    gallery: []
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
    <Box minH="100vh" bgGradient="linear(to-br, blue.50, purple.50)">
      <Navigation />
      
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }} py={12}>
        <Hero />
        <Portfolio 
          games={games} 
          onGameSelect={handleGameSelect} 
        />
      </Container>

      {selectedGame && (
        <Box className="modal-wrapper">
          <GameModal 
            game={selectedGame} 
            onClose={handleCloseModal}
            onError={handleModalError}
          />
        </Box>
      )}
    </Box>
  )
}