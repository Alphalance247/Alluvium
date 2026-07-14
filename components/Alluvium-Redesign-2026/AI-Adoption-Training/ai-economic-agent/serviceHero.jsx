import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/ai-economic-agent/service-hero.module.scss";
import EnquiryModal from "../enquiryModal";

const ServiceHero = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <section className={styles.heroWrapper}>
      {/* Main Structural Content Grid Box */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className={styles.contentFrame}>
        <div className={styles.centerStack}>
          {/* Header Typography Content */}
          <div className={styles.textGroup}>
            <div className={styles.headingStack}>
              <span className={styles.overlineText}>
                A SERVICE LINE FROM ALLUVIUM
              </span>
              <h1 className={styles.mainTitle}>Agent Economics</h1>
            </div>

            <p className={styles.subDescription}>
              AI workflow design and credit-cost governance for Atlassian Rovo +
              Claude.
            </p>
          </div>

          {/* Interactive Call-To-Action Element Group */}
          <div className={styles.actionGroup}>
            <button
              className={styles.ctaButton}
              onClick={() => setIsModalOpen(true)}
            >
              Enquire About Training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
