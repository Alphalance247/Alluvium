import Head from "next/head";
import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/alluviumCaseStudies/alluviumCaseStudies.module.scss";
import CaseStudiesCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseStudiesCard";
import HeroSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/HeroSection";
import CaseStudiesSection from "components/Alluvium-Redesign-2025/alluviumCaseStudies/CaseStudiesSection";

export default function Support() {
  return (
    <Layout>
      <Head>
        <title>Case Studies | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content={`Alluvium, alluvium,alluvium case studies, atlassian products case studies,  atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira`}
        />
      </Head>
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
}
