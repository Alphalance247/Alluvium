import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/trust-banner.module.scss";
import PartnershipBadge from "../partnershipbadge";

const TrustBanner = () => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.bannerInner}>
          <div className={styles.container}>
            {/* Co-Branding Logo Badge */}
            <PartnershipBadge />

            {/* Messaging Text Stack */}
            <div className={styles.textStack}>
              <h2 className={styles.mainHeading}>
                Enterprise AI for Modern Organisations
              </h2>
              <p className={styles.subParagraph}>
                Helping organisations adopt Claude through training,
                transformation and intelligent workflow design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
