import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "../common/container";

const caseStudies = [
  {
    id: 1,
    title: "Enterprise Service Management (ESM) / Teamwork Foundations",
    stats: [
      { value: "100%", label: "decommissioning of tools" },
      {
        value: "100%",
        label: "compliance with ISO and national audit standards",
      },
    ],
    link: "/success-stories/strategic-agile-transformation-&-cloud-migration",
  },
  {
    id: 2,
    title: "Multimillion-Pound Enterprise Agile Framework",
    stats: [
      { value: "10+", label: "custom training workshops delivered" },
      { value: "3", label: "major tools implemented" },
    ],
    link: "/success-stories/multimillion-pound-enterprise-agile-framework",
  },
  {
    id: 3,
    title: "Rapid Cloud Migration & Cost Optimization",
    stats: [
      { value: "100%", label: "migration before renewal deadline" },
      {
        value: "3",
        label: "core platforms migrated (Jira, Confluence, JSM)",
      },
    ],
    link: "/success-stories/rapid-cloud-migration-cost-optimization/",
  },
];

const CaseStudyNew = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <p className="max-w-md text-white text-base md:text-lg font-semibold font-sans leading-relaxed">
            Trusted by teams across private equity, technology, agriculture,
            fire protection, and commodities trading.
          </p>
        </div>

        <hr className="w-full border-white" />

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="case-study-card snap-start shrink-0 w-[85%] sm:w-[70%] lg:w-[80%] rounded-lg p-8 md:p-10 flex flex-col justify-between gap-10 min-h-[360px] md:min-h-[420px]"
            >
              <h3 className="text-[#1D2939] max-w-xl text-2xl md:text-3xl font-bold font-serif leading-snug">
                {study.title}
              </h3>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-wrap gap-6">
                  {study.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="pl-6 border-l border-slate-300 flex flex-col gap-2"
                    >
                      <span className="text-[#1D2939] text-2xl md:text-3xl font-bold font-serif">
                        {stat.value}
                      </span>
                      <span className="text-[#667085] text-sm md:text-base font-medium font-sans">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={study.link}
                  className="group shrink-0 inline-flex items-center gap-2 text-[#1D2939] font-bold font-sans text-base"
                >
                  <span>Read more</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-150"
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
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                type="button"
                aria-label={`Go to case study ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#091219]"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
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

      <style jsx>{`
        .case-study-card {
          background-color: #f2f4f7;
          transition: background-color 0.3s ease;
        }
        .case-study-card:hover {
          background-color: #f6d5b6;
          background-image: repeating-linear-gradient(
            to right,
            rgba(29, 41, 57, 0.06) 0px,
            rgba(29, 41, 57, 0.06) 1px,
            transparent 1px,
            transparent 12px
          );
        }
      `}</style>
    </section>
  );
};

export default CaseStudyNew;
