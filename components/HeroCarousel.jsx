// import Slider from "./Slider";
import Slider from "react-slick";
import styles from "../styles/hero-carousel.module.scss";
import heroStyles from "../styles/hero.module.scss";
import Image from "next/image";

import Hero from "./Hero";
import Badges from "./badges";
import EventHero from "./cloud-connect/EventHero";

export default function () {

    return (
        <>
            <div className="container-fluid p-0">
                <Slider speed={3000} autoplaySpeed={7000} arrows={false} dots={false} autoplay={true} pauseOnHover={false} pauseOnFocus={false} infinite={true}>
                    <div>
                        <EventHero showCountdown={false} />
                    </div>
                    <div>
                        <Hero />
                    </div>
                    <div className="container-fluid p-0">
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
                    </div>
                    <div>
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
                    </div>
                    <div className={`container-fluid ${styles.h4}`}>
                        <div className={`d-flex flex-column ${styles.text}`}>
                            <h1 className="text-white"><span style={{ color: 'rgba(13, 17, 23, 1)' }}>We are</span> AWS Certified Partners</h1>
                            <p>We supply the highest quality remote and onsite engineers AND We deliver some of the highest quality Jira, Confluence and Bitbucket migrations, faster and at much lower cost, for some of the biggest Atlassian partners and Enterprise companies</p>
                        </div>
                        <div style={{display: "flex", gap: 24, height: 100, width: 224}}>
                            <Image src={"/assets/atlassian-badges/aws-partner.png"} loading="eager" priority width={198} height={198} alt={"AWS Partner"} />
                            <Image src={"/assets/atlassian-badges/aws-qualified-software-partner.png"} loading="eager" priority width={198} height={198} alt={"AWS Qualified Software Partner"} />
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}