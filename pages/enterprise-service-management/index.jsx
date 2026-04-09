import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import BeyondIT from "components/Alluvium-Redesign-2026/enterprise-management/beyondIT";
import ExpertiseBridge from "components/Alluvium-Redesign-2026/enterprise-management/expertiseBridge";

const EnterpriseManagement = () => {
  const triadData = [
    {
      id: 1,
      title: "Unified Employee Experience",
      description:
        "Give employees one single portal to request everything—from a new laptop (IT) to a contract review (Legal) or a payroll query (Finance).",
      // Replace these placeholder divs with your actual SVGs
      icon: "/assets/Alluvium-Redesign-2026/services/unified.svg",
      width: 98,
      height: 68,
    },
    {
      id: 2,
      title: "Eliminate Manual Bottlenecks",
      description:
        "Replace messy email chains and spreadsheets with automated workflows, SLAs, and clear accountability for every department.",
      icon: "/assets/Alluvium-Redesign-2026/services/bottle.svg",
      width: 68,
      height: 68,
    },
    {
      id: 3,
      title: "Data-Driven Decisions",
      description:
        "Gain visibility into how every team is performing with unified reporting, identifying bottlenecks across the entire organization in real-time.",
      icon: "/assets/Alluvium-Redesign-2026/services/illus.svg",
      width: 79,
      height: 67,
    },
  ];

  const blueprintSteps = [
    {
      id: "01",
      title: "Service Discovery",
      description:
        "We map existing departmental workflows, identifying manual 'hidden' processes that cause friction and slow down your internal service delivery.",
    },
    {
      id: "02",
      title: "Portal Design",
      description:
        "We create a user-centric Service Portal that provides a single, intuitive point of entry for employees to access all services.",
    },
    {
      id: "03",
      title: "Workflow Automation",
      description:
        "Our experts build intelligent automation and custom SLAs, ensuring requests are routed to the right team members instantly and accurately.",
    },
    {
      id: "04",
      title: "Knowledge Integration",
      description:
        "We develop self-service Knowledge Bases, empowering your employees to find answers quickly and reducing the ticket volume for your teams.",
    },
    {
      id: "05",
      title: "Performance Optimization",
      description:
        "We implement advanced reporting dashboards, providing leadership with clear visibility into team performance, workload distribution, and overall service health.",
    },
  ];

  const badges = [
    {
      id: "01",
      imgSrc: "/assets/Alluvium-Redesign-2026/services/cloud.png",
      alt: "Cloud Partner",
      width: "201",
      height: "134",
    },
    {
      id: "02",
      imgSrc: "/assets/Alluvium-Redesign-2026/services/itsm.png",
      alt: "Gold Partner",
      width: "201",
      height: "134",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Alluvium | Enterprise Service Management </title>
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
          badges={badges}
          heading={
            "Enterprise Service Management (ESM): Velocity for Every Department."
          }
          subhead={
            "Break down silos and standardize service delivery. We help your HR, Finance, Legal teams adopt the same high-velocity workflows used by IT, powered by Jira Service Management."
          }
          btnName={"Book a Service Design Consultation"}
          serviceImage={"/assets/Alluvium-Redesign-2026/services/hero3.png"}
          alt={"Abstract background with feature image and partner logos"}
        />
        <ServicesCardsSection
          triadData={triadData}
          heading="Why Enterprise Service Management (ESM)?"
        />
        <BeyondIT />
        <DiscoverySection
          heading="The 5-Step ESM Implementation Journey"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/large2.png"
        />
        <ExpertiseBridge />

        <CtaSection />
      </Layout>
    </>
  );
};

export default EnterpriseManagement;
