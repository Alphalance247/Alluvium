import React from "react";
import Link from "next/link";
import Button from "../common/button";

const Hero = () => {
  return (
    <section className="w-full bg-secondary-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Content */}
        <div className="w-full lg:max-w-xl xl:max-w-2xl mx-auto flex-shrink-0 flex flex-col items-start gap-8 px-6 py-16 md:px-12 md:py-20 lg:pl-28 lg:pr-10 lg:py-24">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold font-merriweather leading-tight md:leading-[68px]">
              Service management
            </h1>
            <p className="text-white text-base md:text-lg font-medium font-manrope leading-7">
              We implement Jira Service Management as a single, AI-ready
              platform for IT, HR, Finance, Legal, and Operations. No more email
              threads and spreadsheets. Your teams resolve faster, and your
              people stay productive.
            </p>
          </div>

          <Link href="/contact-us/">
            <Button
              backgroundColor="defaultLv3"
              size="md"
              className="text-white hover:bg-default-200"
            >
              Book a discovery call
            </Button>
          </Link>
        </div>

        <div className="relative w-[644px] h-64 sm:h-80 lg:h-[634px] bg-grey-150"></div>
      </div>
    </section>
  );
};

export default Hero;
