import React from "react";
import ReusableSection from "../ReuseComponents/ReusableSection";
import styles from "../../../styles/AlluviumRedesign2025/atlassian-license/SecondSection.module.scss";

const SecondSection = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <ReusableSection
          icon={"/assets/redesign-2025/atlassian-license/TrainingPartner.svg"}
          title={
            "Expert Advice and Support for Streamlined Atlassian License Management"
          }
          description={
            "Are you seeking an Atlassian partner to assist with purchasing Atlassian and Marketplace apps? Maximize your license investment by letting Alluvium manage your licenses."
          }
          extraContent={
            "As a certified Atlassian partner, we are committed to helping you get the most out of your Atlassian investment, offering greater transparency and simplicity in the licensing process."
          }
          height={67}
          width={265}
        />
      </main>
    </div>
  );
};

export default SecondSection;
