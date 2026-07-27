import React from "react";
import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";

const WhitepaperSection = () => {
  return (
    <section className="w-full bg-white  overflow-hidden">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Content Column */}
        <div className="w-full lg:max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-col items-start">
            {/* Tag / Category */}
            <span className="text-[#667085] text-sm md:text-base font-bold font-sans uppercase tracking-[1px]">
              White paper
            </span>

            {/* Main Section Title */}
            <h2 className="text-[#1D2939] w-[100%] mt-4 mb-3 text-2xl md:text-3xl  font-bold font-serif leading-tight">
              Regulatory Supremacy and Competitive Edge
            </h2>

            {/* Description Subtext */}
            <p className="text-[#344054] text-base mb-3 md:text-lg font-medium font-sans leading-relaxed">
              How Nigerian financial institutions turn CBN compliance into a
              competitive advantage, with audit trails, mandated SLAs, and
              change control built into the Atlassian platform.
            </p>

            {/* Date Tag */}
            {/* <time className="text-[#344054] text-sm font-bold font-sans uppercase tracking-wide">
              April 7, 2025
            </time> */}
          </div>

          {/* Action Button */}
          <Link
            href={"/whitepaper/regulatory-supremacy-and-competitive-edge/"}
            className="w-full lg:w-fit group"
          >
            {/* <div className="w-full lg:w-fit">
              <button
                type="button"
                className="px-[20px] py-[12px] text-[#344054] w-full block lg:w-fit text-base font-bold font-sans rounded-lg border-[1px] border-[#091219] shadow-sm hover:text-white hover:bg-[#091219] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              >
                Read the whitepaper
              </button>
            </div> */}
            <Button size="md" variant="secondary" type="button"> Read the whitepaper</Button>
          </Link>
        </div>

        <Image
          src="https://d38rkvi67t4lhi.cloudfront.net/assets/1785137011627-Image-8.png"
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
