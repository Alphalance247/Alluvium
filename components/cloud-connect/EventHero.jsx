import React from "react";
import styles from "../../styles/eventpage.module.scss";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

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
                  <Link href="/event/register">
                    <a className="btn btn-warning">REGISTER</a>
                  </Link>
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
            <div className="col-md-3"></div>
            <div className="col-md-6 my-5"><CountdownTimer targetDate="2023-11-30T23:59:59" /></div>
            <div className="col-md-3"></div>
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
