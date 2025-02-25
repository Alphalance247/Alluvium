import React from "react";
import styles from "../../styles/AlluviumRedesign2025/featureDataDescription.module.scss";
import Image from "next/image";
import LeadForm from "pages/event/itsm-solutions/form/leadform";

const FeatureData = ({ featureData }) => {
  return (
    <div className={styles.feature__description__section}>
      <div>
        <p className={styles.event}>Event Features</p>
        <div className={styles.card__section}>
          {featureData.map((item) => {
            return (
              <div className={styles.card}>
                <Image src={item?.icon} width={102} height={98} alt="icon" />
                <h4 style={{ width: item?.width }}>{item?.heading}</h4>
                <p className={styles.subhead}>{item?.subhead}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.form} id="form">
        <p className={styles.event}>Register here</p>
        <LeadForm />
      </div>
    </div>
  );
};

export default FeatureData;
