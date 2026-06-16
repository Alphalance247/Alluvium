import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/partnership-grid.module.scss";

const PartnershipGrid = () => {
  const valueCards = [
    {
      title: "Claude Expertise",
      desc: "Direct access to Anthropic insights, best practices and Claude expertise.",
      iconClass: styles.expertiseIcon,
    },
    {
      title: "Responsible AI",
      desc: "Built on trust, security and responsible AI principles.",
      iconClass: styles.responsibleIcon,
    },
    {
      title: "Practical Adoption",
      desc: "Real-world frameworks that drive adoption and measurable results.",
      iconClass: styles.adoptionIcon,
    },
    {
      title: "Enterprise Delivery",
      desc: "Scalable delivery across training, transformation and implementation.",
      iconClass: styles.deliveryIcon,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        {/* Left Side: Callout Text Column */}
        <div className={styles.introColumn}>
          <div className={styles.headerStack}>
            <span className={styles.overline}>OUR ANTHROPIC PARTNERSHIP</span>
            <h2 className={styles.title}>Why Our Partnership Matters</h2>
          </div>
          <p className={styles.leadParagraph}>
            As an Anthropic partner, we combine Claude&apos;s advanced
            capabilities with our deep enterprise expertise to deliver secure,
            responsible and measurable AI outcomes.
          </p>
        </div>

        {/* Right Side: 2x2 Feature Value Grid */}
        <div className={styles.gridColumn}>
          {valueCards.map((card, idx) => (
            <div key={idx} className={styles.valueCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <div className={`${styles.baseIcon} ${card.iconClass}`} />
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipGrid;
