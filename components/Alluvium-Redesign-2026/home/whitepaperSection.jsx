import React from "react";
import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";

const WhitepaperSection = () => {
  return (
    <section className="w-full bg-white  overflow-hidden">
      <Container className="grid lg:grid-cols-2 items-center justify-between gap-10 lg:gap-28">
        {/* Content Column */}
        <div className="w-full lg:max-w-[27rem] flex flex-col items-start gap-8">
          <div className="flex flex-col items-start ">
            {/* Tag / Category */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-[4px] bg-[#008DAF]" />
              <span className="text-[#1D2939] text-sm md:text-sm font-bold font-sans uppercase tracking-[1px]">
                CAMPAIGN
              </span>
            </div>

            {/* Main Section Title */}
            <h2 className="text-[#344054] w-[100%] mt-4 mb-6 text-2xl md:text-4xl  font-bold font-serif leading-tight">
              Alluvium is exhibiting at HR Analytics Summit, London.
            </h2>

            {/* Description Subtext */}
            <p className="text-[#667085] text-base mb-0 md:text-lg font-medium font-sans leading-relaxed">
              3 September, 155 Bishopsgate, London, Our CEO, Taiwo Ojo, is
              speaking on the main stage. See you there or{" "}
              <span className="text-[#344054] font-bold">contact us</span> if
              you’d like to be part of the conversation.
            </p>

            {/* Date Tag */}
            {/* <time className="text-[#344054] text-sm font-bold font-sans uppercase tracking-wide">
              April 7, 2025
            </time> */}
          </div>

          {/* Action Button */}
          <Link href={"/contact-us/"} className="w-full lg:w-fit group">
            <Button size="md" variant="secondary" type="button">
              {" "}
              Contact us{" "}
            </Button>
          </Link>
        </div>

        <div>
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787058794370-Image-9.png"
            alt="Hr Analytics Summit, London - Alluvium"
            // className="w-full h-full object-cover object-center"
            width={587}
            height={395}
          />
        </div>
        {/* </div> */}
      </Container>
    </section>
  );
};

export default WhitepaperSection;
