"use client";
import React from "react";
import Layout from "components/layout";
import ServicesHero from "components/Alluvium-Redesign-2026/common/servicesHero";
import ServicesCardsSection from "components/Alluvium-Redesign-2026/common/servicesCardsSection";
import DiscoverySection from "components/Alluvium-Redesign-2026/common/discoverySection";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";
import BeyondIT from "components/Alluvium-Redesign-2026/enterprise-management/beyondIT";
import ExpertiseBridge from "components/Alluvium-Redesign-2026/enterprise-management/expertiseBridge";
import Hero from "components/Alluvium-Redesign-2026/enterprise-management/hero";
import ServiceBreakdownSection from "components/Alluvium-Redesign-2026/enterprise-management/serviceSectionBreakdwon";
import BuildBusinessSection from "components/Alluvium-Redesign-2026/enterprise-management/buildBusiness";
import Button from "components/Alluvium-Redesign-2026/common/button";
import NewServicesHero from "components/Alluvium-Redesign-2026/common/newServicesHero";
import CtaBannerSection from "components/Alluvium-Redesign-2026/home/ctaBannerSection";
import NoGuesswork from "components/Alluvium-Redesign-2026/itsm/NoGuesswork";
import OpsginieMigration from "components/Alluvium-Redesign-2026/itsm/OpsginieMigration";
import ReadyToModernize from "components/Alluvium-Redesign-2026/itsm/ReadyToModernize";
import ResultExpect from "components/Alluvium-Redesign-2026/itsm/ResultExpect";
import TheProblem from "components/Alluvium-Redesign-2026/itsm/TheProblem";
import WhatWeDeliver from "components/Alluvium-Redesign-2026/itsm/WhatWeDeliver";
import WhyTeam from "components/Alluvium-Redesign-2026/itsm/WhyTeam";
import Image from "next/image";
import Link from "next/link";
const badges = [
  {
    url: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787742095632-GOLD-SOLUTION-1.png",
    width: 217,
    height: 81,
  },
  {
    url: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081644-AT14VX9-1-1-2.png",
    width: 129,
    height: 81,
  },
  {
    url: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081514-Clip-path-group.png",
    width: 122,
    height: 81,
  },
];
const works = [
  {
    id: 1,
    heading: "Discovery & assessment ",
    text: "We audit your current setup, map workflows, interview stakeholders, and assess service management maturity. You get a clear report of gaps, quick wins, and a prioritized roadmap.",
  },
  {
    id: 2,
    heading: "Solution design",
    text: "We design request types, queues, SLAs, automations, approval chains, and portal experiences around your policies and processes. Nothing is generic.",
  },
  {
    id: 3,
    heading: "Implementation & integration",
    text: "We configure and deploy JSM, connecting it with Confluence, Slack, Teams, email, Active Directory, and your existing tools. Multi-channel support is built in from day one.",
  },
  {
    id: 4,
    heading: "Enablement & continuous improvement",
    text: "We provide role-based training for agents, approvers, and end users, then continue with post-launch reviews, SLA tuning, automation refinement, and ongoing advisory as your business evolves.",
  },
];
const EnterpriseManagement = () => {
  // const triadData = [
  //   {
  //     id: 1,
  //     title: "Unified Employee Experience",
  //     description:
  //       "Give employees one single portal to request everything—from a new laptop (IT) to a contract review (Legal) or a payroll query (Finance).",
  //     // Replace these placeholder divs with your actual SVGs
  //     icon: "/assets/Alluvium-Redesign-2026/services/unified.svg",
  //     width: 166,
  //     height: 117,
  //   },
  //   {
  //     id: 2,
  //     title: "Eliminate Manual Bottlenecks",
  //     description:
  //       "Replace messy email chains and spreadsheets with automated workflows, SLAs, and clear accountability for every department.",
  //     icon: "/assets/Alluvium-Redesign-2026/services/bottle.svg",
  //     width: 116,
  //     height: 114,
  //   },
  //   {
  //     id: 3,
  //     title: "Data-Driven Decisions",
  //     description:
  //       "Gain visibility into how every team is performing with unified reporting, identifying bottlenecks across the entire organization in real-time.",
  //     icon: "/assets/Alluvium-Redesign-2026/services/illus.svg",
  //     width: 140,
  //     height: 119,
  //   },
  // ];

  // const blueprintSteps = [
  //   {
  //     id: "01",
  //     title: "Service Discovery",
  //     description:
  //       "We map existing departmental workflows, identifying manual 'hidden' processes that cause friction and slow down your internal service delivery.",
  //   },
  //   {
  //     id: "02",
  //     title: "Portal Design",
  //     description:
  //       "We create a user-centric Service Portal that provides a single, intuitive point of entry for employees to access all services.",
  //   },
  //   {
  //     id: "03",
  //     title: "Workflow Automation",
  //     description:
  //       "Our experts build intelligent automation and custom SLAs, ensuring requests are routed to the right team members instantly and accurately.",
  //   },
  //   {
  //     id: "04",
  //     title: "Knowledge Integration",
  //     description:
  //       "We develop self-service Knowledge Bases, empowering your employees to find answers quickly and reducing the ticket volume for your teams.",
  //   },
  //   {
  //     id: "05",
  //     title: "Performance Optimization",
  //     description:
  //       "We implement advanced reporting dashboards, providing leadership with clear visibility into team performance, workload distribution, and overall service health.",
  //   },
  // ];

  // const badges = [
  //   {
  //     id: "01",
  //     imgSrc: "/assets/Alluvium-Redesign-2026/services/cloud.png",
  //     alt: "Cloud Partner",
  //     width: "201",
  //     height: "134",
  //   },
  //   {
  //     id: "02",
  //     imgSrc: "/assets/Alluvium-Redesign-2026/services/itsm.png",
  //     alt: "Gold Partner",
  //     width: "201",
  //     height: "134",
  //   },
  // ];
  const items = [
    {
      id: 1,
      heading: "ITSM",
      text: "Incidents, changes, and requests, aligned to ITIL, powered by JSM",
    },
    {
      id: 2,
      heading: "Multi-department service management",
      text: "HR, Finance, Legal, Facilities, and Operations on one platform",
    },
    {
      id: 3,
      heading: "Legacy platform displacement",
      text: "Off ServiceNow, HubSpot, Salesforce Precursive, Opsgenie, and PagerDuty, proven with real migrations",
    },
    {
      id: 4,
      heading: "AI-powered delivery",
      text: "Virtual Agent deflects 40–70% of routine tickets; Rovo surfaces answers before a ticket is raised; Claude drafts summaries and resolution notes",
    },
  ];
  return (
    <>
      <Layout>
        <NewServicesHero
          heading={
            <span>
              One platform.
              <br /> Every team.
              <br /> Faster service delivery.
            </span>
          }
          subheading="Stop managing requests through email and spreadsheets. We implement Jira Service Management so IT, HR, Finance, Legal, and Operations run on one AI-ready platform."
          ctaLabel="Book a discovery call"
          ctaHref="/contact-us"
          image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787745263665-ChatGPT-Image-Aug-25-2026-03_14_00-PM-1.png"
          imageAlt="Cloud Migration"
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
          <div className="flex gap-6">
            {badges.map((badge, index) => {
              return (
                <div key={index}>
                  <Image
                    src={badge.url}
                    alt="badge image"
                    width={badge.width}
                    height={badge.height}
                  />
                </div>
              );
            })}
          </div>
        </NewServicesHero>
        <OpsginieMigration />
        <TheProblem />
        <WhatWeDeliver items={items} className="" borderColor="border-tertiary-100" />
        <NoGuesswork classname="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-12" heading={<h4 className="text-tertiary-300 text-[36px] font-bold font-merriweather leading-[44px] text-center  "> A clear, phased approach — no guesswork,
          <br />no bloated timelines</h4>} works={works} />
        <WhyTeam />
        <ResultExpect />
        <ReadyToModernize />
        <CtaBannerSection
          label="LET'S TALK"
          heading="Find the right path forward."
          description="Book a discovery call. We’ll assess your setup and map a clear path forward."
          ctaLabel="Book a discovery call"
          ctaHref="/contact-us"
        >
          <Link href="/contact-us" className="w-full md:w-fit">
            <Button
              size="semi-md"
              // variant="secondary"
              type="button"
              className="hover:!bg-white  hover:!text-secondary-900 text-white border border-[rgba(255, 255, 255,0.8)] shadow-[#1018280D]"
            >
              <span className="font-manrope"> See our process </span>
            </Button>
          </Link>
        </CtaBannerSection>
        {/* <ServicesHero
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
        /> */}
        {/* <Hero />
        <ServiceBreakdownSection />
        <BuildBusinessSection /> */}
        {/* <ServicesCardsSection
          triadData={triadData}
          heading="Why Enterprise Service Management (ESM)?"
        />
        <BeyondIT />
        <DiscoverySection
          heading="The 5-Step ESM Implementation Journey"
          data={blueprintSteps}
          img="/assets/Alluvium-Redesign-2026/services/lage12.png"
        />
        <ExpertiseBridge />

        <CtaSection /> */}
      </Layout>
    </>
  );
};

export default EnterpriseManagement;
