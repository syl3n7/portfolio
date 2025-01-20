'use client'

import { ChakraProvider, Text, Link } from '@chakra-ui/react'

export default function ClientLayout({ children }) {
  return (
    <ChakraProvider>
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
  )
}
