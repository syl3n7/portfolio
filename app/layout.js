'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Text, Link } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

// Define your custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f1ff',
      100: '#b3d4ff',
      500: '#3182ce',
      600: '#2b6cb0',
      900: '#1a365d',
    },
  },
})

export const metadata = {
  title: 'Cláudio Pinheiro - Game Developer',
  description: 'Portfolio of Cláudio Pinheiro, a game developer with a passion for tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          {children}
          <footer>
            <Text textAlign="center" py={4} bg="white" opacity={0.9}>
              made with ❤️ by Cláudio - 
              <Link 
                href="https://github.com/syl3n7/portfolio"
                color="blue.500"
                _hover={{ color: 'blue.700' }}
                isExternal
                ml={1}
              >
                GitHub
              </Link>
            </Text>
          </footer>
        </ChakraProvider>
      </body>
    </html>
  )
}