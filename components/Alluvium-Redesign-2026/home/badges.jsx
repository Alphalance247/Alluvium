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
      logo: "/assets/Alluvium-Redesign-2026/badges/gold-solution-partner.svg",
      alt: "Atlassian Gold Solution Partner",
      width: 246,
      height: 43,
    },
    {
      name: "Partner 3",
      logo: "/assets/Alluvium-Redesign-2026/badges/cloud-migration-badge.svg",
      alt: "Cloud Migration Partner",
      width: 128,
      height: 80,
    },
    {
      name: "Partner 4",
      logo: "/assets/Alluvium-Redesign-2026/badges/service-management-badge.svg",
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
    <section className="w-full bg-[#0C111D] overflow-hidden">
      <div className="flex flex-wrap max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16  items-center justify-center gap-8 md:gap-10">
        {clientLogos.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-16 md:h-20  transition-all duration-200"
          >
            <Image
              src={client.logo}
              alt={`${client.alt}`}
              width={client.width}
              height={client.height}
              className="max-h-12 md:max-h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloudSection;
