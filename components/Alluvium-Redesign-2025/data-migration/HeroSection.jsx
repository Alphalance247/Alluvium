import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/HeroSection.module.scss";

const HeroSection = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <main>
          <div className={styles.hero__head}>
            <HeroHeading
              variant="primary"
              withLink={true}
              heading="Effortless Atlassian Migration"
              subhead="When smooth and secure data migration matters, make Alluvium your go-to partner."
              subsec={"ATLASSIAN MIGRATION AND CONSOLIDATION"}
            />
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
