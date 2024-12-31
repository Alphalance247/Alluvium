import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";
import { redesignCaseStudy } from "data";
import CaseCard from "./ReuseComponents/CaseCard";

const CaseStudyCard = () => {
  return (
    <div className={styles.card__encap}>
      {redesignCaseStudy.map((item, i) => {
        return (
          <CaseCard
            url={item.url}
            imgAlt={item.title}
            width={357}
            height={191}
            industry={item.title}
            title={item.heading}
            imgSrc={item.img}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
