import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/status-bar.module.scss";

const StatsBar = ({ stats = [] }) => {
  return (
    <section className={styles.statsWrapper}>
      <div className={styles.container}>
        {/* Badge Label */}
        <div className={styles.labelContainer}>
          <span>Alluvium Results</span>
        </div>

        {/* Stats Loop */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
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
