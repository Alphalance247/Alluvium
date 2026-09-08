import React from "react";
import Container from "./container";

const PageIntro = ({ title, subtitle }) => {
  return (
    <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
      <Container className="flex flex-col items-start gap-3 text-left">
        <h1 className="text-[#1D2939] text-4xl md:text-5xl font-bold font-serif leading-tight">
          {title}
        </h1>
        <p className="max-w-2xl text-[#667085] text-lg font-medium font-sans leading-relaxed">
          {subtitle}
        </p>
      </Container>
    </section>
  );
};

export default PageIntro;
