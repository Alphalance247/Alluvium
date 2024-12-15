import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/AboutUs/about-us.module.scss";
import ServicesCard from "../ReuseComponents/servicesCard";
import { aboutServices } from "data";

const CoreValueAbout = () => {
  return (
    <section className={styles.core__values__section}>
      <div className={styles.core__values}>
        <div className={styles.core__heading}>
          <HeroHeading
            withLink={false}
            heading="Our Core Values"
            variant="secondary"
            subhead="At Alluvium, our values of Ownership, Leadership, and Excellence drive us to empower businesses with the tools to succeed in the digital world."
          />
        </div>

        <ServicesCard content={aboutServices} btn={false} />
      </div>
    </section>
  );
};

export default CoreValueAbout;
