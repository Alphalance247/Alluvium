import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/eventpage.module.scss";
import CountdownTimer from './CountdownTimer';

// import cloud_image from 'public/assets/cloud_image.jpg';
// import event_header_image from 'public/assets/event_header_image';
{/* <Image src={logo} alt="Techpoint Expo Event logo" loading="eager" priority /> */}
const EventHero = () => {
  return (
    <>
    <div className={`container-fluid ${styles.cover}`}>
    <section className="container">
      <div className="row">
        {/* First Card */}
        <div className="col-md-6 mb-4">
          <div className={`card ${styles.cardWithBackground}`}>
            <img
              src="/assets/cloudpic.png"
              className="card-img-top"
              alt="Image 1"
            />
            <div className="card-body">
              <h5 className="card-title text-warning">ONLINE & IN-PERSON</h5>
              <p className="event-desc">Harnessing global synergy to forge collaboration for digital<br></br>
              opportunities
              </p>
              <a href="#" className="btn btn-warning">REGISTER</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
        <div className={`card ${styles.cardWithBackground}`}>
            <img
              src="/assets/eventheaderimage.png"
              className="card-img-top"
              alt="Image 2"
            />
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>

    <div className="bg-warning">
    <section className="container">
      <div className="row">
        {/* First Card */}
        <div className="col-md-6 mb-4">
        <CountdownTimer targetDate="2023-12-31T23:59:59" />
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
          {/* ... (your card code) */}
        </div>
      </div>
    </section>
      <hr className={styles.hr} />
      gdyiwyg
    </div>
    </>
  );
};

export default EventHero;
