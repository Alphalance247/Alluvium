"use client";
import React, { useState } from "react";
import Container from "../common/container";
import CaseStudyCard from "../success-stories/caseStudyCard";
import CaseStudyModal from "../success-stories/caseStudyModal";
import { caseStudies as allCaseStudies } from "../success-stories/caseStudiesData";

const caseStudies = allCaseStudies.slice(0, 3);

const CaseStudies = ({
  heading = "Enterprise service management, proven in practice.",
  description,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? prev
        : (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  const showNext = () =>
    setActiveIndex((prev) =>
      prev === null ? prev : (prev + 1) % caseStudies.length,
    );

  return (
    <section className="w-full bg-secondary-200 overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-end gap-6">
          <h2 className="lg:w-[560px] lg:shrink-0 text-white text-3xl md:text-4xl font-bold font-serif leading-tight">
            {heading}
          </h2>
          {description && (
            <p className="flex-1 text-white/90 text-base md:text-lg font-medium font-sans leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <hr className="w-full border-white/40" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onClick={() => setActiveIndex(index)}
              className="w-full"
            />
          ))}
        </div>
      </Container>

      <CaseStudyModal
        study={activeIndex === null ? null : caseStudies[activeIndex]}
        onClose={closeModal}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
};

export default CaseStudies;
