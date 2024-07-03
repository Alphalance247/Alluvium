import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import styles from "../../styles/case-studies.module.scss";
import Link from "next/link";
import Image from "next/image";

const CaseStudy = ({ caseStudy }) => {
  return (
    <>
      <div
        className={`container-fluid p-0 m-0 mb-4 ${styles.caseStudy}`}
        // style={{
        //   backgroundImage: `url(${caseStudy?.clientLogo})`,
        //   backgroundRepeat: "no-repeat",
        //   height: "340px",
        // }}
      >
        <Image
          src={caseStudy?.clientLogo}
          alt={caseStudy?.title}
          height={161}
          width={381}
          priority
          loading="eager"
          style={{ borderStartEndRadius: "15px", borderTopLeftRadius: "15px" }}
        />

        <div className={styles.body}>
          <h4>{caseStudy?.details?.title} Telecommunication</h4>
          <p>{caseStudy?.details?.description.slice(0, 50)}...</p>
          {caseStudy?.caseStudyPageName && (
            <Link href={"/case-studies/" + caseStudy?.caseStudyPageName}>
              <a>
                View Case Study <MdDoubleArrow />
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
