import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "../../styles/eventblog.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div className="slider-container" style={{backgroundColor: "#11202D"}}>
      <Slider {...settings}>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/g1.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/cloud5.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/cloud2.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/cloud3.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/cloud4.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/cloud5.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;

