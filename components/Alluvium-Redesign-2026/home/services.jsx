import React from "react";
import Container from "../common/container";
import Image from "next/image";

const EnterpriseSolutionsSection = () => {
  const services = [
    {
      title: "Cloud migration",
      description:
        "Move to Cloud without stalling delivery. We plan the migration, govern the cutover, and stay through adoption.",
      actionText: "Explore cloud upgrade",
      href: "#cloud-migration",
      icon: "/assets/Alluvium-Redesign-2026/home/cloud-migration.svg",
    },
    {
      title: "Service management",
      description:
        "Modern ITSM powered by Atlassian's Jira Service Management and intelligent AI workflows.",
      actionText: "Explore service management",
      href: "#service-management",
      icon: "/assets/Alluvium-Redesign-2026/home/service-management.svg",
    },
    {
      title: "Token optimization",
      description:
        "Reduce licensing costs while maximizing adoption across your Atlassian and Claude environment.",
      actionText: "Optimize your licenses",
      href: "#token-optimization",
      icon: "/assets/Alluvium-Redesign-2026/home/token-optimization.svg",
    },
  ];

  return (
    <section className="w-full bg-[#FCF2E8]">
      {/* Section Header */}
      <Container className="py-16 md:py-20 lg:pb-24 flex flex-col justify-start items-center gap-12 lg:gap-20">
        <div className="w-full flex flex-col items-start gap-4">
          <h2 className="text-[#344054] text-3xl md:text-4xl font-bold font-serif leading-tight">
            How we help enterprises evolve
          </h2>
          <p className="max-w-2xl text-[#344054] text-lg md:text-xl font-medium font-sans leading-relaxed">
            From cloud modernization to AI-powered operations, we build
            connected systems that are secure and scalable.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start gap-8"
            >
              {/* Service Icon Box */}
              <div className="w-[72px] h-[72px] mb-14 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-xs">
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt={service.title}
                />
              </div>

              {/* Card Content & CTA */}
              <div className="w-full flex flex-col items-start gap-6">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-[#344054] text-2xl font-bold font-serif leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Action Link Button */}
                <a
                  href={service.href}
                  className="group py-2 inline-flex items-center gap-2 text-[#344054] font-bold font-sans text-base hover:text-indigo-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 rounded-md"
                >
                  <span>{service.actionText}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-150"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSolutionsSection;
