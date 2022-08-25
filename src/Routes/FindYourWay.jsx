import { Box, Button,  Grid, GridItem, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Discover from '../Components/Discover'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Sponsored from '../Components/Sponsored'
import Do from '../Components/Swipper/Do'
import Eat from '../Components/Swipper/Eat'
import Stay from '../Components/Swipper/Stay'

const FindYourWay = () => {
  return (
    <div>
       <div>
        <Box
          bgImage="url('https://resources.teletextholidays.co.uk/drupal/images/homepage/1.jpg')"
          height="200px"
          bgSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Text fontWeight="bold" fontSize="30px" color="white">
            Summers like you mean it in
            <br />
            Abu Dhabi
            <Text fontSize="20px">
              Explore the best views, meals, & stay imaginable
            </Text>
          </Text>
        <Link to={"/findyourwayabudhabi"} ><Button marginLeft={"1300px"}>Explore</Button></Link> 
        </Box>
      </div>
      <Box width="80%" margin="auto">
      <Heading size="lg" fontSize="45px" color={"red"}>Explore Abu Dhabi</Heading>
        <Navbar/>
        <Navbar2/>
        <Box marginTop={"50px"}>
        <Grid
             h='500px'
             templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={1}>
              <GridItem rowSpan={1} colSpan={2} >
                <Img height={"500px"} width="600px" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/68/aa/ac/caption.jpg?w=700&h=-1&s=1&cx=1114&cy=517&chk=v1_8c7a50accd1cbc352902" />
              </GridItem>
              <GridItem GridItem colSpan={3}>
                <Img height="248px" width={"730px"}  src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f5/8c/df/caption.jpg?w=500&h=300&s=1&cx=600&cy=449&chk=v1_e8fbe6e159d5b1169a70'></Img>
                <Img marginTop={"4px"} height={"248px"} width={"730px"} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/5b/c4/11/caption.jpg?w=500&h=300&s=1&cx=957&cy=864&chk=v1_285cb4f0e23455a01b0d'></Img>
              </GridItem>
            </Grid>
          
        </Box>
          <Heading marginTop={"20px"} fontWeight={"bold"}>About Abu Dhabi</Heading>
          <Text fontSize={"20px"} fontWeight={"normal"} width={"50%"} lineHeight="1.2">
          Atmospheric backstreets paint a very different picture to first impressions of Abu Dhabi. The often slick and modern capital of the U.A.E. presents a fascinating mixture of tradition and progression. Tracing its rich history back to around 3000 B.C., Abu Dhabi maintains a more distinctly Arabian ambiance than glitzy Dubai. Taxis are a safe, reliable way to get around sites such as The Corniche Park, the White Fort, the Heritage Village, which offers glimpses into Bedouin life, and the Women's Craft Centre.
          </Text>
      </Box>
      <br/>
      <br/>
      <br/>
      <Sponsored/>
      <Box width="80%" margin="auto">
      <br/>
      <br/>
      <br/>
        <Do/>
        {/* <Box marginTop="130px"> */}
        <Stay/>
        <Eat/>
        {/* </Box> */}
      </Box>
      <Discover/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default FindYourWay