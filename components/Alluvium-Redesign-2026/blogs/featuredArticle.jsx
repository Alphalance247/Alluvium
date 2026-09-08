import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";

const FeaturedArticle = ({
  href,
  eyebrow,
  title,
  date,
  readTime,
  authorName,
  authorRole,
  authorAvatar = "",
  image,
  imageAlt = "",
}) => {
  return (
    <section className="w-full bg-white border-t border-b border-slate-200 overflow-hidden">
      <Container>
        <Link
          href={href}
          className="w-full flex flex-col md:flex-row items-stretch gap-10"
        >
          <div className="w-full md:w-[720px] shrink-0 h-[320px] md:h-[484px] bg-[#F2F4F7] rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              width={698}
              height={464}
              className="w-full h-full object-contain px-10"
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-between items-start gap-10">
            <div className="w-full flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-1 bg-[#008DAF]" />
                  <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
                    {eyebrow}
                  </span>
                </div>
                <h2 className="max-w-md text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
                  {title}
                </h2>
              </div>

              <div className="text-sm font-bold font-sans">
                <span className="text-[#667085]">{date}</span>
                <span className="text-[#1D2939]"> - </span>
                <span className="text-[#1D2939]">{readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* <img
                src={authorAvatar}
                alt={authorName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover"
              /> */}
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
        </Link>
      </Container>
    </section>
  );
};

export default FeaturedArticle;
