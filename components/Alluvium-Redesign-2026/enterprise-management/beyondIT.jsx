import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/enterprise-management/beyondIT.module.scss";

const services = [
  {
    id: 1,
    title: "HR Service Management",
    description:
      "Automated onboarding/offboarding, leave requests, and employee document management.",
    imageUrl: "/assets/Alluvium-Redesign-2026/services/beyond2.png",
  },
  {
    id: 2,
    title: "Finance Operations",
    description:
      "Streamlined expense approvals, procurement workflows, and vendor management.",
    imageUrl: "/assets/Alluvium-Redesign-2026/services/beyond3.png",
  },
  {
    id: 3,
    title: "Legal & Facilities",
    description:
      "Controlled intake for contract reviews, office maintenance requests, and security access.",
    imageUrl: "/assets/Alluvium-Redesign-2026/services/beyond1.png",
  },
];

const BeyondIT = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Beyond IT</h2>

        <div className={styles.cardGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>

              <img
                src={service.imageUrl}
                alt={service.title}
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondIT;
