import React, { useState, useEffect, useRef } from "react";
import Container from "../common/container";
import Link from "next/link";
import Button from "../common/button";

const caseStudies = [
  {
    id: 1,
    category: "Finance",
    quote: "100% compliance achieved for a Tier-1 UK Bank migration.",
    stats: [
      { value: "100%", label: "decommissioning of tools" },
      {
        value: "100%",
        label: "compliance with ISO and national audit standards",
      },
    ],
    author: "James Anderson",
    role: "Head of Enterprise Technology",
    company: "Global Financial Services Organization",
    image: "/assets/Alluvium-Redesign-2026/home/compliance-achiver.png",
    link: "/success-stories/strategic-agile-transformation-&-cloud-migration",
  },
  {
    id: 2,
    category: "Telecommunications",
    quote: "Multimillion-Pound Enterprise Agile Framework",
    stats: [
      { value: "10+", label: "custom training workshops delivered" },
      { value: "3", label: "major tools implemented" },
    ],
    author: "James Anderson",
    role: "Head of Enterprise Technology",
    company: "Global Financial Services Organization",
    image: "/assets/Alluvium-Redesign-2026/home/multi-million.png",
    link: "/success-stories/multimillion-pound-enterprise-agile-framework",
  },
  {
    id: 3,
    category: "Finance",
    quote: "Rapid Cloud Migration & Cost Optimization",
    stats: [
      { value: "100%", label: "migration before renewal deadline" },
      { value: "3", label: "core platforms migrated (Jira, Confluence, JSM)" },
    ],
    author: "James Anderson",
    role: "Head of Enterprise Technology",
    company: "Global Financial Services Organization",
    image: "/assets/Alluvium-Redesign-2026/home/rapid-cloud.png",
    link: "/success-stories/rapid-cloud-migration-cost-optimization/",
  },
];

// Quadrupled buffer to ensure edge cards never run out on wide screens
const extendedStudies = [
  ...caseStudies,
  ...caseStudies,
  ...caseStudies,
  ...caseStudies,
];

const CaseStudiesCarousel = () => {
  const trackRef = useRef(null);

  // Start at index 3 (first item of the second set)
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isAnimated, setIsAnimated] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(880);
  const [gapWidth, setGapWidth] = useState(32);

  // Responsive dimensions
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(width - 48);
        setGapWidth(16);
      } else if (width < 1024) {
        setCardWidth(680);
        setGapWidth(24);
      } else {
        setCardWidth(880);
        setGapWidth(32);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle instant DOM state sync when loop resets
  useEffect(() => {
    if (!isAnimated) {
      if (trackRef.current) {
        // Force synchronous layout reflow so browser commits instant position/scale
        void trackRef.current.offsetHeight;
      }
      // Re-enable transition state on next frame so future auto-scrolls animate smoothly
      const raf = requestAnimationFrame(() => {
        setIsAnimated(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isAnimated]);

  // 1. Auto-scroll mechanism (runs every 4s, pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsAnimated(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // 2. Seamless infinite reset boundary check
  const handleTransitionEnd = (e) => {
    // Only trigger when the main track transform ends
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    // When reaching or passing set 2, silently jump back to set 1 equivalent
    if (currentIndex >= caseStudies.length * 2) {
      setIsAnimated(false);
      setCurrentIndex(
        (prev) => (prev % caseStudies.length) + caseStudies.length,
      );
    }
    // When going before set 1, silently jump forward to set 2 equivalent
    else if (currentIndex < caseStudies.length) {
      setIsAnimated(false);
      setCurrentIndex((prev) => prev + caseStudies.length);
    }
  };

  // Center alignment math
  const translateXOffset = `calc(50vw - ${cardWidth / 2}px - ${currentIndex * (cardWidth + gapWidth)}px)`;

  // Normalized active index (0, 1, or 2) for indicator dots
  const activeRealIndex = currentIndex % caseStudies.length;

  const handleDotClick = (targetRealIndex) => {
    setIsAnimated(true);
    const diff = targetRealIndex - activeRealIndex;
    setCurrentIndex((prev) => prev + diff);
  };

  return (
    <section className="w-full bg-slate-50 pb-16 md:pb-24 overflow-hidden">
      {/* Header Container */}
      <Container className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="text-[#667085] text-xs md:text-sm font-bold font-sans uppercase tracking-widest">
            The results speak for themselves
          </span>
          <h2 className="text-[#1D2939] text-2xl md:text-4xl w-full lg:w-[500px] font-bold font-serif leading-tight">
            Real challenges. Measurable outcomes.
          </h2>
        </div>

        <Link href="/success-stories" className="group">
          <Button type="button" size="md" variant="secondary">
            View all case studies
          </Button>
        </Link>
      </Container>

      {/* Overflow Carousel Container */}
      <div
        className="relative w-full overflow-hidden py-6 pb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Continuous Horizontal Track */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            transform: `translateX(${translateXOffset})`,
            gap: `${gapWidth}px`,
            transition: isAnimated
              ? "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedStudies.map((study, index) => {
            const isActive = index === currentIndex;

            return (
              <article
                key={`${study.id}-${index}`}
                onClick={() => {
                  setIsAnimated(true);
                  setCurrentIndex(index);
                }}
                style={{ width: `${cardWidth}px` }}
                className={`shrink-0 rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden cursor-pointer ${
                  isAnimated ? "transition-all duration-300" : "transition-none"
                } ${
                  isActive
                    ? "opacity-100 shadow-2xl scale-100 md:scale-105 z-10 relative"
                    : "opacity-50 hover:opacity-75 scale-85 md:scale-90 z-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
                  {/* Left Side: Dark Image & Quote Overlay */}
                  <div className="relative md:col-span-7 p-8 md:p-10 flex flex-col justify-end text-white overflow-hidden min-h-[320px] md:min-h-full">
                    <img
                      src={study.image}
                      alt={study.category}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                    <div className="relative z-10 flex flex-col gap-4">
                      <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-200">
                        {study.category}
                      </span>
                      <blockquote className="text-xl md:text-2xl font-serif font-bold leading-snug text-white">
                        {study.quote}
                      </blockquote>
                    </div>
                  </div>

                  {/* Right Side: Metrics & Author Info */}
                  <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-white gap-8">
                    <div className="flex flex-col gap-6">
                      {study.stats.map((stat, sIndex) => (
                        <div key={sIndex} className="flex flex-col gap-1">
                          <div className="text-slate-900 text-3xl md:text-4xl font-bold font-serif">
                            {stat.value}
                          </div>
                          <div className="text-slate-500 text-sm md:text-base font-medium font-sans">
                            {stat.label}
                          </div>
                          {sIndex < study.stats.length - 1 && (
                            <hr className="mt-4 border-slate-100" />
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                      <div className="text-slate-800 font-sans text-sm md:text-base leading-snug">
                        <span className="font-bold">{study.author}, </span>
                        <span className="text-slate-500 font-medium">
                          {study.role} {study.company}
                        </span>
                      </div>

                      <Link
                        href={study.link}
                        className="group inline-flex items-center gap-2 text-slate-900 font-bold font-sans text-sm hover:text-indigo-600 transition-colors"
                      >
                        <span>Read case study</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Indicator Pill Bar Navigation */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to case study ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              index === activeRealIndex
                ? "w-10 bg-slate-900"
                : "w-8 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
