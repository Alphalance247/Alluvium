import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import Image from "next/image";

const WhitePaperHeroSection = () => {
  return (
    <section className={styles.whitepaperHero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.head}>
            CBN Consumer Protection Regulations (2019)
          </p>
          <h1>Regulatory Supremacy and Competitive Edge</h1>
          <p className={styles.time}>
            {" "}
            September 15th, 2024 | 5 mins read | Whitepaper
          </p>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/assets/redesign-2025/whitepaper/flag.png"
            alt="Whitepaper"
            width={616}
            height={617}
            className={styles.flagImage}
          />
        </div>
      </div>
    </section>
  );
};

export default WhitePaperHeroSection;
