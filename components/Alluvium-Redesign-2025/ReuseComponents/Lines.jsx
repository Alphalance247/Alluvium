import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/lines.module.scss";

const Lines = () => {
  const rowsData = ["", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      <div className={styles.lineContainer}>
        {rowsData.map((row, index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
    </>
  );
};

export { Lines };
