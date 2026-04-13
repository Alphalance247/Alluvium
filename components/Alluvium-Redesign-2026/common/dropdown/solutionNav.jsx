import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/solutionNav.module.scss";

const SolutionNav = () => {
  const services = [
    "Cloud Upgrade",
    "ESM",
    "License Optimization",
    "Partnerships",
  ];

  return (
    <div className={styles.dropdownCard}>
      {/* Left: Navigation List */}
      <div className={styles.linksColumn}>
        <div className={styles.columnTitle}>Alluvium Solutions</div>
        {services.map((service, index) => (
          <div key={index} className={styles.navLink}>
            {service}
            <span className={styles.chevron} />
          </div>
        ))}
      </div>

      {/* Center: Visual Divider */}
      <div className={styles.divider} />

      {/* Right: Featured Promotional Card */}
      <div className={styles.featuredCard}>
        <div className={styles.cardHeader}>
          <h4>Regulatory Supremacy and Competitive Edge</h4>
          <p>
            It argues that mastering regulation can be turned into a competitive
            advantage.
          </p>
          <div className={styles.badgeBtn}>
            Get The Report
            <span style={{ fontSize: "14px" }}>→</span>
          </div>
        </div>

        {/* The Graphic Preview */}
        <div className={styles.bookPreview}>
          <div className={styles.bookTitle}>
            Regulatory Supremacy and Competitive Edge
          </div>
          {/* Overlay color blocks from your snippet */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2px",
            }}
          >
            <div
              style={{ width: "12px", height: "12px", background: "#ef4444" }}
            />
            <div
              style={{ width: "12px", height: "12px", background: "#ec4899" }}
            />
            <div
              style={{ width: "12px", height: "12px", background: "#6366f1" }}
            />
            <div
              style={{ width: "12px", height: "12px", background: "#3b82f6" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionNav;
