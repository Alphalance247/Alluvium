import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/success-stories/case-study-card.module.scss";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    category: "finance",
    title: "Strategic Agile Transformation & Cloud Migration",
    statHighlight: "2 Jira Server instances",
    statSubtext: " migrated to cloud",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
  {
    id: 2,
    category: "finance",
    title: "Strategic Agile Transformation & Cloud Migration",
    statHighlight: "2 Jira Server instances",
    statSubtext: " migrated to cloud",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
  {
    id: 3,
    category: "finance",
    title: "Strategic Agile Transformation & Cloud Migration",
    statHighlight: "2 Jira Server instances",
    statSubtext: " migrated to cloud",
    image: "/assets/Alluvium-Redesign-2026/SuccessStory/card.png",
  },
];

const CaseStudyGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.grid}>
          {caseStudies.map((study) => (
            <Link href={`/success-stories/${study.id}`}>
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
