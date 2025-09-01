import { Box, Heading, SimpleGrid, Image, Text, Tag, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Portfolio({ games, onGameSelect }) {
  return (
    <Box 
      as="section" 
      id="portfolio" 
      py={{ base: 12, md: 20 }}
      px={4}
    >
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        mb={12}
        textAlign="center"
      >
        <Heading 
          as="h2" 
          fontSize={{ base: "3xl", md: "4xl" }}
          color="blue.900"
          mb={4}
        >
          Portfolio
        </Heading>
        <Text 
          color="blue.700" 
          maxW="2xl" 
          mx="auto"
          fontSize={{ base: "md", md: "lg" }}
        >
          Example projects showcasing modern development practices
        </Text>
      </MotionBox>

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        spacing={{ base: 6, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        {games.map((game, index) => (
          <MotionBox
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Box 
              bg="whiteAlpha.900"
              backdropFilter="blur(10px)"
              rounded="xl"
              shadow="lg"
              overflow="hidden"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{ shadow: '2xl' }}
              border="1px"
              borderColor="blue.100"
              onClick={() => onGameSelect(game)}
            >
              <Box position="relative" w="full" h="52">
                <Image 
                  src={game.image}
                  alt={game.name}
                  objectFit="cover"
                  w="full"
                  h="full"
                  transition="transform 0.3s"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
              </Box>
              
              <Box p={6}>
                <Heading 
                  as="h3" 
                  fontSize="xl"
                  color="blue.900"
                  mb={2}
                >
                  {game.name}
                </Heading>
                
                <Text 
                  color="blue.600"
                  fontSize="sm"
                  mb={4}
                  noOfLines={2}
                >
                  {game.description}
                </Text>

                <HStack spacing={2}>
                  {game.technologies?.map((tech, i) => (
                    <Tag
                      key={i}
                      size="sm"
                      variant="subtle"
                      colorScheme="blue"
                    >
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}