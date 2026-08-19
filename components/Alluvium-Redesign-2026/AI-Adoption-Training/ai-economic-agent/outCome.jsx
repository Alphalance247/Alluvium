import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/outcome.module.scss";
import { BsBarChartLine } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";

const TheOutcome = () => {
  const outcomes = [
    {
      title: "Predictable AI spend",
      iconStyle: <BsBarChartLine />,
    },
    {
      title: "No surprise true-ups",
      iconStyle: <LuBadgeCheck />,
    },
    {
      title: "More work per credit",
      iconStyle: <SlEnergy />,
    },
    {
      title: "Governed autonomy",
      iconStyle: <FaRobot />,
    },
  ];

  return (
    <section
      className={styles.outcomeSection}
      aria-labelledby="outcome-heading"
    >
      <div className={styles.containerFrame}>
        {/* Component Header Block */}
        <div className={styles.headerGroup}>
          <span className={styles.overlineTag}>WHAT YOU GET</span>
          <h2 id="outcome-heading" className={styles.primaryTitle}>
            The Outcome
          </h2>
        </div>

        {/* Dynamic Responsive Outcome Track */}
        <div className={styles.outcomesGrid}>
          {outcomes.map((item, index) => (
            <div key={index} className={styles.outcomeCard}>
              <div className={styles.cardContentBox}>
                <div className={styles.iconWrapper}>
                  <div>{item.iconStyle}</div>
                </div>
                <h3 className={styles.cardLabel}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheOutcome;
