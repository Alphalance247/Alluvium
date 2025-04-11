import AwsCards from "./awsCards";
import styles from "../../../styles/atlassian-services-style/aws-services.module.scss";

const TailoredSolution = () => {
  return (
    <section className={styles.tailored__solution}>
      <AwsCards />
    </section>
  );
};

export default TailoredSolution;
