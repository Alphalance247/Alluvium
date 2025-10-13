import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/LineWithIcons.module.scss";
import LineIcons from "../icons/LineIcons";

const LineWithIcons = () => {
  return (
    <div className={styles.lineContainer}>
      <div style={{ height: "96px" }} className={styles.line} />
      <LineIcons />
      <div style={{ height: "264px" }} className={styles.line} />
      <LineIcons />
      <div style={{ height: "264px" }} className={styles.line} />
      <LineIcons />
      <div style={{ height: "264px" }} className={styles.line} />
      <LineIcons />
      <div style={{ height: "254px" }} className={styles.line} />
      <LineIcons />
      <div style={{ height: "254px" }} className={styles.line} />
    </div>
  );
};

export default LineWithIcons;
