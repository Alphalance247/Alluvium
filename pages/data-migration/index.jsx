import HeroSection from "components/Alluvium-Redesign-2025/data-migration/HeroSection";
import Layout from "components/layout";
import React from "react";
import styles from "../../styles/AlluviumRedesign2025/DataMigration/DataMigration.module.scss";
import Checklist from "components/Alluvium-Redesign-2025/data-migration/Checklist";
import CloudMigrationSection from "components/Alluvium-Redesign-2025/data-migration/CloudMIgrationSection";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import {
  CloudBenefits,
  migrationWithAlluvium,
} from "constants/data-migration/DataMigraton";
import AtlassianServicesCard from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesCard";
import ReadMore from "components/Alluvium-Redesign-2025/ReuseComponents/readmore";
import Heading from "components/Alluvium-Redesign-2025/heading";
import Image from "next/image";
import MigrationProcess from "components/Alluvium-Redesign-2025/data-migration/MigrationProcess";

const description = [
  {
    text: "From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey",
  },
];

const DataMigration = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <CloudMigrationSection
          variant={"secondary"}
          heading="Atlassian Server to Cloud Migration"
          subhead="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery throughout your data migration journey. We’ll help your team prepare for Cloud or Data Center migration by scrutinizing your systems and focusing on the estimation process and timeframe during business hours."
          extraContent={
            "Moving forward, we'll conduct an in-depth analysis of the finances and technical aspects of your project and evaluate any probable risks. We ultimately get the job done and smoothly delivered—no dent, no stain. Just sit back and watch us bring your migration dream to life."
          }
          variantTransform={"left-aligned"}
        />
        <MigrationProcess />
        <Checklist />
        <CloudMigrationSection
          variant={"secondary"}
          heading="The Benefits of Migrating to Atlassian Cloud"
          subhead="Our team of Atlassian certified experts is ready to help you tackle any of your Atlassian challenges."
        />

        <ServicesCardReuse
          data={CloudBenefits}
          useText={true}
          useImage={false}
        />
        <div className={styles.whyMigrate}>
          <main>
            <div className={styles.imgChild}>
              <Image
                src="/assets/redesign-2025/data-migration/OurMission1.webp"
                width={635}
                height={523}
                alt="hii"
              />
            </div>
            <div className={styles.infoChild}>
              <Heading
                title="INSURANCE"
                heading="Streamlining Server to Atlassian Cloud Migration for an Insurance Company"
                subhead="An insurance and asset management company sought to enhance Atlassian product user experiences and optimize performance across its entire organization. They turned to our team of certified experts with a profound knowledge base in Jira and Confluence to find a solution."
                titleVariant="whiteVar"
                variant="secondary"
              />
              <ReadMore content={"Read More"} />
            </div>
          </main>
        </div>
        <div className={styles.whyMigrate}>
          <main>
            <div className={styles.child1}>
              <AtlassianServicesCard
                title={"Why Plan Your Migration With Alluvium?"}
                description={description}
                useImage={false}
                useText={false}
                headingVariant={"main"}
                subHeadingVariant={"primary"}
              />
            </div>
            <div className={styles.child2}>
              <ServicesCardReuse data={migrationWithAlluvium} />
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default DataMigration;
