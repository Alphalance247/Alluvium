import styles from "styles/AlluviumRedesign2025/ces/ces.module.scss";
import Image from "next/image";
import Button from "components/atlassian-service-reuse/Button";

const Hero = () => {
  const handScrollToSection = () => {
    const section = document.getElementById("demo-request-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBackground}>
        <Image
          src="/assets/ces/bg-circle.png"
          width={700}
          height={700}
          alt="shape"
        />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            See Autonomous
            <br />
            Services In Action
          </h1>
          <p className={styles.heroDescription}>
            A live CES walkthrough of how enterprises remove service friction
            using AI.
          </p>
          <div>
            <Button onClick={handScrollToSection}>Request a Demo Now</Button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/assets/ces/hero.png"
            alt="CES Hero Image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
