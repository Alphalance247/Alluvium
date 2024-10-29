import React, { useState, useEffect } from "react";
import styles from "../../styles/licence.module.scss";
import { cloudcounter } from "data";

const MigrationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % cloudcounter.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`container-fluid ${styles.migration__process__alluvium}`}>
      <div className={`container m-auto ${styles.migration__process}`}>
        <h2>Alluvium Cloud Migration Process</h2>

        <div className={styles.cloud__process}>
          {cloudcounter.map((el, index) => {
            const isActive = index <= activeStep;
            const isCurrentStep = index === activeStep;
            return (
              <div key={el.id} className={styles.timeline_item}>
                <div
                  className={`${styles.timeline_content} ${
                    isActive ? styles.active : ""
                  }`}
                >
                  <span>{el.id}</span>
                  <h3>{el.content}</h3>
                </div>
                <div
                  className={`${styles.timeline_circle} ${
                    isActive ? styles.active : ""
                  }`}
                ></div>
                {index < cloudcounter.length - 1 && (
                  <div
                    className={`${styles.timeline_line} ${
                      isCurrentStep ? styles.active : ""
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>

        <p>
          Before starting your migration journey, we take the time to truly
          understand your unique Atlassian landscape. Through a comprehensive
          analysis of your current instance, we uncover your specific needs and
          pain points. This phase which takes about 14-21 days allows us to
          customize a migration strategy that seamlessly aligns with your
          business objectives.
        </p>
      </div>
    </div>
  );
};

export default MigrationProcess;
