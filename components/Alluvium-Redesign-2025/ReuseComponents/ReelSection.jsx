import React from "react";
import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/reelSection.module.scss";
import SubSectionCard from "./subSectionCard";

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
  const agileWayClass = reverse
    ? `${styles.agile_way} ${styles.rowReverse}`
    : styles.agile_way;

  const containerClass = reverse
    ? `${styles.container} ${styles.containerReverse}`
    : styles.container;

  return (
    <div className={customStyles.mainContainer || styles.mainContainer}>
      <main>
        <div className={styles.agile}>
          <h3 className={styles.headingss}>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={agileWayClass}>
          <Image src={imageSrc} alt={imageAlt} width={635} height={523} />
          <div className={containerClass}>
            <h4>{agileTitle}</h4>
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </div>

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
