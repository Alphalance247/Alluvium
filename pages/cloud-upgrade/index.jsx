import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import WhyAlluvium from "components/Alluvium-Redesign-2026/cloud-upgrade/whyAlluvium";
import SecurityCompliance from "components/Alluvium-Redesign-2026/cloud-upgrade/security";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const CloudUpgrade = () => {
  const triadData = [
    {
      id: 1,
      title: "Zero-Data-Loss Integrity",
      description:
        'We use a "Clean-First" protocol to ensure every attachment, comment, and link is preserved and searchable.',
      // Replace these placeholder divs with your actual SVGs
      icon: "/assets/Alluvium-Redesign-2026/services/chart2.svg",
      width: 64,
      height: 64,
    },
    {
      id: 2,
      title: "Compliance & Governance",
      description:
        "Specialized experience in regulated sectors (Finance, Insurance, Higher Ed) ensuring GDPR and DORA standards.",
      icon: "/assets/Alluvium-Redesign-2026/services/chart1.svg",
      width: 64,
      height: 64,
    },
    {
      id: 3,
      title: "Cost Rationalization",
      description:
        "We audit your seat counts and app sprawl during the move, often reducing annual licensing overhead by 15–30%.",
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
      imgSrc: "/assets/Alluvium-Redesign-2026/services/gold.png",
      alt: "Gold Partner",
      width: "278",
      height: "74",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Alluvium | Cloud Upgrade </title>
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
          heading={"Cloud Upgrade: Secure. Scalable. Seamless."}
          subhead={
            "We don’t just move data; we migrate your business logic. Alluvium provides the strategic technical bench for high-stakes migrations, ensuring security, compliance, and optimized performance from Day one."
          }
          btnName={"SCHEDULE A STRATEGY SESSION"}
        />
        <ServicesCardsSection triadData={triadData} />
        <DiscoverySection
          heading="The Migration Blueprint"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/large.png"
        />
        <WhyAlluvium />
        <SecurityCompliance />
        <CtaSection />
      </Layout>
    </>
  );
};

export default CloudUpgrade;
