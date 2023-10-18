import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/eventpage.module.scss";


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
              src="/assets/cloudpic.png" // Replace with the actual image URL or path
              className="card-img-top"
              alt="Image 1"
            />
            <div className="card-body">
              <h5 className="card-title">Event Image 1</h5>
              <p className="card-text">Description of the event.</p>
              <a href="#" className="btn btn-warning">REGISTER</a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
        <div className={`card ${styles.cardWithBackground}`}>
            <img
              src="/assets/eventheaderimage.png" // Replace with the actual image URL or path
              className="card-img-top"
              alt="Image 2"
            />
            <div className="card-body">
              <h5 className="card-title">Event Image 2</h5>
              <p className="card-text">Description of the event.</p>
              {/* No "REGISTER" button in the second card */}
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>

    <div>

        here we go
    </div>
    </>
  );
};

export default EventHero;
