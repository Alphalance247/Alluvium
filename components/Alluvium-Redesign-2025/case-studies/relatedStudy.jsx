import CaseCard from "../ReuseComponents/CaseCard";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/CaseStudy/relatedCard.module.scss";
import { redesignCaseStudy } from "data";

const RelatedCard = () => {
  return (
    <section className={styles.related__cards}>
      <h3>Related Story</h3>
      <div className={styles.case__studies__card}>
        {redesignCaseStudy.map((item, i) => (
          <CaseCard
            url={item?.url}
            imgAlt={item?.title}
            width={357}
            height={191}
            industry={item?.title}
            title={item?.heading}
            imgSrc={item?.img}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedCard;
