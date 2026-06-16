import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import CaseStudies from "components/Alluvium-Redesign-2026/caseStudies";
import AboutSection from "components/Alluvium-Redesign-2026/about";
import SeamlessAtlassian from "components/Alluvium-Redesign-2026/seamlessAtlassian";
import Service from "components/Alluvium-Redesign-2026/service";
import StartScaling from "components/Alluvium-Redesign-2026/StartScaling";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import ServiceHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import { badges } from "data";
import PillarsSection from "components/Alluvium-Redesign-2026/home/pillarSection";
import WhyUs from "components/Alluvium-Redesign-2026/home/whyUs";
import SuccessStories from "components/Alluvium-Redesign-2026/home/caseStudyCard";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import AiAdoptionHero from "components/Alluvium-Redesign-2026/common/aiAdoptionHero";
import SuccessStory from "components/Alluvium-Redesign-2026/successStory";
import GifHero from "components/Alluvium-Redesign-2026/home-hero/gifHero";
import FeaturedProgramme from "components/Alluvium-Redesign-2026/featuredProgramme/featuredBanner";

const badgesImages = [
  {
    id: "01",
    imgSrc: "/assets/Alluvium-Redesign-2026/services/cloud.png",
    alt: "Cloud Partner",
    width: "201",
    height: "134",
  },
  {
    id: "02",
    imgSrc: "/assets/Alluvium-Redesign-2026/services/gold.png",
    alt: "Gold Partner",
    width: "278",
    height: "74",
  },
];

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
        {/* <SWPHero /> */}
        {/* <Team26Hero /> */}
        {/* <AiAdoptionHero /> */}
        <GifHero />

        {/* <ServiceHero
          badges={badgesImages}
          serviceImage="/assets/Alluvium-Redesign-2026/home/hero-section-background.png"
          heading={
            "The Strategic Partner for Enterprise Atlassian Transformations."
          }
          serviceImageIsAvailable={true}
          subhead={
            "From high-stakes Cloud Upgrades to optimized Licensing and ESM, we bridge the gap between your tools and your business goals. Unlock Human-AI Collaboration at Scale."
          }
          btnName2={"BOOK A 15-MIN STARTEGY CONSULT"}
          isBtn2={true}
          btnName={"REQUEST A FREE CLOUD AUDIT"}
        /> */}

        <div style={{ borderBottom: "1px " }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              borderBottom: "1px dashed rgba(217, 217, 217, 0.80)",
            }}
          >
            <Badges variant={"sub-default"} badgesData={badges} />
          </div>
        </div>
        <FeaturedProgramme />
        <PillarsSection />
        <WhyUs />
        <SuccessStories />
        <CtaSection />
        {/* <CaseStudies />
        <AboutSection />
        <SeamlessAtlassian />
        <Service /> */}
        {/* <SuccessStory /> */}

        {/* <Expertise />
        <AtlassianSolution />
        <Banner />
        <Impact />
        <MarketPlacePlugin /> */}
        {/* <StartScaling /> */}
      </Layout>
    </>
  );
};

export default Home;
