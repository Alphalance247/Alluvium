import React from "react";
import { whyChooseAlluvium } from "data";
import styles from '../styles/whyAlluvium.module.scss';

const WhyAlluvium = () => {
    return (
        <>
            <div className={`container-fluid m-0 ${styles.cover}`}>
                <div className="container">
                    <h3>Why You Should Choose Alluvium</h3>
                    <div className={styles.list}>
                        <div className="">
                            {
                                whyChooseAlluvium.slice(0, 4).map((reason, id) => (
                                    <div className="w-100" key={reason}>
                                        <span className={styles.number}>0{id + 1}</span> {reason}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="">
                            {
                                whyChooseAlluvium.slice(4).map((reason, id) => (
                                    <div className="w-100" key={reason}>
                                        <span className={styles.number}>0{id + 5}</span> {reason}
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

export default WhyAlluvium;