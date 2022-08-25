import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Stay.css";
import {data} from '../../Data/Stay'

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function Stay() {
  return (
    
    <Box
    className="main"
      // p="100px"
      alignSelf="center"
      // textAlign="center"
      // bgColor="#f2f6ff"
      h="300px"
      borderRadius="10px"
    >
        <Flex>
      <Box>
      
        <Text fontSize="25px" fontWeight={"bold"} >
        {/* Essential Abu Dhabi
        <br>
        </br> */}
          Stay
        </Text>
        <p>A mix of the charming, modern, and tried and true.</p>
        <Link href="https://www.tripadvisor.in/Attractions-g294013-Activities-Abu_Dhabi_Emirate_of_Abu_Dhabi.html">See all</Link>
        
      </Box>
      

      <div style={{ width: "75%",margin:"auto" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: true,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
          loop={true}
        >
          {data.map((e) => (
            <SwiperSlide key={e.id}>
              <div>
              <img src={e.image} alt="TopdesAvatar" />
            <Text fontWeight={"semibold"} textAlign={"center"} fontSize={"large"}>{e.title}</Text>  
              </div>
              

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </Flex>
      
    </Box>
  );
          }
