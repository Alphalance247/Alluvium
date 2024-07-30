import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowRight } from "react-icons/go";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      {/* <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          left: "4rem",
        }}
        onClick={onClick}
      /> */}

      <GoArrowRight
        // className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          left: "4rem",
          top: "-1rem",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        position: "absolute",
        zIndex: "4",
        left: "25px",
      }}
      onClick={onClick}
    />
  );
}

function CloudConnectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#11202D",
        padding: "2rem 1rem",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/g1.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/cloud5.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/cloud2.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/cloud3.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/cloud4.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            layout="responsive"
            src="/assets/event/cloud5.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CloudConnectCarousel;
