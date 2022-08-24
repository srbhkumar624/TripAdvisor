import React from "react";
import { Box, Button, Flex, Spacer, Img, Input, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
// import {BsSearch} from "react-icons/bs"
import Patna from "../Components/Swipper/Patna";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <Box
          bgImage="url('https://wallpaperaccess.com/full/2248320.jpg')"
          height="200px"
          bgSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Text fontWeight="bold" fontSize="30px" color="white">
            Explore action-packed
            <br />
            Abu Dhabi
            <Text fontSize="20px">
              From skydiving to car racing,so much awaits
            </Text>
          </Text>
        <Link to={"/findyourwayabudhabi"} ><Button marginLeft={"1300px"}>Explore</Button></Link> 
        </Box>
      </div>

      <Box width="80%" margin="auto">
        <br />
        <Navbar />
        <Navbar2 />
        <br />
        <Box
          bgImage="url('https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans.webp')"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="100%"
          //   size="100%"
          height="400px"
          //   display="block"
        >
          <Input 
          box-shadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          borderRadius="25px"
            width="70%"
            marginLeft="150px"
            bg="white "
            marginTop="200px"
            variant="outline"
            placeholder="Where to"  >
            </Input>
          
        </Box>
        <Patna />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Box height="180px" bgColor="#FAF1ED">
            <Flex>
              <Text
                fontSize="30px"
                fontWeight="bold"
                marginTop="50px"
                marginLeft="10px"
              >
                Get Out There
                <Text fontSize="15px" fontWeight="normal">
                  Best of The Best tours,attractions & activities you won't want
                  to miss
                </Text>
                <Button bgColor="black" color="white" borderRadius="25px">
                  See The List
                </Button>
              </Text>
              <Spacer />
              <Box
                bgImage="url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1')"
                height="180px"
                width="400px"
                bgPos="center"
              >
                <Img
                  marginLeft="250px"
                  marginTop="30px"
                  height="150px"
                  src="https://static.tacdn.com/img2/fallback_ads/tc-badge.png"
                />
              </Box>
            </Flex>
          </Box>
        </div>
      </Box>
      <Box height="450px" bgColor="#004F32">
        <Flex>
          <Img
            marginLeft="250px"
            marginTop="100px"
            height="100px"
            src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg"
          />
          <Text
            textAlign="center"
            marginLeft="-180px"
            marginTop="220px"
            fontSize="30px"
            fontWeight="bold"
            color="white"
          >
            Travellers'
            <br /> Choice Best of
            <br /> the Best
          </Text>
          <Button
            bgColor="black"
            color="white"
            borderRadius="25px"
            marginLeft="-180px"
            marginTop="360px"
          >
            See the winners
          </Button>
          <Spacer />
          <Img
            height="450px"
            src="https://www.linkpicture.com/q/Screenshot-691.png"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default Home;
