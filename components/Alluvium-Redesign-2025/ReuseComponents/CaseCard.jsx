import React from "react";
import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/case-card.module.scss";
import Link from "next/link";
import ReadMore from "./readmore";

const CaseCard = ({
  imgSrc,
  imgAlt,
  width,
  height,
  industry,
  title,
  url = "",
}) => {
  return (
    <Link href={url}>
      <div className={styles.card}>
        <Image
          layout="responsive"
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
        />
        <div className={styles.content}>
          <p>{industry}</p>
          <h6>{title}</h6>
          <ReadMore content="Read More" />
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
