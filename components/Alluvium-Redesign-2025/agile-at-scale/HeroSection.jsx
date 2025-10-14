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
              heading="Enterprise Agile Frameworks with Atlassian Solutions."
              subhead="Alluvium enables enterprise teams to scale agile practices using Jira Align, Jira Software, and Confluence for better delivery and visibility."
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
