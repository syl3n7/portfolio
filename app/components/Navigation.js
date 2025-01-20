'use client'

import { useState } from 'react'
import {
  Box,
  Flex,
  Link,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Container
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons'

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="full" 
      zIndex={50} 
      bg="whiteAlpha.700"
      backdropFilter="blur(8px)"
      borderBottom="1px"
      borderColor="blue.100"
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold" color="blue.900">
            Cláudio Pinheiro
          </Text>

          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={8}
          >
            <Link href="#" color="blue.900" _hover={{ color: 'blue.600' }}>
              Home
            </Link>
            <Link href="#portfolio" color="blue.900" _hover={{ color: 'blue.600' }}>
              Portfolio
            </Link>
            <Link href="/docs/resume.pdf" color="blue.900" _hover={{ color: 'blue.600' }}>
              Résumé
            </Link>
            <Link
              href="mailto:claudiosilva@pm.me"
              px={3}
              py={1}
              borderRadius="full"
              bg="blue.100"
              color="blue.900"
              _hover={{ bg: 'blue.200' }}
            >
              <EmailIcon mr={2} />
              Contact Me
            </Link>
          </Stack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <Box 
          display={{ base: 'block', md: 'none' }}
          bg="whiteAlpha.700"
          backdropFilter="blur(8px)"
        >
          <Stack spacing={4} py={2}>
            <Link href="#" px={3} py={2} color="blue.900" _hover={{ color: 'blue.600' }}>
              Home
            </Link>
            <Link href="#portfolio" px={3} py={2} color="blue.900" _hover={{ color: 'blue.600' }}>
              Portfolio
            </Link>
            <Link href="/docs/resume.pdf" px={3} py={2} color="blue.900" _hover={{ color: 'blue.600' }}>
              Résumé
            </Link>
            <Link href="mailto:claudiosilva@pm.me" px={3} py={2} color="blue.900" _hover={{ color: 'blue.600' }}>
              Contact Me
            </Link>
          </Stack>
        </Box>
      )}
    </Box>
  )
}