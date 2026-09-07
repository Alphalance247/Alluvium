"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "../common/container";
import { FaArrowRight } from "react-icons/fa6";
import CaseStudyModal from "./caseStudyModal";

const caseStudies = [
  {
    id: 1,
    sector: "Financial Services / Private Equity",
    title: "Global private equity firm",
    tags: ["ServiceNow", "Jira Service Management", "Workday"],
    description:
      "ESM rolled out across multiple business functions and unified with Workday.",
    footer: "Financial Services / Private Equity",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533596221-Rectangle-5.png",
    link: "global-private-equity-firm",
    detail: {
      serviceProvided: "ITSM & ESM implementation, Workday integration",
      solutionPillar: "ITSM/ESM Migration & Integration",
      challenge:
        "The firm’s legacy ServiceNow setup couldn’t scale across its multiple business functions, limiting visibility and slowing service delivery.",
      solution:
        "We replaced ServiceNow with Jira Service Management, delivering full ITSM and ESM capability and integrating it with Workday to unify HR processes.",
      results: [
        "ESM capability rolled out across multiple functions.",
        "Seamless Workday integration — HR processes now run through one connected system",
        "Faster service request resolution after go-live",
      ],
      stats: [
        { value: "5", label: "business functions covered" },
        { value: "30%", label: "faster ticket resolution " },
        { value: "100%", label: "Workday integration coverage" },
      ],
    },
  },
  {
    id: 2,
    sector: "Fire & Life Safety Services",
    title: "US fire protection services company",
    tags: ["HubSpot", "Jira Service Management", "JSM Assets"],
    description:
      "Migrated to JSM with a dedicated senior engineer on ongoing support.",
    footer: "ITSM Migration & Managed Services",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533607209-Rectangle-5-1.png",
    link: "us-fire-protection-services-company",
    detail: {
      serviceProvided: "ITSM migration, Workflow automation, Managed support",
      solutionPillar: "ITSM Migration & Managed Services",
      challenge:
        "HubSpot lacked the depth needed to support the company's growing ITSM requirements.",
      solution:
        "We migrated their ITSM stack to Jira Service Management, standing up JSM Assets and workflow automation for day-to-day operations.",
      results: [
        "Client since 2024 — ongoing partnership built on JSM",
        "Dedicated senior engineer assigned for continuous support",
        "Regular instance audits keeping the system optimized",
      ],
      stats: [
        { value: "100%", label: "ITSM migrated to JSM" },
        { value: "1", label: "dedicated senior engineer" },
        { value: "2024", label: "client since" },
      ],
    },
  },
  {
    id: 3,
    sector: "Technology / Professional Services",
    title: "Professional services technology provider",
    tags: ["Jira Cloud", "Salesforce Precursive"],
    description:
      "Delivery operation moved into Jira Cloud with a full reporting rebuild.",
    footer: "Delivery Platform Migration",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533596174-Rectangle-5-2.png",
    link: "professional-services-technology-provider",
    detail: {
      serviceProvided: "Platform migration, Data migration, Reporting rebuild",
      solutionPillar: "Delivery platform migration",
      challenge:
        "Delivery operations were tied to Salesforce Precursive, limiting integration options and reporting flexibility.",
      solution:
        "We moved their entire professional services delivery function into Jira Cloud, handling full data migration and integration.",
      results: [
        "Full reporting rebuild giving delivery teams real-time visibility",
        "Clean data migration with no disruption to active projects",
        "Improved reporting turnaround for delivery leadership",
      ],
      stats: [
        { value: "100%", label: "data migrated with zero disruption" },
        { value: "1", label: "full reporting suite rebuilt" },
        { value: "40%", label: "faster reporting turnaround" },
      ],
    },
  },
  {
    id: 4,
    sector: "Agriculture",
    title: "UK agricultural business",
    tags: ["Email intake automation", "Jira Service Management"],
    description:
      "A service desk built from the ground up, with automated email intake.",
    footer: "Service Desk Foundations",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533607209-Rectangle-5-3.png",
    link: "uk-agricultural-business",
    detail: {
      serviceProvided: "Service desk design & Implementation",
      solutionPillar: "Service desk foundations",
      challenge:
        "The business had no structured service desk capability, which led to fragmented requests and inconsistent tracking.",
      solution:
        "We designed and built a UK service desk from the ground up, including automated email-based intake and consolidated project boards.",
      results: [
        "Automated email intake, removing manual triage",
        "Consolidated project boards for full visibility across teams",
        "Resource and capacity planning frameworks built for long-term scalability",
      ],
      stats: [
        { value: "100%", label: "email intake automated" },
        { value: "1", label: "consolidated project board structure" },
        { value: "0", label: "manual triage steps remaining" },
      ],
    },
  },
  {
    id: 5,
    sector: "Financial Services / Commodities Trading",
    title: "Commodities trading firm",
    tags: ["Full Atlassian suite"],
    description:
      "A long term managed services partner running systems day to day.",
    footer: "Managed Services Partnership",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533596274-Rectangle-5-4.png",
    link: "commodities-trading-firm",
    detail: {
      serviceProvided: "Implementation, Support, Managed Services",
      solutionPillar: "Managed services partnership",
      challenge:
        "The firm needed a dependable long-term partner to run and support its systems day to day.",
      solution:
        "Alluvium now provides end-to-end implementation, support, and managed services for the firm.",
      results: [
        "Ongoing managed services partnership",
        "Reliable day-to-day operations with minimal disruption",
        "Consistent, dependable systems support",
      ],
      stats: [
        { value: "3+", label: "years as managed services partner" },
        { value: "99.9%", label: "systems uptime supported" },
        { value: "24/7", label: "support coverage" },
      ],
    },
  },
  {
    id: 6,
    sector: "Insurance",
    title: "Global specialty insurer",
    tags: ["Claude", "Microsoft Copilot"],
    description:
      "Copilot training delivered in London, with a Claude rollout now underway.",
    footer: "AI Adoption & Training",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788533596203-Rectangle-5-5.png",
    link: "global-specialty-insurer",
    detail: {
      serviceProvided: "AI training & enablement",
      solutionPillar: "AI adoption & training",
      challenge:
        "Teams needed structured, hands-on training to adopt AI tools effectively across the business.",
      solution:
        "We delivered Microsoft Copilot training across teams in London, now expanding into Claude training.",
      results: [
        "Multiple teams trained in Copilot across London offices",
        "Claude training rollout now underway",
        "Further Copilot expansion planned across additional teams",
      ],
      stats: [
        { value: "10+", label: "custom training workshops delivered" },
        { value: "London", label: "training delivered on-site" },
        { value: "2", label: "AI tools covered: Copilot & Claude" },
      ],
    },
  },
];

const CaseStudyGrid = ({ backgroundColor, showHeading = false }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  const showNext = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % caseStudies.length,
    );

  return (
    <section className="w-full overflow-hidden" style={{ backgroundColor }}>
      <Container className="flex flex-col items-start gap-12">
        {showHeading && (
          <h2 className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
            More Customer Stories
          </h2>
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              key={study.id}
              className="text-left w-full flex flex-col items-start gap-6 bg-white rounded-lg border border-slate-200 overflow-hidden"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={594}
                height={240}
                className="w-full h-60 object-cover"
              />

              <div className="w-full px-6 pb-2 flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-[#667085] text-sm font-medium font-sans">
                      {study.sector}
                    </span>
                    <h3 className="text-[#1D2939] text-2xl font-bold font-serif leading-snug">
                      {study.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#F2F4F7] border border-slate-200 rounded-full text-[#1D2939] text-sm font-semibold font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#344054] text-lg font-medium font-sans leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="w-full pt-1 border-t border-slate-200 flex justify-between items-center">
                  <span className="text-[#667085] text-sm font-medium font-sans">
                    {study.footer}
                  </span>
                  <span className="group inline-flex items-center gap-2 py-2 text-[#344054] font-bold text-base font-sans">
                    Read story
                    <FaArrowRight className="w-4 h-4 text-[#98A2B3] transition-transform duration-150 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <CaseStudyModal
        study={activeIndex === null ? null : caseStudies[activeIndex]}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};

export default CaseStudyGrid;
