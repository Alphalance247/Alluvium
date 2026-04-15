import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/awards.module.scss";

const awardsData = [
  {
    label: "How it All started",
    description:
      "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
  },
  {
    label: "How it All started",
    description:
      "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
  },
  {
    label: "How it All started",
    description:
      "Atlassian named Alluvium a finalist for Partner of the Year 2024–2025 (Emerging Markets), highlighting its “exceptional innovation” and impact for customers.",
  },
];

const AwardsSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        {/* Section Headline */}
        <h2 className={styles.title}>Awards & recognition</h2>

        {/* Awards Loop */}
        <div className={styles.awardsList}>
          {awardsData.map((award, index) => (
            <div key={index} className={styles.awardItem}>
              <div className={styles.awardLabel}>{award.label}</div>
              <div className={styles.awardDescription}>{award.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
