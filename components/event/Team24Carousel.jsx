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
            src="/assets/event/t1img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t2img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t3img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t4img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t5img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t2img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t2img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t5img.png"
          />
        </div>
        <div className={styles.carouimage}>
          <Image
            width={347}
            height={300}
            src="/assets/event/t1img.png"
          />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;

