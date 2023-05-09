'use client'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Page = ({params}:any) => {
  // const res = await fetch(`https://my-api.com/articles/${params.id}`);
  // const article = await res.json();
  console.log(params)
  const article = {title: 'project'}
  return (
    <Box
    mt={40}
    >
      {article.title}
      {params.id}
    </Box>
  )
}

export default Page