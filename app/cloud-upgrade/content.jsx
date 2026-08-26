"use client";
import React from "react";
import Layout from "components/layout";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import WhatWeOffer from "components/Alluvium-Redesign-2026/cloud-upgrade/whatWeOffer";
import OpsgenieMigration from "components/Alluvium-Redesign-2026/cloud-upgrade/opsgenieMigration";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import WhyAlluvium from "components/Alluvium-Redesign-2026/cloud-upgrade/whyAlluvium";
import SecurityCompliance from "components/Alluvium-Redesign-2026/cloud-upgrade/security";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";
import CJRAdvantage from "components/Alluvium-Redesign-2026/cloud-upgrade/cjrAdvantage";

const CloudUpgrade = () => {
  const triadData = [
    {
      id: 1,
      title: "Zero-Data-Loss Integrity",
      description:
        'We use a "Clean-First" protocol to ensure every attachment, comment, and link is preserved and searchable.',
      // Replace these placeholder divs with your actual SVGs
      icon: "/assets/Alluvium-Redesign-2026/services/chart2.svg",
      width: 111,
      height: 114,
    },
    {
      id: 2,
      title: "Compliance & Governance",
      description:
        "Specialized experience in regulated sectors (Finance, Insurance, Higher Ed) ensuring GDPR and DORA standards.",
      icon: "/assets/Alluvium-Redesign-2026/services/chart1.svg",
      width: 105,
      height: 112,
    },
    {
      id: 3,
      title: "Cost Rationalization",
      description:
        "We audit your seat counts and app sprawl during the move, often reducing annual licensing overhead by 15–30%.",
      icon: "/assets/Alluvium-Redesign-2026/services/chart.svg",
      width: 199,
      height: 120,
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

  const complianceData = [
    {
      id: 1,
      src: "/assets/Alluvium-Redesign-2026/services/gdpr.png",
      alt: "Compliance Cert 1",
      // size: styles.large,
      width: 264,
      height: 168,
    },
    {
      id: 2,
      src: "/assets/Alluvium-Redesign-2026/services/iso.png",
      alt: "Compliance Cert 2",
      // size: styles.medium,
      width: 205,
      height: 205,
    },
    {
      id: 3,
      src: "/assets/Alluvium-Redesign-2026/services/soc.png",
      alt: "Compliance Cert 3",
      // size: styles.small,
      width: 190,
      height: 189,
    },
  ];

  return (
    <>
      <Layout>
        <NewServicesHero
          heading="Move off Server or Data Center — without the downtime"
          subheading="Atlassian's Server and Data Center products are being sunset. We run cloud migrations with zero data loss, minimal disruption, and a clear timeline — including multi-instance environments most teams are afraid to touch."
          ctaLabel="Book a migration assessment"
          ctaHref="/contact-us"
          image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787730881540-image-2.png"
          imageAlt="Cloud Migration"
          width={500}
          height={443}
        />
        <WhatWeOffer />
        <OpsgenieMigration
          image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787731328047-image-5.png"
          imageAlt="Opsgenie to JSM Migration"
          width={485}
          height={122}
        />
        {/* <ServicesCardsSection triadData={triadData} />
        <DiscoverySection
          heading="The Migration Blueprint"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/discovery.png"
        /> */}
        {/* <WhyAlluvium />
        <CJRAdvantage />
        <SecurityCompliance data={complianceData} /> */}
        <CtaBannerSection
          label="WHY MIGRATE NOW"
          heading="The migration window is getting shorter."
          description="Atlassian's end-of-support timeline does not wait. The later you start, the less runway you have to test before you are forced to cut over."
          ctaLabel="Book a migration assessment"
          ctaHref="/contact-us"
        />
      </Layout>
    </>
  );
};

export default CloudUpgrade;
