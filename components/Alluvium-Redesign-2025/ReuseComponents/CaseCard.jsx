import React from "react";
import Image from "next/legacy/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/case-card.module.scss";
import Link from "next/link";
import ReadMore from "./readmore";
import CardBlogDetails from "./cardBlogDetails";

const CaseCard = ({
  imgSrc,
  imgAlt,
  width,
  height,
  title,
  url = "",
  variant = "primary",
  publisherName,
  blogDate,
  minRead,
  industries,
}) => {
  return (
    <Link href={url}>
      <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
        <img
          src={imgSrc}
          alt={imgAlt}
          width={width}
          height={height}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <div className={`${styles.content} ${styles[`content--${variant}`]}`}>
          <div className={styles.industry__style}>
            {industries?.slice(1, 3).map((industry, i) => (
              <>
                {variant === "secondary" && (
                  <p
                    className={`${styles.head} ${styles[`head--${variant}`]}`}
                    key={i}
                  >
                    {industry}
                  </p>
                )}
              </>
            ))}
          </div>
          <h6 className={`${styles.subhead} ${styles[`subhead--${variant}`]}`}>
            {title}
          </h6>

          {variant === "secondary" && (
            <CardBlogDetails
              name={publisherName}
              blogDate={blogDate}
              minRead={minRead}
            />
          )}
          {variant === "primary" && <ReadMore content="Read More" />}
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;
