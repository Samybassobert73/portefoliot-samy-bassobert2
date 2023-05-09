'use client'
// Chakra Imports
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Link,
    useColorModeValue,
    Button
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";

function NavbarHome() {

     // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  
    let mainText = useColorModeValue("gray.700", "white");
  let secondaryText = useColorModeValue("gray.700", "white");
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 1)",
    "rgba(11,20,55,1)"
  );
  let buttonbg = 'blue.500'
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let gap = "0px";
  return (
    <Box
        zIndex={100}
      position={'fixed'}
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
      bg={navbarBg}
      borderColor={navbarBorder}
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: "center" }}
      display={"flex"}
        p={4}
      justifyContent={{ xl: "center" }}
      w='100%'
 >
      <Flex
        w='100%'
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        align={"center"}
        justify={ "space-between" }
        >
        <Box>
            <Link
            color={'black'}
            href='/'
            bg=''
            px={4}
            borderRadius='inherit'
            fontWeight='bold'
            fontSize='20px'
            _hover={{ color: { mainText } }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            Portfoliot
            </Link>
        </Box>
        <Box >
          {/* Here we create navbar brand, based on route name */}
          <Link
            color={mainText}
            href='/'
            px={2}
            bg='inherit'
            borderRadius='inherit'
            
            fontSize='md'
            _hover={{ color:  "black"  }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            Home
          </Link>
          <Link
            color={mainText}
            href='/projects'
            bg='inherit'
            px={2}
            borderRadius='inherit'
           
            fontSize='md'
            _hover={{ color: "black" }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            Projects
          </Link>
          <Link
            color={mainText}
            href='/about'
            bg='inherit'
            px={2}
            borderRadius='inherit'
           
            fontSize='md'
            _hover={{ color: "black" }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            About
          </Link>
          <Link
            color={mainText}
            href='/contact'
            bg='inherit'
            px={2}
            borderRadius='inherit'  
            fontSize='md'
            _hover={{ color: "black" }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            Contact
          </Link>
        </Box>
        <Box>
            <Link
            color={mainText}
            href='/login'
            p={2}
            borderRadius='10px'
            fontSize='md'
            _hover={{ color: 'white' , bg: 'black' }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}>
            Connexion
            </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default NavbarHome