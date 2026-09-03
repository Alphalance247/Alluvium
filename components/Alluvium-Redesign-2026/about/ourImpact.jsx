import React from "react";
import Container from "../common/container";

// const stats = [
//   { value: "57+", label: "Accreditations" },
//   { value: "100+", label: "Projects delivered" },
//   { value: "AMER, EMEA", label: "coverage" },
// ];

const ImpactStory = ({ stats, heading, children }) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex flex-col items-center gap-12">
        <h2 className="max-w-xl text-center text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
          {/* By the numbers */}
          {heading}
        </h2>

        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex-1 flex flex-col items-center gap-6 ${index < stats.length - 1
                ? "sm:border-r border-slate-200 sm:pr-8"
                : ""
                }`}
            >
              <span className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
                {stat.value}
              </span>
              <span className="text-[#344054] text-lg font-medium font-sans leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        {children}
      </Container>
    </section>
  );
};

export default ImpactStory;
