'use client'
import styles from './page.module.css'
import React, {useState} from 'react'
import TechContainer from '@/components/projects/TechContainer'
import Milestone from '@/components/projects/Timeline'
import { Box, Container, Flex } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import ProjectsContainer from '@/components/projects/ProjectsContainer'
import { AboutContainer } from '@/components/projects/AboutContainer'
import Footer from '@/components/shared/footer/Footer'

export default function Home() {
  
  return (
    <>
      <main>
        <HStack mt={40}>
          <Container maxW='1200px'>
            <Flex flexDirection="column" gap={60}>
              <Box>
                <ProjectsContainer/>
              </Box>
              <Box>
                <TechContainer/>
              </Box>
              <Box>
                <Milestone/>
              </Box>
              <Box >
                <AboutContainer/>
              </Box>
            </Flex>
          </Container>
        </HStack> 
      </main>
      <Footer/>
    </>
  )
}
