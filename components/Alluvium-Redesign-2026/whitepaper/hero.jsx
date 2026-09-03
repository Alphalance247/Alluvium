import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhitepaperHero = ({
  breadcrumbLabel,
  title,
  subhead,
  authorName,
  authorRole,
  authorAvatar = "/assets/Alluvium-Redesign-2026/whitepaper/jaytee.svg",
  image = "https://d38rkvi67t4lhi.cloudfront.net/assets/1788177319102-Vector.png",
  imageAlt = "",
}) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-start gap-10 ">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <Link href="/" className="text-default-100 font-bold font-sans">
            Home
          </Link>
          <span className="text-gray-500 text-xs">/</span>
          <Link
            href="/whitepaper"
            className="text-default-100 font-bold font-sans"
          >
            Whitepaper
          </Link>
          <span className="text-gray-500 text-xs">/</span>
          <span className="text-[#667085] font-medium font-sans">
            {breadcrumbLabel}
          </span>
        </nav>

        {/* Title, subhead, author */}
        <div className="w-full pb-6 border-b border-slate-200 flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-[#1D2939] text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight whitespace-pre-line">
              {title}
            </h1>
            <p className="text-[#344054] text-lg md:text-xl font-medium font-sans leading-relaxed">
              {subhead}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
              Written by
            </span>
            <div className="flex items-center gap-3">
              <Image
                src={authorAvatar}
                alt={authorName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col items-start">
                <span className="text-[#1D2939] text-sm font-semibold font-sans">
                  {authorName}
                </span>
                <span className="text-[#667085] text-sm font-semibold font-sans">
                  {authorRole}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="w-full rounded-lg overflow-hidden bg-zinc-200">
          <Image
            src={image}
            alt={imageAlt}
            width={720}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhitepaperHero;
