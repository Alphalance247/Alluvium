import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/hero.module.scss";
import Image from "next/image";

const TrainingHero = () => {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Partnership / Integration Badge */}
          <div className={styles.badgeBar}>
            <div className={styles.logoGroup}>
              {/* Alluvium Logo Placeholder */}
              <Image
                width={100}
                height={20}
                src="/assets/alluvium-logo-dark.svg"
                alt="Alluvium Dark Logo"
              />

              <span className={styles.dividerText}>X</span>

              {/* Partner Logo Placeholder */}
              <Image
                width={93}
                height={20}
                src="/assets/Alluvium-Redesign-2026/ai-adoption/logos_claude.svg"
                alt="Claude Logo"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={styles.content}>
            <h1 className={styles.title}>
              AI Adoption Training for Insurance Teams
            </h1>
            <p className={styles.description}>
              Practical programmes that turn AI curiosity into measurable
              productivity built around your workflows, your tools, and your
              people.
            </p>
          </div>

          {/* Call to Action */}
          <div className={styles.actionArea}>
            <button className={styles.primaryBtn}>
              Enquire About Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
