import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import Hero from "components/Alluvium-Redesign-2025/hero";
import Expertise from "components/Alluvium-Redesign-2025/expertise";
import AtlassianSolution from "components/Alluvium-Redesign-2025/atlassianSolution";
import Impact from "components/Alluvium-Redesign-2025/ourImpact";
import MarketPlacePlugin from "components/Alluvium-Redesign-2025/marketPlacePlugin";
import Banner from "./help-center/component/banner";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import SWPHero from "components/Alluvium-Redesign-2025/swpHero";

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
        <div style={{ maxWidth: "1260px", margin: "0 auto" }}>
          <Badges variant={"sub-default"} badgesData={badges} />
        </div>
        <Lines variant="sub-default" />
        <Expertise />
        <AtlassianSolution />
        <Banner />
        <Impact />
        <MarketPlacePlugin />
      </Layout>
    </>
  );
};

export default Home;
