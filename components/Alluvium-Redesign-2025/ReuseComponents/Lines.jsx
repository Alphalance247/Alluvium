import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/lines.module.scss";

const Lines = ({ variant }) => {
  const rowsData = ["", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      <div
        className={`${styles.lineContainer} ${
          styles[`lineContainer--${variant}`]
        }`}
      >
        {rowsData.map((row, index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
    </>
  );
};

export { Lines };
