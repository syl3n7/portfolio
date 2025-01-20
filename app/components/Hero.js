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
        bg="whiteAlpha.70"
        backdropFilter="blur(10px)"
        rounded="2xl"
        p={{ base: 6, md: 10 }}
        shadow="2xl"
        border="1px"
        borderColor="whiteAlpha.300"
      >
        <Heading 
          as="h2" 
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          mb={{ base: 3, md: 4 }}
          color="blue.900"
          letterSpacing="tight"
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