import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import { FaBookOpen } from "react-icons/fa";

const WhitePaperHeroSection = ({
  widthSpec,
  heightSpec,
  subhero,
  title,
  imageSrc,
  readTime,
  date,
  category,
}) => {
  return (
    <section className={styles.whitepaperHero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.head}>{subhero}</p>
          <h1>{title}</h1>
          <p className={styles.time}>
            {" "}
            {date} |{" "}
            <span>
              <FaBookOpen color="white" fill="white" />
            </span>{" "}
            {readTime} | {category}
          </p>
        </div>

        <div className={styles.heroImage}>
          <img
            src={imageSrc}
            alt="Whitepaper"
            width={widthSpec || 616}
            height={heightSpec || 617}
            className={styles.flagImage}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhitePaperHeroSection;
