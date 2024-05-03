import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/boot53.module.scss";

const Booth53Banner = () => {
  return (
    <>
      <div className={styles.banner} style={{backgroundImage: "url('assets/team2024/booth53-bannerr.png')", backgroundSize: "1157px 530.05px", position: "relative"}}>
      <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div>
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
              {/* <h1 className={styles.heading}>
              Get your
                <span> African Gele and Fila</span>
              </h1> */}

              {/* <div className="d-flex gap-3">
              <Link href="/event/team24">
                <a className={`d-block btn ${styles.btn}`}>
                Order here
                </a>
              </Link>
              <Link href="/booth53#hero">
                <a className={`d-block btn ${styles.btn}`}>
                Booth 53
                </a>
              </Link>
              </div> */}

            <div className="float-left rounded" style={{borderRadius: "10px", backgroundColor: "#009BC0", width:"595px", fontSize:"46.28px", marginBottom:"30px"}}>
            <h1 className="" style={{paddingLeft: "50px", paddingTop:"20px", paddingBottom:"10px", width:"450px", color:"#fff", fontWeight:"bold"}}>Unlock full Potential of your Atlassian product at <span style={{color:"#E37915"}}>Booth 53</span></h1>
            
            <button className="btn btn-warning" style={{color:"#fff", marginLeft: "50px", backgroundColor:"#E37915", border:"none", marginBottom:"30px"}}>
                Visit Booth
            </button>
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
