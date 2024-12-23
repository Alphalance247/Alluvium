import CaseStudiesCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseStudiesCard";
import HeroSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/HeroSection";
import Layout from "components/layout";
import React from "react";
import styles from "../../styles/AlluviumRedesign2025/alluviumCaseStudies/alluviumCaseStudies.module.scss";
import CaseStudiesSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/CaseStudiesSection";

const index = () => {
  return (
    <Layout>
      <HeroSection />
      <div className={styles.caseStudiesSection}>
        <main>
          <CaseStudiesCard
            agileTitle="Streamlining Server to Atlassian Cloud Migration for an Insurance Company"
            description1="An insurance and asset management company sought to enhance Atlassian product user experiences and optimize performance across its entire organization. They turned to our team of certified experts with a profound knowledge base in Jira and Confluence to find a solution."
            imageAlt={"Our case studies"}
            width={635}
            height={523}
            imageSrc="/assets/redesign-2025/OurMissionCaseStudies.webp"
            h4Variant="secondary"
            pVariant="secondary"
          />
        </main>
      </div>
      <CaseStudiesSection />
    </Layout>
  );
};

export default index;
