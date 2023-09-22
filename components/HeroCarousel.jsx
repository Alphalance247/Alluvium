// import Slider from "./Slider";
import Slider from "react-slick";
import styles from "../styles/hero-carousel.module.scss";

import Hero from "./Hero";

export default function () {

    return (
        <>
            <div className="container-fluid p-0">
                <Slider fade speed={5000} arrows={false} dots={false} autoplay={true} pauseOnHover={false} pauseOnFocus={false} infinite={true}>
                    <div className="container-fluid p-0">
                        <div className={`${styles.h2}`}>
                            <h1>Let’s take you to the Cloud</h1>
                            <div>
                                <h2>We are trusted Cloud and DevOps Experts</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Hero />
                    </div>
                    <div>
                        <div className={`${styles.h3}`}>
                            <div className={styles.top}>
                                <h1>We are AI</h1>
                                <h1 className={styles.head2}>experts</h1>
                                <div>
                                    <h2>How can AI help you?</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}