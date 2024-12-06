import Button from "components/atlassian-service-reuse/Button";
import Heading from "./heading";
import CaseStudyCard from "./caseStudyCard";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";

const Impact = () => {
  return (
    <section className={styles.company__imapct}>
      <div className={styles.impact__encap}>
        <div className={styles.impact__heading}>
          <div className={styles.heading}>
            <Heading
              title="SUCCES STORIES"
              heading="Impactful Solutions We’ve Delivered"
              variant="secondary"
              paragraph={false}
            />
          </div>
          <div className={styles.view__case__study}>
            <p>
              Discover how our tailored solutions have helped businesses achieve
              their goals and drive meaningful results.
            </p>
            <Button size="large">See All Case Studies</Button>
          </div>
        </div>

        <CaseStudyCard />
      </div>
    </section>
  );
};

export default Impact;
