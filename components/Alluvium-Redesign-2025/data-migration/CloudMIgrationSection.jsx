import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/CloudMigrationSection.module.scss";

const CloudMigrationSection = ({
  variant,
  backgroundVariant,
  heading,
  subhead,
  extraContent,
  variantTransform,
}) => {
  return (
    <section
      className={`${styles.about__hero} ${
        styles[`about__hero--${backgroundVariant}`]
      }`}
    >
      <div className={styles.sub__head__hero}>
        <div className={styles.hero__head}>
          <HeroHeading
            variant={variant}
            withLink={false}
            heading={heading}
            subhead={subhead}
            extraContent={extraContent}
            variantTransform={variantTransform}
          />
        </div>
      </div>
    </section>
  );
};

export default CloudMigrationSection;
