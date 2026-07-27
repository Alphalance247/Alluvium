import React from "react";
import Container from "../common/container";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const AiAdoptionSection = () => {
  return (
    <section className="w-full bg-[#E6F5F9] overflow-hidden">
      <Container className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Content Column */}
        <div className="w-full lg:max-w-xl flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            {/* Category / Eyebrow Tag */}
            <span className="text-[#667085] text-sm md:text-base font-bold font-sans uppercase tracking-[1px]">
              AI Adoption & Training
            </span>

            {/* Main Section Title */}
            <h2 className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-[44px]">
              Bring AI into everyday work
            </h2>

            {/* Body Copy */}
            <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
              Adopting AI is a change programme, not a license purchase. We
              choose the right models for the job, deploy them inside your
              security boundary, and design the governance before the rollout,
              not after the incident.
            </p>
          </div>

          <Link href={"/ai"} className="w-full lg:w-fit">
            <div className="w-full lg:w-fit">
              <button
                type="button"
                className="px-[20px] py-[12px]  text-[#344054] w-full block lg:w-fit text-base font-bold font-sans rounded-lg border-[1px] border-[#091219] shadow-sm hover:text-white hover:bg-[#091219] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
              >
                Explore training
              </button>
            </div>
          </Link>
        </div>

        {/* Media Showcase Image */}
        <div className="w-full lg:w-[508px] h-64 sm:h-80 lg:h-[395px] rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
          <img
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1784641874346-Image-6.png"
            alt="AI adoption and training framework preview"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Container>
    </section>
  );
};

export default AiAdoptionSection;
