import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/boot53.module.scss";

const Booth53Banner = () => {
  return (
    <>
      <div className={styles.banner} style={{ backgroundImage: "url('assets/team2024/booth53-bannerr.png')", backgroundSize: "cover", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#11202D58" }}></div>
        <div className={styles.textBanner}></div>
        <div className="container mx-auto position-relative">
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

              <div className={styles.textContainer}>
                <h1 className="" style={{ color: "#fff", fontWeight: "bold" }}>Unlock full Potential of your Atlassian product at <span style={{ color: "#E37915" }}>Booth 53</span></h1>

                <Link href={'/booth53'} className="btn btn-warning">
                  
                    Visit Booth
                  
                </Link>
              </div>

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

export default Booth53Banner;
