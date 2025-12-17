import WhitePaperCard from "./card";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";

const Publications = () => {
  // Whitepaper data - can be moved to a data file or fetched from API
  const whitepapers = [
    {
      id: 1,
      title: "Regulatory Supremacy and Competitive Edge",
      author: "TAIWO OJO",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/1a.png", // Robotic and human hands
      url: "/whitepaper/regulatory-supremacy-and-competitive-edge",
    },
  ];

  return (
    <section className={styles?.publication__main}>
      <div>
        <h2 className={styles?.h2}>Latest Publications</h2>

        <div className={styles.cardsGrid}>
          {whitepapers.map((whitepaper) => (
            <WhitePaperCard
              key={whitepaper.id}
              url={whitepaper?.url}
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

export default Publications;
