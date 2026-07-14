import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/how-we-help.module.scss";

const HowWeHelp = () => {
  const offerings = [
    {
      step: "01",
      title: "Workflow design - what lives where",
      description:
        "We apply the Compound Intelligence framework (record vs judgment) to decide what runs in Rovo and what runs in Claude, so every task uses the right engine at the right cost.",
    },
    {
      step: "02",
      title: "Credit governance & guardrails",
      description:
        "Consumption dashboards, per-agent and per-workflow attribution, spend alerts, model routing that sends routine work to lighter models, and guardrails that stop runaway agents before the true-up does.",
    },
    {
      step: "03",
      title: "Cost optimisation & forecasting",
      description:
        "We model credit burn at scale, right-size plans and Collections, forecast overage, and build the budget you can take to procurement.",
    },
    {
      step: "04",
      title: "Enablement",
      description:
        "We train your admins and teams to design agents that are effective and economical - so the discipline outlives the engagement.",
    },
  ];

  return (
    <section
      className={styles.helpSection}
      aria-labelledby="help-section-heading"
    >
      <div className={styles.layoutWrapper}>
        {/* Section Header Text */}
        <div className={styles.headerBlock}>
          <span className={styles.captionOverline}>WHAT WE DO</span>
          <h2 id="help-section-heading" className={styles.primaryTitle}>
            How We Can Help
          </h2>
        </div>

        {/* 2-Column Responsive Grid Container */}
        <div className={styles.solutionsGrid}>
          {offerings.map((item, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.cardHeaderStack}>
                <span className={styles.stepIndicator}>{item.step}</span>
                <h3 className={styles.cardHeading}>{item.title}</h3>
              </div>
              <p className={styles.cardBodyText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
