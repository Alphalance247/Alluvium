import styles from "../../../styles/AlluviumRedesign2025/AboutUs/about-us.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";

const AboutAlluvium = () => {
  const paragraph = [
    "Welcome to Alluvium, where innovation meets expertise. We are a team of passionate professionals dedicated to providing businesses with cutting-edge solutions leveraging the Atlassian suite of tools. Our aim is to simplify the complexity of digital transformation and help our clients achieve their goals with ease and efficiency.",
    "At Alluvium, we believe in delivering more than just products and services. We strive to provide a unique and personalized experience for each of our clients, understanding their specific needs and providing customized solutions. Our unique value proposition lies in our extensive expertise in the Atlassian platform, combined with a focus on innovation and a commitment to excellence.",
    "Alluvium's Mission is to provide highly capable, experienced consultants and dependable managed services for a seamless digital transformation to give our clients and partners the advantage in their business environment.",
    "We invite you to learn more about Alluvium and our commitment to excellence. Our team is dedicated to helping you succeed, and we look forward to the opportunity to work with you.",
  ];

  const fedback = [
    {
      percentage: "80+",
      feed: "Projects Completed",
    },
    {
      percentage: "30+",
      feed: "Happy Clients",
    },
    {
      percentage: "98%",
      feed: "Success Rate",
    },
    {
      percentage: "15+",
      feed: "Migration Experts",
    },
  ];
  return (
    <section className={styles.about__alluvium}>
      <div className={styles.about__us}>
        <div>
          <HeroHeading withLink={false} heading="About Alluvium" />
        </div>

        <div>
          {paragraph.map((items, i) => {
            return <p key={i}> {items}</p>;
          })}
        </div>
      </div>

      <div className={styles.customer__satisfaction}>
        {fedback.map((item, i) => {
          return (
            <div key={i} style={{ paddingTop: "2.5rem" }}>
              <h6>{item?.percentage}</h6>
              <p>{item?.feed}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutAlluvium;
