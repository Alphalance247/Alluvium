import Featured from "components/Featured";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Heading from "./heading";

const Expertise = () => {
  return (
    <section className={styles.expertise__section}>
      <div className={styles.expertise__encap}>
        {/* <div className={styles.expertise__heading}>
          <p className={styles.how__we__help}>
          
          </p>
          <h2></h2>
          <p className={styles.discover__business}>
          
          </p>
        </div> */}
        <Heading
          title="HOW ALLUVIUM CAN HELP YOU ACHIEVE SUCCESS"
          heading="Achieve Success with Atlassian and Our Expertise."
          subhead="  Discover how businesses like yours have thrived with Atlassian
            solutions."
        />
        <Featured />
      </div>
    </section>
  );
};

export default Expertise;
