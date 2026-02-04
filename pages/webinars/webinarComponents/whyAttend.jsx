import React from "react";
import styles from "../../../styles/AtlassianWebinars/webinars.module.scss";
import { GoDatabase } from "react-icons/go";
export default function WhyAttend() {
  const attendReasons = [
    {
      id: 1,
      title: "Learn from Experts",
      description:
        "Gain practical insights from Atlassian specialists and delivery professionals.",
    },
    {
      id: 2,
      title: "Real-World Use Cases",
      description: "See how modern teams solve real operational challenges.",
    },
    {
      id: 3,
      title: "Actionable Frameworks",
      description: "Leave with tools and strategies you can apply immediately.",
    },
    {
      id: 4,
      title: "Live Q&A Sessions",
      description: "Ask your questions and get direct answers from experts.",
    },
  ];

  return (
    <div className={styles.whyAttendContainer}>
      <div className={styles.whyAttendWrapper}>
        {/* Left Section */}
        <div className={styles.whyAttendLeft}>
          <h2 className={styles.whyAttendHeading}>Why Attend</h2>
          <p className={styles.whyAttendDescription}>
            Discover cutting-edge insights and immersive experiences that 64% of
            attendees prioritize. Gain practical skills through customized
            agendas and tech-enhanced sessions, leaving you informed and
            inspired
          </p>
          <button className={styles.whyAttendButton}>Claim free access</button>
        </div>

        {/* Right Section */}
        <div className={styles.whyAttendRight}>
          <div className={styles.reasonsGrid}>
            {attendReasons.map((reason) => (
              <div key={reason.id} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>
                  <GoDatabase size={32} color="white" />
                </div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonText}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
