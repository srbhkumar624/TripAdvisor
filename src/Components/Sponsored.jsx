import { Box, Button, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'
import {BsFillSuitHeartFill} from "react-icons/bs"

function Sponsored() {
  return (
    <div>
        <Box height={"600px"} bgColor="#FAF1ED">
            <Button marginLeft={"45%"} bgColor={"black"} color="white">Sponsored by visit Abu Dhabi</Button>
            <Flex justifyContent={"center"} >
            <Img marginTop="100px" width={"350px"} height={"350px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/25/19/e6/54/caption.jpg?w=600&h=600&s=1'/>
            <Box marginTop="100px" width={"350px"} height={"350px"} bgColor="white">
          <Text marginTop={"10px"} textAlign="center">By<Link href='https://www.tripadvisor.in/Profile/VisitAbuDhabi'>Visit Abu Dhabi 
        </Link>
        </Text>
      <Text textAlign="center" >Your <Link  href="https://www.tripadvisor.in/Trips/115559525"> Guide to an Action-<br/>Packed Summer in Abu Dhabi</Link></Text>  
      <Text width={"200px" }margin="auto" textAlign="center" fontSize={"18px"}  marginTop="15px">If you're looking for thrills for the whole family this summer, look no further than Abu Dhabi. From exciting theme park...
      </Text> 
      <br/>
      <Box  marginLeft="175px">
      <BsFillSuitHeartFill/>
      </Box>
      <Text textAlign={"center"}>10 Items</Text>
      
            </Box>
            </Flex>
            <Img borderRadius={"50px"} marginLeft={"720px"} marginTop={"-220px"} width={"80px"} height={"80px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/dd/f6/9a/visitabudhabi.jpg?w=100&h=-1&s=1'/>
        </Box>
    </div>
  )
}

export default Sponsored