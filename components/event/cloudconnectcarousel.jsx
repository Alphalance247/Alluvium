"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./sampleRArrow";
import { cloudconnect23images } from "data";
import SamplePrevArrow from "./sampleLeftArrow";

function CloudConnectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        {cloudconnect23images.map((item) => (
          <div className={styles.carouimage} key={item.id}>
            <Image
              width={347}
              height={300}
              src={item.imgChoose}
              alt={`cloudconnect${item.id}`}
              layout="responsive"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CloudConnectCarousel;
