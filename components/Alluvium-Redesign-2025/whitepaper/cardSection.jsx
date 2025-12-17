import WhitePaperCard from "./card";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";

const CardSection = () => {
  // Whitepaper data - can be moved to a data file or fetched from API
  const whitepapers = [
    {
      id: 1,
      title: "Building Responsible AI Systems for Real-World Impact",
      author: "TAIWO OJO",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/1a.png", // Robotic and human hands
    },
    {
      id: 2,
      title: "Building Responsible AI Systems for Real-World Impact",
      author: "TAIWO OJO",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/1b.png", // Video editing timeline
    },
    {
      id: 3,
      title: "Building Responsible AI Systems for Real-World Impact",
      author: "TAIWO OJO",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/1c.png", // Smart home devices
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
