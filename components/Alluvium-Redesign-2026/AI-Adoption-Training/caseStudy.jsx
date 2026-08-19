import React, { useState } from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/case-study.module.scss";
import Image from "next/legacy/image";

const caseStudies = [
  {
    id: "hub",
    name: "HUB International",
    title: "HUB International",
    subtitle: "Leading North American insurance brokerage",
    image: "/assets/Alluvium-Redesign-2026/ai-adoption/hub-international.png", // Modern office
    stats: [
      {
        text: "85% productivity gains in targeted use cases",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/1d.svg",
      },
      {
        text: "2.5 hours saved per employee per week",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/1e.svg",
      },
      {
        text: "Deployed Claude to 20,000+ employees across a regulated environment",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/1c.svg",
      },
      {
        text: "90%+ user satisfaction—one of the fastest AI rollouts in finance",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/1a.svg",
      },
    ],
  },
  {
    id: "allianz",
    name: "Allianz",
    title: "Allianz",
    subtitle: "Global leader in insurance and asset management",
    image: "/assets/Alluvium-Redesign-2026/ai-adoption/Course.png", // Corporate skyscraper
    stats: [
      {
        text: "AGlobal partnership with Anthropic to embed Claude across the business",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/icon2.svg",
      },
      {
        text: "Pet insurance invoices processed within four hours using AI",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/icon4.svg",
      },
      {
        text: "Full traceability and compliance logging built in from day one",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/icon3.svg",
      },
      {
        text: "Custom AI agents automating motor and health insurance claims end-to-end",
        icon: "/assets/Alluvium-Redesign-2026/ai-adoption/icon1.svg",
      },
    ],
  },
];

const CaseStudyTabs = () => {
  const [activeTab, setActiveTab] = useState("hub");
  const activeData = caseStudies.find((s) => s.id === activeTab);

  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <h2 className={styles.mainHeading}>
          Claude in Insurance: Proven at Scale
        </h2>

        {/* Tab Navigation */}
        <div className={styles.tabNav}>
          {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`${styles.tabBtn} ${activeTab === study.id ? styles.active : ""}`}
            >
              {study.name}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className={styles.contentDisplay}>
          <div
            className={styles.imageLayer}
            style={{ backgroundImage: `url(${activeData.image})` }}
          >
            <div className={styles.scrim} />
          </div>

          {/* Bottom Stats Overlay */}
          <div className={styles.statsBar}>
            {activeData.stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <Image width={32} height={32} src={stat.icon} alt={stat.text} />
                <p className={styles.statText}>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTabs;
