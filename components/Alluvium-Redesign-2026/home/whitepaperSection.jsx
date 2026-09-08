import React from "react";
import Image from "next/image";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";
import { FaArrowRight } from "react-icons/fa6";

const WhitepaperSection = ({
  theme = "light",
  eyebrow = "CAMPAIGN",
  title = "Move off Opsgenie without the scramble.",
  description = "Opsgenie ends support 5 April 2027. Most teams haven’t started moving. We run a structured 10-week migration to Jira Service Management Operations, with rollback planning and a live parallel period.",
  meta,
  ctaLabel = "See the full migration plan",
  ctaHref = "/opsgenie-to-jsm/",
  linkWholeCard = false,
  image = "https://d38rkvi67t4lhi.cloudfront.net/assets/1787731328047-image-5.png",
  imageAlt = "Opsgenie to JSM Migration",
  imageWidth = 587,
  imageHeight = 395,
}) => {
  const isDark = theme === "dark";

  const imageColumn = (
    <div className="w-full">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="w-full h-auto"
        />
      ) : (
        <div className="w-full aspect-[587/395] bg-slate-200 rounded-lg" />
      )}
    </div>
  );

  const contentColumn = (
    <div className="w-full lg:max-w-[32rem] flex flex-col items-start gap-8">
      <div className="flex flex-col items-start ">
        {/* Tag / Category */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-[4px] bg-[#008DAF]" />
          <span
            className={`text-sm md:text-sm font-bold font-sans uppercase tracking-[1px] ${
              isDark ? "text-white/80" : "text-[#1D2939]"
            }`}
          >
            {eyebrow}
          </span>
        </div>

        {/* Main Section Title */}
        <h2
          className={`w-[100%] mt-4 mb-6 text-2xl md:text-4xl  font-bold font-serif lg:leading-[44px] ${
            isDark ? "text-white" : "text-[#344054]"
          }`}
        >
          {title}
        </h2>

        {/* Description Subtext */}
        <p
          className={`text-base mb-0 md:text-lg font-medium font-sans leading-relaxed ${
            isDark ? "text-white/80" : "text-[#667085]"
          }`}
        >
          {description}
        </p>

        {meta && (
          <span
            className={`mt-6 text-base font-bold font-sans ${
              isDark ? "text-white" : "text-[#344054]"
            }`}
          >
            {meta}
          </span>
        )}

        {linkWholeCard && ctaHref && (
          <span
            className={`mt-4 inline-flex items-center gap-2 text-base font-bold font-sans ${
              isDark ? "text-white" : "text-[#344054]"
            }`}
          >
            Read more
            <FaArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
          </span>
        )}
      </div>

      {/* Action Button */}
      {!linkWholeCard && ctaHref && (
        <Link href={ctaHref} className="w-full lg:w-fit group">
          <Button size="md" variant="secondary" type="button">
            {ctaLabel}
          </Button>
        </Link>
      )}
    </div>
  );

  const gridClassName =
    "grid lg:grid-cols-2 items-center justify-between gap-10 lg:gap-28";

  return (
    <section
      className={`w-full overflow-hidden ${isDark ? "bg-secondary-900" : "bg-white"}`}
    >
      <Container>
        {linkWholeCard && ctaHref ? (
          <Link href={ctaHref} className={`${gridClassName} group`}>
            {contentColumn}
            {imageColumn}
          </Link>
        ) : (
          <div className={gridClassName}>
            {contentColumn}
            {imageColumn}
          </div>
        )}
      </Container>
    </section>
  );
};

export default WhitepaperSection;
