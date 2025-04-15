import styles from "../../../styles/AlluviumRedesign2025/consulting/consulting.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";

const Empower = () => {
  return (
    <section className={styles.empower__section}>
      <div className={styles.empower__section__container}>
        <div className={styles.empower__section__content}>
          <HeroHeading
            withLink={false}
            heading={"Empowering Your Success with Expert Atlassian Guidance"}
            showParagraph={true}
            variant={"secondary"}
            subhead={`Unlock the full potential of Atlassian tools with our expert consulting services. Whether you're implementing new solutions, optimizing workflows, or scaling for growth, we tailor our approach to meet your unique business needs. Our certified Atlassian experts work closely with you to ensure your tools drive efficiency and support your long-term goals. From strategy to execution, we're here to help you achieve measurable results and maximize your investment.`}
          />
        </div>
      </div>
    </section>
  );
};

export default Empower;
