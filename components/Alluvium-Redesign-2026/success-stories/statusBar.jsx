import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/status-bar.module.scss";

const statsData = [
  {
    value: "2",
    description: "Jira Server instances migrated to cloud",
  },
  {
    value: "100%",
    description: "decommissioning of legacy tools",
  },
  {
    value: "100%",
    description: "compliance with ISO and national audit standards",
  },
];

const StatsBar = () => {
  return (
    <section className={styles.statsWrapper}>
      <div className={styles.container}>
        {/* Badge Label */}
        <div className={styles.labelContainer}>
          <span>Alluvium Results</span>
        </div>

        {/* Stats Loop */}
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h2>{stat.value}</h2>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
