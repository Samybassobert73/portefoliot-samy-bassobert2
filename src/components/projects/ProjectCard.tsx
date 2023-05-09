'use client'

import React from 'react'
import { Box, Card, Flex, Text, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from "framer-motion"
function ProjectCard({id, title, content}:any) {
  return (
    <Card
    boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
    bg={'none'}
    > 
      <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
      />
      <CardBody>
        <Text fontSize={'2xl'}>{title}</Text>
        <Text noOfLines={3}>{content}</Text>
      </CardBody>
      <CardFooter>
        <Link
        href={`/projects/${id}`}
        p={2}
        ml={'auto'}
        borderRadius={'full'}
        _hover={{bg:'gray.200'}}
        ><BsArrowRight/></Link>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard