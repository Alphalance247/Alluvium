import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/services.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const ServicesHero = ({
  badge,
  heading,
  subhead,
  btnName,
  serviceImage,
  alt,
}) => {
  return (
    <section className={styles.container}>
      {/* Text Content Area */}
      <div className={styles.contentSide}>
        <div className={styles.badge}>
          <span>{badge || "Strategic Ecosystem Partnerships"}</span>
        </div>

        <h1 className={styles.title}>
          {heading ||
            "The Strategic Technical Bench for Global Atlassian Partners."}{" "}
        </h1>

        <p className={styles.description}>
          {subhead ||
            "We collaborate with Solution Partners and Global Consultancies to execute high-stakes Atlassian transformations. From complex Cloud    Migrations to Enterprise Service Management, Alluvium provides the technical depth to ensure your project`s success."}
        </p>

        <div>
          {/* < className={styles.ctaButton}>
            Explore Collaborative Opportunities
          </button> */}
          <Link href="/contact-us">
            <Button className={styles.ctaButton} variant="primary">
              {btnName || "Explore Collaborative Opportunities"}
            </Button>
          </Link>
        </div>
      </div>

      {/* Visual Composition Area */}
      <div className={styles.visualSide}>
        <Image
          src={
            serviceImage || "/assets/Alluvium-Redesign-2026/services/hero2.png"
          }
          alt={
            alt || "Abstract background with feature image and partner logos"
          }
          width={481}
          height={550}
        />
        {/* <img
          src="https://placehold.co/862x975"
          className={styles.bgImage}
          alt="Abstract background"
        />
        <div className={styles.blurOverlay} /> */}

        {/* Feature Image */}
        {/* <img
          src="https://placehold.co/174x214"
          style={{
            position: "absolute",
            left: "40px",
            top: "40px",
            borderRadius: "8px",
          }}
          alt="Feature showcase"
        /> */}

        {/* Bottom Logo Card */}
        {/* <div className={`${styles.partnerCard} ${styles.bottomLogo}`}>
          <img src="https://placehold.co/226x66" alt="Client Logo" />
        </div> */}

        {/* Marketplace Badge Card */}
        {/* <div className={`${styles.partnerCard} ${styles.topRightBadge}`}>
          <img src="https://placehold.co/54x54" alt="Marketplace" />
          <div className={styles.verticalDivider} />
          <span
            style={{ fontWeight: "normal", fontSize: "20px", color: "#050b2e" }}
          >
            Marketplace Partner
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesHero;
