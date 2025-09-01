'use client'

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Divider, 
  Badge,
  SimpleGrid,
  Icon,
  Link
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const MotionBox = motion(Box)

export default function Resume() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="4xl" py={10}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          bg="white"
          rounded="lg"
          shadow="lg"
          p={8}
        >
          {/* Header */}
          <VStack spacing={4} align="center" mb={8}>
            <Heading as="h1" size="2xl" color="blue.900">
              John Doe
            </Heading>
            <Text fontSize="xl" color="blue.600" fontWeight="medium">
              Full-Stack Developer
            </Text>
            <HStack spacing={6} wrap="wrap" justify="center">
              <HStack spacing={2}>
                <Icon as={FaEnvelope} color="blue.500" />
                <Link href="mailto:webmaster@steelchunk.eu" color="blue.600">
                  webmaster@steelchunk.eu
                </Link>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaPhone} color="blue.500" />
                <Text color="gray.600">+1 (555) 123-4567</Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaMapMarkerAlt} color="blue.500" />
                <Text color="gray.600">San Francisco, CA</Text>
              </HStack>
            </HStack>
            <HStack spacing={4}>
              <Link href="https://linkedin.com/in/johndoe" isExternal color="blue.600">
                <HStack spacing={2}>
                  <Icon as={FaLinkedin} />
                  <Text>LinkedIn</Text>
                </HStack>
              </Link>
              <Link href="https://github.com/johndoe" isExternal color="blue.600">
                <HStack spacing={2}>
                  <Icon as={FaGithub} />
                  <Text>GitHub</Text>
                </HStack>
              </Link>
            </HStack>
          </VStack>

          <Divider mb={8} />

          {/* Professional Summary */}
          <VStack align="start" spacing={6} mb={8}>
            <Heading as="h2" size="lg" color="blue.900">
              Professional Summary
            </Heading>
            <Text color="gray.700" lineHeight="tall">
              Experienced Full-Stack Developer with 5+ years of expertise in modern web technologies. 
              Specialized in React, Node.js, and cloud platforms. Proven track record of delivering 
              scalable applications and leading development teams. Passionate about clean code, 
              performance optimization, and user experience.
            </Text>
          </VStack>

          <Divider mb={8} />

          {/* Skills */}
          <VStack align="start" spacing={6} mb={8}>
            <Heading as="h2" size="lg" color="blue.900">
              Technical Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              <VStack align="start" spacing={3}>
                <Text fontWeight="bold" color="blue.700">Frontend</Text>
                <HStack wrap="wrap" spacing={2}>
                  {['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((skill) => (
                    <Badge key={skill} colorScheme="blue" variant="subtle">
                      {skill}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
              <VStack align="start" spacing={3}>
                <Text fontWeight="bold" color="blue.700">Backend</Text>
                <HStack wrap="wrap" spacing={2}>
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'].map((skill) => (
                    <Badge key={skill} colorScheme="green" variant="subtle">
                      {skill}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
              <VStack align="start" spacing={3}>
                <Text fontWeight="bold" color="blue.700">Mobile</Text>
                <HStack wrap="wrap" spacing={2}>
                  {['React Native', 'Flutter', 'iOS', 'Android'].map((skill) => (
                    <Badge key={skill} colorScheme="purple" variant="subtle">
                      {skill}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
              <VStack align="start" spacing={3}>
                <Text fontWeight="bold" color="blue.700">Cloud & DevOps</Text>
                <HStack wrap="wrap" spacing={2}>
                  {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'].map((skill) => (
                    <Badge key={skill} colorScheme="orange" variant="subtle">
                      {skill}
                    </Badge>
                  ))}
                </HStack>
              </VStack>
            </SimpleGrid>
          </VStack>

          <Divider mb={8} />

          {/* Experience */}
          <VStack align="start" spacing={6} mb={8}>
            <Heading as="h2" size="lg" color="blue.900">
              Professional Experience
            </Heading>
            
            <VStack align="start" spacing={4} w="full">
              <Box w="full">
                <HStack justify="space-between" mb={2}>
                  <Heading as="h3" size="md" color="blue.700">
                    Senior Full-Stack Developer
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    2022 - Present
                  </Text>
                </HStack>
                <Text color="blue.600" fontWeight="medium" mb={3}>
                  TechCorp Solutions • San Francisco, CA
                </Text>
                <VStack align="start" spacing={2}>
                  <Text color="gray.700">• Led development of microservices architecture serving 100k+ users</Text>
                  <Text color="gray.700">• Improved application performance by 40% through optimization techniques</Text>
                  <Text color="gray.700">• Mentored junior developers and established coding standards</Text>
                  <Text color="gray.700">• Implemented CI/CD pipelines reducing deployment time by 60%</Text>
                </VStack>
              </Box>

              <Box w="full">
                <HStack justify="space-between" mb={2}>
                  <Heading as="h3" size="md" color="blue.700">
                    Full-Stack Developer
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    2020 - 2022
                  </Text>
                </HStack>
                <Text color="blue.600" fontWeight="medium" mb={3}>
                  StartupXYZ • Remote
                </Text>
                <VStack align="start" spacing={2}>
                  <Text color="gray.700">• Built e-commerce platform from scratch using React and Node.js</Text>
                  <Text color="gray.700">• Integrated payment systems and third-party APIs</Text>
                  <Text color="gray.700">• Developed responsive mobile app with React Native</Text>
                  <Text color="gray.700">• Collaborated with design team to implement UI/UX improvements</Text>
                </VStack>
              </Box>

              <Box w="full">
                <HStack justify="space-between" mb={2}>
                  <Heading as="h3" size="md" color="blue.700">
                    Frontend Developer
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    2019 - 2020
                  </Text>
                </HStack>
                <Text color="blue.600" fontWeight="medium" mb={3}>
                  WebAgency Pro • New York, NY
                </Text>
                <VStack align="start" spacing={2}>
                  <Text color="gray.700">• Developed responsive websites for various clients</Text>
                  <Text color="gray.700">• Implemented modern JavaScript frameworks and libraries</Text>
                  <Text color="gray.700">• Optimized websites for SEO and accessibility</Text>
                  <Text color="gray.700">• Collaborated with designers to create pixel-perfect interfaces</Text>
                </VStack>
              </Box>
            </VStack>
          </VStack>

          <Divider mb={8} />

          {/* Education */}
          <VStack align="start" spacing={6} mb={8}>
            <Heading as="h2" size="lg" color="blue.900">
              Education
            </Heading>
            <Box w="full">
              <HStack justify="space-between" mb={2}>
                <Heading as="h3" size="md" color="blue.700">
                  Bachelor of Science in Computer Science
                </Heading>
                <Text color="gray.600" fontSize="sm">
                  2015 - 2019
                </Text>
              </HStack>
              <Text color="blue.600" fontWeight="medium">
                University of California, Berkeley
              </Text>
              <Text color="gray.700" mt={2}>
                Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems
              </Text>
            </Box>
          </VStack>

          <Divider mb={8} />

          {/* Certifications */}
          <VStack align="start" spacing={6}>
            <Heading as="h2" size="lg" color="blue.900">
              Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="blue.700">AWS Certified Solutions Architect</Text>
                <Text color="gray.600" fontSize="sm">Amazon Web Services • 2023</Text>
              </VStack>
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="blue.700">Google Cloud Professional Developer</Text>
                <Text color="gray.600" fontSize="sm">Google Cloud • 2022</Text>
              </VStack>
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="blue.700">React Developer Certification</Text>
                <Text color="gray.600" fontSize="sm">Meta • 2021</Text>
              </VStack>
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="blue.700">Kubernetes Application Developer</Text>
                <Text color="gray.600" fontSize="sm">CNCF • 2023</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}
