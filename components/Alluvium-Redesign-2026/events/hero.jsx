import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/hero.module.scss";

const EventsBanner = () => {
  return (
    <section className={styles.section}>
      {/* Texture/Pattern Overlay */}
      {/* <img
        className={styles.overlayImage}
        src="/assets/Alluvium-Redesign-2026/events/heroBanner.png"
        alt="Background Pattern"
      /> */}

      <div className={styles.container}>
        <h1 className={styles.title}>Webinars & Events</h1>
        <p className={styles.description}>
          Explore thought-provoking roundtables, in-depth customer support
          discussions, case studies, Atlassian product demos, and more.
        </p>
      </div>
    </section>
  );
};

export default EventsBanner;
