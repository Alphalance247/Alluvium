import React from "react";
import Container from "../common/container";
import Link from "next/link";

const CtaBannerSection = () => {
  return (
    <section className="w-full bg-[#CF6E13] overflow-hidden">
      <Container className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-12">
        {/* Text Content Column */}
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight">
            Start with a conversation, not a proposal
          </h2>
          <p className="text-slate-200 text-lg md:text-xl font-medium font-sans leading-relaxed">
            Tell us what is stuck and we will tell you whether we are the right
            partner for it.
          </p>
        </div>

        {/* Action Callout Button */}
        <Link href="/contact-us" className=" w-full md:w-fit">
          <button
            type="button"
            className="group px-6 py-3.5  bg-slate-900 flex items-center justify-center text-white text-base md:text-lg font-bold font-sans rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 gap-3 transition-all duration-150  w-full md:w-fit"
          >
            <span>Contact us</span>
            <svg
              className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </Link>
      </Container>
    </section>
  );
};

export default CtaBannerSection;
