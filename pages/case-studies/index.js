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
        <title>Alluvium Success Stories | alluvium.net</title>
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
