import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/home-hero/team-26.module.scss";
import Image from "next/legacy/image";
import Link from "next/link";

const EventHero = () => {
  return (
    <section className={styles.wrapper}>
      {/* Background Glow remains outside innerContainer for bleed effect */}
      <div className={styles.blueGlow} />

      <div className={styles.innerContainer}>
        <div className={styles.content}>
          {/* Logo */}
          <Image
            src="/assets/Alluvium-Redesign-2026/home/small-logo.svg"
            alt="Atlassian Team 26"
            width={105}
            height={89}
          />

          {/* Text Content */}
          <div className={styles.headlines}>
            <h1>
              Join Us at <br /> Atlassian Team’26
            </h1>
            <p className={styles.subheading}>
              AI Talk: Exploring the Future of Intelligent Work
            </p>
          </div>

          <div className={styles.eventDate}>
            May 5 - 7 | Anaheim, California
          </div>

          <a href={"https://events.atlassian.com/team"} target="_blank">
            <button className={styles.registerBtn}>Register Now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
