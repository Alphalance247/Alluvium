import React from "react";
import Image from "next/image";
import styles from "../styles/ourPartners.module.scss";
import { trustedCompaniesData } from "data";

const OurPartners = () => {
    return (
        <>
            <div className={`container-fluid ${styles.cover}`}>
                <div className="container">
                    <div>
                        <h2>Our Partners</h2>
                        <h3>Working with clients from across the world</h3>
                    </div>
                    <div className={styles.trustedCompaniesList}>
                        <div className={styles.trustedCompanies}>
                            {
                                trustedCompaniesData.map((company, idx) => {
                                    return (
                                        <div className={styles.trustedCompany} key={idx}>
                                            <img src={company.logoIcon} alt={company.name} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.trustedCompanies}>
                            {
                                trustedCompaniesData.map((company, idx) => {
                                    return (
                                        <div className={styles.trustedCompany} key={idx}>
                                            <img src={company.logoIcon} alt={company.name} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <p>Trusted by startups and Fortune 500 companies across the globe</p>
                </div>
            </div>
        </>
    )
}

export default OurPartners;