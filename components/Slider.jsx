// components/Slider.js
import React, { useState } from 'react';
import styles from '../styles/slider.module.css';

const Slider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    console.log(children);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slider}>
      <button onClick={prevSlide}>Previous</button>
      <div className={styles.cardContainer}>
        {children.map((Card, index) => (
          <div
            key={index}
            className={`${styles.cardSlide} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            {Card}
            {/* <Card title={card.title} content={card.content} /> */}
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;