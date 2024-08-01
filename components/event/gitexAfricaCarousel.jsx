"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./sampleRArrow";
import { giteximages } from "data";
import SamplePrevArrow from "./sampleLeftArrow";

function GitexAfricaCarousel() {
  // const [showPrevArrow, setShowPrevArrow] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#11202D",
        padding: "2rem 0",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {giteximages.map((item) => (
          <div className={styles.carouimage} key={item.id}>
            <Image
              width={347}
              height={300}
              layout="responsive"
              src={item.imgChoose}
              alt="gitex"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GitexAfricaCarousel;
