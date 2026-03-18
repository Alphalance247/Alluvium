import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/enterprise-management/expertise-bridge.module.scss";

const contentData = {
  title: "Expertise That Bridges the Gap",
  description:
    "ESM isn't just about software; it’s about change management. As an Atlassian Gold Solution Partner, Alluvium specializes in the 'Human' side of Jira Service Management—ensuring your teams actually love using the tools we build.",
  image: "/assets/Alluvium-Redesign-2026/services/expertise.png",
};

const ExpertiseBridge = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{contentData.title}</h2>
          <p className={styles.description}>{contentData.description}</p>
        </div>

        {/* Right: Image */}
        <div className={styles.imageWrapper}>
          <img
            src={contentData.image}
            alt="Atlassian Gold Solution Partner Experts"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseBridge;
