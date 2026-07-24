import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "linear-gradient(90deg, #EFD7C6 50%, #C2D8F8 50%)" }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2">
        {/* ==========================================
            1. CLAUDE SECTION (LEFT)
        ========================================== */}
        <div className="relative flex flex-col justify-between items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28 bg-[#EFD7C6] border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden">
          {/* Top-Left Corner Illustration (Constellation / Hand Node) */}
          <div className="absolute top-0 left-0 w-28 md:w-36 pointer-events-none select-none z-0 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/claude-descrip.png"
              alt="Claude Top Left Decoration"
              width={200}
              height={200}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col items-start gap-6 max-w-xl">
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
              <h1 className="text-[#1D2939] text-3xl  md:text-4xl font-bold font-serif leading-tight">
                Claude works where the thinking happens.
              </h1>
              <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                Claude reasons across email, Slack, documents and the web to
                handle the work that has no template. Alluvium deploys it
                securely and builds the agents your teams need.
              </p>
            </div>
          </div>

          {/* CTA Link Button */}
          <Link href="/ai/" className="relative z-10 group w-full md:w-fit">
            <button className="px-6 py-3.5 text-[#344054] block font-bold font-sans text-base rounded-lg border-[1px] border-[#091219] hover:bg-[#091219] hover:text-white  items-center gap-2 transition-all duration-150 w-full md:w-fit">
              <span>Explore Claude services</span>
            </button>
          </Link>
        </div>

        {/* ==========================================
            2. ROVO SECTION (RIGHT)
        ========================================== */}
        <div className="relative flex flex-col justify-between items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28 bg-[#C2D8F8] overflow-hidden">
          {/* ICON 1: Top-Right Corner Cloud Illustration */}
          <div className="absolute top-0 right-0 w-36 md:w-48 pointer-events-none select-none z-0 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/cloud-illus-c.svg"
              alt="Rovo Top Right Cloud"
              width={200}
              height={120}
              priority
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ICON 2: Middle/Bottom-Left Paper Plane Vector */}
          <div className="absolute top-1/4 -left-3 md:-left-4 w-12 md:w-16 pointer-events-none select-none z-20 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/Illustration.svg"
              alt="Rovo Paper Plane Vector"
              width={64}
              height={64}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ICON 3: Bottom-Left Cloud Illustration */}
          <div className="absolute bottom-0 left-0 w-44 md:w-56 pointer-events-none select-none z-0 hidden md:block">
            <Image
              src="/assets/Alluvium-Redesign-2026/badges/cloud-illus-clear.svg"
              alt="Rovo Bottom Cloud"
              width={220}
              height={140}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Header Content */}
          <div className="relative z-10 flex flex-col items-start gap-6 max-w-xl">
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
              <h1 className="text-[#1D2939] w-full text-3xl md:text-4xl font-bold font-serif leading-tight">
                Rovo works where the work already lives.
              </h1>
              <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                Rovo is native to Jira, Confluence and JSM, governed by the
                permissions you already trust. Alluvium builds the Rovo agents
                that carry repeatable work at scale.
              </p>
            </div>
          </div>

          <Link
            href="/cloud-upgrade/"
            className="relative z-10 group w-full md:w-fit"
          >
            <button className="px-6 py-3.5 text-[#344054] block font-bold font-sans text-base rounded-lg border-[1px] border-[#091219] hover:bg-[#091219] hover:text-white  items-center gap-2 transition-all duration-150 w-full md:w-fit">
              <span>Explore Atlassian services</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
