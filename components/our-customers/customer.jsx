"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import styles from "../../styles/customer.module.scss";

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={` container-fluid ${styles.customerReview}`}>
      <div className="container m-auto">
        <p className={`${styles.review}`}>What Our Customers are Saying </p>
        <Slider {...settings}>
          <div className=" text-center">
            <p className={`${styles.message}`}>
              “Working with Alluvium was transformative for our organization.
              Their Atlassian expertise streamlined our project management, and
              their AWS knowledge optimized our cloud infrastructure. The
              seamless data migration exceeded our expectations. Highly
              recommend!"
            </p>

            <div className={styles.customer}>
              <p className={styles.customerName}>Antonette Patrick</p>
              <p className={styles.customerRole}>
                MARKETING DIRECTOR, ATLASSIAN
              </p>
            </div>
          </div>
          <div className=" text-center">
            <p className={`${styles.message}`}>
              “Working with Alluvium was transformative for our organization.
              Their Atlassian expertise streamlined our project management, and
              their AWS knowledge optimized our cloud infrastructure. The
              seamless data migration exceeded our expectations. Highly
              recommend!"
            </p>

            <div className={styles.customer}>
              <p className={styles.customerName}>Antonette Patrick</p>
              <p className={styles.customerRole}>
                MARKETING DIRECTOR, ATLASSIAN
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReview;
