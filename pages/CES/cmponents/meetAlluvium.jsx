import Image from "next/image";
import styles from "styles/AlluviumRedesign2025/ces/ces.module.scss";

const MeetAlluvium = () => {
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
