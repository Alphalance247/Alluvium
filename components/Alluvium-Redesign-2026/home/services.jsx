import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    title: "Atlassian cloud upgrade",
    description: "Move off Server or Data Center with zero data loss.",
    href: "/cloud-upgrade",
    icon: "/assets/Alluvium-Redesign-2026/home/carbon_cloud-infra-migration.svg",
  },
  {
    title: "ESM & ITSM consulting",
    description: "One service platform for IT, HR, Finance, Legal, and Ops.",
    href: "/enterprise-service-management",
    icon: "/assets/Alluvium-Redesign-2026/home/ESM.svg",
  },
  {
    title: "License & token optimization",
    description: "Every Atlassian seat and Claude token earning its place.",
    href: "/license-optimization",
    icon: "/assets/Alluvium-Redesign-2026/home/licence-token.svg",
  },
  {
    title: "AI solutions — Claude & Rovo",
    description: "AI embedded in the tools your teams already use.",
    href: "/ai",
    icon: "/assets/Alluvium-Redesign-2026/home/ai-solutions.svg",
  },
  {
    title: "Strategic partnerships",
    description:
      "Delivery capacity for consultancies and ISVs who need an Atlassian or AI bench.",
    href: "/strategic-partnerships",
    icon: "/assets/Alluvium-Redesign-2026/home/strategic-partner.svg",
  },
];

const EnterpriseSolutionsSection = () => {
  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="flex flex-col items-start gap-12 lg:gap-20">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#E37915]" />
            <span className="text-[#1D2939] text-sm font-bold font-sans uppercase">
              Our services
            </span>
          </div>
          <h2 className="text-[#1D2939] text-3xl md:text-[2.5rem] font-bold font-serif leading-tight">
            One platform. Five ways in.
          </h2>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-b border-slate-200 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    width={40}
                    height={40}
                    alt={service.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#1D2939] text-xl font-semibold font-sans">
                    {service.title}
                  </h3>
                  <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <Link
                href={service.href}
                className="group shrink-0 inline-flex items-center gap-2 py-2 text-[#344054] font-bold text-base font-sans transition-colors duration-150 self-start sm:self-center"
              >
                <span>Explore solution</span>
                <FaArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSolutionsSection;
