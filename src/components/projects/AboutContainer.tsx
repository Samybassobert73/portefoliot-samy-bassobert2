'use Client'

import { Box, Center, Flex, HStack, chakra, Text, Image} from '@chakra-ui/react'
import React from 'react'

export const AboutContainer = () => {
  return (
    <>
        <chakra.h3 fontSize="2xl" fontWeight="bold" mb={20} textAlign="center">
            About Me
        </chakra.h3>
        <Flex color='white' alignItems={'center'} flexDirection={'row'} gap={10}>
            <Box >
                <Text color={'black'}>Traduit de l&apos;anglais-Les termes foobar, foo, bar, baz et autres sont utilisés comme variables métasyntaxiques et noms d&apos;espace réservé dans la programmation informatique ou la documentation</Text>
            </Box>
            <Box 
                maxWidth={'200px'}  
            >
                <Image
                    w={'100%'}
                    h={'100%'}
                    objectFit={'contain'} 
                    borderRadius='full'
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                />
            </Box>
        </Flex>
        
    </>
  )
}
