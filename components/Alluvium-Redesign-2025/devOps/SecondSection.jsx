import React from "react";
import ReusableSection from "../ReuseComponents/ReusableSection";
import styles from "../../../styles/AlluviumRedesign2025/devOps/SecondSection.module.scss";

const SecondSection = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <ReusableSection
          icon={"/assets/redesign-2025/devOps/Ilustration.webp"}
          title={"A Modern Approach to Software Development and Operations"}
          description={
            "At Alluvium, we understand that in today's fast-paced business environment, software development and delivery need to be efficient and effective. Our DevOps solutions are designed to streamline your processes, improve collaboration, and accelerate innovation."
          }
          height={152}
          width={319}
          iconStyles={styles.iconContainer}
          contentStyles={styles.contentStyles}
        />
      </main>
    </div>
  );
};

export default SecondSection;
