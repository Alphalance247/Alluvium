"use client";
import React from "react";
import Layout from "components/layout";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import MigrationIntro from "components/Alluvium-Redesign-2026/opsgenie-to-jsm/migrationIntro";
import SaferPath from "components/Alluvium-Redesign-2026/opsgenie-to-jsm/saferPath";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";

const OpsgenieToJsm = () => {
  return (
    <>
      <Layout>
        <NewServicesHero
          heading="Opsgenie ends support 5 April 2027"
          subheading="Move to Jira Service Management Operations with a structured 10-week plan, live parallel testing, and rollback protection before cutover."
          ctaLabel="Book a discovery call"
          ctaHref="/contact-us"
          image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787731328047-image-5.png"
          imageAlt="Opsgenie to JSM Migration"
          width={596}
          height={397}
        />
        <MigrationIntro />
        <SaferPath />
        <CtaBannerSection
          label="READY TO MOVE?"
          heading="Plan your Opsgenie migration with confidence."
          description="We will assess your current setup, identify what needs to move, and map a structured path to Jira Service Management Operations before the 5 April 2027 deadline."
          ctaLabel="Book a migration assessment"
          ctaHref="/contact-us"
        />
      </Layout>
    </>
  );
};

export default OpsgenieToJsm;
