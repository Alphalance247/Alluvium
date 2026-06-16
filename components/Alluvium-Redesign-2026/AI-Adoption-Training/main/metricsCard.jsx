import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/metric-card.module.scss";

const MetricsCounter = () => {
  const statistics = [
    {
      stat: "6+",
      label: "Years Delivering enterprise AI solutions",
    },
    {
      stat: "AMER + EMEA",
      label: "Active delivery with local and global engagements",
    },
    {
      stat: "90%+",
      label: "Client retention across AI programmes",
    },
    {
      stat: "Triple",
      label: "Certified Partner: Anthropic · Microsoft · AWS",
    },
  ];

  return (
    <section className={styles.metricsSection}>
      <div className={styles.outerFrame}>
        {/* Component Section Heading Blocks */}
        <div className={styles.headingGroup}>
          <span className={styles.captionTag}>
            TRUSTED TO LEAD AND DELIVER AI
          </span>
          <h2 className={styles.titleText}>Delivering Measurable Outcomes</h2>
        </div>

        {/* Dynamic Metric Layout Track */}
        <div className={styles.metricsLayoutRow}>
          {statistics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.metricContentStack}>
                <div className={styles.statFigure}>{metric.stat}</div>
                <p className={styles.statLabel}>{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsCounter;
