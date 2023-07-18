import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={`container-fluid row mx-0 px-0 ${styles.cover}`}>
        <div className="col-lg-6 px-md-5 px-lg-5">
          <div className="mx-3 mx-sm-5">
            <h1>We are Trusted Atlassian Migration Experts</h1>
            <p>
              At Alluvium, we believe in delivering exceptional services and
              products to our clients. As Trusted Atlassian Experts, we have
              honed our skills and expertise in providing end-to-end solutions
              for businesses leveraging the Atlassian suite of tools{" "}
            </p>
            <Link href={'#consultationForm'}>
              <a>Schedule a Call</a>
            </Link>
          </div>
        </div>
        <div className={`col-lg-6 px-5 ${styles.badges_container}`}>
          <div className={styles.badges_cover}>
            <div className={styles.badges}>
              <Image src={"/assets/atlassian-badges/market-place.png"} width={385} height={123} alt={"Atlassian Platinum Market Place Partner"} />
              <Image src={"/assets/atlassian-badges/aws-cloud.png"} width={198} height={198} alt={"AWS Certified Cloud Practitioner"} />
            </div>
            <div className={styles.badges}>
              <Image src={"/assets/atlassian-badges/atl.png"} width={198} height={198} alt={"Atlassian Certified Jira Administrator for Cloud"} />
              <Image src={"/assets/atlassian-badges/atl-cloud.png"} width={198} height={198} alt={"Atlassian Certified Confluence Administrator for Cloud"} />
              <Image src={"/assets/atlassian-badges/atl-jira-project.png"} width={198} height={198} alt={"Atlassian Platinum Market Place Partner"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
