// import Slider from "./Slider";
import Slider from "react-slick";
import styles from "../styles/hero-carousel.module.scss";
import heroStyles from "../styles/hero.module.scss";

import Hero from "./Hero";
import Badges from "./badges";
// import EventHero from "./cloud-connect/EventHero";
// import Team24Banner from "./TEAM24/banner"
import Gitex24 from "components/gitex24/gitex"
import Webinar from "components/webinar/webinar"
import Link from "next/link";
import Image from "next/image";

export default function () {

    return (
        <>
            {/* <div className="container-fluid p-0">
                <Slider speed={3000} autoplaySpeed={7000} arrows={false} dots={false} autoplay={true} pauseOnHover={false} pauseOnFocus={false} infinite={true} swipe >
                    
                    <div className="">
                        <Webinar />
                    </div>
                {/* <div className="">
                        <Gitex24 />
                    </div> */}

                    {/* <div className="">
                        <Boot53 />
                    </div> */}
                    {/* <div>
                        <Team24Banner />
                    </div> */}

                                        
                    {/* <div>
                        <EventHero showCountdown={false} />
                    </div> */}
                    {/* <div>
                        <Hero />
                    </div> */}
                    {/* <div className="container-fluid p-0">
                        <div className={`${styles.h2}`}>
                            <h1>Let’s take you to the Cloud</h1>
                            <div className={styles.blue}>
                                <h2>We are trusted Cloud and DevOps Experts</h2>
                            </div>
                            <div className="row mt-3 d-none d-sm-block">
                                <div className="col-lg-8 mx-auto">
                                    <div className={`${heroStyles.badges_container} mt-5 mt-sm-4 d-none d-sm-block`}>
                                        <Badges />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                      {/* <div>
                        <div className={`${styles.h3}`}>
                            <div className={styles.top}>
                                <h1>We are AI</h1>
                                <h1 className={styles.head2}>experts</h1>
                                <div className={styles.blue}>
                                    <h2>How can AI help you?</h2>
                                </div>
                            </div>
                            <div className="row mt-5 d-none d-sm-block">
                                <div className="col-lg-9 col-xl-8">
                                    <div className={`${heroStyles.badges_container} mt-5 mt-sm-4 d-none d-sm-block`}>
                                        <Badges />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                {/* </Slider> */}

        
            {/* </div>
                <div className={`${styles.featured} w-11/12 md:w-8/12 bg-white shadow-lg p-5 rounded-lg z-10`}>
                    <h3 className="text-xl font-bold">Card Title</h3>
                    <p>Card content goes here.</p>
                </div> */}


<div className={` ${styles.herobanner}`}>
        <div className={`row container mx-auto`}>
          <div className="col-md-8">
            <div className="" style={{ paddingTop: "-5px" }}>
              <h1
                className={`text-white ${styles.atp}`}
                style={{
                //   fontSize: "50px",
                  lineHeight: "30px",
                  marginBottom: "30px",
                }}
              >
                We are Trusted
              </h1>

              <h1
                className={`text-white ${styles.atp}`}
                style={{
                //   fontSize: "50px",
                  lineHeight: "20px",
                  marginBottom: "30px",
                }}
              >
                Atlassian Partner
              </h1>
              <p
                className="text-white"
                style={{ fontSize: "18px", marginBottom: "20px", lineHeight: "20px"}}
              >
              We are ITSM, DevOps and Data Migration Experts
              </p>
              <Link href="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8">
                <a
                  className="btn text-white mr-4"
                  style={{ backgroundColor: "#E37915", marginRight:"10px" }}
                >
                  Why Hire an Atlassian Partner
                </a>
              </Link>

              <Link href="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8">
                <a
                  className={`${styles.custombtn} btn text-white border`}
                  style={{ }}
                >
                  Schedule a call
                </a>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4">
          <Image className={`img-fluid ${styles.customdiv}`} width={393.77} height={302} src="/assets/bdg.png" />
          </div>
        </div>
      </div>
        <div className={` row ${styles.customxs}`}>
            <div className="col-md-2">

            </div>
        <div className={`${styles.featured} bg-white p-4 col-md-8`}>
                    <h3 className={`${styles.featuredsec} text-xl font-bold` }>FEATURED SECTION</h3>
                    <div className="row container mx-auto">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/serv.png" />
        </div>
        <div className="ml-2">
          <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>OUR SERVICES</p>
          
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/camp.png" />
        </div>
        <div className="ml-2">
        <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>CAMPAIGN</p>
          
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <Image className={`img-fluid ${styles.serv}`} width={176} height={101} src="/assets/case.png" />
        </div>
        <div className="ml-2">
        <p className="" style={{color:"#009BC0", fontSize:"10px", fontWeight:"bold", marginTop:""}}>CASE STUDIES</p>
        </div>
      </div>
    </div>
        </div>
        <div className="col-md-2">

        </div>
        </div>
        </>
    )
}