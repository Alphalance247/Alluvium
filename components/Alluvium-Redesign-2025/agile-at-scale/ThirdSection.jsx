import React from "react";
import ReusableSection from "../ReuseComponents/ReusableSection";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/ThirdSection.module.scss";

const ThirdSection = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <ReusableSection
          icon={"/assets/redesign-2025/agile-at-scale/SAFe.webp"}
          title={"Our Agile At Scale Solution with SAFe Framework"}
          description={
            "As your trusted guide to agile transformation, we're here to help you scale agile across your enterprise."
          }
          extraContent={
            "We specialize in implementing the Scaled Agile Framework (SAFe), a proven methodology for aligning teams, optimizing workflows, and delivering value at scale Our SAFe solutions are tailored to meet your organization's unique needs, ensuring a seamless transition to agile at scale. Our team of experienced agile coaches and consultants will guide you through the implementation process, providing training, support, and ongoing guidance.            "
          }
          height={184}
          width={396}
          noLine={true}
          containerStyles={styles.containerStyles}
          contentStyles={styles.contentStyles}
          iconStyles={styles.iconStyles}
        />
      </main>
    </div>
  );
};

export default ThirdSection;
