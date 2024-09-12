import Button from "../Button";
import styles from "../../../styles/cloud-connect-2/Home/hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={`${styles.hero} container mx-auto`}>
      <div className={styles.hero__content}>
        <div className={styles["hero__content-date"]}>
          Nov 28, 2024 | The Zone, Plot 9, Gbagada Industrial Scheme beside UPS,
          Lagos Nigeria{" "}
        </div>
        <div className={styles["hero__content-title-wrapper"]}>
          <h1 className={styles["hero__content-subtitle"]}>
            Cloud Connect '24
          </h1>
          <h2 className={styles["hero__content-title"]}>
            Service Management Beyond it.
          </h2>
          <p className={styles["hero__content-description"]}>
            This innovative event is designed to enhance your approach to
            business optimization by extending service management practices
            beyond IT boundaries.
          </p>
        </div>
        <div>
          <Link href="/cloud-connect/book-a-ticket">
            <Button size="large">Buy Tickets</Button>
          </Link>
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
