import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/discover.module.scss";
import Image from "next/image";

const DiscoverySection = ({ heading, data, img }) => {
  return (
    <section className={styles.discoverySection}>
      <h2 className={styles.header}>{heading || "The Migration Blueprint"}</h2>
      <div className={styles.section}>
        <div className={styles.container}>
          {/* Left Side: Visual Illustration */}

          <div className={styles.visualSide}>
            <Image
              src={img || "/assets/Alluvium-Redesign-2026/services/large.png"}
              alt="Discovery Illustration"
              className={styles.illustration}
              width={506}
              height={540}
            />
          </div>

          {/* Right Side: Looped Content */}
          <div className={styles.contentSide}>
            <div className={styles.stepsList}>
              {data.map((step, index) => (
                <div
                  key={step.id}
                  className={`${styles.stepCard} ${index % 2 !== 0 ? styles.alternate : ""}`}
                >
                  <div className={styles.stepNumber}>{step.id}</div>
                  <div className={styles.stepInfo}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
