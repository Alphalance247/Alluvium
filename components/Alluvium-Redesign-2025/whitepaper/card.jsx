import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";

const WhitePaperCard = ({
  title = "Building Responsible AI Systems for Real-World Impact",
  author = "TAIWO OJO",
  date = "NOVEMBER 13, 2025",
  handsImage = "/assets/redesign-2025/whitepaper/hands-graphic.png", // Placeholder - user should provide this asset
}) => {
  return (
    <section className={styles.whitepaperCard}>
      <div className={styles.cardContainer}>
        <div className={styles.cardGraphic}>
          <Image
            src={handsImage}
            alt="Robotic and human hands reaching towards each other"
            width={373}
            height={460}
            className={styles.handsImage}
          />
        </div>

        <div className={styles.cardContent}>
          <p className={styles?.white__p}>Whitepaper</p>
          <h2 className={styles.cardTitle}>{title}</h2>

          <div className={styles.cardMeta}>
            <span className={styles.cardAuthor}>BY {author}</span>
            <span className={styles.cardBullet}>•</span>
            <span className={styles.cardDate}>{date}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaperCard;
