import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/assessment.module.scss";
import Link from "next/link";

const AssessmentCTA = () => {
  return (
    <section className={styles.ctaWrapper} aria-labelledby="cta-heading">
      <div className={styles.innerBox}>
        {/* Background Ambient Overlay Graphic */}
        <div className={styles.ambientGraphic} />

        {/* Foreground Content Stack */}
        <div className={styles.contentStack}>
          <h2 id="cta-heading" className={styles.ctaHeading}>
            Find out what your agents are really costing &mdash; and what they
            should. Start with a two-week Agent Economics assessment.
          </h2>

          <div className={styles.actionBlock}>
            <Link href="/contact-us">
              <button className={styles.primaryButton}>
                Book An Assessment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCTA;
