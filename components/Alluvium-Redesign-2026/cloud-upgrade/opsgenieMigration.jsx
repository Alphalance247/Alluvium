import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";

const OpsgenieMigration = ({
  eyebrow = "Opsgenie migration",
  heading = "Also migrating off Opsgenie?",
  description = "Your on-call and alerting move to the cloud alongside everything else.",
  ctaLabel = "See the Opsgenie migration plan",
  ctaHref = "/opsgenie-to-jsm",
  image,
  imageAlt = "",
  width = 485,
  height = 322,
}) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex justify-center items-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-10 px-6 py-10 md:px-10 md:py-14 bg-[#ECF6F9] border-[1px] border-[#33AFCD] rounded-lg">
          {/* Image / Placeholder */}
          <div className="relative w-full md:flex-1 min-h-[220px] md:min-h-[122px] ">
            {image && (
              <Image
                src={image}
                width={width}
                height={height}
                alt={imageAlt}
                className="object-cover"
              />
            )}
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-6 md:max-w-md">
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-1 bg-[#008DAF]" />
                <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
                  {eyebrow}
                </span>
              </div>
              <h2 className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
                {heading}
              </h2>
              <p className="text-[#344054] text-base md:text-lg font-medium font-sans leading-relaxed">
                {description}
              </p>
            </div>

            <Link href={ctaHref} className="w-full md:w-fit">
              <button
                type="button"
                className="w-full md:w-fit px-5 py-3  border-[1px] border-[#091219] rounded-lg shadow-sm text-[#344054] text-base font-bold font-sans transition-colors duration-300 hover:bg-[#091219] hover:text-white"
              >
                {ctaLabel}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OpsgenieMigration;
