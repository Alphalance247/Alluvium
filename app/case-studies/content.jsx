"use client";
import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/alluviumCaseStudies/alluviumCaseStudies.module.scss";
import CaseStudiesCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseStudiesCard";
import HeroSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/HeroSection";
import CaseStudiesSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/CaseStudiesSection";

export default function Support() {
  return (
    <Layout>
      <HeroSection />
      <div className={styles.caseStudiesSection}>
        <main>
          <CaseStudiesCard
            agileTitle="Atlassian Implementation & Cloud Migration Results."
            description1="Discover how Alluvium helps global teams implement Jira, Confluence, and ITSM solutions that improve collaboration, automation, and delivery"
            imageAlt={"OUR SUCCESS STORIES"}
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
}
