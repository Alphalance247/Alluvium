import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/why-alluvium.module.scss";
import Image from "next/image";
const WhyAlluvium = () => {
  return (
    <section
      className={styles.propositionSection}
      aria-labelledby="proposition-title"
    >
      <div className={styles.outerBorderFrame}>
        {/* Split Header Block */}
        <div className={styles.headerSplitLayout}>
          <div className={styles.titleStack}>
            <span className={styles.overlineTag}>WHY ALLUVIUM</span>
            <h2 id="proposition-title" className={styles.mainTitle}>
              The AI Cost Problem
            </h2>
          </div>

          <div className={styles.valuePropositionText}>
            <p>
              The only partner built at the Rovo + Claude intersection &mdash;
              an Atlassian Gold Solution Partner and a Select Partner in the
              Claude Partner Network, with sixteen years inside the Atlassian
              platform. We don&apos;t just cut cost; we design the compound
              system that makes every credit earn its keep.
            </p>
          </div>
        </div>

        {/* Responsive Media Canvas Wrapper */}
        {/* <div className={styles.mediaCanvasFrame}> */}
        {/* <div className={styles.canvasBackupBg} /> */}
        <Image
          width={1112}
          height={451}
          src="/assets/Alluvium-Redesign-2026/ai-adoption/alluvium-anthropic-atlassian.png"
          alt="System architecture schema detailing the integration overlap between Atlassian Rovo and Claude AI workspaces"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default WhyAlluvium;
