import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/license/optimized.module.scss";
import Link from "next/link";

const OptimizeSpend = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textGroup}>
          <h2 className={styles.header}>
            Optimize Your Atlassian Spend. Maximize Your ROI.
          </h2>
          <p className={styles.description}>
            Stop overpaying for seats you don't use. As a Gold Solution Partner,
            Alluvium rationalizes your licensing footprint and provides 24/7
            dedicated support that keeps your mission-critical tools running.
          </p>
        </div>
        <Link href="/contact-us">
          <button className={styles.button}>Get a Preferred Quote</button>
        </Link>
      </div>
    </section>
  );
};

export default OptimizeSpend;
