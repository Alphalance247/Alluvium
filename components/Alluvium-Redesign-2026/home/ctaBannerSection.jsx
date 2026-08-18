import React from "react";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";

const CtaBannerSection = () => {
  return (
    <section className="w-full bg-slate-950 overflow-hidden">
      <Container className="flex flex-col justify-center items-start gap-6">
        {/* Main Content */}
        <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-6">
          {/* Label Section */}
          <div className="inline-flex justify-start items-center gap-2">
            <div className="w-5 h-0 outline outline-4 outline-offset-[-2px] outline-orange-600"></div>
            <span className="text-slate-300 text-sm font-bold uppercase leading-4 tracking-wide">
              LET'S TALK
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-4xl md:text-[48px] leading-[60px] font-bold font-serif max-w-xl">
            Let us make your platform work harder.
          </h2>
        </div>

        {/* Description and Button Section */}
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <p className="text-slate-200 text-lg md:text-xl font-medium font-sans leading-relaxed max-w-xl">
            Whether you're starting with Atlassian, scaling what you have, or
            adopting AI, we can help.
          </p>

          {/* CTA Button */}
          <Link href="/contact-us" className="w-full md:w-fit">
            <Button
              size="md"
              variant="secondary"
              type="button"
              className="!bg-white hover:!bg-black hover:!text-white text-black"
            >
              <span>Contact us</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CtaBannerSection;
