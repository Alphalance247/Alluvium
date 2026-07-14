import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/cloud-upgrade/security.module.scss";
import Image from "next/image";

const SecurityCompliance = ({ data, withSubhead = true, heading }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerGroup}>
          <h2 className={styles.title}>{heading || "Security & Compliance"}</h2>
          {withSubhead && (
            <p className={styles.subtitle}>
              Enterprise-grade protection aligned with global compliance
              standards.
            </p>
          )}
        </div>

        <div className={styles.logoGrid}>
          {data.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              height={logo.height}
              width={logo.width}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
