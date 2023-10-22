import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/eventpage.module.scss";
import CountdownTimer from "./CountdownTimer";

// import cloud_image from 'public/assets/cloud_image.jpg';
// import event_header_image from 'public/assets/event_header_image';
{
  /* <Image src={logo} alt="Techpoint Expo Event logo" loading="eager" priority /> */
}
const EventHero = () => {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <section className="container">
          <div className="row">
            {/* First Card */}
            <div className="col-md-6 mb-4">
              <div className={`card ${styles.heroCard}`}>
                <img
                  src="/assets/cloudpic.png"
                  className="card-img-top"
                  alt="Image 1"
                />
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    ONLINE & IN-PERSON
                  </h5>
                  <p className="event-desc">
                    Harnessing global synergy to forge collaboration for digital
                    <br />
                    opportunities
                  </p>
                  <a href="/event/register" className="btn btn-warning">
                    REGISTER
                  </a>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="col-md-6 mb-4">
              <div className={`card ${styles.heroCard}`}>
                <img
                  src="/assets/eventheaderimage.png"
                  className="card-img-top"
                  alt="Image 2"
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={`container-fluid ${styles.countdownCard}`}>
        <div className="container">
          <div className="row">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <CountdownTimer targetDate="2023-11-30T23:59:59" /> */}
          </div>
        </div>
        <hr className={styles.hr} />
        <div className="row mt-5 text-center">
          <div className="col-md-4">
            <p>
              {" "}
              <img
                src="/assets/location.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
              <strong>Location:</strong> <br /> Ikogosi resort center, Ekiti,
              Nigeria
            </p>
          </div>
          <div className="col-md-4">
            <p>
              {" "}
              <img
                src="/assets/date.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
              <strong>Date & Time:</strong> <br /> 23rd - 24th Thursday, 2023,
              9AM (WAT)
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <p>
              <img
                src="/assets/email.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
              <strong>Email:</strong> <br /> contact@alluvium.net
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHero;
