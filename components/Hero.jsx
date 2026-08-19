import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.scss";
import Badges from "./badges";

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
                  Schedule a Call
                </Link>
                <div className={`${styles.badges_container} mt-5 mt-sm-4 d-none d-sm-block`}>
                  <Badges />
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
