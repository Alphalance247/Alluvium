import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/pattern-seperator.module.scss";

const PatternSeparator = () => {
  // Creating an array to generate the repeating diamond pattern
  const patternUnits = Array.from({ length: 40 });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.patternGrid}>
          {patternUnits.map((_, i) => (
            <div key={i} className={styles.diamond} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatternSeparator;
