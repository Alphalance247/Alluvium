import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/atlassian-license/DeploymentOptions.module.scss";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";
import AtlassianServicesCard from "../ReuseComponents/atlassianServicesCard";
import { deploymentOptions } from "constants/atlassian-license";

const description = [
  {
    text: "With the end of Server licenses in February 2024, we are here to guide you in choosing the right path for your organization and help you set up your new Cloud or Data Center environment.",
  },
];

const DeploymentOptions = () => {
  return (
    <div className={styles.deploySection}>
      <main>
        <div className={styles.child1}>
          <AtlassianServicesCard
            title={"Atlassian License Deployment Options"}
            description={description}
            useImage={false}
            useText={false}
            headingVariant={"main"}
            subHeadingVariant={"primary"}
            noBorderCard={"noBorderCard"}
          />
        </div>
        <div className={styles.child2}>
          <ServicesCardReuse data={deploymentOptions} gridVariant="single" />
        </div>
      </main>
    </div>
  );
};

export default DeploymentOptions;
