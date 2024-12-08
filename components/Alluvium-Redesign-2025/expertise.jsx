import Featured from "components/Featured";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Heading from "./heading";

const Expertise = () => {
  return (
    <section className={styles.expertise__section}>
      <div className={styles.expertise__encap}>
        <div className={styles.expertise__heading}>
          <Heading
            title="HOW ALLUVIUM CAN HELP YOU ACHIEVE SUCCESS"
            heading="Driving Business Success with Atlassian Solutions"
            subhead="Discover how companies like yours have embraced Atlassian’s ecosystem to drive innovation and growth."
            variant="primary"
          />
        </div>
        <Featured />
      </div>
    </section>
  );
};

export default Expertise;
