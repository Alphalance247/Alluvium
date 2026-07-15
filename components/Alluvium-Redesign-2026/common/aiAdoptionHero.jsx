import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/ai-adoption.module.scss";
import Link from "next/link";
import Image from "next/legacy/image";

const AiAdoptionHero = () => {
  const features = [
    {
      title: "Built for Insurance",
      desc: "Tailored to insurance workflows and challenges.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/icon8.svg",
    },
    {
      title: "Practical & Hands-On",
      desc: "Real-world use cases and actionable skills.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/icon7.svg",
    },
    {
      title: "Drive Real Impact",
      desc: "Improve efficiency, accuracy, and decision-making.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/icon6.svg",
    },
    {
      title: "Trusted & Secure",
      desc: "AI adoption with governance, ethics, and security in mind.",
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/icon5.svg",
    },
  ];

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          <h1 className={styles.heroTitle}>
            AI Adoption for{" "}
            <span className={styles.accent}>Insurance Teams</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Practical programmes that turn AI curiosity into measurable
            productivity built around your workflows, your tools, and your
            people.
          </p>
          <Link href={"/ai-adoption-training"}>
            <button className={styles.ctaButton}>
              EXPLORE TRAINING PROGRAMME
            </button>
          </Link>
        </div>

        {/* Feature Grid (The 4 boxes at the bottom) */}
        <div className={styles.featureGrid}>
          {features.map((item, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                <Image
                  src={item?.img}
                  width={32}
                  height={32}
                  alt={item?.title}
                />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAdoptionHero;
