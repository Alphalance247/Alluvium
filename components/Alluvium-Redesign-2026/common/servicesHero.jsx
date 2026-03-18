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
    <section className={styles.sectionHeading}>
      <div className={styles.container}>
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
          <img
            src={
              serviceImage ||
              "/assets/Alluvium-Redesign-2026/services/hero2.png"
            }
            alt={
              alt || "Abstract background with feature image and partner logos"
            }
            width={511}
            height={620}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
