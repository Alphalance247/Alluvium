import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/MigrationProcess.module.scss";
import AtlassianServicesCard from "../ReuseComponents/atlassianServicesCard";
import { migrationProcess } from "constants/data-migration/DataMigraton";
import ServicesCardReuse from "../ReuseComponents/ServicesCardReuse";
import LineWithIcons from "./LineWithIcons";

const description = [
  {
    text: "Lorem ipsum dolor sit amet consectetur. Eget porta porta ipsum vel sed. Dictum in diam sit sapien iaculis elit.",
  },
];

const MigrationProcess = () => {
  return (
    <div className={styles.migrationSection}>
      <main>
        <div className={styles.child1}>
          <AtlassianServicesCard
            title={"Alluvium Cloud Migration Process"}
            description={description}
            useImage={false}
            useText={false}
            headingVariant={"main"}
            subHeadingVariant={"primary"}
            noBorderCard={"noBorderCard"}
          />
        </div>
        <LineWithIcons />
        <div className={styles.child2}>
          <ServicesCardReuse
            data={migrationProcess}
            gridVariant="single"
            noBorder="noBorder"
            noBorderCard={"noBorderCard"}
          />
        </div>
      </main>
    </div>
  );
};

export default MigrationProcess;
