"use client";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import MigrationIntro from "components/Alluvium-Redesign-2026/opsgenie-to-jsm/migrationIntro";
import Layout from "components/layout";
import React from "react";

const Content = () => {
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
      <MigrationIntro />
    </Layout>
  );
};

export default Content;
