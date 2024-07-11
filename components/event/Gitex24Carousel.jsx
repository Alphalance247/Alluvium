import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/eventblog.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.imageRow}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? styles.active : ''}
          />
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;