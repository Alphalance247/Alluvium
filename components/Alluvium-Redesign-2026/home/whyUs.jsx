import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/home/why-us.module.scss";
import Image from "next/legacy/image";

const WhyUs = () => {
  const values = [
    {
      title: "Global Delivery",
      description:
        "Follow-the-sun support across AMER, EMEA, and MEA time zones.",
      // In a real app, replace this div with <GlobalIcon /> or an <img />
      iconClass: styles.globalIcon,
      img: "/assets/Alluvium-Redesign-2026/home/flexible-procurement.svg",
      width: 138,
      height: 133,
    },
    {
      title: "Modernization Ready",
      description:
        "Expert implementation of Atlassian Rovo and AI-driven automation.",
      iconClass: styles.modernIcon,
      img: "/assets/Alluvium-Redesign-2026/home/atlassian-rovo.png",
      width: 190,
      height: 117,
    },
    {
      title: "Flexible Procurement",
      description:
        "Simplified billing in USD, GBP, or NGN to match your local operations.",
      iconClass: styles.procureIcon,
      img: "/assets/Alluvium-Redesign-2026/home/global-delivery.svg",
      width: 130,
      height: 131,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Why Alluvium?</h2>
          <p className={styles.subtitle}>
            You can find us in London, Stamford, Orlando, and Nairobi. We work
            across time zones to support global service operations.
          </p>
        </div>

        {/* Value Grid */}
        <div className={styles.grid}>
          {values.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.illustrationWrapper}>
                {/* This represents your complex absolute-positioned graphics */}
                <Image
                  src={item?.img}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                />
              </div>

              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
