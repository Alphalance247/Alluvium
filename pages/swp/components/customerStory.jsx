import styles from "styles/AlluviumRedesign2025/swp/swp.module.scss";
import AboutAlluvium from "./aboutAlluvium";

const CustomerStory = () => {
  const stories = [
    {
      id: 1,
      title: "Atlassian Implementation & Cloud Migration Results.",
      description:
        "Passionate about growth and excellence, our client and their small team of more than 3,000 people across the globe, focus on creating ways for their customers to thrive in the agri-food industry.",
    },
    {
      id: 2,
      title: "Atlassian Implementation & Cloud Migration Results.",
      description:
        "Passionate about growth and excellence, our client and their small team of more than 3,000 people across the globe, focus on creating ways for their customers to thrive in the agri-food industry.",
    },
    {
      id: 3,
      title: "Atlassian Implementation & Cloud Migration Results.",
      description:
        "Passionate about growth and excellence, our client and their small team of more than 3,000 people across the globe, focus on creating ways for their customers to thrive in the agri-food industry.",
    },
    {
      id: 4,
      title: "Atlassian Implementation & Cloud Migration Results.",
      description:
        "Passionate about growth and excellence, our client and their small team of more than 3,000 people across the globe, focus on creating ways for their customers to thrive in the agri-food industry.",
    },
  ];

  return (
    <section className={styles.customerStory__section}>
      <div className={styles.customerStory__container}>
        <div></div>
        <div>
          <AboutAlluvium />
          <h2 className={styles.customerStory__heading}>Our Customer Story</h2>
          <div className={styles.customerStory__grid}>
            {stories.map((story) => (
              <div key={story.id} className={styles.customerStory__card}>
                <div className={styles.customerStory__card__content}>
                  <h3 className={styles.card__title}>{story.title}</h3>
                  <p className={styles.card__description}>
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStory;
