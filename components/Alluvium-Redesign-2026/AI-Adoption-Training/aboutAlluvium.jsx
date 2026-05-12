import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/about-alluvium.module.scss";

const aboutData = [
  {
    header: "6+ Years",
    description:
      "Delivering enterprise AI and workflow transformation programmes.",
  },
  {
    header: "AMER • EMEA",
    description: "Geographic delivery coverage with senior-led engagements.",
  },
  {
    header: "Triple Certified Partner",
    description:
      "Anthropic • Atlassian • AWS. One of a small number of firms holding all three accreditations",
  },
];

const AboutAlluvium = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.contentStack}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.mainTitle}>About Alluvium</h2>
          </div>

          <div className={styles.statsGrid}>
            {aboutData.map((item, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.cardContent}>
                  <h3 className={styles.statHeader}>{item.header}</h3>
                  <p className={styles.statDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAlluvium;
