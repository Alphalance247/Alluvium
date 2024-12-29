import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/alluviumCaseStudies/HeroSection.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";
import { Lines } from "../ReuseComponents/Lines";
const HeroSection = () => {
  return (
    <section className={styles.mainContainer}>
      <main>
        <div className={styles.hero__head}>
          <HeroHeading
            variant="primary"
            withLink={true}
            heading="Impactful Solutions We've Delivered"
            subhead="Explore more of our transformative projects that drive positive change in atlassian world and helped our clients achieve data migration goals."
            subsec={"OUR SUCCESS STORIES"}
          />
        </div>
        <Lines variant={"default"} />
      </main>
    </section>
  );
};

export default HeroSection;
