import React from "react";
import Image from "next/image";
import Container from "../common/container";

const WhitepaperSection = () => {
  return (
    <section className="w-full bg-[#F2F4F7] border-y border-slate-200  overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Content Column */}
        <div className="w-full lg:max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            {/* Tag / Category */}
            <span className="text-[#009BC0] text-sm md:text-base font-bold font-sans uppercase tracking-wider">
              White paper
            </span>

            {/* Main Section Title */}
            <h2 className="text-grey-800 text-2xl md:text-3xl lg:text-4xl font-bold font-serif leading-tight">
              The Cloud migration readiness checklist for enterprise Atlassian
              estates
            </h2>

            {/* Description Subtext */}
            <p className="text-grey-700 text-base md:text-lg font-medium font-sans leading-relaxed">
              Where Atlassian licence spend actually goes. A framework for
              auditing your licence position and reclaiming the waste.
            </p>

            {/* Date Tag */}
            <time className="text-grey-700 text-sm font-bold font-sans uppercase tracking-wide pt-1">
              April 7, 2025
            </time>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className="px-6 py-3 bg-white text-slate-800 text-base font-bold font-sans rounded-lg border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
          >
            Read the guide
          </button>
        </div>

        {/* Media Showcase Image */}
        {/* <div className="w-full lg:flex-1 h-64 md:h-80 lg:h-[395px] rounded-2xl overflow-hidden shadow-sm"> */}
        <Image
          src="https://d38rkvi67t4lhi.cloudfront.net/assets/1784628976286-Image-5.png"
          alt="Atlassian Cloud Migration Readiness Checklist"
          // className="w-full h-full object-cover object-center"
          width={587}
          height={395}
        />
        {/* </div> */}
      </Container>
    </section>
  );
};

export default WhitepaperSection;
