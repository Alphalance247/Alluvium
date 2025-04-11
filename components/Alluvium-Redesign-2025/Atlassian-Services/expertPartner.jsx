import Button from "components/atlassian-service-reuse/Button";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/Atlassian-Services/atlassianservices.module.scss";

const ExpertPartner = () => {
  return (
    <section className={styles.expert__partner}>
      <div className={styles.expert}>
        <div className={styles.expert__1}>
          <h4>Your Atlassian Partner and Solution Expert</h4>
        </div>

        <div className={styles.expert__2}>
          <p>
            Let`s discuss your unique needs and challenges, and we`ll develop a
            customized solution tailored specifically for your use case.
          </p>
          <Button size="large">Schedule a Call</Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertPartner;
