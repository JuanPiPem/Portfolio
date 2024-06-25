// src/components/ImageCarousel/ImageCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({ images }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
