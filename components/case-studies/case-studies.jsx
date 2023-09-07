import React from "react";
import styles from '../../styles/case-studies.module.scss';
import { caseStudiesData } from "data";
import CaseStudy from "./case-study";
import BookingCTA from "components/Booking";

const CaseStudies = () => {
    return (
        <>
            <section className={`container-fluid p-0 ${styles.ourCaseStudies}`} id="case-studies">
                <div className="container mx-auto d-flex flex-column justify-content-around">
                    <div className={styles.topSection}>
                        <h2>Case Studies</h2>
                        <div className="row p-0 m-0">
                            <div className="col-md-8 col-xl-6 ps-0">
                                <h3>How We've Helped Our Clients Achieve Data Migration Goals</h3>
                            </div>
                            {/* <div className="col-md-6 ps-md-5">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient </p>
                            </div> */}
                        </div>
                    </div>
                    <div className={`container mx-auto ${styles.caseStudyList}`}>
                            {
                                caseStudiesData.slice(-3).map((caseStudy) => {
                                    return (
                                        !!caseStudy && <CaseStudy caseStudy={caseStudy} key={caseStudy.id} />
                                    )
                                })
                            }
                    </div>
                    <BookingCTA />
                </div>
            </section>
        </>
    )
}

export default CaseStudies;