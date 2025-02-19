import React from "react";
import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/case-card.module.scss";
import Link from "next/link";
import ReadMore from "./readmore";
import CardBlogDetails from "./cardBlogDetails";

const CaseCard = ({
  imgSrc,
  imgAlt,
  width,
  height,
  industry,
  industry1,
  title,
  url = "",
  variant = "primary",
}) => {
  return (
    <Link href={url}>
      <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
        <Image
          layout="responsive"
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
        />
        <div className={`${styles.content} ${styles[`content--${variant}`]}`}>
          <div className={styles.industry__style}>
            <p className={`${styles.head} ${styles[`head--${variant}`]}`}>
              {industry}
            </p>
            {variant === "secondary" && (
              <p className={`${styles.head} ${styles[`head--${variant}`]}`}>
                {industry1}
              </p>
            )}
          </div>
          <h6 className={`${styles.subhead} ${styles[`subhead--${variant}`]}`}>
            {title}
          </h6>

          <CardBlogDetails />
          {variant === "primary" && <ReadMore content="Read More" />}
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
