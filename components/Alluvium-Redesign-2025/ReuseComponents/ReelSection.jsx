import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/reelSection.module.scss";
import SubSectionCard from "./subSectionCard";
import CaseStudiesCard from "./CaseStudiesCard";

const ReelSection = ({
  title,
  subtitle,
  agileTitle,
  description1,
  description2,
  imageSrc,
  imageAlt,
  gridArray,
  accomplishments,
  customStyles = {},
  reverse = false,
  imgWidth,
  imgHeight,
}) => {
  return (
    <div className={customStyles.mainContainer || styles.mainContainer}>
      <main>
        <div className={styles.agile}>
          <h3 className={styles.headingss}>{title}</h3>
          <p>{subtitle}</p>
        </div>

        <CaseStudiesCard
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          width={imgWidth}
          height={imgHeight}
          agileTitle={agileTitle}
          description1={description1}
          description2={description2}
          reverse={reverse}
        />

        <SubSectionCard gridArray={gridArray} />

        <div className={styles.accomplishments}>
          {accomplishments.map((accomplishment, i) => (
            <div className={styles.accomplishItem} key={i}>
              <h4>{accomplishment.title}</h4>
              <p>{accomplishment.paragraph}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReelSection;
