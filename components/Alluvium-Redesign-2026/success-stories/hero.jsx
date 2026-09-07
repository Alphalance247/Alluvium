import React from "react";
import Container from "../common/container";

const SuccessStoriesHero = () => {
  return (
    <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
      <Container className="flex flex-col items-start gap-3 text-left">
        <h1 className="text-[#1D2939] text-4xl md:text-5xl font-bold font-serif leading-tight">
          Success stories
        </h1>
        <p className="max-w-2xl text-[#667085] text-lg font-medium font-sans leading-relaxed">
          See how we turn Atlassian and AI into measurable business outcomes.
        </p>
      </Container>
    </section>
  );
};

export default SuccessStoriesHero;
