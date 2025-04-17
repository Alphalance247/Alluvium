import styles from "../../../styles/AlluviumRedesign2025/consulting/consulting.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";
import Image from "next/image";

const Empower = () => {
  return (
    <section className={styles.empower__section}>
      <div className={styles.empower__section__container}>
        <div className={styles.empower__section__content}>
          <HeroHeading
            withLink={false}
            heading={"Empowering Your Success with Expert Atlassian Guidance"}
            showParagraph={true}
            variant={"secondarywithwidth"}
            subhead={`Unlock the full potential of Atlassian tools with our expert consulting services. Whether you're implementing new solutions, optimizing workflows, or scaling for growth, we tailor our approach to meet your unique business needs. Our certified Atlassian experts work closely with you to ensure your tools drive efficiency and support your long-term goals. From strategy to execution, we're here to help you achieve measurable results and maximize your investment.`}
          />
        </div>

        <div className={styles.empower__section__image__parent}>
          <div className={`${styles.empower_icon__1}`}>
            <Image
              src="/assets/redesign-2025/consulting/1.svg"
              alt="Empower"
              width={56}
              height={56}
            />
          </div>
          <div className={`${styles.empower_icon__2}`}>
            <Image
              src="/assets/redesign-2025/consulting/2.svg"
              alt="Empower"
              width={56}
              height={56}
            />
          </div>
          <div className={`${styles.empower_icon__3}`}>
            <Image
              src="/assets/redesign-2025/consulting/3.svg"
              alt="Empower"
              width={56}
              height={56}
            />
          </div>
          <div className={`${styles.empower_icon__4}`}>
            <Image
              src="/assets/redesign-2025/consulting/4.svg"
              alt="Empower"
              width={56}
              height={56}
            />
          </div>
          <div className={`${styles.empower_icon__5}`}>
            <Image
              src="/assets/redesign-2025/consulting/5.svg"
              alt="Empower"
              width={56}
              height={56}
            />
          </div>

          <div className={styles.empower__section__image}>
            <Image
              src="/assets/redesign-2025/consulting/consulting.png"
              alt="Empower"
              width={991}
              height={334}
              className={`${styles.empower__section__image__img} m-auto`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
