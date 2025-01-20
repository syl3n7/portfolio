import { Box, Heading, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box as="section" id="hero" textAlign="center" py={20}>
      <Box bg="whiteAlpha.40" backdropFilter="blur(10px)" rounded="2xl" p={10} shadow="xl">
        <Heading as="h2" size="2xl" mb={4} color="blue.900">
          Hi, my name is Cláudio
        </Heading>
        <Text fontSize="xl" color="blue.800">
          I&apos;m a generalist game programmer with a passion for tech
        </Text>
        <Text fontSize="lg" color="blue.700" mt={2}>
          Currently studying game development at IPMAIA
        </Text>
      </Box>
    </Box>
  );
}