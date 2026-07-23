import React from "react";
import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";

const WhitepaperSection = () => {
  return (
    <section className="w-full bg-white  overflow-hidden">
      <Container className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Content Column */}
        <div className="w-full lg:max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            {/* Tag / Category */}
            <span className="text-[#667085] text-sm md:text-base font-bold font-sans uppercase tracking-wider">
              White paper
            </span>

            {/* Main Section Title */}
            <h2 className="text-[#1D2939] w-[107%] text-2xl md:text-3xl lg:text-4xl font-bold font-serif leading-tight">
              The Cloud migration readiness checklist for enterprise Atlassian
              estates
            </h2>

            {/* Description Subtext */}
            <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
              Where Atlassian licence spend actually goes. A framework for
              auditing your licence position and reclaiming the waste.
            </p>

            {/* Date Tag */}
            <time className="text-[#344054] text-sm font-bold font-sans uppercase tracking-wide pt-1">
              April 7, 2025
            </time>
          </div>

          {/* Action Button */}
          <Link href={"/"} className="w-full lg:w-fit">
            <div className="w-full lg:w-fit">
              <button
                type="button"
                className="px-6 py-3  text-[#344054] w-full block lg:w-fit text-base font-bold font-sans rounded-lg border-[1px] border-[#091219] shadow-sm hover:text-white hover:bg-[#091219] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              >
                Read the guide
              </button>
            </div>
          </Link>
        </div>

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
