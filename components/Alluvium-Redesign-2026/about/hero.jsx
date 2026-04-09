import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/about.module.scss";

const AboutHero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.layoutGrid}>
          {/* Left Side: Copy */}
          <div className={styles.textContent}>
            <h2>Your Trusted Atlassian Solution Partner.</h2>
            <p>
              Learn about Alluvium, an Atlassian Gold Partner delivering ITSM,
              DevOps, Agile, and cloud migration solutions across the US, UK,
              and Nigeria.
            </p>
            <button className={styles.ctaButton}>Talk to us</button>
          </div>

          {/* Right Side: Layered Visuals */}
          <div className={styles.visualContent}>
            {/* <div className={styles.blueBlock} /> */}
            {/* <img
              src="/assets/Alluvium-Redesign-2026/about/shape.png"
              alt="Atlassian Partnership"
              className={styles.mainImage2}
            /> */}
            <img
              src="/assets/Alluvium-Redesign-2026/about/hero.png"
              alt="Atlassian Partnership"
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
