import React from "react";
import styles from "../../styles/AlluviumRedesign2026/home/service.module.scss";
import Image from "next/legacy/image";

export default function Service() {
  return (
    <section className={styles.serviceSection}>
      <div className={styles.serviceContainer}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceColumns}>
            <article className={styles.serviceColumn}>
              <div className={styles.serviceLabel}>CLOUD MIGRATION</div>

              <h3 className={styles.serviceHeading}>
                Zero-Downtime Transitions
              </h3>

              <p className={styles.serviceBodyNil}>
                Move to the cloud with total data integrity and zero disruption
                to your daily operations.
              </p>

              {/* TODO: Replace placeholder with final Cloud Migration diagram asset when available. */}
              <Image
                src="/assets/Alluvium-Redesign-2026/home/zero-downtown.png"
                width={509}
                height={248}
                alt="downtown"
              />
            </article>

            <article className={styles.serviceColumn}>
              <div className={styles.serviceLabel}>SERVICE MANAGEMENT</div>

              <h3 className={styles.serviceHeading}>High-Velocity ITSM</h3>

              <p className={styles.serviceBody}>
                Empower your IT and HR teams to resolve requests in minutes, not
                days.
              </p>

              {/* TODO: Replace placeholder with final ITSM flow asset when available. */}
              <Image
                src="/assets/Alluvium-Redesign-2026/home/down.png"
                width={300}
                height={258}
                alt="downtown"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
