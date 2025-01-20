import { useState, useEffect, useCallback } from 'react';
import { Box, IconButton, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@chakra-ui/icons';

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
    <Box
      position="fixed"
      inset="0"
      bg="blackAlpha.900"
      zIndex="60"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <IconButton
        icon={<CloseIcon />}
        position="absolute"
        top={4}
        right={4}
        color="white"
        onClick={onClose}
        zIndex="50"
      />
      <Text position="absolute" top={4} left={4} color="white" fontSize="lg">
        {currentIndex + 1} / {images.length}
      </Text>
      <IconButton
        icon={<ChevronLeftIcon />}
        position="absolute"
        left={4}
        color="white"
        onClick={prevImage}
      />
      <IconButton
        icon={<ChevronRightIcon />}
        position="absolute"
        right={4}
        color="white"
        onClick={nextImage}
      />
      <Box w="full" h="full" display="flex" alignItems="center" justifyContent="center" p={16}>
        {isVideo ? (
          <iframe
            src={getVideoEmbedUrl(images[currentIndex])}
            width="100%"
            height="100%"
            style={{ maxWidth: '80vw', maxHeight: '80vh' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Box position="relative" w="full" h="full" maxW="6xl" maxH="80vh">
            <Image
              src={images[currentIndex]}
              alt={`${gameName} screenshot ${currentIndex + 1}`}
              objectFit="contain"
              w="full"
              h="full"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}