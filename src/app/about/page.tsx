'use client' 

import { AboutContainer } from '@/components/projects/AboutContainer'
import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <main>
      <HStack mt={40}>
        <Container maxW='1200px'>
          <Flex flexDirection="column" gap={60}>
            <Box >
              <AboutContainer/>
            </Box>
          </Flex>
        </Container>
      </HStack> 
    </main>
  )
}

export default page