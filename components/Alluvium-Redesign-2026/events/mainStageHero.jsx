import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/event-details.module.scss";

const MainStageHero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.banner}>
        {/* Top Logo / Branding */}
        <img
          src="https://placehold.co/531x89/000000/FFFFFF?text=EVENT+LOGO"
          alt="Event Logo"
          className={styles.logo}
        />

        {/* Dynamic Background Typography */}
        <div className={styles.bgTextContainer}>
          <div className={styles.outlineBox} />
          <div className={styles.mainStageText}>MAIN STAGE</div>
        </div>

        {/* Bottom Location/Title Text */}
        <div className={styles.subText}>
          MAIN STAGE
          <br />
          DOWNSTAIRS
        </div>
      </div>
    </section>
  );
};

export default MainStageHero;
