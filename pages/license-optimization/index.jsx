import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import OptimizeSpend from "components/Alluvium-Redesign-2026/licence-optimization/optimzedSpend";
import ComparisonTable from "components/Alluvium-Redesign-2026/licence-optimization/comparisonTable";

const LicenseOptimization = () => {
  const triadData = [
    {
      id: 1,
      title: "Cost Rationalization",
      description:
        " We don't just renew; we audit. We identify inactive users and redundant apps, typically saving clients 15–45% on their annual bill.",
      // Replace these placeholder divs with your actual SVGs
      icon: "/assets/Alluvium-Redesign-2026/services/cost.svg",
      width: 98,
      height: 68,
    },
    {
      id: 2,
      title: "24/7 Dedicated Support",
      description:
        " Skip the standard queue. Our clients receive around-the-clock technical support and a dedicated account manager who knows your instance inside out.",
      icon: "/assets/Alluvium-Redesign-2026/services/chat.svg",
      width: 68,
      height: 68,
    },
    {
      id: 3,
      title: "Consolidated Billing",
      description:
        "We simplify your procurement by managing multiple Atlassian products and Marketplace apps under a single, predictable local currency invoice.",
      icon: "/assets/Alluvium-Redesign-2026/services/folder.svg",
      width: 79,
      height: 67,
    },
  ];

  const blueprintSteps = [
    {
      id: "01",
      title: "Usage Audit",
      description:
        "We analyze your current user tiers and application usage to identify 'zombie' accounts and redundant Marketplace app subscriptions immediately.",
    },
    {
      id: "02",
      title: "Tier Rationalization",
      description:
        "Our experts recommend the optimal licensing tier (Standard, Premium, or Enterprise) based on your specific security and feature requirements.",
    },
    {
      id: "03",
      title: "Procurement Strategy",
      description:
        "We align your renewal dates and consolidate all Atlassian products into a single, predictable billing cycle that simplifies your budgeting.",
    },
    {
      id: "04",
      title: "Support Integration",
      description:
        "We onboard your team to our 24/7 dedicated support desk, ensuring your admins have an expert to call whenever needed.",
    },
    {
      id: "05",
      title: "Proactive Review",
      description:
        "We conduct quarterly health checks to ensure your licensing scales with your growth, preventing 'bill shock' and ensuring continuous optimization.",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Alluvium | License Optimization </title>
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
        <ServicesHero
          badge={"License Optimization"}
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
        <CtaSection />
      </Layout>
    </>
  );
};

export default LicenseOptimization;
