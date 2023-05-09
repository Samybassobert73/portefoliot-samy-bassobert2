'use client'
import React from 'react'
import { Box, Container, Flex, Grid, HStack, chakra } from '@chakra-ui/react'
import ProjectCard from '@/components/projects/ProjectCard'
const page = () => {
    const projects = [
        {title: "CountOfMoney", content:"Traduit de l'anglais-Les termes foobar, foo, bar, baz et autres sont utilisés comme variables métasyntaxiques et noms d'espace réservé dans la programmation informatique ou la documentation"},
        {title: "BigTrip", content:"salut"},
        {title: "Messenger clone", content:"salut"},
      ]
  return (
    
    <main>
      <HStack my={40}>
        <Container maxW='1200px'>
          <Flex flexDirection="column" gap={60}>
            <Box>
                <chakra.h3 fontSize="2xl" fontWeight="bold" mb={20} textAlign="center">
                    Projects
                </chakra.h3>
                <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={6} >
                    {projects.map(({ title, content }) => (
                    <ProjectCard key={title} title={title} content={content} />
                    ))}
                </Grid>   
            </Box>
          </Flex>
        </Container>
      </HStack> 
    </main>
  )
}

export default page