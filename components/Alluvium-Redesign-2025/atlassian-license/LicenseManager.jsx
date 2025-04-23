import React from "react";
import AtlassianServicesCard from "../ReuseComponents/atlassianServicesCard";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";
import styles from "../../../styles/AlluviumRedesign2025/atlassian-license/LicenseManager.module.scss";
import { migrationWithAlluvium } from "constants/data-migration/DataMigraton";

const description = [
  {
    text: "From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey",
  },
];

const LicenseManager = () => {
  return (
    <div className={styles.whyMigrate}>
      <main>
        <div className={styles.child1}>
          <AtlassianServicesCard
            title={"Why Choose Alluvium as Your License Manager?"}
            description={description}
            imageAvailable={false}
            headingVariant={"main"}
            subHeadingVariant={"primary"}
containerStyle={styles.containerStyle1}
          />
        </div>
        <div className={styles.child2}>
          <ServicesCardReuse data={migrationWithAlluvium} />
        </div>
      </main>
    </div>
  );
};

export default LicenseManager;
