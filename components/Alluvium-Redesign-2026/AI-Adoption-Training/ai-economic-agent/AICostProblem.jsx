import React from "react";
import { FaChartLine } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { FaGear } from "react-icons/fa6";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/ai-cost-problem.module.scss";

const AICostProblem = () => {
  const problems = [
    {
      title: "Unpredictable spend",
      description:
        "Credits burn by task and model, not by headcount. Adoption climbs, agents run autonomously, and the true-up arrives unforecast.",
      iconClass: <FaChartLine />,
    },
    {
      title: "No attribution",
      description:
        "When a bill spikes, which agent, workflow or team caused it? Without instrumentation you can't tell - so you can't fix it.",
      iconClass: <TbTargetArrow />,
    },
    {
      title: "The wrong-engine tax",
      description:
        "Run a routine task on a heavyweight model, or in Claude where Rovo would do - or the reverse - and you pay a multiple for the same outcome.",
      iconClass: <FaGear />,
    },
  ];

  return (
    <section className={styles.sectionWrapper} aria-labelledby="problem-title">
      <div className={styles.innerContainer}>
        {/* Section Header Text */}
        <div className={styles.headerBlock}>
          <span className={styles.overline}>WHERE IT HURTS</span>
          <h2 id="problem-title" className={styles.mainHeading}>
            The AI Cost Problem
          </h2>
        </div>

        {/* Dynamic Multi-Column Grid */}
        <div className={styles.problemsGrid}>
          {problems.map((prob, index) => (
            <div key={index} className={styles.problemCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{prob.iconClass}</div>
                <h3 className={styles.cardTitle}>{prob.title}</h3>
              </div>
              <p className={styles.cardDescription}>{prob.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICostProblem;
