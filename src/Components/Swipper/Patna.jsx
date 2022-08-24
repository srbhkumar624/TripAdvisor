import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Patna.css";
import slideData from '../../Data/Patna'

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box, Text } from "@chakra-ui/react";

SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function Patna() {
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
          Ways To Tour Patna
          
        </Text>
        <p>Book these experiences for a close-up look at Patna.</p>
      </Box>

      <div style={{ width: "90%",margin:"auto" }}>
        <Swiper
          slidesPerView={3}
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
              <img src={e.image} alt="patna avatar" />
              </div>
              

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </Box>
  );
          }
