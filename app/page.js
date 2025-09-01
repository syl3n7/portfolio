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
    name: "E-Commerce Platform",
    image: "/images/bg.jpg",
    description: "A modern, responsive e-commerce platform built with React and Node.js.\nFeatures include user authentication, shopping cart, payment integration, and admin dashboard.",
    platform: "Web",
    contributions: [
      "Frontend development with React and Redux",
      "RESTful API development with Node.js and Express",
      "Database design and optimization with PostgreSQL",
      "Payment gateway integration with Stripe",
      "Responsive UI/UX design with Material-UI",
    ],
    projectInfo: {
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      languages: ["JavaScript", "TypeScript", "SQL"],
      communication: ["REST API", "WebSocket"],
      management: "Agile/Scrum"
    },
    links: {
      website: "https://demo-ecommerce.example.com",
      github: "https://github.com/example/ecommerce-platform",
    },
    gallery: [
      "/images/captura1.png",
      "/images/captura2.png",
    ]
  },
  {
    id: 2,
    name: "Task Management App",
    image: "/images/game-launcher-styled.svg",
    description: "A collaborative task management application with real-time updates.\nIncludes features like project boards, team collaboration, file sharing, and analytics.",
    platform: "Web & Mobile",
    contributions: [
      "Cross-platform mobile app development with React Native",
      "Real-time collaboration features with Socket.io",
      "Cloud storage integration with AWS S3",
      "Push notifications implementation",
    ],
    projectInfo: {
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      languages: ["JavaScript", "TypeScript"],
      communication: ["REST API", "GraphQL"],
      management: "Jira, GitHub Projects"
    },
    links: {
      website: "https://demo-taskmanager.example.com",
      github: "https://github.com/example/task-management-app",
    },
    gallery: [
      "/images/Launcher_Main.png"
    ]
  },
  {
    id: 3,
    name: "AI-Powered Analytics Dashboard",
    image: "/images/background1080p.png",
    description: "An intelligent analytics dashboard with machine learning insights.\nProvides real-time data visualization, predictive analytics, and automated reporting.",
    platform: "Web",
    contributions: [
      "Built interactive data visualizations with D3.js and Chart.js",
      "Implemented machine learning models with Python and TensorFlow",
      "Designed responsive dashboard interface with Vue.js",
      "Created automated report generation system",
    ],
    projectInfo: {
      technologies: ["Vue.js", "Python", "TensorFlow", "Docker"],
      languages: ["JavaScript", "Python", "SQL"],
      communication: ["REST API", "WebSocket"],
      management: "Azure DevOps"
    },
    links: {
      website: "https://demo-analytics.example.com",
      github: "https://github.com/example/ai-analytics-dashboard",
    },
    gallery: [
      "/images/arcticescape.png"
    ]
  },
  {
    id: 4,
    name: "Mobile Banking App",
    image: "/images/arcticescape.png",
    description: "A secure mobile banking application with biometric authentication.\nFeatures include account management, money transfers, bill payments, and financial insights.",
    platform: "Mobile (iOS & Android)",
    contributions: [
      "Implemented biometric authentication and security features",
      "Built transaction history and analytics components",
      "Integrated with banking APIs and payment systems",
      "Designed user-friendly interface following banking UX standards",
    ],
    projectInfo: {
      technologies: ["Flutter", "Firebase", "Blockchain"],
      languages: ["Dart", "Kotlin", "Swift"],
      communication: ["REST API", "gRPC"],
      management: "Confluence, Linear"
    },
    links: {
      website: "https://demo-banking.example.com",
      github: "https://github.com/example/mobile-banking-app"
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