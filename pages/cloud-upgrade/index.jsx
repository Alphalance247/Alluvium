import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import WhyAlluvium from "components/Alluvium-Redesign-2026/cloud-upgrade/whyAlluvium";

const Home = () => {
  const triadData = [
    {
      id: 1,
      title: "Unified Employee Experience",
      description:
        "Give employees one single portal to request everything—from a new laptop (IT) to a contract review (Legal) or a payroll query (Finance).",
      // Replace these placeholder divs with your actual SVGs
      icon: "/assets/Alluvium-Redesign-2026/services/chart2.svg",
      width: 64,
      height: 64,
    },
    {
      id: 2,
      title: "Eliminate Manual Bottlenecks",
      description:
        "Replace messy email chains and spreadsheets with automated workflows, SLAs, and clear accountability for every department.",
      icon: "/assets/Alluvium-Redesign-2026/services/chart1.svg",
      width: 64,
      height: 64,
    },
    {
      id: 3,
      title: "Data-Driven Decisions",
      description:
        "Gain visibility into how every team is performing with unified reporting, identifying bottlenecks across the entire organization in real-time.",
      icon: "/assets/Alluvium-Redesign-2026/services/chart.svg",
      width: 64,
      height: 64,
    },
  ];

  const blueprintSteps = [
    {
      id: "01",
      title: "Discovery",
      description:
        "Deep-dive audit of your Server/DC architecture and app dependencies.",
    },
    {
      id: "02",
      title: "Strategy",
      description:
        "Choosing your path (Big Bang or Phased) and defining your new Cloud governance.",
    },
    {
      id: "03",
      title: "Validation",
      description:
        "Full-scale sandbox testing with rigorous User Acceptance Testing (UAT).",
    },
    {
      id: "04",
      title: "Deployment",
      description:
        "Precision cutover (weekend/overnight) with zero impact on 'Business as Usual.'",
    },
    {
      id: "05",
      title: "Post Migration",
      description:
        "We provide dedicated hyper-care, technical troubleshooting, and team training to ensure immediate adoption.",
    },
  ];

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
        <ServicesHero />
        <ServicesCardsSection triadData={triadData} />
        <DiscoverySection
          heading="The Migration Blueprint"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/large.png"
        />
        <WhyAlluvium />
      </Layout>
    </>
  );
};

export default Home;
