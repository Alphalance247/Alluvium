"use client";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import WhatWeDeliver from "components/Alluvium-Redesign-2026/itsm/WhatWeDeliver";
import MigrationIntro from "components/Alluvium-Redesign-2026/opsgenie-to-jsm/migrationIntro";
import Layout from "components/layout";
import React from "react";

const Content = () => {
  const items = [
    {
      id: 1,
      heading: "AI adoption training ",
      text: "Practical programs turning AI curiosity into measurable productivity",
    },
    {
      id: 2,
      heading: "Agent economics",
      text: "Understand how AI agents consume credits and where costs accumulate",
    },
    {
      id: 3,
      heading: "Rovo enablement",
      text: "Implementation and enterprise rollout",
    },
    {
      id: 4,
      heading: "Claude in practice",
      text: "Knowledge management, customer experience, underwriting, and compliance use cases",
    },
  ];
  return (
    <Layout>
      <NewServicesHero
        heading={
          <span>
            Rovo is the record.
            <br /> Claude is the judgment.
          </span>
        }
        subheading="Connect trusted organizational knowledge with AI that can reason, create, and act on it."
        ctaLabel="See AI in action "
        ctaHref="/ai"
        image="https://d38rkvi67t4lhi.cloudfront.net/assets/1788353413678-image-8-1.png"
        imageAlt="AI Solution"
        width={598}
        height={299}
      >
        {/* <Link href={""} className="group">
          <Button
            className="px-6 py-2.5 rounded-lg font-bold font-manrope text-lg text-white  border border-white group-hover:bg-white  "
            backgroundColor="secondaryLv3"
          >
            <p className=" group-hover:text-secondary-900"> See how it works</p>
          </Button>
        </Link> */}
      </NewServicesHero>
      <MigrationIntro heading="AI works better when the foundation is right.">
        <span className="text-[#344054] font-medium">
          Rovo knows what your organization has decided and where the work sits.
          Claude reasons over that record and drafts the next move. Most AI
          pilots stall because they’re bolted onto tools nobody trusts —
          <span className="font-bold">we fix the platform first.</span>
        </span>
      </MigrationIntro>
      <WhatWeDeliver
        items={items}
        className="bg-tertiary-150"
        borderColor="border-tertiary-100"
      />
    </Layout>
  );
};

export default Content;
