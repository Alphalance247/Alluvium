import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/case-study-card.module.scss";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    category: "finance",
    title: "Strategic Agile Transformation & Cloud Migration",
    link: "strategic-agile-transformation-&-cloud-migration",
    statHighlight: "2 Jira Server instances",
    statSubtext: " migrated to cloud",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
  {
    id: 2,
    category: "Telecommunications",
    title: "Seamless Cloud Migration & Workflow Automation",
    link: "multimillion-pound-enterprise-agile-framework",
    statHighlight: "multi-million ",
    statSubtext: " transformation program supported",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
  {
    id: 3,
    category: "Managed Services / IT Services",
    title: "Rapid Cloud Migration & Cost Optimization ",
    link: "rapid-cloud-migration-cost-optimization/",
    statHighlight: "Significant cost ",
    statSubtext: " reduction",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
];

const CaseStudyGrid = ({ backgroundColor, showHeading = false }) => {
  return (
    <section className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.innerContainer}>
        {showHeading && (
          <div className={styles.headingContainer}>
            <h2>More Customer Stories</h2>
          </div>
        )}
        <div className={styles.grid}>
          {caseStudies.map((study) => (
            <Link href={`/success-stories/${study.link}`} key={study.id}>
              <article key={study.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <Image
                    width={317}
                    height={195}
                    src={study.image}
                    alt={study.title}
                  />
                </div>

                <div className={styles.content}>
                  <div className={styles.categoryTag}>{study.category}</div>
                  <h4 className={styles.title}>{study.title}</h4>
                </div>

                <div className={styles.statsRow}>
                  <span className={styles.highlight}>
                    {study.statHighlight}
                  </span>
                  <span className={styles.subtext}>{study.statSubtext}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
