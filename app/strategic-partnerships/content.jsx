"use client";
import React from "react";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import NoGuesswork from "components/Alluvium-Redesign-2026/itsm/NoGuesswork";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";
import Button from "components/Alluvium-Redesign-2026/common/button";
import Link from "next/link";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import Image from "next/image";
import WhiteBG from "components/Alluvium-Redesign-2026/strategic-partnerships/WhiteBG";
import MigrationIntro from "components/Alluvium-Redesign-2026/opsgenie-to-jsm/migrationIntro";

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
  const works = [
    {
      id: 1,
      heading: "You own the relationship ",
      text: "You scope the client relationship; we handle the technical delivery.",
    },
    {
      id: 2,
      heading: "Scale when you need it",
      text: "Engage us for a single project or ongoing delivery capacity, depending on your pipeline.",
    },
    {
      id: 3,
      heading: "We work under your brand",
      text: "Full confidentiality and white-label delivery are available when you need us behind the scenes.",
    },
    // {
    //   id: 4,
    //   heading: "Enablement & continuous improvement",
    //   text: "We provide role-based training for agents, approvers, and end users, then continue with post-launch reviews, SLA tuning, automation refinement, and ongoing advisory as your business evolves.",
    // },
  ];
  return (
    <>
      <Layout>
        {/* <ServicesHero
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
        /> */}
        <NewServicesHero
          heading={
            <>
              Delivery capacity, <br /> on demand
            </>
          }
          subheading="Extend your delivery capability with an experienced Atlassian and AI team working behind the scenes, under your brand when needed."
          ctaLabel="Talk to us about partneringl"
          ctaHref="/contact-us"
          image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787920872577-Image-25.png"
          imageAlt="strategic partnerships"
          width={644}
          height={634}
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
        <MigrationIntro heading="Your delivery bench, behind the scenes">
          <span className="text-[#344054] font-medium">
            Consultancies and ISVs sometimes need Atlassian or AI delivery
            capability they don’t have in-house.
            <span className="font-bold">
              We work behind the scenes as your bench — white-labeled where
              needed — so you can say yes to work you’d otherwise have to turn
              away.
            </span>
          </span>
        </MigrationIntro>
        <NoGuesswork
          classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-12"
          heading={
            <h4 className="text-tertiary-300 text-[36px] font-bold font-merriweather leading-[44px] text-center  ">
              A flexible extension of your team.
            </h4>
          }
          works={works}
        />
        <CtaBannerSection
          label="LET'S PARTNER"
          heading="Need more delivery capacity?"
          // "TFind the right path forward."
          description="Tell us what you are looking to deliver, and we will explore how our team can extend your capability behind the scenes."
          ctaLabel="Talk to us about partnering "
          ctaHref="/contact-us"
        >
          {/* <Link href="" className="w-full md:w-fit">
            <Button
              size="semi-md"
              // variant="secondary"
              type="button"
              className="hover:!bg-white hover:!text-secondary-900 text-white border border-[rgba(255, 255, 255,0.8)] shadow-[#1018280D]"
            >
              <span>See our process </span>
            </Button>
          </Link> */}
        </CtaBannerSection>
      </Layout>
    </>
  );
};

export default StrategicPartnership;
