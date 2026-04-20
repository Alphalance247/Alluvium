import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/events/hero.module.scss";

const EventsBanner = ({ title, heading, subhead, backgroundImage }) => {
  const sectionStyle = backgroundImage
    ? { backgroundImage: `url("${backgroundImage}")` }
    : {};

  return (
    <section className={styles.section} style={sectionStyle}>
      <div className={styles.container}>
        {title && <p className={styles.heading}>{title}</p>}
        <h1 className={styles.title}>{heading || "Webinars & Events"}</h1>
        <p className={styles.description}>
          {subhead ||
            "Explore thought-provoking roundtables, in-depth customer support discussions, case studies, Atlassian product demos, and more."}
        </p>
      </div>
    </section>
  );
};

export default EventsBanner;
