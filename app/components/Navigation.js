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
  Container,
  Collapse
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, EmailIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="full" 
      zIndex={50} 
      bg="whiteAlpha.800"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="blue.100"
      shadow="sm"
      transition="all 0.2s"
    >
      <Container maxW="7xl">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <MotionBox
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Text 
              fontSize={{ base: "xl", md: "2xl" }} 
              fontWeight="bold" 
              color="blue.900"
              letterSpacing="tight"
            >
              Portfolio Demo
            </Text>
          </MotionBox>

          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={8}
            align="center"
          >
            <Link 
              href="#" 
              color="blue.900" 
              fontWeight="medium"
              position="relative"
              _hover={{ 
                color: 'blue.600',
                _after: {
                  width: '100%',
                  left: '0'
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                right: '0',
                bg: 'blue.600',
                transition: 'width 0.3s ease, left 0.3s ease'
              }}
            >
              Home
            </Link>
            <Link 
              href="#portfolio" 
              color="blue.900"
              fontWeight="medium"
              position="relative"
              _hover={{ 
                color: 'blue.600',
                _after: {
                  width: '100%',
                  left: '0'
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                right: '0',
                bg: 'blue.600',
                transition: 'width 0.3s ease, left 0.3s ease'
              }}
            >
              Portfolio
            </Link>
            <Link 
              href="/resume"
              color="blue.900"
              fontWeight="medium"
              position="relative"
              _hover={{ 
                color: 'blue.600',
                _after: {
                  width: '100%',
                  left: '0'
                }
              }}
              _after={{
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '-2px',
                right: '0',
                bg: 'blue.600',
                transition: 'width 0.3s ease, left 0.3s ease'
              }}
            >
              Résumé
            </Link>
            <Link
              href="mailto:webmaster@steelchunk.eu"
              px={4}
              py={2}
              borderRadius="full"
              bg="blue.100"
              color="blue.900"
              fontWeight="medium"
              transition="all 0.2s"
              _hover={{ 
                bg: 'blue.200',
                transform: 'translateY(-1px)',
                shadow: 'md'
              }}
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
            _hover={{ bg: 'blue.50' }}
          />
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Box 
          bg="whiteAlpha.900"
          backdropFilter="blur(10px)"
          borderBottom="1px"
          borderColor="blue.100"
          shadow="sm"
        >
          <Container maxW="7xl">
            <Stack spacing={1} py={4}>
              <Link 
                href="#" 
                px={3} 
                py={3} 
                color="blue.900"
                fontWeight="medium"
                borderRadius="md"
                _hover={{ 
                  bg: 'blue.50',
                  color: 'blue.600'
                }}
              >
                Home
              </Link>
              <Link 
                href="#portfolio" 
                px={3} 
                py={3}
                color="blue.900"
                fontWeight="medium"
                borderRadius="md"
                _hover={{ 
                  bg: 'blue.50',
                  color: 'blue.600'
                }}
              >
                Portfolio
              </Link>
              <Link 
                href="/resume"
                px={3} 
                py={3}
                color="blue.900"
                fontWeight="medium"
                borderRadius="md"
                _hover={{ 
                  bg: 'blue.50',
                  color: 'blue.600'
                }}
              >
                Résumé
              </Link>
              <Link 
                href="mailto:webmaster@steelchunk.eu" 
                px={3} 
                py={3}
                color="blue.900"
                fontWeight="medium"
                borderRadius="md"
                _hover={{ 
                  bg: 'blue.50',
                  color: 'blue.600'
                }}
              >
                Contact Me
              </Link>
            </Stack>
          </Container>
        </Box>
      </Collapse>
    </Box>
  )
}