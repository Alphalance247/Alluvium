import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./sampleRArrow";

function LagosExpoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
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
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo1.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo2.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo3.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo4.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo5.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo5.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/expo5.png" />
        </div>
      </Slider>
    </div>
  );
}

export default LagosExpoCarousel;
