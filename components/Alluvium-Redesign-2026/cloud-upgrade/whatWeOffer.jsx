import React from "react";
import Container from "../common/container";

const defaultItems = [
  {
    id: "01",
    description: "Data Center to Cloud assessment and readiness audit.",
  },
  {
    id: "02",
    description: "Data migration with integrity checks at every stage.",
  },
  {
    id: "03",
    description: "Post-cutover optimization and performance tuning.",
  },
  {
    id: "04",
    description: "Multi-instance consolidation where it makes sense.",
  },
];

const WhatWeOffer = ({ heading = "What we deliver", items = defaultItems }) => {
  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="flex flex-col items-start gap-12">
        <h2 className="text-[#1D2939] max-w-xl text-3xl md:text-4xl font-bold font-serif leading-tight tracking-[-0.5px]">
          {heading}
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 divide-[#D0D5DD] border-t border-b border-[#D0D5DD]">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col gap-6 py-10 px-8 lg:first:pl-0 lg:last:pr-0 border-[#D0D5DD] ${
                index !== items.length - 1 ? "lg:border-r" : ""
              }`}
            >
              <span className="text-[#1D2939] text-xl font-bold font-serif leading-8">
                {item.id}
              </span>
              <p className="text-[#1D2939] text-lg font-medium font-sans leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeOffer;
