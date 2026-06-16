import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/featured-programme.module.scss";
import Link from "next/link";

const FeaturedProgramme = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.bannerWrapper}>
        <div className={styles.innerLayout}>
          {/* Left Side: Thumbnail & Content */}
          <div className={styles.contentGroup}>
            <img
              className={styles.thumbnail}
              src="/assets/Alluvium-Redesign-2026/ai-adoption/ai-adoption-logo.png"
              alt="AI Adoption Training Thumbnail"
            />

            <div className={styles.textStack}>
              <span className={styles.badge}>FEATURED PROGRAMME</span>
              <div className={styles.titleDescription}>
                <h3 className={styles.title}>AI Adoption Training</h3>
                <p className={styles.description}>
                  Practical programmes that turn AI curiosity into measurable
                  productivity for insurance teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Action Button */}
          <div className={styles.actionGroup}>
            <Link href="/ai-adoption-training">
              <button className={styles.ctaButton}>EXPLORE TRAINING</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProgramme;
