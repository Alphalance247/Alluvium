import Button from "../Button";
import styles from "../../../styles/cloud-connect-2/Home/hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles["hero__content-date"]}>
          Nov 6, 2024 | Landmark Event Center | Lagos
        </div>
        <div className={styles["hero__content-title-wrapper"]}>
          <h1 className={styles["hero__content-subtitle"]}>
            Cloud Connect '24
          </h1>
          <h2 className={styles["hero__content-title"]}>
            Service Management Beyond it.
          </h2>
          <p className={styles["hero__content-description"]}>
            Lorem ipsum dolor sit amet consectetur. Aliquet amet massa lorem
            diam feugiat. Tristique velit velit proin amet cras diam mi. Vel
            nunc ut feugiat quis dolor malesuada vitae quisque. Lacinia quis
            quis scelerisque vitae maecenas nulla sem.
          </p>
        </div>
        <div>
          <Button size="large">Buy Tickets</Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <div className={styles["hero__images-main"]}>
          <img
            src="/assets/cloud-connect/images/Hero_Img1.png"
            alt="Cloud connect Hero image"
            className={styles.image}
          />
        </div>
        <div className={styles["hero__images-secondary"]}>
          <div>
            <img
              src="/assets/cloud-connect/images/Hero_Img2.png"
              alt="Cloud connect Hero image 2"
              className={styles.image}
            />
          </div>
          <div>
            <img
              src="/assets/cloud-connect/images/Hero_Img3.png"
              alt="Cloud connect Hero image 3"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
