import Featured from "components/Featured";
import styles from "../../../styles/AlluviumRedesign2025/redesign.module.scss";
import Heading from "components/Alluvium-Redesign-2025/heading";

const AlluviumCESShowCaseStudy = () => {
  return (
    <section
      className={styles.expertise__section}
      style={{ borderTop: "1px solid #f0f0f0" }}
    >
      <div className={styles.expertise__encap}>
        <div className={styles.expertise__heading}>
          <Heading
            title="ALLUVIUM"
            heading="Proven at Enterprise Scale"
            subhead="Real deployments. Measurable outcomes. Autonomous service in production."
            variant="primary"
          />
        </div>
        <Featured />
      </div>
    </section>
  );
};

export default AlluviumCESShowCaseStudy;
