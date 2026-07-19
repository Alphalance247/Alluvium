import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/core-value.module.scss";
import Image from "next/legacy/image";

const valuesData = [
  {
    title: "Leadership",
    description:
      "Leadership is about driving innovation and continuously improving our services and products. We believe in staying ahead of the curve and exploring new ways to enhance our offerings and deliver greater value to our clients.",
    iconClass: "/assets/Alluvium-Redesign-2026/home/excel.svg",
  },
  {
    title: "Excellence",
    description:
      "Excellence is about delivering top-quality results and exceeding our clients’ expectations. We are committed to delivering the best possible outcomes and consistently exceeding our clients’ goals and objectives.",
    iconClass: "/assets/Alluvium-Redesign-2026/home/owner.svg",
  },
  {
    title: "Ownership",
    description:
      "Ownership is about taking personal responsibility for our work and delivering results. Our team is encouraged to bring their unique skills and perspectives to each project, and we strive to create a culture of collaboration.",
    iconClass: "/assets/Alluvium-Redesign-2026/home/leader.svg",
  },
];

const ValuesGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>Our values</div>
          <h2>
            Our values are the driving force behind everything we do at Alluvium
          </h2>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {valuesData.map((val, index) => (
            <div key={index} className={styles.valueCard}>
              <Image
                src={val.iconClass}
                width={40}
                height={40}
                alt={val.title}
              />
              <div className={styles.textContent}>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
