import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/team.module.scss";

const Team24Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className="container mx-auto">
          <div className="row m-0 p-0">
            <div className="col-lg-8 p-0">
              <div className="d-none d-md-block">
                <Image
                  src="/assets/team2024/ateam.png"
                  alt="event"
                  width={337}
                  height={150}
                  priority
                  loading="eager"
                  style={{ marginBottom: "31px" }}
                  className={``}
                />
              </div>
              <div className="d-md-none mx-auto" style={{ width: 'max-content' }}>
                <Image
                  src="/assets/team2024/ateam-middle.png"
                  alt="event"
                  width={201.99}
                  height={73.9}
                  priority
                  loading="eager"
                  style={{ marginBottom: "31px" }}
                  className={`d-md-none mx-auto`}
                />
              </div>
              <h1 className={styles.heading}>
              Get your
                <span> African Gele and Fila</span>
              </h1>

              <Link href="/event/team24">
                <a className={`d-block btn ${styles.btn}`}>
                Order here
                </a>
              </Link>
              <div style={{ position: "absolute", bottom: "-7px", right: "0" }} className={`d-md-none w-100`}>
                <div className={styles.menCap}>
                  <Image
                    src="/assets/team2024/ladies.png"
                    width={400}
                    height={350}
                    alt=""
                    className={styles.menCap}
                    priority
                    loading="eager"
                  />
                </div>
              </div>

              <div className={styles.badges}>
                <Image
                  src="/assets/team2024/badges.png"
                  alt="event"
                  width={415}
                  height={69}
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team24Banner;
