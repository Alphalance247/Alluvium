import { useState } from "react";
import styles from "../../../styles/cloudconnect.module.scss";
import Image from "next/image";
import Button from "../Button";

const speakers = [
  {
    name: "Adesope Adetayo",
    title: "PM Engineering Innovation, Microsoft",
    image: "/assets/cloud-connect/images/speakers/Image.png",
  },
  {
    name: "Timothy Aluko",
    title: "Chief Innovation officer, Interswitch Group",
    image: "/assets/cloud-connect/images/speakers/Image-.png",
  },
  {
    name: "Philip Garba",
    title: "Managing Partner, Rumble Ventures",
    image: "/assets/cloud-connect/images/speakers/Image-1.png",
  },
  {
    name: "Victor Gambo",
    title: "Managing Director Commercium Africa Ltd ",
    image: "/assets/cloud-connect/images/speakers/Image-2.png",
  },
  {
    name: "James Zakariya",
    title: "Managing Director, Fintech, ARM Group",
    image: "/assets/cloud-connect/images/speakers/Image-3.png",
  },
  {
    name: "Mary Ibe",
    title: "CEO / Chief Consigliere Kreem Inc",
    image: "/assets/cloud-connect/images/speakers/Image-4.png",
  },
  {
    name: "Tonbara Kuroebi",
    title: "Executive Director,Financial Services Innovators",
    image: "/assets/cloud-connect/images/speakers/Image-5.png",
  },
  {
    name: "Tobiloba Oladipo",
    title: "VP, Global Millennial Capital",
    image: "/assets/cloud-connect/images/speakers/Image-6.png",
  },
  {
    name: "Tayo Fagbemi",
    title: "PM Engineering Innovation, Microsoft",
    image: "/assets/cloud-connect/images/speakers/Image-7.png",
  },
];

const TopLeaders = () => {
  const [visibleSpeakers, setVisibleSpeakers] = useState(9);

  const loadMoreSpeakers = () => {
    setVisibleSpeakers(speakers.length);
  };

  return (
    <section className={styles["top-leaders"]}>
      <h2 className={styles["top-leaders__title"]}>
        Top Global Innovators and Corporate Leaders Speaking
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
