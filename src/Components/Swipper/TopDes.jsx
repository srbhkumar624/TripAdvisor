import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./TopDes.css";
import slideData from '../../Data/TopLovers'

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Text } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function TopDes() {
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
      <Box>
        <Text fontSize="25px" fontWeight={"bold"} >
        Top destinations for beach lovers
          
        </Text>
        <p>Recommended based on your activity</p>
      </Box>

      <div style={{ width: "100%",margin:"auto" }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
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
          {slideData.map((e) => (
            <SwiperSlide key={e.id}>
              <div>
              <img src={e.image} alt="TopdesAvatar" />
            <Text fontWeight={"extrabold"} textAlign={"center"} fontSize={"large"}>{e.text}</Text>  
              </div>
              

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </Box>
  );
          }
