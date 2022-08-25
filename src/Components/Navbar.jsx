import { Box, Button,  Img} from '@chakra-ui/react'
import { Flex, Spacer} from '@chakra-ui/react'
import{VscBell} from "react-icons/vsc"
import {BsHeart}from "react-icons/bs"
import {ImPencil} from "react-icons/im"
import{ Link} from "react-router-dom"
import React from 'react'


const Navbar = () => { 
    
  return (
    <div>
        <div>
        <Flex gap='2'>
            <Box boxSize="200px">
            <Img  src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg'></Img>
            </Box>
            <Spacer/>
           
            <Button 
             bgColor="white"
             borderRadius="25px"
             fontSize="17px"
             fontWeight="semibold"><ImPencil/>Review</Button>
            <Button
             bgColor="white"
             borderRadius="25px"
             fontSize="17px"
             fontWeight="semibold"><BsHeart/>Trips</Button>
            <Button
              bgColor="white"
              borderRadius="25px"
             fontSize="17px"
             fontWeight="semibold"><VscBell/> Alerts </Button>
            <Link to={"/login"}>
            <Button 
            bgColor="black" color="white"
            borderRadius="25px"
             fontSize="17px"
             fontWeight="semibold" >Sign in</Button>
            </Link>
        </Flex>
        </div>
    </div>
  )
}

export default Navbar