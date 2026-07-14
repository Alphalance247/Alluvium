import React, { useState } from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/hero.module.scss";
import EnquiryModal from "./enquiryModal";
import PartnershipBadge from "./partnershipbadge";

const TrainingHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className={styles.main}>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Partnership / Integration Badge */}
          {/* <div className={styles.badgeBar}>
            <div className={styles.logoGroup}>
              <Image
                width={100}
                height={20}
                src="/assets/alluvium-logo-dark.svg"
                alt="Alluvium Dark Logo"
              />

              <span className={styles.dividerText}>X</span>

              <Image
                width={93}
                height={20}
                src="/assets/Alluvium-Redesign-2026/ai-adoption/logos_claude.svg"
                alt="Claude Logo"
              />
            </div>
          </div> */}

          <PartnershipBadge />

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
            <button
              className={styles.primaryBtn}
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

export default TrainingHero;
