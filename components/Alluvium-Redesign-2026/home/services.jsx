import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";
import { FaArrowRight } from "react-icons/fa6";

// Figma smart-animate export: springy fade-in used for each service's icon & text.
const FADE_IN_DURATION = "1.796649s";
const FADE_IN_EASING =
  "linear(0, 0.0985, 0.342, 0.6483, 0.9442, 1.1767, 1.3179, 1.364, 1.3302, 1.2427, 1.1314, 1.0233, 0.9377, 0.8853, 0.8675, 0.8791, 0.9105, 0.9509, 0.9904, 1.0219, 1.0414, 1.0482, 1.0443, 1.033, 1.0183, 1.0039, 0.9923, 0.9851, 0.9825, 0.9838, 0.9878, 0.9932, 0.9984, 1.0027, 1.0054, 1.0064, 1.0059, 1.0045, 1.0025, 1.0006, 0.9991, 0.9981, 0.9977, 0.9978, 0.9983, 0.9991, 0.9998, 1.0003, 1.0007, 1.0008, 1.0008)";

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
    href: "/ai-solutions",
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

const EnterpriseSolutionsSection = ({
  eyebrow = "Our services",
  heading = "One platform. Five ways in.",
}) => {
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="flex flex-col items-start gap-12 lg:gap-20">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-[#E37915]" />
            <span className="text-[#1D2939] text-sm font-bold font-sans uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-[#1D2939] text-3xl md:text-[2.5rem] font-bold font-serif leading-tight">
            {heading}
          </h2>
        </div>

        {/* Services List */}
        <div ref={listRef} className="w-full flex flex-col">
          {services.map((service, index) => {
            const delay = `${index * 0.12}s`;

            return (
              <div
                key={service.title}
                className={`group w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 -mx-4 px-4 py-6  border-b border-slate-200 transition-colors duration-100 hover:bg-[#E4E7EC] ${index === 0 ? "border-t" : ""
                  }`}
              >
                <div className="flex items-start gap-4 transition-transform duration-300 group-hover:translate-x-1">
                  <div
                    className={`service-fade-in w-12 h-12 shrink-0 flex items-center justify-center ${isVisible ? "service-fade-in--active" : ""
                      }`}
                    style={{ animationDelay: delay }}
                  >
                    <Image
                      src={service.icon}
                      width={40}
                      height={40}
                      alt={service.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div
                    className={`service-fade-in flex flex-col gap-4 ${isVisible ? "service-fade-in--active" : ""
                      }`}
                    style={{ animationDelay: delay }}
                  >
                    <h3 className="text-[#1D2939] text-xl font-semibold font-manrope ">
                      {service.title}
                    </h3>
                    <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <Link
                  href={service.href}
                  className="shrink-0 inline-flex items-center gap-2 py-2 text-[#344054] font-bold text-base font-manrope transition-colors duration-150 self-start sm:self-center"
                >
                  <span className="font-manrope">Explore solution</span>
                  <FaArrowRight className="w-4 h-4 text-[#98A2B3] transition-all duration-300 group-hover:text-[#344054] group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>

      <style jsx>{`
        .service-fade-in {
          opacity: 0;
        }
        .service-fade-in--active {
          animation-name: serviceFadeIn;
          animation-duration: ${FADE_IN_DURATION};
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
        @keyframes serviceFadeIn {
          0% {
            animation-timing-function: ${FADE_IN_EASING};
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .service-fade-in,
          .service-fade-in--active {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default EnterpriseSolutionsSection;
