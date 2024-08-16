import React, { useState, useEffect } from 'react';
import styles from "../../styles/licence.module.scss";
import { cloudcounter } from "data";

const MigrationProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep % cloudcounter.length) + 1);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`container-fluid ${styles.migration__process__alluvium}`}>
      <div className={`container m-auto ${styles.migration__process}`}>
        <h6>Alluvium Cloud Migration Process</h6>
        
        <div className={styles.cloud__process}>
          {cloudcounter.map((el) => {
            const isActive = parseInt(el.id) <= activeStep;
            return (
              <div key={el.id} className={styles.timeline_item}>
                <div className={`${styles.timeline_content} ${isActive ? styles.active : ''}`}>
                  <h6>{el.id}</h6>
                  <p>{el.content}</p>
                </div>
                <div className={`${styles.timeline_circle} ${isActive ? styles.active : ''}`}></div>
                {el.id !== cloudcounter.length.toString() && (
                  <div className={`${styles.timeline_line} ${isActive ? styles.active : ''}`}></div>
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