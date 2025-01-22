'use client'

import { Box, IconButton, Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function GameViewer({ gameUrl, onClose }) {
  return (
    <MotionBox
      position="fixed"
      inset="0"
      bg="rgba(0, 0, 0, 0.95)"
      zIndex={2000}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      backdropFilter="blur(10px)"
    >
      <IconButton
        icon={<CloseIcon />}
        position="absolute"
        right={4}
        top={4}
        onClick={onClose}
        bg="whiteAlpha.200"
        _hover={{ bg: "whiteAlpha.300" }}
        color="white"
        size="lg"
        zIndex={2001}
        aria-label="Close game"
      />

      <Box 
        width="80vw" 
        height="80vh" 
        bg="black" 
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => window.open(gameUrl, '_blank')}
        >
          Open Game in New Tab
        </Button>
      </Box>
    </MotionBox>
  );
}