import SectionHeader from "../SectionHeader";
import styles from "../../../styles/cloud-connect-2/Home/whyAttend.module.scss";

const data = [
  {
    icon: "/assets/cloud-connect/icons/ic_outline-insights.svg",
    title: "Insights and Trends",
    description:
      "Learn about the latest developments in cloud technology from leading industry experts.",
  },
  {
    icon: "/assets/cloud-connect/icons/la_handshake-solid.svg",
    title: "Networking",
    description:
      "Connect with peers, thought leaders, and innovators from around the world.",
  },
  {
    icon: "/assets/cloud-connect/icons/icons8_idea.svg",
    title: "Learning Opportunities",
    description:
      "Participate in interactive workshops and sessions to enhance your skills and knowledge.",
  },
  {
    icon: "/assets/cloud-connect/icons/icon-park-outline_database-success.svg",
    title: "Access to New Technologies",
    description:
      "Discover the latest tools and solutions that can drive your business forward.",
  },
  {
    icon: "/assets/cloud-connect/icons/icons8_idea.svg",
    title: "Group Discussions",
    description:
      "Participate in interactive workshops and sessions to enhance your skills and knowledge.",
  },
  {
    icon: "/assets/cloud-connect/icons/icon-park-outline_database-success.svg",
    title: "Access to New Technologies",
    description:
      "Discover the latest tools and solutions that can drive your business forward.",
  },
];

const WhyAttend = () => {
  return (
    <section className={styles.whyAttend}>
      <div className={styles.whyAttend__content}>
        <div className={styles.whyAttend__header}>
          <SectionHeader
            heading="Why Attend Cloud Connect?"
            description="Lorem ipsum dolor sit amet consectetur. Aliquet amet massa lorem diam feugiat. Tristique velit velit proin amet cras diam mi. Vel nunc ut feugiat quis dolor malesuada vitae quisque. Lacinia quis quis scelerisque vitae maecenas nulla sem."
            size="small"
            variant="dark"
            width="medium"
          />
        </div>
        <div className={styles.whyAttend__grid}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <img
                src={item.icon}
                alt={item.title}
                className={styles.card__icon}
              />
              <h3 className={styles.card__title}>{item.title}</h3>
              <p className={styles.card__description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
