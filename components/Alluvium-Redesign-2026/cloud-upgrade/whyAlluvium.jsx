import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/cloud-upgrade/why-alluvium.module.scss";
import Image from "next/legacy/image";

const featuresData = [
  {
    id: 1,
    title: "Gold Partner Excellence",
    description:
      "We bring the rigor of an Atlassian Gold Solution Partner to every project.",
    icon: "/assets/Alluvium-Redesign-2026/services/gold.svg",
  },
  {
    id: 2,
    title: "Scalable Delivery",
    description:
      "Whether you are an end-client or a Partner looking to augment your bench, we offer a 'follow-the-sun' delivery model globally.",
    icon: "/assets/Alluvium-Redesign-2026/services/scale.svg",
  },
  {
    id: 3,
    title: "Modernization Ready",
    description:
      "We don't just 'lift and shift'—we help you adopt Cloud-only features like Atlassian Intelligence (Rovo) and JSM assets immediately.",
    icon: "/assets/Alluvium-Redesign-2026/services/modern.svg",
  },
];

const WhyAlluvium = () => {
  return (
    <section className={styles.section}>
      <div className={styles.innerBorder}>
        <div className={styles.content}>
          <h2 className={styles.title}>Why Alluvium?</h2>

          <div className={styles.grid}>
            {featuresData.map((item) => (
              <div key={item.id} className={styles.featureCard}>
                {/* Icon Container with Blur Effect */}
                <div className={styles.iconBox}>
                  <Image src={item?.icon} width={56} height={56} alt="icons" />
                  {/* <div className={styles.iconGraphic} /> */}
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <div className={styles.divider} />
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlluvium;
