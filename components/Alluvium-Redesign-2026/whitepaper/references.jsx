"use client";
import React, { useState } from "react";
import ReferencesModal from "./referencesModal";

const PREVIEW_COUNT = 4;

const ReferenceEntry = ({ reference }) => {
  const content = (
    <>
      <span className="text-[#1868DB] text-sm font-semibold font-sans underline">
        {reference.title}
      </span>{" "}
      <span className="text-[#667085] text-sm font-medium font-sans">
        | {reference.source}
      </span>
    </>
  );

  if (reference.href) {
    return (
      <a
        href={reference.href}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return <span className="block">{content}</span>;
};

const References = ({ references = [], totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const preview = references.slice(0, PREVIEW_COUNT);
  const count = totalCount || references.length;

  return (
    <div className="w-full pt-10 border-t border-slate-200 flex flex-col items-start gap-6">
      <div className="flex items-center gap-2">
        <span className="w-5 h-1 bg-default-100" />
        <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
          References
        </span>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {preview.map((reference, index) => (
          <ReferenceEntry key={index} reference={reference} />
        ))}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2 text-[#1D2939] font-bold font-sans text-base"
        >
          <span>View all {count} references</span>
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
        </button>
      )}

      <ReferencesModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        references={references}
      />
    </div>
  );
};

export default References;
