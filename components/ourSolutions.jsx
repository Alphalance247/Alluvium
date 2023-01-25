import React from "react";
import Image from "next/image";
import { industries, ourSolutions } from "data";
import styles from "../styles/ourSolutions.module.scss";

const OurSolution = () => {
    return (
        <>
            <div className={`container-fluid ${styles.cover}`}>
                <div className="container">
                    <h3>Our Solution</h3>
                    <div className={styles.topContent}>
                        <ul>
                            {
                                ourSolutions.map(solution => (
                                    <li key={solution.title}>{solution.title}: <span>{solution.description}</span></li>
                                ))
                            }
                        </ul>
                        <h4>We provide guidance to a wide range of industries, including:</h4>
                        <div className={styles.industries}>
                            {
                                industries.map(industry => (
                                    <div className={styles.industry} key={industry.industry}>
                                        <div className="yellow-bg">
                                            <Image src={industry.icon} alt={industry.industry} width={56} height={47} priority loading="eager" />
                                        </div>
                                        <span>{industry.industry}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSolution;