import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/footer-bar.module.scss";

const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.utilityContainer}>
        {/* Contact Links */}
        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>
            Website:{" "}
            <a href="https://alluvium.net" className={styles.metaLink}>
              alluvium.net
            </a>
          </span>
        </div>

        <div className={styles.metaGroup}>
          <span className={styles.metaLabel}>
            Email:{" "}
            <a href="mailto:contact@alluvium.net" className={styles.metaLink}>
              contact@alluvium.net
            </a>
          </span>
        </div>

        {/* Copyright Designation */}
        <div className={styles.copyrightText}>
          &copy; {currentYear} Alluvium
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
