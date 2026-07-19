import React, { useState, useEffect } from "react";
import styles from "../../../styles/AtlassianWebinars/webinars.module.scss";

export default function EventCountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 9,
    minutes: 17,
    seconds: 3,
  });

  useEffect(() => {
    // TODO: Calculate actual time until event date
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days -= 1;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (num) => String(num).padStart(2, "0");

  return (
    <div className={styles.countdownContainer}>
      <div className={styles.countdownContent}>
        <div className={styles.eventStartsLabel}>Event starts in</div>

        <div className={styles.countdownGrid}>
          <div className={styles.countdownItem}>
            <div className={styles.countdownNumber}>
              {padNumber(timeLeft.days)}
            </div>
            <div className={styles.countdownLabel}>DAYS</div>
          </div>

          <div className={styles.countdownItem}>
            <div className={styles.countdownNumber}>
              {padNumber(timeLeft.hours)}
            </div>
            <div className={styles.countdownLabel}>HOURS</div>
          </div>

          <div className={styles.countdownItem}>
            <div className={styles.countdownNumber}>
              {padNumber(timeLeft.minutes)}
            </div>
            <div className={styles.countdownLabel}>MINUTES</div>
          </div>

          <div className={styles.countdownItem}>
            <div className={styles.countdownNumber}>
              {padNumber(timeLeft.seconds)}
            </div>
            <div className={styles.countdownLabel}>SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
