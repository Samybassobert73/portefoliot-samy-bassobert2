'use client'

import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

import { motion } from "framer-motion"
function Techcard({icon, id, children}:any) {
  return (
      <motion.div
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: id * 0.1 }}
       
      >
      <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
      >

        <Box
          w="100%"
          p={4}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
          border="1px solid gray-500"
          borderRadius="lg"
          > 
            <Flex alignItems='center' gap={4}>
              <Box
              bg={'gray.200'}
              border="1px solid gray-500"
              borderRadius="lg"
              p={4}
              >
              {icon}
              </Box>
              <Text> {children}</Text>
            </Flex>
        </Box>
      </motion.div>
      </motion.div>
  )
}

export default Techcard