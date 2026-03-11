import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import CaseStudies from "components/Alluvium-Redesign-2026/caseStudies";
import AboutSection from "components/Alluvium-Redesign-2026/about";
import SeamlessAtlassian from "components/Alluvium-Redesign-2026/seamlessAtlassian";
import SuccessStory from "components/Alluvium-Redesign-2026/successStory";
import Service from "components/Alluvium-Redesign-2026/service";
import StartScaling from "components/Alluvium-Redesign-2026/StartScaling";
import SWPHero from "components/Alluvium-Redesign-2026/SWPHero";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import { badges } from "data";

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Alluvium | Atlassian Global Solution Partner </title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            as="image"
            href="/assets/redesign-2025/home/high-velocity.webp"
          />
          <meta
            name="description"
            content="Alluvium, an Atlassian Solution Partner in the United States, United Kingdom, and Nigeria. We  deliver ITSM, DevOps, Agile, Cloud Migration, and workflow automation services. "
          />
          <meta
            name="keywords"
            content="Atlassian Solution Partner, Atlassian services, ITSM solutions, Jira Service Management,  Confluence, Jira Software, Bitbucket, DevOps tools, Agile workflows, Cloud migration, workflow  automation, project management tools, Atlassian partner US, Atlassian partner UK, Atlassian  partner Nigeria, ITSM Atlassian consultant, enterprise collaboration tools."
          />
        </Head>
        {/* <Hero /> */}
        <SWPHero />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Badges variant={"sub-default"} badgesData={badges} />
        </div>
        <Lines variant="sub-default" />
        <CaseStudies />
        <AboutSection />
        <SeamlessAtlassian />
        <Service />
        {/* <SuccessStory /> */}

        {/* <Expertise />
        <AtlassianSolution />
        <Banner />
        <Impact />
        <MarketPlacePlugin /> */}
        <StartScaling />
      </Layout>
    </>
  );
};

export default Home;
