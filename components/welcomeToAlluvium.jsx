import React from "react";
import Link from "next/link";
import styles from "../styles/welcomeToAlluvium.module.scss";
import { milestonesData } from "data";
import BookingCTA from "./Booking";


const WelcomeToAlluvium = () => {
    return (
        <>
            <div className={`container-fluid ${styles.cover}`}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <h2>Welcome to Alluvium</h2>
                            <h3>Leading the Way in Data Migration Solutions</h3>

                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient </p>

                            <Link href={'/about'}>
                                <a aria-label="Learn more about Alluvium" className={styles.learnButton}>Learn More</a>
                            </Link>
                        </div>
                        <div className="col-md-6 ps-xl-5">
                            <div className={styles.stats}>
                                {
                                    milestonesData.map(milestone=>(
                                        <div key={milestone.id}>
                                            <h4>{milestone.value}</h4>
                                            <p>{milestone.category}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <BookingCTA />
                </div>
            </div>
        </>
    )
}

export default WelcomeToAlluvium;