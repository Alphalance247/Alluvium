import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/seat-to-credit.module.scss";
import Image from "next/legacy/image";

const SeatToCredits = () => {
  return (
    <section
      className={styles.sectionWrapper}
      aria-labelledby="conceptual-title"
    >
      <div className={styles.contentContainer}>
        {/* Left Side: Editorial Context Column */}
        <div className={styles.textColumn}>
          <div className={styles.headerStack}>
            <h2 id="conceptual-title" className={styles.mainTitle}>
              From Seats to Credits
            </h2>
            <p className={styles.bodyContext}>
              Atlassian&apos;s AI no longer bills purely by the seat. Rovo runs
              on metered credits, consumed by task complexity and model choice
              &mdash; and the more autonomous your agents, the less your seat
              count predicts your bill.
            </p>
            <p className={styles.bodyContextEmphasis}>
              That&apos;s a new discipline most teams don&apos;t have yet:
              designing each workflow for the right engine, and governing what
              it spends. Alluvium builds both.
            </p>
          </div>
        </div>

        {/* Right Side: Showcase Media Placement */}
        <div className={styles.mediaColumn}>
          <Image
            width={483}
            height={322}
            src="/assets/Alluvium-Redesign-2026/ai-adoption/rovo-credits.png"
            alt="Data architecture visualization mapping workflow consumption credits vs traditional seats"
          />
        </div>
      </div>
    </section>
  );
};

export default SeatToCredits;
