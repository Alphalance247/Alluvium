import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/license/comparisonTable.module.scss";

const comparisonData = [
  {
    feature: "Pricing",
    direct: "List Price",
    partner: "Preferred Partner Rates",
  },
  {
    feature: "Technical Support",
    direct: "Standard Ticket Queue",
    partner: "24/7 Dedicated Support",
  },
  {
    feature: "Strategic Audits",
    direct: "No",
    partner: "Annual License Right-Sizing",
  },
  {
    feature: "Procurement",
    direct: "Credit Card/USD Only",
    partner: "Flexible Invoicing (USD/GBP/NGN)",
  },
  {
    feature: "Roadmap Guidance",
    direct: "Self-Service",
    partner: "Proactive Cloud/AI Readiness",
  },
];

const ComparisonTable = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The "Alluvium Advantage" Comparison</h2>

        <div className={styles.tableWrapper}>
          <div className={styles.tableGrid}>
            {/* Table Header */}
            <div
              className={`${styles.cell} ${styles.header} ${styles.featureCol}`}
            >
              Feature
            </div>
            <div
              className={`${styles.cell} ${styles.header} ${styles.directCol}`}
            >
              Buying Direct from Atlassian
            </div>
            <div
              className={`${styles.cell} ${styles.header} ${styles.partnerCol}`}
            >
              Partner-Led (Alluvium)
            </div>

            {/* Table Body - Looped Data */}
            {comparisonData.map((row, index) => {
              const isLast = index === comparisonData.length - 1;
              const rowClass = isLast ? styles.lastRow : "";

              return (
                <React.Fragment key={row.feature}>
                  <div
                    className={`${styles.cell} ${styles.featureCol} ${rowClass}`}
                  >
                    {row.feature}
                  </div>
                  <div
                    className={`${styles.cell} ${styles.directCol} ${rowClass}`}
                  >
                    {row.direct}
                  </div>
                  <div
                    className={`${styles.cell} ${styles.partnerCol} ${rowClass}`}
                  >
                    {row.partner}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
