import Image from "next/image";
import styles from "styles/AlluviumRedesign2025/ces/ces.module.scss";

const MeetAlluvium = () => {
  const features = [
    {
      id: 1,
      title: "Reduce unplanned tickets by 50%",
      description:
        "AI-powered prevention systems identify and resolve issues before they escalate",
      color: "green",
    },
    {
      id: 2,
      title: "Eliminate resolution handoffs",
      description:
        "Autonomous agents handle end-to-end resolution with built-in governance",
      color: "red",
    },
    {
      id: 3,
      title: "Cut service cost by 40%",
      description:
        "Automation eliminates manual touchpoints and reduces operational overhead",
      color: "orange",
    },
    {
      id: 4,
      title: "Deploy in under 4 weeks",
      description:
        "Rapid implementation using our migration frameworks and best practices",
      color: "green",
    },
  ];

  const images = [
    { id: 1, src: "/assets/ces/flyer.png", alt: "Alluvium at CES" },
    { id: 2, src: "/assets/ces/ces.png", alt: "CES Presentation" },
  ];

  return (
    <section className={styles.meetAlluviumContainer}>
      <div className={styles.meetAlluviumWrapper}>
        {/* Header with Legend */}
        <div className={styles.meetAlluviumHeader}>
          <h2 className={styles.meetAlluviumTitle}>Meet Alluvium at CES</h2>
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dotGreen}`}></span>
              <span className={styles.legendText}>
                Fewer tickets created in the first place
              </span>
            </div>
            <div className={styles.legendItem}>
              <span className={`${styles.legendDot} ${styles.dotRed}`}></span>
              <span className={styles.legendText}>
                Faster resolution without handoffs
              </span>
            </div>
            <div className={styles.legendItem}>
              <span
                className={`${styles.legendDot} ${styles.dotOrange}`}
              ></span>
              <span className={styles.legendText}>
                Lower service cost across teams
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.galleryContainer}>
          {images.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              <Image width={770} height={874} src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default MeetAlluvium;
