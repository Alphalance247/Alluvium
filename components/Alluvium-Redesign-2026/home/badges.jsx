import React from "react";
import Container from "../common/container";
import Image from "next/image";

const LogoCloudSection = () => {
  // Replace these image URLs with your actual brand logo SVG/PNG assets
  const clientLogos = [
    {
      name: "Partner 1",
      logo: "/assets/Alluvium-Redesign-2026/badges/claude-badge.svg",
      alt: "Claude Badge",
      width: 158,
      height: 80,
    },
    {
      name: "Partner 2",
      logo: "/assets/Alluvium-Redesign-2026/badges/gold-solution-partner-black.svg",
      alt: "Atlassian Gold Solution Partner",
      width: 246,
      height: 43,
    },
    {
      name: "Partner 3",
      logo: "/assets/Alluvium-Redesign-2026/badges/cloud-migration-badge.png",
      alt: "Cloud Migration Partner",
      width: 129,
      height: 100,
    },
    {
      name: "Partner 4",
      logo: "/assets/Alluvium-Redesign-2026/badges/service-management-specialization.svg",
      alt: "Service Management",
      width: 129,
      height: 81,
    },
    {
      name: "Partner 5",
      logo: "/assets/Alluvium-Redesign-2026/badges/aws-partner-badge.svg",
      alt: "Aws-Partner-Logo",
      width: 82,
      height: 80,
    },
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex flex-col items-center gap-16 py-24 px-0">
        {/* Section Title */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center text-slate-900 text-4xl font-bold font-serif leading-tight">
            Partners and certifications
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-10">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${index !== clientLogos.length - 1 ? "border-r-[1px]" : ""} pr-10 border-[#E4E7EC] h-16 md:h-20 transition-all duration-200 `}
            >
              <Image
                src={client.logo}
                alt={`${client.alt}`}
                width={client.width}
                height={client.height}
                className=" w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LogoCloudSection;
