import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/hero.module.scss";
import Image from "next/image";

const PartnershipBadge = () => {
  return (
    <div className={styles.badgeBar}>
      <div className={styles.logoGroup}>
        {/* Alluvium Logo Placeholder */}
        <Image
          width={100}
          height={20}
          src="/assets/alluvium-logo-dark.svg"
          alt="Alluvium Dark Logo"
        />

        <span className={styles.dividerText}>X</span>

        {/* Partner Logo Placeholder */}
        <Image
          width={93}
          height={20}
          src="/assets/Alluvium-Redesign-2026/ai-adoption/logos_claude.svg"
          alt="Claude Logo"
        />
      </div>
    </div>
  );
};

export default PartnershipBadge;
