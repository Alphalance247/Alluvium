import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/services.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";

const ServiceHero = ({
  badges,
  heading,
  subhead,
  btnName,
  serviceImageIsAvailable = false,
  serviceImage,
  btnName2,
  isBtn2 = false,
}) => {
  return (
    <section
      className={styles.wrapper}
      style={
        serviceImageIsAvailable
          ? { backgroundImage: `url(${serviceImage})` }
          : { backgroundColor: "#111827" }
      }
    >
      <div className={styles.innerContainer}>
        {/* Main Content Area */}
        <div className={styles.textContent}>
          <h2>{heading || "Cloud Upgrade: Secure. Scalable. Seamless."}</h2>
          <p>
            {subhead ||
              "We don’t just move data; we migrate your business logic. Alluvium provides the strategic technical bench for high-stakes migrations, ensuring security, compliance, and optimized performance from Day one."}
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            {isBtn2 && (
              <Link href="/contact-us">
                <Button className={styles.ctaButton2} variant="secondary">
                  {btnName2 || "Schedule a Strategy Session"}
                </Button>
              </Link>
            )}

            <Link href="/contact-us">
              <Button>{btnName || "Schedule a Strategy Session"}</Button>
            </Link>
          </div>
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
