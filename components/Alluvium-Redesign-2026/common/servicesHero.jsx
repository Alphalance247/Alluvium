import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/services.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";

const ServiceHero = ({
  badges,
  heading,
  subhead,
  btnName,
  serviceImage,
  alt,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        {/* Main Content Area */}
        <div className={styles.textContent}>
          <h2>{heading || "Cloud Upgrade: Secure. Scalable. Seamless."}</h2>
          <p>
            {subhead ||
              "We don’t just move data; we migrate your business logic. Alluvium provides the strategic technical bench for high-stakes migrations, ensuring security, compliance, and optimized performance from Day one."}
          </p>

          <Link href="/contact-us">
            <Button className={styles.ctaButton} variant="primary">
              {btnName || "Schedule a Strategy Session"}
            </Button>
          </Link>
        </div>

        {/* Logos & Trust Badges */}
        <div className={styles.logoGrid}>
          {badges.map((item) => (
            <Image
              src={item.imgSrc}
              key={item?.id}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className={styles.secondaryLogo}
            />
          ))}

          {/* <img
              src="https://placehold.co/54x54"
              alt="Atlassian Gold Icon"
              className={styles.badgeIcon}
            /> */}
          {/* <div className={styles.divider} />
            <div className={styles.badgeText}>
              Gold
              <br />
              Solution Partner
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
