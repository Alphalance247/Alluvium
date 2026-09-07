import React from "react";
import Container from "./container";

const PolicyHero = ({ title, effectiveDate, note }) => {
  return (
    <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
      <Container className="flex flex-col items-start gap-2">
        <h1 className="text-[#1D2939] text-4xl md:text-5xl font-bold font-serif leading-tight">
          {title}
        </h1>
        <p className="max-w-2xl text-[#667085] text-lg font-medium font-sans leading-relaxed">
          <span className="font-bold">Effective date:</span> {effectiveDate}{" "}
          {note}
        </p>
      </Container>
    </section>
  );
};

export default PolicyHero;
