import React from "react";
import styles from "../../styles/case-studies.module.scss";
import { caseStudiesData } from "data";
import CaseStudy from "./case-study";
import BookingCTA from "components/Booking";

const CaseStudies = ({ showBooking = true }) => {
  return (
    <>
      <section
        className={`container-fluid p-0 ${styles.ourCaseStudies}`}
        id="case-studies"
      >
        <div className="container mx-auto">
          <div className={styles.topSection}>
            <h2>Case Studies</h2>
            <div className="row p-0 m-0">
              <div className="col-lg-8 col-xl-6 ps-0 m-auto">
                <h3>
                  How We've Helped Our Clients Achieve Data Migration Goals
                </h3>
              </div>
            </div>
          </div>
          <div className={`container mx-auto ${styles.caseStudyList}`}>
            {caseStudiesData.slice(-3).map((caseStudy) => {
              return (
                !!caseStudy && (
                  <CaseStudy caseStudy={caseStudy} key={caseStudy.id} />
                )
              );
            })}
          </div>
          {/* {showBooking && <BookingCTA />} */}

          <div style={{ textAlign: "center" }}>
            <button>View all case studies</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
