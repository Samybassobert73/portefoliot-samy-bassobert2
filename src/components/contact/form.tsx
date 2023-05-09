import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  
  const confetti = {
    light: {
      primary: '4299E1', // blue.400
      secondary: 'BEE3F8', // blue.100
    },
  
    dark: {
      primary: '1A365D', // blue.900
      secondary: '2A4365', // blue.800
    },
  };
  
  
  export default function ContactFormWithSocialButtons() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
  
    return (
      <Flex
        
        align="center"
        justify="center"
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '5xl',
                }}>
                Get in Touch
              </Heading>
  
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
  
                <Box
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                  shadow="base">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input type="text" name="name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
  
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
  
                    <Button  
                      color="black"
                      _hover={{
                        bg: 'black',
                        color: 'white',
                      }}
                      >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    );
  }