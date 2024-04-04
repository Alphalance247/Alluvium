import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/team.module.scss";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className="container mx-auto">
          <div className="row m-0 p-0">
            <div className="col-lg-8 p-0">
              <Image
                src="/assets/team2024/ateam.png"
                alt="event"
                width={337}
                height={150}
                priority
                loading="eager"
                style={{ marginBottom: "31px" }}
                className={styles.back}
              />

              <h1 className={styles.heading}>
                Alluvium,
                <span> from Africa With Love</span>
              </h1>

              <Link href="/event/team24">
                <a className={`d-block btn ${styles.btn}`}>
                  Register
                </a>
              </Link>

              <div>
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

export default Banner;
