import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/banner/catch-up-banner.module.scss";
import { GoArrowRight } from "react-icons/go";

const AnnouncementBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.message}>
          Join Alluvium at Team ’26 in Anaheim (May 5-7)! Unlock human-AI
          collaboration at scale.
        </p>

        <a
          href="#tickets"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ticketLink}
        >
          <span className={styles.linkText}>GET TICKETS</span>
          <GoArrowRight color="white" />
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;
