"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

 import {PopularProducts} from "@/app/data/data" ; 
 import Card from './Card';


const SwiperCard = ( ) => {
  return (
   <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        { PopularProducts.map((p)=>{
           return (

        <SwiperSlide key={p.id}>
        <Card key={p.id} title={p.title}  price={p.price}  />
        </SwiperSlide>
           )
        })

        }
        
      </Swiper>
    </>
  );
}



export default SwiperCard

      