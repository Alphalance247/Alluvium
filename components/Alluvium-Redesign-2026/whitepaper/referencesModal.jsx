"use client";
import React, { useEffect } from "react";

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

const ReferencesModal = ({ isOpen, onClose, references = [] }) => {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[80vh] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-default-100" />
            <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
              References
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close references"
            className="text-[#667085] hover:text-[#1D2939] transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {references.map((reference, index) => (
              <ReferenceEntry key={index} reference={reference} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesModal;
