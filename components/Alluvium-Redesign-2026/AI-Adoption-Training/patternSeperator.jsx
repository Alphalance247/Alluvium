import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/pattern-seperator.module.scss";
import Image from "next/image";

const PatternSeparator = ({ width, height }) => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.container}>
        <div className={styles.patternGrid}>
          {patternUnits.map((_, i) => (
            <div key={i} className={styles.diamond} />
          ))}
        </div>
      </div> */}
      <Image
        src="/assets/Alluvium-Redesign-2026/ai-adoption/line.png"
        alt="Pattern Separator"
        width={width}
        height={height}
      />
    </div>
  );
};

export default PatternSeparator;
