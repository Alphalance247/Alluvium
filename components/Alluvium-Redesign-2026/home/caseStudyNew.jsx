import React, { useCallback, useEffect, useRef, useState } from "react";
import Container from "../common/container";
import CaseStudyCard from "../success-stories/caseStudyCard";
import CaseStudyModal from "../success-stories/caseStudyModal";
import { caseStudies as allCaseStudies } from "../success-stories/caseStudiesData";

// The homepage carousel only features 3 case studies; the full set lives on the success-stories page.
const caseStudies = allCaseStudies.slice(0, 3);

const CaseStudyNew = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const goTo = (index) => {
    scrollToIndex(Math.max(0, Math.min(index, caseStudies.length - 1)));
  };

  // Keep dots/arrows in sync when the user swipes or drags the track directly.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(track.children);
        let closestIndex = 0;
        let closestDistance = Infinity;
        children.forEach((child, index) => {
          const distance = Math.abs(child.offsetLeft - track.scrollLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        setCurrentIndex(closestIndex);
      });
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="w-full bg-default-200 overflow-hidden">
      <Container className="flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="text-white max-w-xl text-3xl md:text-4xl font-bold font-serif leading-tight">
            Built for complex environments.
          </h2>
          <p className="max-w-xl text-white text-base md:text-lg font-semibold font-sans leading-relaxed">
            Trusted by teams across private equity, technology, agriculture,
            fire protection, commodities trading, and much more.
          </p>
        </div>

        <hr className="w-full border-white" />

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              onClick={() => setActiveIndex(index)}
              className="snap-start shrink-0 w-[95%] sm:w-[95%] lg:w-[596px]"
            />
          ))}
        </div>

        {/* Pagination & Controls */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <div />

          <div className="flex items-center gap-2 justify-self-center">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                type="button"
                aria-label={`Go to case study ${index + 1}`}
                onClick={() => goTo(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-[#091219]"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4 justify-self-end">
            <button
              type="button"
              aria-label="Previous case study"
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-lg flex items-center justify-center bg-white/40 text-white transition-colors enabled:hover:bg-white/60 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next case study"
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex === caseStudies.length - 1}
              className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#091219] text-white transition-colors enabled:hover:bg-[#1D2939] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
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

export default CaseStudyNew;
