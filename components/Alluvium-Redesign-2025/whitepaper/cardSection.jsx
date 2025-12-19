import WhitePaperCard from "./card";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";

const CardSection = () => {
  // Whitepaper data - can be moved to a data file or fetched from API
  const whitepapers = [
    {
      id: 1,
      title: "Regulatory Supremacy and Competitive Edge",
      author: "TAIWO OJO",
      link: "/whitepaper/regulatory-supremacy-and-competitive-edge",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/white-paper-1.png",
    },
  ];

  return (
    <section className={styles.cardSection}>
      <div className={styles.cardSectionContainer}>
        <h2 className={styles.cardSectionTitle}>
          Explore Our Additional Whitepapers, Reports, and In-Depth Research
          Materials
        </h2>

        <div className={styles.cardsGrid}>
          {whitepapers.map((whitepaper) => (
            <WhitePaperCard
              key={whitepaper.id}
              url={whitepaper?.link}
              title={whitepaper.title}
              author={whitepaper.author}
              date={whitepaper.date}
              handsImage={whitepaper.handsImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
