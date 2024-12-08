import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { servicesContent } from "data";
import Image from "next/image";
import Heading from "./heading";
import Link from "next/link";

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
                  <Link href={item?.url}>
                    <Button variant="block">{item?.btn}</Button>
                  </Link>
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
