import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Resume() {
  return (
    <Box as="section" id="resume" py={20}>
      <Heading as="h2" size="xl" mb={8} color="blue.900">Résumé</Heading>
      <Box bg="whiteAlpha.80" backdropFilter="blur(10px)" rounded="lg" shadow="lg" p={8} border="1px" borderColor="blue.100">
        
        {/* Skills Section */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={4} color="blue.800">Skills</Heading>
          <UnorderedList spacing={2} color="blue.900" bg="blue.50" rounded="lg" p={6}>
            <ListItem>Problem solving</ListItem>
            <ListItem>Adobe Creative Suite</ListItem>
            <ListItem>Microsoft Office Suite</ListItem>
            <ListItem>Unity Engine for creating tools and games</ListItem>
            <ListItem>Programming in C#, .Net, Java, C++</ListItem>
            <ListItem>Experience with Docker to deploy apps</ListItem>
            <ListItem>Experience with Proxmox to manage and deploy systems/ isolated apps</ListItem>
            <ListItem>Installation and configuration of networks</ListItem>
            <ListItem>Installation and configuration of operating systems</ListItem>
            <ListItem>Maintenance and configuration of servers and desktops</ListItem>
          </UnorderedList>
        </Box>

        {/* Work Experience Section */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={4} color="blue.800">Work Experience</Heading>
          <Box spacing={4} bg="indigo.50" rounded="lg" p={6}>
            <Box>
              <Heading as="h4" size="md" color="blue.900">APPC of Porto - Computer Technical Assistant</Heading>
              <Text color="blue.800">6-month internship</Text>
              <UnorderedList ml={6} mt={2} color="blue.800">
                <ListItem>Installation and configuration of operating systems</ListItem>
                <ListItem>Network installation and configuration</ListItem>
                <ListItem>Internal network management and access point configuration</ListItem>
                <ListItem>Hardware and software maintenance</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading as="h4" size="md" color="blue.900">PT/MEO Contact Center</Heading>
              <Text color="blue.800">2-month "on-job" training period</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" color="blue.900">ManPowerGroup - Technical Support for Altice Portugal</Heading>
              <Text color="blue.800">Part-time | April 2018 – May 2020</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" color="blue.900">Intelcia - Technical Support for Altice Portugal</Heading>
              <Text color="blue.800">Part-time | May 2020 – Present</Text>
            </Box>
          </Box>
        </Box>

        {/* Academic Qualifications Section */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={4} color="blue.800">Academic Qualifications</Heading>
          <UnorderedList spacing={2} color="blue.900" bg="blue.50" rounded="lg" p={6}>
            <ListItem>Regular education up to the 12th grade</ListItem>
            <ListItem>Technical-professional course of Programming and Management of Computer Systems
              <UnorderedList ml={6} mt={1} color="blue.800">
                <ListItem>Level 4 in the European qualifications framework</ListItem>
                <ListItem>Average performance: 15</ListItem>
                <ListItem>P.A.P.: 18</ListItem>
                <ListItem>T.W.C.: 15</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>Professional photography course [entry level] at ShawAcademy</ListItem>
          </UnorderedList>
        </Box>

        {/* Other Qualifications Section */}
        <Box mb={8}>
          <Heading as="h3" size="lg" mb={4} color="blue.800">Other Qualifications</Heading>
          <UnorderedList spacing={2} color="blue.900" bg="indigo.50" rounded="lg" p={6}>
            <ListItem>8 years of experience with Windows operating systems</ListItem>
            <ListItem>6 years of experience in Linux-based operating systems</ListItem>
            <ListItem>2 years of experience in MacOS</ListItem>
          </UnorderedList>
        </Box>

        {/* References Section */}
        <Box>
          <Heading as="h3" size="lg" mb={4} color="blue.800">References</Heading>
          <UnorderedList spacing={2} color="blue.900" bg="blue.50" rounded="lg" p={6}>
            <ListItem>APPC Porto – Pedro Silva – Internship monitor (2016)</ListItem>
            <ListItem>Gondomar Secondary School – Carla Cruz – Accompanying teacher during P.A.P.</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}