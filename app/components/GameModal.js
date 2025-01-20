import { useState } from 'react';
import { 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
  SimpleGrid,
  Tag,
  HStack,
  VStack,
  Link,
  Image,
  Divider
} from '@chakra-ui/react';
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'; // Changed CodeIcon to LinkIcon
import { motion, AnimatePresence } from 'framer-motion';
import ImageCarousel from './ImageCarousel';

const MotionBox = motion(Box);

export default function GameModal({ game, onClose }) {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openCarousel = (index) => {
    setInitialImageIndex(index);
    setCarouselOpen(true);
  };

  return (
    <Modal isOpen={true} onClose={onClose} size="6xl" scrollBehavior="inside">
      <ModalOverlay 
        backdropFilter="blur(10px)"
        bg="blackAlpha.600"
      />
      <ModalContent 
        bg="whiteAlpha.900"
        backdropFilter="blur(10px)"
        rounded="2xl"
        overflow="hidden"
        my={4}
        zIndex={1400}  // Ensure modal is below carousel
      >
        <ModalHeader p={0}>
          <Box 
            position="relative" 
            h={{ base: "200px", md: "300px" }}
            overflow="hidden"
          >
            <Image
              src={game.image}
              alt={game.name}
              objectFit="cover"
              w="full"
              h="full"
            />
            <Box 
              position="absolute"
              bottom={0}
              w="full"
              bg="blackAlpha.700"
              p={6}
              backdropFilter="blur(10px)"
            >
              <Heading color="white" size="xl">{game.name}</Heading>
            </Box>
          </Box>
          <ModalCloseButton 
            color="white" 
            bg="blackAlpha.500" 
            _hover={{ bg: "blackAlpha.700" }}
          />
        </ModalHeader>

        <ModalBody p={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading size="md" mb={4} color="blue.900">Description</Heading>
                <Text whiteSpace="pre-line" color="blue.700">{game.description}</Text>
              </Box>

              <Box>
                <Heading size="md" mb={4} color="blue.900">Contributions</Heading>
                <UnorderedList spacing={2} color="blue.700">
                  {game.contributions.map((contribution, index) => (
                    <ListItem key={index}>{contribution}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </VStack>

            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading size="md" mb={4} color="blue.900">Project Details</Heading>
                <SimpleGrid columns={2} spacing={4}>
                  <VStack align="start">
                    <Text fontWeight="bold" color="blue.900">Technologies</Text>
                    <HStack wrap="wrap" spacing={2}>
                      {game.projectInfo.technologies.map((tech, index) => (
                        <Tag key={index} colorScheme="blue" size="sm">{tech}</Tag>
                      ))}
                    </HStack>
                  </VStack>

                  <VStack align="start">
                    <Text fontWeight="bold" color="blue.900">Languages</Text>
                    <HStack wrap="wrap" spacing={2}>
                      {game.projectInfo.languages.map((lang, index) => (
                        <Tag key={index} colorScheme="green" size="sm">{lang}</Tag>
                      ))}
                    </HStack>
                  </VStack>
                </SimpleGrid>
              </Box>

              <Box>
                <Heading size="md" mb={4} color="blue.900">Links</Heading>
                <HStack spacing={4}>
                  {game.links.website && (
                    <Button 
                      as={Link}
                      href={game.links.website}
                      isExternal
                      leftIcon={<ExternalLinkIcon />}
                      colorScheme="blue"
                    >
                      Visit Project
                    </Button>
                  )}
                  {game.links.github && (
                    <Button
                      as={Link}
                      href={game.links.github}
                      isExternal
                      leftIcon={<LinkIcon />}  // Changed from CodeIcon to LinkIcon
                      colorScheme="gray"
                    >
                      View Code
                    </Button>
                  )}
                </HStack>
              </Box>

              {game.gallery && game.gallery.length > 0 && (
                <Box>
                  <Heading size="md" mb={4} color="blue.900">Gallery</Heading>
                  <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                    {game.gallery.map((image, index) => (
                      <MotionBox
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        cursor="pointer"
                        onClick={() => openCarousel(index)}
                      >
                        <Image
                          src={image}
                          alt={`${game.name} screenshot ${index + 1}`}
                          rounded="md"
                          w="full"
                          h="100px"
                          objectFit="cover"
                        />
                      </MotionBox>
                    ))}
                  </SimpleGrid>
                </Box>
              )}
            </VStack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>

      <AnimatePresence>
        {carouselOpen && (
          <ImageCarousel
            images={game.gallery}
            initialIndex={initialImageIndex}
            onClose={() => setCarouselOpen(false)}
            gameName={game.name}
          />
        )}
      </AnimatePresence>
    </Modal>
  );
}