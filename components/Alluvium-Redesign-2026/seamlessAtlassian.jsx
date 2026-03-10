// components/Alluvium-Redesign-2026/seamlessAtlassian.tsx
import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/atlassianSeamless.module.scss";
import Link from "next/link";

export default function SeamlessAtlassian() {
  return (
    <section className={styles.seamlessSection}>
      <div className={styles.seamlessContainer}>
        <header className={styles.seamlessHeader}>
          <div className={styles.seamlessBadge}>THE 3-STEP PLAN</div>

          <h2 className={styles.seamlessTitle}>
            Your Path to a{" "}
            <span className={styles.seamlessTitleEmphasis}>
              Seamless Atlassian
              <br />
              Environment
            </span>
          </h2>
        </header>

        <div className={styles.seamlessSteps}>
          <article className={styles.seamlessStep}>
            <div className={styles.seamlessStepNumber}>1</div>
            <div className={styles.seamlessStepContent}>
              <h3 className={styles.seamlessStepTitle}>The Audit</h3>
              <p className={styles.seamlessStepBody}>
                We dive into your current setup to find exactly where the
                friction is.
              </p>
            </div>
          </article>

          <article className={styles.seamlessStep}>
            <div className={styles.seamlessStepNumber}>2</div>
            <div className={styles.seamlessStepContent}>
              <h3 className={styles.seamlessStepTitle}>The Roadmap</h3>
              <p className={styles.seamlessStepBody}>
                We design a custom migration or implementation plan tailored to
                your scale.
              </p>
            </div>
          </article>

          <article className={styles.seamlessStep}>
            <div className={styles.seamlessStepNumber}>3</div>
            <div className={styles.seamlessStepContent}>
              <h3 className={styles.seamlessStepTitle}>The Launch</h3>
              <p className={styles.seamlessStepBody}>
                We handle the technical heavy lifting and train your team for
                day-one success.
              </p>
            </div>
          </article>
        </div>

        <div className={styles.seamlessCta}>
          <Link href="/contact-us">
            <button type="button" className={styles.seamlessButton}>
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
