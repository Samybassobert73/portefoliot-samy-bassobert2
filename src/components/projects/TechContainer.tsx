'use client'
import { Grid, chakra } from '@chakra-ui/react'
import React from 'react'
import TechCard from '@/components/projects/TechCard'
import {TbBrandNextjs} from 'react-icons/tb'
import {IoLogoVue} from 'react-icons/io5'
import {SiExpress, SiSymfony, SiMongodb, SiPostgresql, SiDocker} from 'react-icons/si'

function TechContainer() {
    const techs = [
        {id:1, name: 'Nextjs', icon: <TbBrandNextjs /> },
        {id:2, name: 'Vuejs', icon: <IoLogoVue /> },
        {id:3, name: 'Express', icon: <SiExpress /> },
        {id:4, name: 'Symfony', icon: <SiSymfony /> },
        {id:5, name: 'Mongodb', icon: <SiMongodb /> },
        {id:6, name: 'Mysql', icon: <SiPostgresql /> },
        {id:7, name: 'Docker', icon: <SiDocker /> },
      ]
  return (
    <>
    <chakra.h3 fontSize="2xl" fontWeight="bold" mb={20} textAlign="center">
       Tech stack
    </chakra.h3>
    <Grid templateColumns={{base:'repeat(1, 1fr)', md:'repeat(5, 1fr)'}} gap={6} >
        {techs.map(({ name, icon, id }) => (
          <TechCard key={id} id={id} icon={icon}>{name}</TechCard>
        ))}
      </Grid>
    </>
  )
}

export default TechContainer