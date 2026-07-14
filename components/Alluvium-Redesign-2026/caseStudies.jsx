import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/case-studies.module.scss";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className={styles.csSection}>
      <div className={styles.csContainer}>
        <h2 className={styles.csTitle}>
          Is Technical Complexity Stalling
          <br />
          Your Growth?
        </h2>

        <div className={styles.csCards}>
          <article className={`${styles.csCard} ${styles.csCardDark}`}>
            <div className={styles.csIconPlaceholder} aria-hidden="true">
              <Image
                src="/assets/Alluvium-Redesign-2026/home/workflows.svg"
                alt="Messy Workflows"
                width={32}
                height={32}
              />
            </div>

            <div className={styles.csCardContent}>
              <div className={styles.csCardTitle}>Messy Workflows</div>
              <div className={styles.csCardBody}>
                Your teams are siloed, and information gets lost in the gaps.
              </div>
            </div>
          </article>

          <article className={`${styles.csCard} ${styles.csCardLight}`}>
            <div className={styles.csIconPlaceholder} aria-hidden="true">
              <Image
                src="/assets/Alluvium-Redesign-2026/home/migration-anxiety.svg"
                alt="Migration Anxiety"
                width={32}
                height={32}
              />
            </div>

            <div className={styles.csCardContent}>
              <div className={styles.csCardTitle}>Migration Anxiety</div>
              <div className={styles.csCardBody}>
                You're worried about data loss or downtime during your move to
                the Cloud.
              </div>
            </div>
          </article>

          <article className={`${styles.csCard} ${styles.csCardTint}`}>
            <div className={styles.csIconPlaceholder} aria-hidden="true">
              <Image
                src="/assets/Alluvium-Redesign-2026/home/dollar-sign.svg"
                alt="Dollar Sign"
                width={32}
                height={32}
              />
            </div>

            <div className={styles.csCardContent}>
              <div className={styles.csCardTitle}>Wasted Spend</div>
              <div className={styles.csCardBody}>
                You're paying for Atlassian tools that aren't optimized for your
                actual business needs.
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
