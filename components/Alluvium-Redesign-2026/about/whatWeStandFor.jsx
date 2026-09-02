import React from "react";
import Image from "next/image";
import Container from "../common/container";

const values = [
  {
    label: "Leadership",
    icon: "https://d38rkvi67t4lhi.cloudfront.net/assets/1788259375686-bx_compass.svg",
  },
  {
    label: "Excellence",
    icon: "https://d38rkvi67t4lhi.cloudfront.net/assets/1788259375686-boxicons_check-shield.svg",
  },
  {
    label: "Ownership",
    icon: "https://d38rkvi67t4lhi.cloudfront.net/assets/1788259375685-sparkles_6853966-1.svg",
  },
];

const WhatWeStandFor = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 max-w-xl">
          <h2 className="text-center text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
            What we stand for
          </h2>
          <p className="text-center text-[#344054] text-lg font-medium font-sans leading-relaxed">
            We treat your environment as our own — problems are ours until
            they&apos;re resolved.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-start gap-10">
          {values.map((value) => (
            <div
              key={value.label}
              className="flex flex-col items-center gap-4 px-10"
            >
              <Image
                src={value.icon}
                alt={value.label}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-[#1D2939] text-lg font-medium font-sans">
                {value.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeStandFor;
