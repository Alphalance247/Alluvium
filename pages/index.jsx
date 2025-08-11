import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import Hero from "components/Alluvium-Redesign-2025/hero";
import Expertise from "components/Alluvium-Redesign-2025/expertise";
import AtlassianSolution from "components/Alluvium-Redesign-2025/atlassianSolution";
import Impact from "components/Alluvium-Redesign-2025/ourImpact";
import MarketPlacePlugin from "components/Alluvium-Redesign-2025/marketPlacePlugin";
import Banner from "./help-center/component/banner";

const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="preload"
            as="image"
            href="/assets/redesign-2025/home/high-velocity.webp"
          />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
          />
        </Head>
        <Hero />
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
