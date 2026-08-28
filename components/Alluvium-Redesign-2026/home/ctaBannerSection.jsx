import React from "react";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";

const CtaBannerSection = ({
  label = "LET'S TALK",
  heading = "Let us make your platform work harder.",
  description = "Whether you're starting with Atlassian, scaling what you have, or adopting AI, we can help.",
  ctaLabel = "Contact us",
  ctaHref = "/contact-us",
  children
}) => {
  return (
    <section className="w-full bg-slate-950 overflow-hidden">
      <Container className="flex flex-col justify-center items-start gap-6">
        {/* Main Content */}
        <div className="w-full max-w-4xl flex flex-col justify-start items-start gap-6">
          {/* Label Section */}
          <div className="inline-flex justify-start items-center gap-2">
            <div className="w-5 h-0 outline outline-4 outline-offset-[-2px] outline-orange-600"></div>
            <span className="text-slate-300 text-sm font-bold uppercase leading-4 tracking-wide">
              {label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white text-4xl md:text-[48px] leading-[60px] font-bold font-serif max-w-xl">
            {heading}
          </h2>
        </div>

        {/* Description and Button Section */}
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <p className="text-slate-200 text-lg md:text-xl font-medium font-sans leading-relaxed max-w-xl">
            {description}
          </p>

          {/* CTA Button */}
          <div className="flex md:flex-row flex-col gap-4 w-full md:w-fit">
            {children}
            <Link href={ctaHref} className="w-full md:w-fit">
              <Button
                size="md"
                variant="secondary"
                type="button"
                className="!bg-white hover:!bg-black hover:!text-white text-black "
              >
                <span>{ctaLabel}</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaBannerSection;
