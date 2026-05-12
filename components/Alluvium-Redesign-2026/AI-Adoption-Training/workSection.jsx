import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/workshop.module.scss";
import PatternSeparator from "./patternSeperator";

const WorkshopSection = () => {
  const workshopDetails = [
    {
      title: "Copilot + Claude AI Productivity Workshop",
      subtitle: "Half-day • Up to 15 participants",

      features: [
        "How to use Microsoft Copilot and Claude separately for different task types",
        "Where each tool excels and how to combine them for maximum output",
        "Hands-on exercises built around real insurance scenarios",
        "Immediate takeaways your team can apply the next day",
      ],
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/claude-copilot-illustration.png",
    },
    {
      title: "Copilot + Claude AI Productivity Workshop",
      subtitle: "Multi-session • Structured rollout",
      features: [
        "Use case discovery scoped to your specific workflows",
        "Dedicated module on spreadsheet & document reconciliation",
        "Integrating Copilot and Claude into a single, coherent team workflow",
        "Builds internal champions who sustain adoption after delivery",
      ],
      img: "/assets/Alluvium-Redesign-2026/ai-adoption/champion-enablement.png",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          {/* Header Section */}
          <div className={styles.headerArea}>
            <h2 className={styles.title}>Our Programmes</h2>
          </div>

          <PatternSeparator width={1280} height={67} />

          {/* Workshop Details Area */}
          <div>
            {workshopDetails?.map((workshop, i) => (
              <React.Fragment key={i}>
                {i > 0 && <PatternSeparator width={1280} height={67} />}
                <div
                  className={
                    i === 1
                      ? `${styles.detailsRow} ${styles.detailsRowReverse}`
                      : styles.detailsRow
                  }
                >
                  <div className={styles.textSide}>
                    <div className={styles.intro}>
                      <h3 className={styles.workshopTitle}>
                        {workshop?.title}
                      </h3>
                      <p className={styles.subtitle}>{workshop?.subtitle}</p>
                    </div>

                    <ul className={styles.featureList}>
                      {workshop?.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M7.00002 12.8334C6.19308 12.8334 5.43474 12.6802 4.72502 12.3737C4.0153 12.0673 3.39794 11.6518 2.87294 11.1272C2.34794 10.6026 1.93241 9.98519 1.62635 9.27508C1.3203 8.56497 1.16708 7.80664 1.16669 7.00008C1.1663 6.19353 1.31952 5.43519 1.62635 4.72508C1.93319 4.01497 2.34872 3.39761 2.87294 2.873C3.39716 2.34839 4.01452 1.93286 4.72502 1.62641C5.43552 1.31997 6.19385 1.16675 7.00002 1.16675C7.80619 1.16675 8.56452 1.31997 9.27502 1.62641C9.98552 1.93286 10.6029 2.34839 11.1271 2.873C11.6513 3.39761 12.067 4.01497 12.3743 4.72508C12.6815 5.43519 12.8345 6.19353 12.8334 7.00008C12.8322 7.80664 12.679 8.56497 12.3737 9.27508C12.0684 9.98519 11.6529 10.6026 11.1271 11.1272C10.6013 11.6518 9.98396 12.0675 9.27502 12.3743C8.56608 12.6812 7.80774 12.8342 7.00002 12.8334ZM7.00002 11.6667C8.3028 11.6667 9.40627 11.2147 10.3104 10.3105C11.2146 9.40633 11.6667 8.30286 11.6667 7.00008C11.6667 5.6973 11.2146 4.59383 10.3104 3.68966C9.40627 2.7855 8.3028 2.33341 7.00002 2.33341C5.69724 2.33341 4.59377 2.7855 3.6896 3.68966C2.78544 4.59383 2.33335 5.6973 2.33335 7.00008C2.33335 8.30286 2.78544 9.40633 3.6896 10.3105C4.59377 11.2147 5.69724 11.6667 7.00002 11.6667Z"
                              fill="#92989E"
                            />
                          </svg>
                          <span className={styles.featureText}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual/Image Side */}
                  <div className={styles.visualSide}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={workshop?.img}
                        alt="Workshop Visual"
                        className={styles.mainImg}
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className={styles.patternBar}>
            <div className={styles.patternInner}>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={styles.diamond} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
