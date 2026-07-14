import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/our-mission.module.scss";

const MissionSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        {/* Category Badge */}
        <div className={styles.badge}>
          <span>Our MISSION</span>
        </div>

        {/* Central Quote/Mission */}
        <h2 className={styles.missionText}>
          Our mission is to provide expert consulting and managed services for
          seamless digital transformation and a competitive edge.
        </h2>
      </div>
    </section>
  );
};

export default MissionSection;
