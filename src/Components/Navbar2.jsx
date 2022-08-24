import { Box, Button, Flex} from '@chakra-ui/react'
import {MdBed} from "react-icons/md"
import {GrHomeRounded} from "react-icons/gr"
import {GiRoad} from "react-icons/gi"
import {IoRestaurantOutline} from "react-icons/io5"
import {MdOutlineForum} from "react-icons/md"
import {BsThreeDots} from "react-icons/bs"
import React from 'react'

const Navbar2 = () => {
  return (
    <div>
        <Flex gap="35px">
            <Box  borderRadius="20px" w='190px' h='12' border=" 1px solid black"   >
            
           <Button  bgColor="whiteAlpha.500" >Hotels <MdBed/></Button>
            </Box>
           <Box borderRadius="20px" w='190px' h='12' border=" 1px solid black"  >
            <Button  bgColor="whiteAlpha.500">HolidayHomes <GrHomeRounded/></Button>
            </Box>
            <Box borderRadius="20px" w='190px' h='12' border=" 1px solid black"  >
            <Button  bgColor="whiteAlpha.500">Things to Do <GiRoad/></Button>
            </Box>
            <Box borderRadius="20px" w='190px' h='12' border=" 1px solid black"  >
            <Button  bgColor="whiteAlpha.500">Restaurants <IoRestaurantOutline/></Button>
            </Box>
            <Box borderRadius="20px" w='190px' h='12' border=" 1px solid black"  >
            <Button  bgColor="whiteAlpha.500">Travel Forums <MdOutlineForum/></Button>
            </Box>
            <Box borderRadius="20px" w='190px' h='12' border=" 1px solid black" >
            <Button  bgColor="whiteAlpha.500" >More<BsThreeDots/></Button>
            </Box>
            
        </Flex>
     
    </div>
  )
}

export default Navbar2