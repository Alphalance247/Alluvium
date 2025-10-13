import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/HeroSection.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <main>
          <div className={styles.hero__head}>
            <HeroHeading
              variant="primary"
              withLink={true}
              heading="Empower Your Enterprise with Agile at Scale"
              subhead="Starting out with Agile or seeking assistance in scaling it throughout your enterprise? We are here to guide you every step of the way."
              subsec={"AGILE AT SCALE"}
            />
            <Link className={styles.heroButton} href="/contact-us">
              <Button className={styles.heroButton} size="mediumL">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
