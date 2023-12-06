import React from "react";
import styles from "../../styles/eventpage.module.scss";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

const EventHero = ({ showCountdown = true }) => {
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <section className="container mx-auto">
          <div className="row p-0">
            {/* First Card */}
            <div className="col-md-6 mb-2 mb-md-0">
              <div className={`card ${styles.heroCard}`}>
                <img
                  src="/assets/cloudpic.png"
                  className="card-img-top"
                  alt="Image 1"
                />
                <div className="card-body p-0 mt-3">
                  <div className={!showCountdown ? `d-md-none card mb-4 ${styles.heroCard} ${styles.heroCard2}`: 'd-none'}>
                    <img
                      src="/assets/eventheaderimage.png"
                      className="card-img-top"
                      alt="Image 2"
                    />
                  </div>
                  <h5 className="card-title text-warning">
                    ONLINE & IN-PERSON
                  </h5>
                  <p className="event-desc">
                    Harnessing global synergy to forge collaboration for digital
                    <br />
                    opportunities
                  </p>
                  <div className="d-flex flex-wrap">
                  {/* <Link href="/event/register">
                    <a className="btn btn-warning mt-4 me-3">REGISTER</a>
                  </Link> */}
                  {/* <a href="https://us06web.zoom.us/j/82145050765?pwd=qd3bNXbpwlmxW341h0ltacqVMfjRk8.1#success" className="btn btn-warning mt-4 me-3" target="_blank" rel="noopener noreferrer">JOIN US LIVE</a> */}
                  { !showCountdown &&
                    <Link href="/event/cloud-connect">
                    <a className="btn btn-warning mt-4">READ MORE</a>
                  </Link>}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className={!showCountdown ? 'd-none d-md-flex col-md-6 p-0' : `col-md-6 mt-4 mt-md-0`}>
              <div className={`card ${styles.heroCard}`}>
                <img
                  src="/assets/eventheaderimage.png"
                  className="card-img-top"
                  alt="Image 2"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {showCountdown && <div className={`container-fluid pb-4 ${styles.countdownCard}`}>
        {/* <div className="container mx-auto">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 my-5"><CountdownTimer targetDate="2023-11-30T10:00:00" /></div>
            <div className="col-md-3"></div>
          </div>
        </div> */}
        <hr className={styles.hr} />
        <div className="container mx-auto row mt-5 text-center justify-content-around">
          <div className="col-md-3">
            <div>
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
            </div>

          </div>
          <div className="col-md-3">
            <div>
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
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div>
              <img
                src="/assets/email.svg"
                className="card-img-top"
                alt="Image 2"
                width={"20px"}
                height={"20px"}
              />
              <strong>Email:</strong> <br /> contact@alluvium.net
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default EventHero;
