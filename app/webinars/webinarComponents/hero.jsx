import React from "react";
import styles from "../../../styles/AtlassianWebinars/webinars.module.scss";
import { FaTicketSimple } from "react-icons/fa6";
import LeadForm from "components/leadform";
export default function WebinarHero() {
  return (
    <div className={styles.webinarHeroWrapper} id="claim-access">
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.webinarHeroContainer}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.contentOverlay}>
            <div className={styles.liveIndicator}>
              <span className={styles.liveText}>Live: Feb 5 - 2PM WAT</span>
              <span className={styles.clockIcon}>
                <FaTicketSimple fill="white" color="white" size={20} />
              </span>
            </div>

            <h1 className={styles.mainHeading}>
              Register for Our Atlassian Webinar Series
            </h1>

            <p className={styles.description}>
              Learn how high-performing teams use Atlassian tools to improve
              service delivery, scale operations, and work smarter, directly
              from experts.
            </p>
          </div>
        </div>

        {/* Right Section - Form Image Placeholder */}
        <div className={styles.rightSection}>
          <LeadForm
            dataUrl={
              "https://lfmdec-zinc.maillist-manage.com/ua/Optin?od=11287ecba0e4a5&zx=135756be4&tD=1b6f519ef5ce49f1&sD=1b6f519ef5d2e1c1"
            }
          />
        </div>
      </div>
    </div>
  );
}
