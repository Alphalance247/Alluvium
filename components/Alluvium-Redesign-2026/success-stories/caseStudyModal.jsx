"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const CloseIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const ArrowIcon = ({ direction = "right" }) => (
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
      d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 4h12v16l-6-4-6 4V4z"
    />
  </svg>
);

const CaseStudyModal = ({ study, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!study) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [study, onClose, onPrev, onNext]);

  if (!study) return null;
  const detail = study.detail;

  return (
    <div
      className="fixed inset-0 top-16 z-[200] flex items-center justify-center gap-4 p-4 bg-slate-900/60"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous story"
        className="hidden lg:flex shrink-0 w-12 h-12 items-center justify-center rounded-lg bg-default-100 text-white hover:bg-default-200 transition-colors"
      >
        <FaArrowLeft />
      </button>

      <div
        className="relative w-full max-w-[820px] max-h-[85vh] bg-white rounded-lg "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-lg bg-white text-[#344054] hover:text-[#1D2939] shadow transition-colors"
        >
          <CloseIcon />
        </button>

        <div className="relative w-full h-80 shrink-0">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover rounded-tr-lg rounded-tl-lg"
          />
        </div>

        <div className="px-6 md:px-10 pb-10 md:pb-14 pt-6 md:pt-10 flex flex-col gap-10 overflow-y-auto max-h-[calc(85vh-320px)]">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-slate-200 flex flex-col gap-2">
              <span className="text-[#344054] text-base font-semibold font-sans">
                {study.sector}
              </span>
              <h3 className="text-[#1D2939] text-3xl font-bold font-serif leading-tight">
                {study.title}
              </h3>
            </div>

            <div className="pb-6 border-b border-slate-200 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="w-36 shrink-0 text-[#344054] text-base font-semibold font-sans">
                  Tools used
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#F2F4F7] border border-slate-200 rounded-full text-[#1D2939] text-sm font-semibold font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="w-36 shrink-0 text-[#344054] text-base font-semibold font-sans">
                  Service provided
                </span>
                <span className="text-[#1D2939] text-base font-medium font-sans">
                  {detail?.serviceProvided || study.description}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="w-36 shrink-0 text-[#344054] text-base font-semibold font-sans">
                  Solution pillar
                </span>
                <span className="text-[#1D2939] text-base font-medium font-sans">
                  {detail?.solutionPillar || study.footer}
                </span>
              </div>
            </div>

            {detail ? (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[#344054] text-base font-semibold font-sans">
                    The challenge
                  </span>
                  <p className="text-[#1D2939] text-lg font-medium font-sans leading-relaxed">
                    {detail.challenge}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#344054] text-base font-semibold font-sans">
                    The Alluvium Solution
                  </span>
                  <p className="text-[#1D2939] text-lg font-medium font-sans leading-relaxed">
                    {detail.solution}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[#344054] text-base font-semibold font-sans">
                    The Result
                  </span>
                  <ul className="text-[#344054] ml-4 text-lg font-medium font-sans leading-relaxed list-disc pl-5">
                    {detail.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-4">
                  {detail.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex-1 w-full p-4 bg-white rounded-lg border border-slate-200 flex flex-col gap-2"
                    >
                      <span className="text-[#1D2939] text-xl font-bold font-serif">
                        {stat.value}
                      </span>
                      <span className="text-[#1D2939] text-base font-medium font-sans">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-[#1D2939] text-lg font-medium font-sans leading-relaxed">
                {study.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next story"
        className="hidden lg:flex shrink-0 w-12 h-12 items-center justify-center rounded-lg bg-default-100 text-white hover:bg-default-200 transition-colors"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CaseStudyModal;
