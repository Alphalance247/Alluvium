import React from "react";
import Image from "next/image";
import styles from "../../styles/AlluviumRedesign2026/home/about.module.scss";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutImageColumn}>
              {/* TODO: Replace placeholder with Tishe & Babs image from the 2026 route when the final asset path is confirmed. */}

              <Image
                src="/assets/Alluvium-Redesign-2026/home/HrTools.png"
                alt="Alluvium team members collaborating"
                width={562}
                height={434}
                className={styles.aboutImage}
              />
            </div>

            <div className={styles.aboutContentColumn}>
              <h2 className={styles.aboutHeading}>
                You shouldn't have to fight
                <br />
                your tools to get work done.
              </h2>

              <p className={styles.aboutBody}>
                With
                <span className={styles.aboutBodyStrong}>
                  over 10,000 hours of Atlassian implementation experience,
                </span>{" "}
                we've helped global enterprises across the US, UK, and Nigeria
                transition from chaos to clarity. As specialized partners in
                Service Management and Cloud Migration, we don't just install
                software—we build systems that work for people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
