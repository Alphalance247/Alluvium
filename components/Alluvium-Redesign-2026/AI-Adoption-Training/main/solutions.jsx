import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/solutions.module.scss";
import Link from "next/link";

const SolutionsGrid = () => {
  const solutions = [
    {
      title: "AI Adoption Training",
      description:
        "Practical programmes that turn AI curiosity into measurable productivity for insurance teams.",
      image: "/assets/Alluvium-Redesign-2026/ai-adoption/ai-adoption-1.png",
      alt: "AI Adoption Training",
      link: "/ai/ai-adoption-training",
      linkText: "Explore Training",
    },
    {
      title: "Agent Economics",
      description:
        "Understand how AI agents consume credits, where costs accumulate, and how to design workflows that maximise value.",
      image: "/assets/Alluvium-Redesign-2026/ai-adoption/ai-adoption-2.png",
      alt: "Agent Economics",
      link: "/ai/ai-agent-economics",
      linkText: "Explore Training",
    },
  ];

  return (
    <section className={styles.showcaseWrapper}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.overline}>OUR SOLUTIONS</span>
          <h2 className={styles.mainTitle}>
            Solutions for Every Stage of Your AI Journey
          </h2>
        </div>

        {/* Dynamic Solutions Grid */}
        <div className={styles.cardsGrid}>
          {solutions.map((item, idx) => (
            <article key={idx} className={styles.solutionCard}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.cardImage}
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.textStack}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>

                <Link href={item?.link}>
                  <div className={styles.cardCta}>
                    <span className={styles.ctaText}>{item.linkText}</span>
                    <span className={styles.arrowIcon} aria-hidden="true" />
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
