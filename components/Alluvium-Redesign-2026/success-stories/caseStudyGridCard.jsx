"use client";
import React, { useState } from "react";
import Container from "../common/container";
import CaseStudyCard from "./caseStudyCard";
import CaseStudyModal from "./caseStudyModal";
import { caseStudies } from "./caseStudiesData";

const CaseStudyGrid = ({ backgroundColor, showHeading = false }) => {
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
    <section className="w-full overflow-hidden" style={{ backgroundColor }}>
      <Container className="flex flex-col items-start gap-12  lg:!pt-10 ">
        {showHeading && (
          <h2 className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
            More Customer Stories
          </h2>
        )}

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

export default CaseStudyGrid;
