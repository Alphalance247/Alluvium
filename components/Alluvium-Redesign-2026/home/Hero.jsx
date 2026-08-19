import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full overflow-hidden relative"
      style={{ background: "linear-gradient(90deg, #EFD7C6 50%, #F2F4F7 50%)" }}
    >
      <div className="absolute top-0 right-0 w-36 md:w-48 pointer-events-none select-none z-[100] hidden md:block">
        <Image
          src="/assets/Alluvium-Redesign-2026/badges/cloud-illus-c.svg"
          alt="Rovo Top Right Cloud"
          width={200}
          height={120}
          priority
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        {/* ==========================================
            1. CLAUDE SECTION (LEFT)
        ========================================== */}
        <div className="relative flex flex-col justify-between items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28 bg-[#EFD7C6] border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
          {/* Top-Right Corner Illustration (Constellation / Hand Node) */}
          <div className="absolute top-0 right-0 w-28 md:w-[163px] pointer-events-none select-none z-0 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/claude-descrip.svg"
              alt="Claude Top Left Decoration"
              width={163}
              height={228}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col items-start gap-8 max-w-xl">
            {/* Brand Logo */}
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/claude-logo.svg"
              width={48}
              height={48}
              alt="Claude Logo"
              className="w-12 h-12"
            />

            {/* Title & Description */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[#1D2939] text-2xl md:text-3xl font-bold font-serif leading-tight">
                Claude
              </h1>
              <div className="w-12 h-[2px] bg-[#D97757]" />
              <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed w-[full] md:w-[400px]">
                Claude reasons across email, Slack, documents and the web to
                handle the work that has no template. Alluvium deploys it
                securely and builds the agents your teams need.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            2. ROVO SECTION (RIGHT)
        ========================================== */}
        <div className="relative flex flex-col justify-between items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28 bg-[#F2F4F7] overflow-hidden">
          {/* Bottom-Left Paper Plane Vector */}
          <div className="absolute bottom-0 left-0 w-12 md:w-16 pointer-events-none select-none z-20 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/Illustration.svg"
              alt="Rovo Paper Plane Vector"
              width={64}
              height={64}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col items-start gap-8 max-w-xl">
            {/* Brand Logo */}
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/rovo-logo.svg"
              width={48}
              height={48}
              alt="Rovo Logo"
              className="w-12 h-12"
            />

            {/* Title & Description */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[#1D2939] w-full text-2xl md:text-3xl font-bold font-serif leading-tight">
                Rovo
              </h1>
              <div className="w-12 h-[2px] bg-[#1868DB]" />
              <p className="text-[#344054] text-base md:text-lg font-medium font-sans  w-[full] md:w-[400px] leading-relaxed">
                Rovo is native to Jira, Confluence and JSM, governed by the
                permissions you already trust. Alluvium builds the Rovo agents
                that carry repeatable work at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
