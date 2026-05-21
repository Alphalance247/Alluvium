import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/benefit.module.scss";
import Image from "next/image";

const Benefits = () => {
  const benefitCards = [
    {
      title: "Save Hours Per Week",
      description:
        "Automate reconciliation, summarisation, and drafting tasks.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/automate-reconcillation.png",
    },
    {
      title: "Reduce Error Rates",
      description:
        "AI-assisted review catches inconsistencies humans routinely miss.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/error-rate-reduce.png",
    },
    {
      title: "Stay in Control",
      description:
        "Clear guardrails on data handling, compliance, and safe usage.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/control.png",
    },
  ];

  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* Header Text */}
          <div className={styles.header}>
            <h2 className={styles.title}>Why AI Training and Why Now?</h2>
            <p className={styles.subtitle}>
              Practical programmes that turn AI curiosity into measurable
              productivity built around your workflows, your tools, and your
              people.
            </p>
          </div>

          {/* Benefit Cards Grid */}
          <div className={styles.grid}>
            {benefitCards.map((benefit, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageBox}>
                  <Image
                    width={325}
                    height={177}
                    src={benefit.img}
                    alt={benefit.title}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDescription}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
