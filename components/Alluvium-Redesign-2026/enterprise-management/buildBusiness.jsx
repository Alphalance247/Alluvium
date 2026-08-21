import React from "react";
import Image from "next/image";
import Container from "../common/container";

const pillars = [
  {
    title: "IT service management (ITSM)",
    description:
      "Incidents, requests, changes, and problems on ITIL-aligned workflows in Jira Service Management. Incidents reach the right responder in minutes, changes get scrutiny only when risk demands it, and a self-service portal with SLAs keeps everyone accountable.",
    icon: "/assets/Alluvium-Redesign-2026/home/service-management.svg",
  },
  {
    title: "Service management for Every Department",
    description:
      "The same platform, beyond IT. HR runs onboarding and leave approvals out of email for good. Finance and Legal get auditable workflows. Facilities and Operations manage everything in one queue.",
    icon: "/assets/Alluvium-Redesign-2026/home/workflows.svg",
  },
];

const BuildBusinessSection = () => {
  return (
    <section className="w-full bg-white">
      <Container className="flex flex-col items-start gap-12">
        <h2 className="text-tertiary-300 text-3xl font-bold font-merriweather leading-9">
          Built for the Whole Business
        </h2>

        <div className="self-stretch h-full flex flex-col md:flex-row items-start gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex-1 w-full p-6 bg-grey-100 rounded-xl flex flex-col items-start gap-10"
            >
              <div className="size-16 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-grey-200 flex items-center justify-center">
                <Image src={pillar.icon} alt="" width={32} height={32} />
              </div>

              <div className="self-stretch flex flex-col items-start gap-2">
                <h3 className="text-tertiary-200 text-lg font-bold font-merriweather leading-7">
                  {pillar.title}
                </h3>
                <p className="text-tertiary-200 text-lg font-medium font-manrope leading-7">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BuildBusinessSection;
