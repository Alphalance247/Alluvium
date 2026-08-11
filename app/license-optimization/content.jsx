"use client";
import React from "react";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import OptimizeSpend from "components/Alluvium-Redesign-2026/licence-optimization/optimzedSpend";
import ComparisonTable from "components/Alluvium-Redesign-2026/licence-optimization/comparisonTable";
import Button from "components/Alluvium-Redesign-2026/common/button";
import Hero from "components/Alluvium-Redesign-2026/common/hero";
// import HowItWorks from "components/Alluvium-Redesign-2026/license-optimization/HowItWorks";
// import WhereWasteHappens from "components/Alluvium-Redesign-2026/license-optimization/whereWasteHappens";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import WhereWasteHappens from "components/Alluvium-Redesign-2026/licence-optimization/WhereWasteHappens";
import AtlassianTokenCredentialSecurity from "components/Alluvium-Redesign-2026/licence-optimization/AtlassianTokenCredentialSecurity";
import CaseStudy from "components/Alluvium-Redesign-2026/licence-optimization/CaseStudy";
import HowItWorks from "components/Alluvium-Redesign-2026/licence-optimization/HowItWorks";
import OurRenewal from "components/Alluvium-Redesign-2026/licence-optimization/OurRenewal";
import ClaudeTokenCostControl from "components/Alluvium-Redesign-2026/licence-optimization/ClaudeTokenCostControl";
import CuriousSection from "components/Alluvium-Redesign-2026/licence-optimization/curiousSection";
import PlatformOptimisation from "components/Alluvium-Redesign-2026/licence-optimization/PlatformOptimisation";
import ReadyToCut from "components/Alluvium-Redesign-2026/licence-optimization/ReadyToCut";
import Image from "next/image";
const LicenseOptimization = () => {
  // const triadData = [
  //   {
  //     id: 1,
  //     title: "Cost Rationalization",
  //     description:
  //       " We don't just renew; we audit. We identify inactive users and redundant apps, typically saving clients 15–45% on their annual bill.",
  //     // Replace these placeholder divs with your actual SVGs
  //     icon: "/assets/Alluvium-Redesign-2026/services/cost.svg",
  //     width: 81,
  //     height: 92,
  //   },
  //   {
  //     id: 2,
  //     title: "24/7 Dedicated Support",
  //     description:
  //       " Skip the standard queue. Our clients receive around-the-clock technical support and a dedicated account manager who knows your instance inside out.",
  //     icon: "/assets/Alluvium-Redesign-2026/services/chat.svg",
  //     width: 206,
  //     height: 83,
  //   },
  //   {
  //     id: 3,
  //     title: "Consolidated Billing",
  //     description:
  //       "We simplify your procurement by managing multiple Atlassian products and Marketplace apps under a single, predictable local currency invoice.",
  //     icon: "/assets/Alluvium-Redesign-2026/services/folder.svg",
  //     width: 86,
  //     height: 88,
  //   },
  // ];

  // const blueprintSteps = [
  //   {
  //     id: "01",
  //     title: "Usage Audit",
  //     description:
  //       "We analyze your current user tiers and application usage to identify 'zombie' accounts and redundant Marketplace app subscriptions immediately.",
  //   },
  //   {
  //     id: "02",
  //     title: "Tier Rationalization",
  //     description:
  //       "Our experts recommend the optimal licensing tier (Standard, Premium, or Enterprise) based on your specific security and feature requirements.",
  //   },
  //   {
  //     id: "03",
  //     title: "Procurement Strategy",
  //     description:
  //       "We align your renewal dates and consolidate all Atlassian products into a single, predictable billing cycle that simplifies your budgeting.",
  //   },
  //   {
  //     id: "04",
  //     title: "Support Integration",
  //     description:
  //       "We onboard your team to our 24/7 dedicated support desk, ensuring your admins have an expert to call whenever needed.",
  //   },
  //   {
  //     id: "05",
  //     title: "Proactive Review",
  //     description:
  //       "We conduct quarterly health checks to ensure your licensing scales with your growth, preventing 'bill shock' and ensuring continuous optimization.",
  //   },
  // ];

  // const badges = [
  //   {
  //     id: "01",
  //     imgSrc: "/assets/Alluvium-Redesign-2026/services/marketplace.png",
  //     alt: "Marketplace Partner",
  //     width: "239",
  //     height: "74",
  //   },
  //   {
  //     id: "02",
  //     imgSrc: "/assets/Alluvium-Redesign-2026/services/gold.png",
  //     alt: "Gold Partner",
  //     width: "278",
  //     height: "74",
  //   },
  // ];

  return (
    <>
      <Layout>
        {/* <ServicesHero
          badges={badges}
          heading={"Optimize Your Atlassian Spend. Maximize Your ROI."}
          subhead={
            "Stop overpaying for seats you don't use. As a Gold Solution Partner, Alluvium rationalizes your licensing footprint and provides 24/7 dedicated support that keeps your mission-critical tools running."
          }
          btnName={"Request a Licensing Audit"}
          serviceImage={"/assets/Alluvium-Redesign-2026/services/hero4.png"}
          alt={"Abstract background with feature image and partner logos"}
        />
        <ServicesCardsSection
          triadData={triadData}
          heading="The Value Triad (Why Buy Through Alluvium?)"
        />
        <OptimizeSpend />
        <DiscoverySection
          heading="The 5-Step Optimization Journey"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/large3.png"
        />
        <ComparisonTable />
        <CtaSection
          heading={"Ready to Reduce Your Atlassian Overhead?"}
          subhead={"Book a 30-minute review of your current licensing stack."}
          btnText={"Get a Preferred Quote"}
        /> */}
        <div>
          <Hero
            heroTitle="Licence & Token Optimisation"
            heroDescription="Atlassian licences and Claude AI tokens are two different cost centres but waste looks the same in both: unused seats, wrong tiers, no governance. We audit, right-size, and set controls across your entire instance."
          >
            <Link href="/contact-us">
              <Button
                className="text-white flex items-center gap-3 hover:bg-default-200"
                size="sm"
                backgroundColor="defaultLv3"
              >
                Request a licence request <FaArrowRight />{" "}
              </Button>
            </Link>
            {/* <div className="lg:w-[420px] w-[250px] md:w-[650px] h-[250px] md:h-[420px] rounded-[16px] bg-[#D9D9D9]"></div> */}
            <div className="w-full h-[634px]">
              <Image src="https://d38rkvi67t4lhi.cloudfront.net/assets/1786357486427-Image-21.png" alt="hero image" width={644} height={634} className=" object-fit h-[400px] w-full lg:w-full lg:h-full " />
            </div>
          </Hero>
          <PlatformOptimisation />
          <WhereWasteHappens />
          <CuriousSection />
          <AtlassianTokenCredentialSecurity />
          <ClaudeTokenCostControl />
          <OurRenewal />
          <HowItWorks />
          <CaseStudy
            title="Incident resolution, cut in half"
            imageUrl="https://d38rkvi67t4lhi.cloudfront.net/assets/1785945338247-Image-20.png"
            heading="Finance"
            description=" What stood out wasn't just their technical expertise—it was their ability to simplify a highly complex transformation."
            percentage="100%"
            hours="800"
            name="James Anderson"
            role="Head of Enterprise Technology Global Financial Services Organization"
            linkUrl="#"
          />
          <ReadyToCut />
        </div>
      </Layout>
    </>
  );
};

export default LicenseOptimization;
