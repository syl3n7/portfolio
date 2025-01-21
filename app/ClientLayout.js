'use client'

import { ChakraProvider, Text, Link, Box, Container, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaHeart } from 'react-icons/fa'

export default function ClientLayout({ children }) {
  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" flexDirection="column">
        {children}
        <Box 
          as="footer" 
          mt="auto"
          py={6}
          bg="whiteAlpha.900"
          backdropFilter="blur(10px)"
          borderTop="1px"
          borderColor="blue.100"
          shadow="sm"
        >
          <Container maxW="7xl">
            <HStack
              justify="center"
              spacing={2}
              color="blue.800"
              fontSize="sm"
              fontWeight="medium"
            >
              <Text>Made with</Text>
              <Icon as={FaHeart} color="red.400" />
              <Text>by Cláudio</Text>
              <Text>•</Text>
              <Link
                href="https://github.com/syl3n7/portfolio"
                display="flex"
                alignItems="center"
                gap={2}
                color="blue.500"
                _hover={{ 
                  color: 'blue.700',
                  transform: 'translateY(-1px)'
                }}
                transition="all 0.2s"
                isExternal
              >
                <Icon as={FaGithub} />
                <Text>GitHub</Text>
              </Link>
            </HStack>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  )
}
