import { useState } from "react";
import styles from "../../../styles/cloud-connect-2/Home/speakers.module.scss";
import Button from "../Button";

const speakers = [
  {
    name: "Olawale Ajiboye",
    title: "Senior Scrum Master",
    image: "/assets/cloud-connect/images/speakers/1.png",
  },
  {
    name: "Kingsley Owadara",
    title: "Pan-Africa Center for AI Ethics",
    image: "/assets/cloud-connect/images/speakers/4.png",
  },
  {
    name: "Michael Kimathi (MK)",
    title: "Head of Developer Community at Africa's Talking",
    image: "/assets/cloud-connect/images/speakers/3.png",
  },
  {
    name: "Elisha Odemakinde",
    title: "CEO Rectlabs Inc",
    image: "/assets/cloud-connect/images/speakers/5.png",
  },
  {
    name: "Dr. Samba Otavise",
    title: `Medical Doctor | Cloud & DevOps Professional Founder & CEO SolaviseTech 
    Co-Founder Medics In Tech
    `,
    image: "/assets/cloud-connect/images/speakers/2.png",
  },
  {
    name: "Katakyie Kojo Desu",
    title: "Business Development Manager at On Point, Africa ",
    image: "/cloudImg/9.png",
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
        {/* Missed our past events? Catch up with previous speakers */}
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
