import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

export default function Portfolio({ games, onGameSelect }) {
  return (
    <Box as="section" id="portfolio" py={20}>
      <Heading as="h2" size="xl" mb={8} color="blue.900">Portfolio</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {games.map((game) => (
          <Box 
            key={game.id} 
            bg="whiteAlpha.80" 
            backdropFilter="blur(10px)" 
            rounded="lg" 
            shadow="lg" 
            overflow="hidden" 
            cursor="pointer" 
            transform="scale(1.05)" 
            transition="all 0.3s" 
            _hover={{ shadow: 'xl' }} 
            border="1px" 
            borderColor="blue.100"
            onClick={() => onGameSelect(game)}
          >
            <Box position="relative" w="full" h="48">
              <Image 
                src={game.image} 
                alt={game.name}
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
            <Box p={4}>
              <Heading as="h3" size="md" color="blue.900">{game.name}</Heading>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}