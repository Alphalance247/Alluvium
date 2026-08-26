import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const NewServicesHero = ({
  heading,
  subheading,
  ctaLabel = "Get started",
  ctaHref = "/contact-us",
  image,
  imageAlt = "",
  width = 500,
  height = 443,
}) => {
  return (
    <section className="w-full bg-secondary-900 overflow-hidden">
      <Container className="w-full grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10 lg:gap-16 lg:items-center">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start gap-8">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-serif leading-tight">
              {heading}
            </h1>
            <p className="text-slate-300 text-base md:text-lg font-medium font-sans leading-relaxed max-w-xl">
              {subheading}
            </p>
          </div>

          <Link href={ctaHref} className="w-full md:w-fit">
            <button
              type="button"
              className="w-full md:w-fit px-6 py-2.5 bg-default-100 rounded-lg shadow-sm text-white text-base md:text-lg font-bold font-sans transition-colors duration-300 hover:bg-default-200"
            >
              {ctaLabel}
            </button>
          </Link>
        </div>

        {/* Image Panel */}
        <div className="relative w-full">
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
      </Container>
    </section>
  );
};

export default NewServicesHero;
