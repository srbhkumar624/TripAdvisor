import { Box, Button, Flex, } from '@chakra-ui/react'
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
      <Box marginTop="-100px">
        <Flex gap="35px">
            
           <Button width='200px' borderRadius="20px" border=" 2px solid black"  bgColor="whiteAlpha.500" >Hotels<MdBed/></Button>
         
            <Button width='200px' borderRadius="20px" border=" 2px solid black" bgColor="whiteAlpha.500">HolidayHomes <GrHomeRounded/></Button>
           
            <Button width='200px' borderRadius="20px" border=" 2px solid black" bgColor="whiteAlpha.500">Things to Do <GiRoad/></Button>
        
            <Button width='200px' borderRadius="20px" border=" 2px solid black" bgColor="whiteAlpha.500">Restaurants <IoRestaurantOutline/></Button>
    
            <Button width='200px' borderRadius="20px" border=" 2px solid black" bgColor="whiteAlpha.500">Travel Forums <MdOutlineForum/></Button>
          
           <Button width='200px' borderRadius="20px" border=" 2px solid black"  bgColor="whiteAlpha.500"  >More< BsThreeDots/></Button>
        </Flex>
        </Box>
    </div>
  )
}

export default Navbar2