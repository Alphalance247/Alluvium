import Button from "../Button";
import styles from "../../../styles/cloud-connect-2/Home/hero.module.scss";
import Link from "next/link";
import Image from "next/image";

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
            This innovative event is designed to refine and advance the
            approaches to business optimization by extending Service Management
            practices beyond IT boundaries.
          </p>
        </div>
        <Link href="/cloud-connect/event-feedback">
          <Button>Give us a feedback</Button>
        </Link>
      </div>

      <div className={styles.hero__images}>
        <div className={styles["hero__images-main"]}>
          <Image
            src="/assets/cloud-connect/images/Hero_Img1.png"
            alt="Cloud connect Hero image"
            className={styles.image}
            width={450}
            height={307}
          />
        </div>
        <div className={styles["hero__images-secondary"]}>
          <div>
            <Image
              src="/assets/cloud-connect/images/Hero_Img2.png"
              alt="Cloud connect Hero image 2"
              className={styles.image}
              width={221}
              height={307}
            />
          </div>
          <div>
            <Image
              src="/assets/cloud-connect/images/Hero_Img3.png"
              alt="Cloud connect Hero image 3"
              className={styles.image}
              width={221}
              height={307}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
