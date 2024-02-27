import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CardSection from "../Card/CardCategory";
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "../Card/Card";
import CarouselLeft from './CarouselLeft';
import CarouselRight from './CarouselRight';
const Carousel =({ data,createComponent,type })  =>{
    return (
        
        <Swiper
        modules={[Navigation]}
        spaceBetween={100}
        slidesPerView={'auto'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
       

         >
            <CarouselLeft></CarouselLeft>
            {
            data.map(function(value,index) { 
                //console.log("check ::",id,image,title,follows,likes );
              return <SwiperSlide key={index}>
                {createComponent(value,index,type)}
                
              
            </SwiperSlide>
            }
            )
        }
        <CarouselRight></CarouselRight>
        


        </Swiper>
    

    );
};



export default Carousel;