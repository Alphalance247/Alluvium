import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const StrategicPartnership = () => {
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
          <title>Alluvium | Strategic Partnerships </title>
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
            "The Strategic Technical Bench for Global Atlassian Partners."
          }
          subhead={
            "We collaborate with Solution Partners and Global Consultancies to execute high-stakes Atlassian transformations. From complex Cloud Migrations to Enterprise Service Management, Alluvium provides the technical depth to ensure your project's success."
          }
          btnName={"Explore Collaborative Opportunities"}
          serviceImage={"/assets/Alluvium-Redesign-2026/services/hero1.png"}
          alt={"Abstract background with feature image and partner logos"}
        />

        <CtaSection
          heading={
            "The Strategic Technical Bench for Global Atlassian Engagements."
          }
          subhead={
            "We collaborate with Solution Partners and Global Consultancies to execute high-stakes Atlassian transformations. From complex Cloud Migrations to Enterprise Service Management, Alluvium provides the technical depth to ensure your project's success across AMER, EMEA, and MEA."
          }
          btnText={"Explore Collaborative Opportunities"}
        />
      </Layout>
    </>
  );
};

export default StrategicPartnership;
