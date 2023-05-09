'use client'
import { Card, CardBody, Grid, chakra, Text, CardFooter, Button, Image} from '@chakra-ui/react'
import React from 'react'
import ProjectCard from './ProjectCard'
 
const projectsContainer = () => {

  const projects = [
    {id:1, title: "CountOfMoney", content:"Traduit de l'anglais-Les termes foobar, foo, bar, baz et autres sont utilisés comme variables métasyntaxiques et noms d'espace réservé dans la programmation informatique ou la documentation"},
    {id:2, title: "BigTrip", content:"salut"},
    {id:3, title: "Messenger clone", content:"salut"},
  ]
  return (
    <>
      <chakra.h3 fontSize="2xl" fontWeight="bold" mb={20} textAlign="center">
        Projects
      </chakra.h3>
      <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(3, 1fr)'}} gap={6} >
        {projects.map(({id, title, content }) => (
          <ProjectCard key={id} id={id} title={title} content={content} />
        ))}
      </Grid>
    </>

  )
}

export default projectsContainer