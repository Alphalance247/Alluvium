import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/hero-banner.module.scss";

const HeroBanner = ({
  title = "Strategic Agile Transformation & Cloud Migration",
}) => {
  return (
    <section className={styles.heroWrapper}>
      {/* Background Layers */}
      {/* <img
        className={styles.baseLayer}
        src="https://placehold.co/1440x900"
        alt="Background base"
      />
      <img
        className={styles.blendLayer}
        src="https://placehold.co/1440x537"
        alt="Overlay blend"
      />
      <div className={styles.gradientOverlay} /> */}

      {/* Visible Content */}
      <div className={styles.contentContainer}>
        <div className={styles.innerContent}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
