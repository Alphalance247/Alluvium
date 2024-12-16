import HeroHeading from "../ReuseComponents/heroHeading";
import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/AboutUs/about-us.module.scss";
import { Lines } from "../ReuseComponents/Lines";

const Hero = () => {
  return (
    <section className={styles.about__hero}>
      <div className={styles.sub__head__hero}>
        <div className={styles.hero__head}>
          <p className={styles.new__update}>The Alluvium Journey</p>
          <HeroHeading
            variant="primary"
            withLink={false}
            heading="Redefining Collaboration and Efficiency Together"
            subhead="At Alluvium, we help teams thrive with powerful Atlassian solutions. We’re here to make collaboration seamless and processes more efficient."
          />
        </div>
        <div style={{ marginBottom: "-.5rem" }}>
          <Image
            src="/assets/redesign-2025/about/Map.png"
            width={1271}
            height={602}
            alt="worldmap"
          />
        </div>
        <Lines variant={"default"} />
      </div>
    </section>
  );
};

export default Hero;
