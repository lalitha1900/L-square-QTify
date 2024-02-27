import React from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from 'swiper/react';
const CarouselLeft = () =>{
    const swiper = useSwiper();

    return (
      <button className={styles.leftButton} onClick={() => swiper.slidePrev()}></button>
    );

}
export default CarouselLeft;