import React from "react";
import Container from "../common/container";

const ImpactMetricsSection = () => {
  const metrics = [
    { value: "100+", label: "Successful migrations" },
    { value: "24/7", label: "Dedicated support" },
    { value: "45%", label: "Average license savings" },
  ];

  return (
    <section className="w-full bg-[#101828] overflow-hidden">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
        {/* Header Column */}
        <div className="flex flex-col justify-start items-start gap-4 pb-6 lg:pb-0 lg:pr-8 border-b sm:border-b-0 lg:border-r border-slate-700">
          <span className="text-[#E37915] text-sm md:text-base font-bold font-sans uppercase tracking-wide">
            Our Impact
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold font-serif leading-tight">
            Alluvium in numbers
          </h2>
        </div>

        {/* Dynamic Metric Columns */}
        {metrics.map((metric, index) => {
          const isLast = index === metrics.length - 1;

          return (
            <div
              key={index}
              className={`flex flex-col justify-start items-start gap-4 pb-6 lg:pb-0 lg:px-8 ${
                !isLast
                  ? "border-b sm:border-b-0 lg:border-r border-[#475467]"
                  : ""
              }`}
            >
              {/* Highlight Badge */}
              <div className="px-3 py-1 bg-[#F9FAFB] inline-block">
                <span className="text-slate-900 text-4xl lg:text-5xl font-bold font-serif leading-tight">
                  {metric.value}
                </span>
              </div>

              {/* Label */}
              <p className="text-white text-base md:text-lg font-semibold font-sans leading-snug">
                {metric.label}
              </p>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default ImpactMetricsSection;
