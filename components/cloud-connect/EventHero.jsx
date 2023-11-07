import React from "react";
import styles from "../../styles/eventpage.module.scss";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

const EventHero = () => {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <section className="container mx-auto">
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
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 my-5"><CountdownTimer targetDate="2023-11-30T10:00:00" /></div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className="container mx-auto row mt-5 text-center justify-content-around">
          <div className="col-md-3">
            <p>
              {" "}
              <img
                src="/assets/location.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
            <strong>Location:</strong>
          <p className="m-0">Arowolo Gardens,</p>
          <p className="m-0">Beside Ekiti State Fire Service,</p>
          <p className="m-0">Fajuyi, Ado Ekiti.</p>
              {/* <strong>Location:</strong> <br /> Arowolo Gardens, Beside Ekiti State Fire Service, Fajuyi Ado Ekiti. */}
            </p>

          </div>
          <div className="col-md-3">
            <p>
              {" "}
              <img
                src="/assets/date.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
              <strong>Date & Time:</strong> <br /> November, 30th Thursday, 2023,
              10AM (WAT)
            </p>
          </div>
          <div className="col-md-3 mb-5">
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
