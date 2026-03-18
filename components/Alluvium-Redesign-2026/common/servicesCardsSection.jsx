import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/servicesCard.module.scss";
import Image from "next/image";

const ServicesCardsSection = ({ triadData, heading }) => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {heading || 'The "Three Pillars" of Alluvium'}
        </h2>

        <div className={styles.cardGrid}>
          {triadData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* Your complex div-based icons go here */}
                <Image
                  src={item?.icon}
                  width={item?.width}
                  height={item?.height}
                  alt="icons"
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;
