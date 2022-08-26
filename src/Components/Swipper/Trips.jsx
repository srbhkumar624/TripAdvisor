// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "./Trips.css";
import {trip} from '../../Data/DayTrip'

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box,  Img, Text } from "@chakra-ui/react";
// import PrivateRoute from "../PrivateRoute";

SwiperCore.use([Autoplay, Pagination, Navigation]);



export default function Trips() {
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
        Day Trips & Excursions
          
        </Text>
        
        {/* <Text fontSize="25px" fontWeight={"bold"} >
          Safaris
          
        </Text> */}
      </Box>

      <div style={{ width: "100%",margin:"auto" }}>
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
          {trip.map((e) => (
            <SwiperSlide key={e.id}>
              <div>
            <Img height="250px" width={"250px"} src={e.img} alt="patna avatar" />
              <Text fontWeight={"bold"}>{e.des}</Text>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </Box>
  );
          }
