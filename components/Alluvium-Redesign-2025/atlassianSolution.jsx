import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { servicesContent } from "data";
import Image from "next/image";
import Heading from "./heading";

const AtlassianSolution = () => {
  return (
    <section className={styles.atlassian__solutions}>
      <div className={styles.services__section}>
        {/* <div className={styles.services__heading}>
          <p className={styles.how__we__help}>OUR SERVICES</p>
          <h2>Expert Atlassian Solutions for Your Success</h2>
          <p className={styles.discover__business}>
            
          </p>
        </div> */}

        <Heading
          title="OUR SERVICES"
          heading="Expert Atlassian Solutions for Your Success"
          subhead="We deliver tailored Atlassian solutions to streamline workflows,
            boost collaboration, and achieve your goals."
        />

        <div className={styles.card}>
          {servicesContent.map((item, i) => {
            return (
              <div key={i} className={styles.card__content}>
                <div className={styles.content}>
                  <Image src={item?.img} width={56} height={56} alt="logos" />
                  <h5>{item?.heading}</h5>
                  <p>{item?.subHeading}</p>
                </div>
                <div className={styles.btn}>
                  <Button variant="block">{item?.btn}</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AtlassianSolution;
