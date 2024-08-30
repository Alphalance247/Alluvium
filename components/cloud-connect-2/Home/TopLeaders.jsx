import { useState } from "react";
import styles from "../../../styles/cloud-connect-2/Home/speakers.module.scss";
import Button from "../Button";

const speakers = [
  {
    name: "Kevin Tuei",
    title: "Cloud Developer | Certified Educator",
    image: "/cloudImg/1.png",
  },
  {
    name: "Hon Seun Fakuade",
    title: "Commissioner for Innovation",
    image: "/cloudImg/2.png",
  },
  {
    name: "Katarzyna Zofia Pawlak",
    title: "Chief Product Officer & Co-founder @Appsvio",
    image: "/cloudImg/3.png",
  },
  {
    name: "Rodney Nissen",
    title: "Sr. Atlassian Toolsmith | Atlassian Certified Expert ",
    image: "/cloudImg/4.png",
  },
  {
    name: "Naj Irshrad",
    title: "Vice President of Federal Sales at ISOS",
    image: "/cloudImg/5.png",
  },
  {
    name: "Erica Larson",
    title: "People/Project/Process Leader, Atlassian Cloud Administrator.",
    image: "/cloudImg/6.png",
  },
  // {
  //   name: "Erica Larson",
  //   title: "People/Project/Process Leader, Atlassian Cloud Administrator",
  //   image: "/cloudImg/8.png",
  // },
  // {
  //   name: "Tobiloba Oladipo",
  //   title: "VP, Global Millennial Capital",
  //   image: "/assets/cloud-connect/images/speakers/Image-8.png",
  // },
  // {
  //   name: "Tayo Fagbemi",
  //   title: "PM Engineering Innovation, Microsoft",
  //   image: "/assets/cloud-connect/images/speakers/Image-7.png",
  // },
];

const TopLeaders = () => {
  const [visibleSpeakers, setVisibleSpeakers] = useState(9);

  const loadMoreSpeakers = () => {
    setVisibleSpeakers(speakers.length);
  };

  return (
    <section className={styles["top-leaders"]}>
      <h2 className={styles["top-leaders__title"]}>
        {/* Top Global Innovators and Corporate Leaders Speaking */}
        Get ready to be inspired by industry giants at Cloud Connect '24.
      </h2>
      <div className={styles["top-leaders__grid"]}>
        {speakers.slice(0, visibleSpeakers).map((speaker, index) => (
          <div key={index} className={styles["top-leaders__speaker"]}>
            <div className={styles["top-leaders__speaker-image"]}>
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <h3 className={styles["top-leaders__speaker-name"]}>
              {speaker.name}
            </h3>
            <p className={styles["top-leaders__speaker-title"]}>
              {speaker.title}
            </p>
          </div>
        ))}
      </div>
      {visibleSpeakers < speakers.length && (
        <div className={styles["top-leaders__load-more"]}>
          <Button variant="primary" size="xlarge" onClick={loadMoreSpeakers}>
            Load More
          </Button>
        </div>
      )}
    </section>
  );
};
export default TopLeaders;
