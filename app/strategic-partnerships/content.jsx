"use client";
import React from "react";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const StrategicPartnership = () => {
  const badges = [
    {
      id: "01",
      imgSrc: "/assets/Alluvium-Redesign-2026/services/marketplace.png",
      alt: "Marketplace Partner",
      width: "239",
      height: "74",
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
