import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import Button from "components/atlassian-service-reuse/Button";
import styles from "../../../styles/AlluviumRedesign2025/consulting/consulting.module.scss";
import HeroHeading from "../ReuseComponents/heroHeading";

const AtlassianConsultingHero = () => {
  return (
    <section className={styles.atlassian__consulting__hero}>
      <div style={{ maxWidth: "1272px", margin: "auto" }}>
        <Lines variant={"secondary"} />
      </div>
      <div className={styles.hero}>
        <div className={styles.hero__section}>
          <HeroHeading
            withLink={true}
            subsec={"ATLASSIAN CONSULTANCY & STRATEGY"}
            heading={"Workflow Optimization by Alluvium."}
            withBtn={false}
            withLines={false}
            headSection=""
            withParagragh={true}
            variantMargingFix=""
          />

          <div style={{ marginTop: "-1rem" }}>
            <HeroHeading
              withLink={false}
              withBtn={true}
              subhead={`Alluvium provides expert Atlassian consulting to align tools like Jira, Confluence, and Bitbucket with strategic goals and operational excellence.`}
              headSection=""
              withParagragh={true}
            />

            <Button size="mediumL">Schedule a Call</Button>
          </div>
        </div>
        <Lines variant={"secondary"} />
      </div>
    </section>
  );
};

export default AtlassianConsultingHero;
