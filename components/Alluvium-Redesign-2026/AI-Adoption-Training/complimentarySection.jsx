import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/complimentary.module.scss";
import Link from "next/link";

const ComplementaryCTA = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Background Image / Overlay */}
        {/* <img
          src="/assets/Alluvium-Redesign-2026/ai-adoption/pillars.png"
          alt="Abstract Background"
          className={styles.bgImage}
        /> */}

        <div className={styles.content}>
          <div className={styles.textStack}>
            <h2 className={styles.title}>Already using Microsoft Copilot?</h2>

            <p className={styles.description}>
              <span className={styles.highlight}>
                Our programmes are designed to complement, not replace existing
                tools.
              </span>
              <br className={styles.desktopBreak} />
              <span className={styles.bodyText}>
                We show teams exactly where Claude adds distinct value alongside
                Copilot, including unstructured data, multi-source
                reconciliation, and complex document analysis.
              </span>
            </p>
          </div>

          <div className={styles.buttonWrapper}>
            <Link href={"/contact-us"}>
              <button className={styles.ctaButton}>Speak With Our Team</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplementaryCTA;
