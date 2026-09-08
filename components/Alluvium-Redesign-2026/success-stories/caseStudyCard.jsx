"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const CaseStudyCard = ({ study, onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left flex flex-col items-start gap-6 bg-white rounded-lg border border-slate-200 overflow-hidden ${className}`}
    >
      <Image
        src={study.image}
        alt={study.title}
        width={594}
        height={240}
        className="w-full h-60 object-cover"
      />

      <div className="w-full px-6 pb-2 flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[#667085] text-sm font-medium font-sans">
              {study.sector}
            </span>
            <h3 className="text-[#1D2939] text-2xl font-bold font-serif leading-snug">
              {study.title}
            </h3>
          </div>

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

          <p className="text-[#344054] text-lg font-medium font-sans leading-relaxed">
            {study.description}
          </p>
        </div>

        <div className="w-full pt-1 border-t border-slate-200 flex justify-between items-center">
          <span className="text-[#667085] text-sm font-medium font-sans">
            {study.footer}
          </span>
          <span className="group inline-flex items-center gap-2 py-2 text-[#344054] font-bold text-base font-sans">
            Read story
            <FaArrowRight className="w-4 h-4 text-[#98A2B3] transition-transform duration-150 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  );
};

export default CaseStudyCard;
