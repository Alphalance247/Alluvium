import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";

const badges = [
  {
    src: "https://d38rkvi67t4lhi.cloudfront.net/assets/1787742095632-GOLD-SOLUTION-1.png",
    alt: "Atlassian Gold Solution Partner",
    width: 217,
    height: 81,
  },
  {
    src: "/assets/Alluvium-Redesign-2026/badges/service-management-badge.svg",
    alt: "Atlassian Service Management Specialization",
    width: 122,
    height: 81,
  },
  {
    src: "/assets/Alluvium-Redesign-2026/badges/cloud-migration-badge.svg",
    alt: "Atlassian Cloud Migration Specialization",
    width: 122,
    height: 81,
  },
  {
    src: "/assets/Alluvium-Redesign-2026/badges/claude-badge.svg",
    alt: "Claude Partner Network",
    width: 162,
    height: 82,
  },
  {
    src: "/assets/Alluvium-Redesign-2026/badges/aws-partner-badge.svg",
    alt: "AWS Partner",
    width: 82,
    height: 81,
  },
];

const AboutHero = () => {
  return (
    <section className="w-full bg-secondary-900 overflow-hidden">
      <Container className="flex flex-col items-center text-center gap-10">
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-serif lg:!leading-[60px]">
            We help organizations work smarter with Atlassian and AI
          </h1>
          <p className="text-slate-300 text-base md:text-lg font-medium font-sans leading-relaxed max-w-2xl">
            We fix the platform first, then automate on top of it — so Rovo
            knows where the work sits, and Claude knows what to do about it.
          </p>
        </div>

        <Link href="/contact-us">
          <button
            type="button"
            className="px-6 py-2.5 bg-default-100 rounded-lg shadow-sm text-white text-lg font-bold font-sans transition-colors duration-300 hover:bg-default-200"
          >
            Book a discovery call
          </button>
        </Link>

        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          {badges.map((badge) => (
            <div
              key={badge.src}
              className="h-20 flex items-center justify-center"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                // className="h-[381px]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
