import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={`container-fluid p-0 ${styles.parent}`}>
        <div className={styles.cover}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1>We are Trusted Atlassian Tools Migration Experts</h1>
                <p>
                  We supply the highest quality remote and onsite engineers AND We deliver some of the highest quality Jira, Confluence and Bitbucket migrations, faster and at much lower cost, for some of the biggest Atlassian partners and Enterprise companies.{" "}
                </p>
                <Link href={'#consultationForm'}>
                  <a>Schedule a Call</a>
                </Link>
                <div className={`${styles.badges_container} mt-5 mt-sm-4`}>
                  <div className={styles.badges_cover}>
                    <div className={styles.badges}>
                      <Image src={"/assets/atlassian-badges/market-place-white.png"} loading="eager" priority width={400} height={138} alt={"Atlassian Platinum Market Place Partner"} />
                      <Image src={"/assets/atlassian-badges/aws-cloud.png"} loading="eager" priority width={198} height={198} alt={"AWS Certified Cloud Practitioner"} />
                      <Image src={"/assets/atlassian-badges/atl-expert.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Expert"} />
                      <Image src={"/assets/atlassian-badges/gcp.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Google Cloud Certified, Cloud Digital Leader"} />
                      <Image src={"/assets/atlassian-badges/atl.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Jira Administrator for Cloud"} />
                      <Image src={"/assets/atlassian-badges/atl-cloud.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Certified Confluence Administrator for Cloud"} />
                      <Image src={"/assets/atlassian-badges/atl-jira-project.png"} className={styles.stroke} loading="eager" priority width={198} height={198} alt={"Atlassian Platinum Market Place Partner"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
