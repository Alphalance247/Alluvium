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
              heading="Accelerate Innovation with Seamless DevOps Solutions"
              subhead="DevOps has reformed the way software is developed, delivered, and maintained. It fosters collaboration, efficiency, and continuous improvement by bridging the gap between development and operations teams"
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
