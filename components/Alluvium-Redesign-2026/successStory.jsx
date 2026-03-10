import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/successstory.module.scss";

export default function SuccessStory() {
  return (
    <section className={styles.successSection}>
      <div className={styles.successContainer}>
        <header className={styles.successHeader}>
          <div className={styles.successHeadingBlock}>
            <h2 className={styles.successTitle}>
              Real stories of Impact,
              <br />
              Collaboration, and Results.
            </h2>
          </div>

          <div className={styles.successSubtextBlock}>
            <p className={styles.successSubtitle}>
              Hear from the clients who’ve partnered with us and experienced
              real value through our design and development solutions.
            </p>
          </div>
        </header>

        <div className={styles.successCards}>
          <article className={styles.successCard}>
            <p className={styles.successQuote}>
              “Just had a great call with the team - they are great! The client
              appreciate their support and expertise“
            </p>

            <div className={styles.successAuthor}>
              <div className={styles.successAuthorName}>Ifeanyi N.</div>
              <div className={styles.successAuthorRole}>CEO, DashLoop</div>
            </div>
          </article>

          <article className={styles.successCard}>
            <p className={styles.successQuote}>
              “Just had a great call with the team - they are great! The client
              appreciate their support and expertise“
            </p>

            <div className={styles.successAuthor}>
              <div className={styles.successAuthorName}>Ifeanyi N.</div>
              <div className={styles.successAuthorRole}>CEO, DashLoop</div>
            </div>
          </article>

          <article className={styles.successCard}>
            <p className={styles.successQuote}>
              “Just had a great call with the team - they are great! The client
              appreciate their support and expertise“
            </p>

            <div className={styles.successAuthor}>
              <div className={styles.successAuthorName}>Ifeanyi N.</div>
              <div className={styles.successAuthorRole}>CEO, DashLoop</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
