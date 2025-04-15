import Layout from "components/layout";
import React from "react";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { consultingPageCards } from "data";
import Head from "next/head";
import AtlassianConsultingHero from "components/Alluvium-Redesign-2025/consulting/atlassianConsultingHero";
import Empower from "components/Alluvium-Redesign-2025/consulting/empower";
import Solutions from "components/Alluvium-Redesign-2025/consulting/solutions";

const Consulting = () => {
  return (
    <Layout>
      <Head>
        <title>Consulting | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="atlassian consulting, atlassian and confluence, agile atlassian, atlassian agile coach, atlassian jira and confluence, atlassian consulting suite, atlassian consulting services"
        />
      </Head>

      <AtlassianConsultingHero />
      <Empower />
      <Solutions />

      {/* <ServicesHero
        contentsheading="ATLASSIAN CONSULTANCY & STRATEGY"
        contentsheading1="Strategic Atlassian Consultancy for Optimal Results"
        contentsheading2="Are you seeking Atlassian expertise to implement ITSM, optimize your current setup, migrate your data to Atlassian Cloud, or enhance your existing Atlassian configuration? Let us help you tackle your teams' challenges."
        withSlide={false}
        button1={
          <Link href="/contact-us">
            <Button size="large">Schedule a Call</Button>
          </Link>
        }
      /> */}
      <ServerToCloud
        image2={true}
        heading="Empowering Your Success with Expert Atlassian Guidance"
        paragraph="Unlock the full potential of Atlassian tools with our expert consulting services. Whether you're implementing new solutions, optimizing workflows, or scaling for growth, we tailor our approach to meet your unique business needs. Our certified Atlassian experts work closely with you to ensure your tools drive efficiency and support your long-term goals. From strategy to execution, we're here to help you achieve measurable results and maximize your investment."
        image2Url="/assets/licence-image/cloudpic.svg"
        alt2="cloudpic"
      />
      <WhyMigrate
        heading="Tailored Atlassian Solutions for Every Business Need"
        description=""
        data={consultingPageCards}
      />
    </Layout>
  );
};

export default Consulting;
