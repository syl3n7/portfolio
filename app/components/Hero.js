import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box 
      as="section"
      id="hero" 
      textAlign="center" 
      py={{ base: 10, md: 20, lg: 28 }}
      px={4}
      maxW="container.xl"
      mx="auto"
    >
      <MotionBox 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        bg="blue.50"
        backdropFilter="blur(10px)"
        rounded="2xl"
        p={{ base: 6, md: 10 }}
        shadow="xl"
        border="2px"
        borderColor="blue.400"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '5px',
          bgGradient: 'linear(to-r, blue.300, cyan.300, blue.500)',
          zIndex: 1
        }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '5px',
          bgGradient: 'linear(to-r, blue.300, cyan.300, blue.500)',
          zIndex: 1
        }}
        sx={{
          boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)'
        }}
      >
        <Heading 
          as="h2" 
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          mb={{ base: 3, md: 4 }}
          color="blue.900"
          letterSpacing="tight"
          bgGradient="linear(to-r, blue.700, blue.900)"
          bgClip="text"
        >
          Hi, my name is Cláudio
        </Heading>
        <Text 
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          color="blue.800"
          maxW="2xl"
          mx="auto"
        >
          I&apos;m a generalist game programmer with a passion for tech
        </Text>
        <Text 
          fontSize={{ base: "md", md: "lg" }}
          color="blue.700"
          mt={{ base: 2, md: 3 }}
          fontWeight="medium"
        >
          Currently studying game development at IPMAIA
        </Text>
      </MotionBox>
    </Box>
  );
}