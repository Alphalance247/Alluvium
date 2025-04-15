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
            heading={"Strategic Atlassian Consultancy for Optimal Results"}
            withBtn={false}
            withLines={false}
            headSection=""
            withParagragh={false}
          />

          <div style={{ marginTop: "-1rem" }}>
            <HeroHeading
              withLink={false}
              withBtn={true}
              subhead={`Are you seeking Atlassian expertise to implement ITSM, optimize
              your current setup, migrate your data to Atlassian Cloud, or
              enhance your existing Atlassian configuration? Let us help you
              tackle your teams' challenges`}
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
