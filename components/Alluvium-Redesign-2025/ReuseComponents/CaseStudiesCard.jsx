import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/caseStudiesCard.module.scss";
import Image from "next/legacy/image";

const CaseStudiesCard = ({
  imageSrc,
  imageAlt,
  height,
  width,
  agileTitle,
  description1,
  description2,
  reverse = false,
  h4Variant,
  pVariant,
}) => {
  const agileWayClass = reverse
    ? `${styles.agile_way} ${styles.rowReverse}`
    : styles.agile_way;

  const containerClass = reverse
    ? `${styles.container} ${styles.containerReverse}`
    : styles.container;

  const h4Class =
    h4Variant === "secondary"
      ? `${styles.h4} ${styles["h4--secondary"]}`
      : styles.h4;
  const pClass =
    pVariant === "secondary"
      ? `${styles.pClass} ${styles["pClass--secondary"]}`
      : styles.pClass;

  return (
    <>
      <div className={agileWayClass}>
        <Image src={imageSrc} alt={imageAlt} width={width} height={height} />
        <div className={containerClass}>
          <h4 className={h4Class}>{agileTitle}</h4>
          <p className={pClass}>{description1}</p>
          <p>{description2}</p>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard;
