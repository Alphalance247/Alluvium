import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/partnership-grid.module.scss";
import { FiUsers } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineBank } from "react-icons/ai";

const PartnershipGrid = () => {
  const valueCards = [
    {
      title: "Claude Expertise",
      desc: "Direct access to Anthropic insights, best practices and Claude expertise.",
      iconClass: <FiUsers />,
    },
    {
      title: "Responsible AI",
      desc: "Built on trust, security and responsible AI principles.",
      iconClass: <GoShieldCheck />,
    },
    {
      title: "Practical Adoption",
      desc: "Real-world frameworks that drive adoption and measurable results.",
      iconClass: <TbTargetArrow />,
    },
    {
      title: "Enterprise Delivery",
      desc: "Scalable delivery across training, transformation and implementation.",
      iconClass: <AiOutlineBank />,
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
                  <div className={`${styles.baseIcon}`}>{card.iconClass}</div>
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
