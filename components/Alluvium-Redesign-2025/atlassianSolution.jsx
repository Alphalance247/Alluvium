import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import Heading from "./heading";
import ServicesCard from "./ReuseComponents/servicesCard";
import { servicesContent } from "data";

const AtlassianSolution = () => {
  return (
    <section className={styles.atlassian__solutions}>
      <div className={styles.services__section}>
        <div className={styles.heading__encap}>
          <Heading
            title="OUR SERVICES"
            heading="Expert Atlassian Solutions for Your Success"
            subhead="We provide tailored solutions to simplify workflows, enhance team collaboration, and help you achieve your business objectives efficiently and effectively, always with your unique needs in mind."
          />
        </div>

        <ServicesCard content={servicesContent} />
      </div>
    </section>
  );
};

export default AtlassianSolution;
