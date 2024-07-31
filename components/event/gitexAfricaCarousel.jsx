"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./sampleRArrow";
import { giteximages } from "data";

function GitexAfricaCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
        {giteximages.map((item) => (
          <div className={styles.carouimage} key={item.id}>
            <Image width={347} height={300} src={item.imgChoose} />
          </div>
        ))}
        {/* <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/g1.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/g2.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/g3.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/g4.png" />
        </div>
        <div className={styles.carouimage}>
          <Image width={347} height={300} src="/assets/event/g5.png" />
        </div> */}
      </Slider>
    </div>
  );
}

export default GitexAfricaCarousel;
