import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/accelerating-incident/Herosection.module.scss";
import Image from "next/legacy/image";

const HeroSection = () => {
  return (
    <section className={styles.mainContainer}>
      <main>
        <div className={styles.heroText}>
          <p className={styles.modal}>ALLUVIUM USER GROUP EVENT</p>
          <h2>
            Accelerating Incident <br /> Management Through AI- <br />
            Assisted Solutions
          </h2>
          <p className={styles.discover}>
            Discover how AI-driven strategies Resolve incidents faster, reduce{" "}
            <br />
            downtime, and empower your team with intelligent automation. 
          </p>
          <div>
            <a href="#form">Register Now</a>
          </div>
        </div>
        <div style={{ marginTop: "64px" }}>
          <Image
            src="/assets/redesign-2025/Container.webp"
            alt="hero image"
            width={1280}
            height={361}
            // layout="fill"
          />
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
