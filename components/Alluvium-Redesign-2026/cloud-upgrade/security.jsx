import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/cloud-upgrade/security.module.scss";
import Image from "next/image";

const complianceData = [
  {
    id: 1,
    src: "/assets/Alluvium-Redesign-2026/services/gdpr.png",
    alt: "Compliance Cert 1",
    size: styles.large,
    width: 264,
    height: 168,
  },
  {
    id: 2,
    src: "/assets/Alluvium-Redesign-2026/services/iso.png",
    alt: "Compliance Cert 2",
    size: styles.medium,
    width: 205,
    height: 205,
  },
  {
    id: 3,
    src: "/assets/Alluvium-Redesign-2026/services/soc.png",
    alt: "Compliance Cert 3",
    size: styles.small,
    width: 190,
    height: 189,
  },
];

const SecurityCompliance = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerGroup}>
          <h2 className={styles.title}>Security & Compliance</h2>
          <p className={styles.subtitle}>
            Enterprise-grade protection aligned with global compliance
            standards.
          </p>
        </div>

        <div className={styles.logoGrid}>
          {complianceData.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              height={logo.height}
              width={logo.width}
              alt={logo.alt}
              className={`${styles.complianceLogo} ${logo.size}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
