import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/event-details.module.scss";

const MainStageHero = ({ backgroundImage = "" }) => {
  return (
    <section className={styles.heroWrapper}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      ></div>
    </section>
  );
};

export default MainStageHero;
