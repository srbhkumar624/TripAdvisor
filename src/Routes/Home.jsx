import React from 'react'
import { Box,Button,Flex,Spacer,Img,Input,Text} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'

const Home = () => {
  return (
    <div>
        <div>
        <Box
  bgImage="url('https://wallpaperaccess.com/full/2248320.jpg')"
  height="150px"
  bgSize="100%"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
>
<Text fontSize='30px' color='white'>
  Explore action-packed<br/>
  Abu Dhabi
  <Text fontSize="20px">From skydiving to car racing,so much awaits</Text>
</Text> 
</Box>
</div>

<Box width="80%" margin="auto"> 
<br/>
<Navbar/>
<Navbar2/> 
<br/>
<Box 
      bgImage="url('https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
    //   size="100%"
      height="400px"
    //   display="block"
    
    > 
    <Input width="70%" marginLeft="150px"  marginTop="200px"  variant='outline' placeholder='Outline' />

    </Box>
    
    
    <div>
    <Box height="180px"  bgColor="#FAF1ED">
    <Flex>
        <Text fontSize="30px" fontWeight="bold"marginTop="50px" marginLeft="10px" >Get Out There
        <Text fontSize="15px" fontWeight="normal">Best of The Best tours,attractions & activities you won't want to miss</Text>
        <Button bgColor="black" color="white" borderRadius="25px">See The List</Button>
        </Text>
        <Spacer/>
        <Img height="180px" width="400px" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1">
        
        </Img>
        {/* <Img src='https://static.tacdn.com/img2/fallback_ads/tc-badge.png'>
        </Img> */}
        
    </Flex>
    </Box>
    </div> 
</Box>

    </div>
  )
}

export default Home