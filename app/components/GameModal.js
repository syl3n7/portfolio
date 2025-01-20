import { useState } from 'react';
import Image from 'next/image';
import { Box, Heading, Text, ListItem, Button, Grid } from '@chakra-ui/react';
import ImageCarousel from './ImageCarousel';

export default function GameModal({ game, onClose }) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openCarousel = (index) => {
    setInitialImageIndex(index);
    setCarouselOpen(true);
  };

  return (
    <>
      <Box 
        position="fixed" 
        inset={0} 
        bg="blue.900Alpha.50" 
        backdropFilter="blur(10px)" 
        zIndex={50}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <Box h="full" w="full" overflowY="auto">
          <Box minH="full" display="flex" alignItems="center" justifyContent="center" p={4}>
            <Box 
              position="relative" 
              bg="whiteAlpha.90" 
              backdropFilter="blur(10px)" 
              rounded="xl" 
              w="full" 
              maxW="6xl" 
              mx="auto" 
              shadow="2xl" 
              border="1px" 
              borderColor="blue.100"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                onClick={onClose}
                position="absolute" 
                top={-4} 
                right={-4} 
                w={10} 
                h={10} 
                display="flex" 
                alignItems="center" 
                justifyContent="center" 
                color="white" 
                bg="blue.600" 
                _hover={{ bg: 'blue.700' }} 
                rounded="full" 
                shadow="lg" 
                fontSize="2xl" 
                transition="all 0.3s" 
                zIndex={50}
              >
                &times;
              </Button>

              <Box p={8} lg={{ p: 12 }} spaceY={8}>
                <Heading as="h3" size="2xl" color="blue.900">
                  {game.name} | {game.platform || 'PC'}
                </Heading>

                <Box className="prose prose-lg max-w-none">
                  <Text fontSize="xl" color="blue.800" whiteSpace="pre-line">{game.description}</Text>
                </Box>

                {game.contributions && (
                  <Box>
                    <Heading as="h4" size="lg" color="blue.800" mb={6}>What I worked on:</Heading>
                    <UnorderedList spacing={4} fontSize="lg" color="blue.800">
                      {game.contributions.map((contribution, index) => (
                        <ListItem key={index} display="flex" alignItems="start">
                          <Text mr={3} color="blue.600">&bull;</Text>
                          <Text>{contribution}</Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                )}

                {game.projectInfo && (
                  <Box bg="blue.50" rounded="lg" p={6}>
                    <Heading as="h4" size="lg" color="blue.800" mb={6}>Project Info</Heading>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                      {game.projectInfo.technologies && (
                        <Box>
                          <Text fontWeight="medium" color="blue.900" fontSize="lg">Technologies</Text>
                          <Text color="blue.800">{game.projectInfo.technologies.join(" | ")}</Text>
                        </Box>
                      )}
                      {game.projectInfo.languages && (
                        <Box>
                          <Text fontWeight="medium" color="blue.900" fontSize="lg">Languages</Text>
                          <Text color="blue.800">{game.projectInfo.languages.join(" | ")}</Text>
                        </Box>
                      )}
                      {game.projectInfo.communication && (
                        <Box>
                          <Text fontWeight="medium" color="blue.900" fontSize="lg">QA & Communication</Text>
                          <Text color="blue.800">{game.projectInfo.communication.join(" | ")}</Text>
                        </Box>
                      )}
                      {game.projectInfo.management && (
                        <Box>
                          <Text fontWeight="medium" color="blue.900" fontSize="lg">Project Management</Text>
                          <Text color="blue.800">{game.projectInfo.management}</Text>
                        </Box>
                      )}
                    </Grid>
                  </Box>
                )}

                {game.gallery && (
                  <Box>
                    <Heading as="h4" size="lg" color="blue.800" mb={6}>Gallery</Heading>
                    <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
                      {game.gallery.map((item, index) => (
                        <Box 
                          key={index} 
                          position="relative" 
                          h={64} 
                          cursor="pointer" 
                          _hover={{ opacity: 0.9 }} 
                          transition="all 0.3s"
                          onClick={() => openCarousel(index)}
                        >
                          {item.includes('youtu') ? (
                            <Box position="relative" w="full" h="full">
                              <Image 
                                src="/images/MLE_Thumb.png"
                                alt={`Video thumbnail ${index + 1}`}
                                objectFit="cover"
                                w="full"
                                h="full"
                                rounded="lg"
                              />
                              <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center" bg="blackAlpha.50" rounded="lg">
                                <PlayIcon className="w-16 h-16 text-white" />
                              </Box>
                            </Box>
                          ) : (
                            <Image 
                              src={item}
                              alt={`${game.name} screenshot ${index + 1}`}
                              objectFit="cover"
                              w="full"
                              h="full"
                              rounded="lg"
                            />
                          )}
                        </Box>
                      ))}
                    </Grid>
                  </Box>
                )}

                {game.links && (
                  <Box display="flex" gap={4} fontSize="lg">
                    <Text 
                      as="a" 
                      href={game.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      color="blue.600" 
                      _hover={{ color: 'blue.800' }}
                    >
                      Github link
                    </Text>
                    <Text 
                      as="a" 
                      href={game.links.website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      color="blue.600" 
                      _hover={{ color: 'blue.800' }}
                    >
                      Download link
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {carouselOpen && (
        <ImageCarousel
          images={game.gallery}
          initialIndex={initialImageIndex}
          onClose={() => setCarouselOpen(false)}
          gameName={game.name}
        />
      )}
    </>
  );
}

function PlayIcon({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}