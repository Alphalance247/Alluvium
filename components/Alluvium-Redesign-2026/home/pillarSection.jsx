import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/home/pillar-section.module.scss";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const PillarsSection = () => {
  const pillars = [
    {
      title: "Cloud Upgrade",
      description:
        "Secure, zero-data-loss migrations for regulated industries.",
      theme: styles.skyTheme,
      link: "cloud-upgrade",
    },
    {
      title: "Enterprise Service Management (ESM)",
      description: "High-velocity workflows for HR, Finance, and Legal.",
      theme: styles.orangeTheme,
      link: "enterprise-service-management",
    },
    {
      title: "License Optimization",
      description:
        "Audit-led seat rationalization—save 15%–45% on annual spend.",
      theme: styles.neutralTheme,
      link: "license-optimization",
    },
    {
      title: "Strategic Partnerships",
      description: 'The technical "hidden bench" for global consultancy firms.',
      theme: styles.zincTheme,
      link: "strategic-partnerships",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            The Four Pillars (Service Navigation)
          </h2>
          <p className={styles.subtitle}>
            We help organizations migrate, optimize, and scale with Atlassian
            through expert-led services.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => (
            <Link href={`/${pillar?.link}`} key={index} className={styles.link}>
              <div key={index} className={`${styles.card} ${pillar.theme}`}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardDescription}>{pillar.description}</p>
                </div>

                <div className={styles.learnMore}>
                  <span className={styles.linkText}>LEARN MORE</span>
                  <div className={styles.iconBox}>
                    <FaArrowRight className="text-[#1F1F1F]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
