import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../../styles/AlluviumRedesign2025/swp.module.scss";

export default function SWPHero() {
  return (
    <section className={styles.swpHeroSection}>
      <div className={styles.swpHeroEclipse}></div>
      <div className={styles.swpHeroContainer}>
        {/* Left Content */}
        <div className={styles.swpHeroLeft}>
          <h1 className={styles.swpHeroHeading}>Get 20% Off SWP Summit</h1>

          <div className={styles.swpHeroLocationBox}>
            <span>London 2026</span>
          </div>

          <p className={styles.swpHeroDescription}>
            Join global workforce leaders and hear directly from Alluvium's CEO
            and other industry experts.
          </p>

          <p className={styles.swpHeroPartnerNote}>
            Exclusive partner discount for Alluvium network
          </p>

          <Link href={"https://www.swpsummit.com/book-now"} target="_blank">
            <button className={styles.swpHeroCta}>Claim 20% Discount</button>
          </Link>
        </div>

        {/* Right Images Grid */}
        <div className={styles.swpHeroRight}>
          <Image
            src="/assets/redesign-2025/home/shapes.png"
            width={941}
            height={800}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
