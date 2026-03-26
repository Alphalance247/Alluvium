import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/hero-banner.module.scss";

const HeroBanner = ({
  title = "Strategic Agile Transformation & Cloud Migration",
  backgroundImage = "/assets/Alluvium-Redesign-2026/SuccessStory/hero1.png",
}) => {
  return (
    <section
      className={styles.heroWrapper}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.innerContent}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
