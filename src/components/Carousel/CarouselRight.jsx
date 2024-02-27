import React from "react";
import styles from "./Carousel.module.css";
import { useSwiper } from 'swiper/react';
const CarouselRight = () =>{
    const swiper = useSwiper();

    return (
      <button className={styles.rightButton} onClick={() => swiper.slideNext()}></button>
    );
}
export default CarouselRight;