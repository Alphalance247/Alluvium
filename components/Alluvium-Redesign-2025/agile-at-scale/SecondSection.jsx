import React from "react";
import ReusableSection from "../ReuseComponents/ReusableSection";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/SecondSection.module.scss";

const SecondSection = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <ReusableSection
          icon={"/assets/redesign-2025/agile-at-scale/Agile.webp"}
          title={"Understanding Agile at Scale"}
          description={
            "In today's fast-paced business landscape, agility is essential for success. Our experts can help you overcome the challenges of adopting agile practices and accelerate your digital transformation, that way, your software teams get to deliver digital products and services faster."
          }
          height={174}
          width={205}
          iconStyles={styles.iconContainer}
          contentStyles={styles.contentStyles}
        />
      </main>
    </div>
  );
};

export default SecondSection;
