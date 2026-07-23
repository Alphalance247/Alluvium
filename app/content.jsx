"use client";
import React from "react";
import Layout from "components/layout";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";
import FeaturedProgramme from "components/Alluvium-Redesign-2026/featuredProgramme/featuredBanner";
import GifHero from "components/Alluvium-Redesign-2026/home-hero/gifHero";
import Hero from "components/Alluvium-Redesign-2026/home/Hero";
import WhitepaperSection from "components/Alluvium-Redesign-2026/home/whitepaperSection";
import ImpactMetricsSection from "components/Alluvium-Redesign-2026/home/impactMetric";
import EnterpriseSolutionsSection from "components/Alluvium-Redesign-2026/home/services";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";
import LogoCloudSection from "components/Alluvium-Redesign-2026/home/badges";
import CaseStudiesCarousel from "components/Alluvium-Redesign-2026/home/caseStudyCard";

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
        {/* <Hero /> */}
        {/* <SWPHero /> */}
        {/* <Team26Hero /> */}
        <Hero />
        {/* <GifHero /> */}
        {/* <AiAdoptionHero /> */}

        {/* <div style={{ borderBottom: "1px " }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              borderBottom: "1px dashed rgba(217, 217, 217, 0.80)",
            }}
          >
            <Badges variant={"sub-default"} badgesData={badges} />
          </div>
        </div> */}
        <LogoCloudSection />
        <WhitepaperSection />
        <EnterpriseSolutionsSection />
        <ImpactMetricsSection />
        <FeaturedProgramme />
        <CaseStudiesCarousel />
        <CtaBannerSection />

        {/* <PillarsSection />
        <WhyUs />
       
        <CtaSection /> */}
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
