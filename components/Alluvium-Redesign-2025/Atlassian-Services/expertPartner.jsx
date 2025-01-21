import Button from "components/atlassian-service-reuse/Button";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";

const ExpertPartner = () => {
  return (
    <section className={styles.expert__partner}>
      <div className={styles.expert}>
        <div className={styles.expert__1}>
          <HeroHeading
            withParagragh={false}
            heading={"Your Atlassian Partner and Solution Expert"}
            variant={"tertiary"}
            withLink={false}
          />
        </div>

        <div className={styles.expert__2}>
          <HeroHeading
            headingAvailable={false}
            subhead={
              "Let`s discuss your unique needs and challenges, and we`ll develop a customized solution tailored specifically for your use case."
            }
            variantMargingFix="third"
            variant={"tertiary"}
            withLink={false}
          />
          <Button size="large">Schedule a Call</Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertPartner;
