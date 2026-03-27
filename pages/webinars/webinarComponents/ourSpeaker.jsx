import React from "react";
import styles from "../../../styles/AtlassianWebinars/webinars.module.scss";
import Image from "next/image";

export default function OurSpeaker() {
  return (
    <div className={styles.ourSpeakerContainer}>
      <div className={styles.ourSpeakerWrapper}>
        <h2 className={styles.ourSpeakerMainHeading}>Our Speaker</h2>
        <h3 className={styles.speakerName}>Taiwo Ojo</h3>

        <div className={styles.speakerContent}>
          <div className={styles.speakerImageWrapper}>
            <div className={styles.speakerImagePlaceholder}>
              <Image
                src="/assets/webinar/jaytee.png"
                width={182}
                height={182}
                alt="jaytee"
              />
            </div>
          </div>

          <div className={styles.speakerInfo}>
            <p className={styles.speakerTitle}>Alluvium Technical Lead</p>
            <p className={styles.speakerBio}>
              Taiwo Ojo is an Atlassian certified architect with 12+ years
              scaling Jira and Confluence for enterprises like global banks and
              tech unicorns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
