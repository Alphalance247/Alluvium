import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/impact-card.module.scss";
import { LuBookOpen } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";

const ImpactCards = () => {
  const useCases = [
    {
      title: "Knowledge Management",
      description: "Find and use institutional knowledge instantly.",
      iconType: <LuBookOpen />,
    },
    {
      title: "Customer Experience",
      description: "Improve response times and customer satisfaction.",
      iconType: <FiUser />,
    },
    {
      title: "Underwriting",
      description: "Smarter risk assessment and policy evaluation.",
      iconType: <IoShieldOutline />,
    },
    {
      title: "Compliance",
      description: "Streamline reviews, reduce risk and stay audit ready.",
      iconType: <LuBadgeCheck />,
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.innerContainer}>
        {/* Section Header */}
        <div className={styles.headerStack}>
          <span className={styles.overline}>CLAUDE IN PRACTICE</span>
          <h2 className={styles.mainHeading}>
            Real Impact Across Your Organisation
          </h2>
        </div>

        {/* Responsive Grid Row */}
        <div className={styles.cardsLayoutGrid}>
          {useCases.map((item, index) => (
            <div key={index} className={styles.impactCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <div className={`${styles.iconBase}`}>{item?.iconType}</div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCards;
