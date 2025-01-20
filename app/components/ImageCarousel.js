import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

export default function ImageCarousel({ images, initialIndex, onClose, gameName }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isVideo, setIsVideo] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onClose, prevImage, nextImage]);

  useEffect(() => {
    setIsVideo(images[currentIndex].includes('youtu'));
    // Lock body scroll when carousel is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, images]);

  const getVideoEmbedUrl = useCallback((url) => {
    const videoId = url.includes('youtu.be')
      ? url.split('youtu.be/')[1]
      : url.split('v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }, []);

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
        aria-label="Close carousel"
      />
      
      <Text 
        position="absolute" 
        top={4} 
        left={4} 
        color="white" 
        fontSize="xl"
        fontWeight="bold"
        zIndex={2001}
      >
        {currentIndex + 1} / {images.length}
      </Text>

      <IconButton
        icon={<ChevronLeftIcon boxSize={8} />}
        position="absolute"
        left={4}
        top="50%"
        transform="translateY(-50%)"
        onClick={prevImage}
        bg="whiteAlpha.200"
        _hover={{ bg: "whiteAlpha.300" }}
        color="white"
        size="lg"
        zIndex={2001}
        aria-label="Previous image"
      />

      <IconButton
        icon={<ChevronRightIcon boxSize={8} />}
        position="absolute"
        right={4}
        top="50%"
        transform="translateY(-50%)"
        onClick={nextImage}
        bg="whiteAlpha.200"
        _hover={{ bg: "whiteAlpha.300" }}
        color="white"
        size="lg"
        zIndex={2001}
        aria-label="Next image"
      />

      <MotionBox
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        w="full"
        h="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={16}
      >
        {isVideo ? (
          <Box maxW="90vw" maxH="90vh" w="full" h="full">
            <iframe
              src={getVideoEmbedUrl(images[currentIndex])}
              width="100%"
              height="100%"
              style={{ borderRadius: '8px' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>
        ) : (
          <Image
            src={images[currentIndex]}
            alt={`${gameName} screenshot ${currentIndex + 1}`}
            objectFit="contain"
            maxH="90vh"
            maxW="90vw"
            borderRadius="lg"
            shadow="2xl"
          />
        )}
      </MotionBox>
    </MotionBox>
  );
}