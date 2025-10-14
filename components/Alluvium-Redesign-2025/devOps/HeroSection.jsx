import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/devOps/HeroSection.module.scss";
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
              heading="Automate, Deploy, and Scale with Alluvium."
              subhead="Alluvium helps organizations speed up software delivery using DevOps practices powered by Atlassian tools like Jira, Bitbucket, and Bamboo."
              subsec={"DEVOPS SOLUTION"}
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
