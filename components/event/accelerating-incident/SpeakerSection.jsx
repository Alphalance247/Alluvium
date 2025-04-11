import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/accelerating-incident/SpeakerSection.module.scss";
import Image from "next/image";

const SpeakerSection = () => {
  const speakerData = [
    {
      speaker: "SPEAKER 1",
      name: "Demi Odumosu",
      topic: "Accelerating Incident Management Through AI-Assisted Solutions",
      img: "/assets/events/incident-management/Speaker2.webp",
      alt: "speaker picture",
      width: 426,
      height: 378,
    },
    {
      speaker: "SPEAKER 2",
      name: "Yusuf Braimoh",
      topic: "Bamboo Dc to Bitbucket Cloud Pipelines",
      img: "/assets/events/incident-management/Speaker1.webp",
      alt: "speaker picture",
      width: 426,
      height: 378,
    },
  ];

  return (
    <section className={styles.mainContainer}>
      <main>
        <h4>Meet Our Expert Speakers</h4>
        <div>
          {speakerData.map((speaker) => (
            <div className={styles.speakerCard}>
              <div className={styles.titleCard}>
                <div className={styles.speaker}>{speaker?.speaker}</div>
                <p className={styles.name}>{speaker.name}</p>
                <p className={styles.topic}>{speaker.topic}</p>
              </div>
              <Image
                src={speaker.img}
                alt={speaker.alt}
                width={speaker.width}
                height={speaker.height}
              />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default SpeakerSection;
