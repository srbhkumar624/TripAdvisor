import { Box, Flex, Heading, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Trending = () => {
  return (
    <div>
        <Box width={"80%"} height="300px" margin="auto">
            <Flex justifyContent={"space-between"}>
            <Box>
                <Heading>
                    Trending In Forum
                </Heading>
            </Box>
            <Link as={"u"}>See all</Link>
            </Flex>
            <Flex justifyContent={"space-evenly"}>
                <Box marginTop={"20px"} borderRadius={"15px"} height="200px" width={"380px"} bgColor="#FAF1ED">
                 <Text textAlign={"center"} marginTop="20px" fontWeight={"bold"}>Can<Link> I get my UID from ICA before arrival? ICA & Alhosn help</Link></Text>   
                 <Box marginTop={"50px"}>
                    <Flex alignItems={"center"} justifyContent="space-evenly">
                    <Img height={"50px"} borderRadius={"50px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-f/01/2e/70/60/avatar038.jpg?w=100&h=-1&s=1'/>
                    <Text fontWeight={"bold"}>BY Manobles .</Text>
                    <Text fontWeight={"bold"}>15 Replies</Text>
                    </Flex>
                 </Box>

                </Box>
                <Box marginTop={"20px"} borderRadius={"15px"} height="200px" width={"380px"} bgColor="#FAF1ED">
                <Text textAlign={"center"} marginTop="20px" fontWeight={"bold"}>Free<Link>Parking Near Abu Dhabi Airport</Link></Text>  
                <Box marginTop={"50px"}>
                    <Flex alignItems={"center"} justifyContent="space-evenly">
                    <Img height={"50px"} borderRadius={"50px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e5/2b/default-avatar-2020-52.jpg?w=100&h=-1&s=1'/>
                    <Text fontWeight={"bold"}>BY Arshalan M .</Text>
                    <Text fontWeight={"bold"}>9 Replies</Text>
                    </Flex>
                 </Box>
                </Box>
                <Box marginTop={"20px"} borderRadius={"15px"} height="200px" width={"380px"} bgColor="#FAF1ED">
                <Text textAlign={"center"} marginTop="20px" fontWeight={"bold"}>A<Link>bu Dhabi Green Pass</Link></Text>  
                <Box marginTop={"50px"}>
                    <Flex alignItems={"center"} justifyContent="space-evenly">
                    <Img height={"50px"} borderRadius={"50px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/91/default-avatar-2020-62.jpg?w=100&h=-1&s=1'/>
                    <Text fontWeight={"bold"}>BY David M .</Text>
                    <Text fontWeight={"bold"}>101 Replies</Text>
                    </Flex>
                 </Box>
                </Box>
            </Flex>

        </Box>
    </div>
  )
}

export default Trending