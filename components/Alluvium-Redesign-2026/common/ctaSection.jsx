import React from "react";
import Link from "next/link";
import styles from "../../../styles/AlluviumRedesign2026/common/cta-section.module.scss";

const CtaSection = ({ heading, subhead, btnText }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            {heading || "The Cost of Waiting is Rising."}
          </h2>
          <p className={styles.description}>
            {subhead ||
              "With Server support ended and Data Center costs increasing, staying on legacy systems is a security and financial risk. Alluvium  specializes in 'Rescue Migrations' for teams whose internal moves have stalled."}
          </p>
        </div>
        <Link href="/contact-us">
          <button
            className={styles.button}
            // onClick={() => (window.location.href = "#schedule")}
          >
            {btnText || "Schedule a 30-Minute Strategy Session"}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
