"use client";
import React, { useEffect, useState } from "react";
import { slugify } from "./slugify";

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-6.8L4.4 22H1.3l8.2-9.4L1 2h7.2l5 6.3L18.9 2zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM.5 8.98h8.94V24H.5V8.98zM8.9 8.98h8.58v2.05h.12c1.2-2.06 4.11-2.24 5.53-.42 1.58 1.83 1.42 4.7 1.42 8.02V24h-9.14v-9.36c0-2.16-.04-4.94-3-4.94-3.02 0-3.5 2.36-3.5 4.8V24H8.9V8.98z" />
  </svg>
);

const DownloadIcon = () => (
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
      d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
    />
  </svg>
);

const TocLink = ({ item, activeId }) => {
  const id = slugify(item.label);
  const isActive = id === activeId;
  const hasActiveChild = item.subItems?.some(
    (sub) => slugify(sub.label) === activeId,
  );
  const expanded = isActive || hasActiveChild;

  return (
    <div className="w-full flex flex-col items-start">
      <a
        href={`#${id}`}
        className={`w-full py-2 pl-4 border-l-2 text-sm leading-5 font-sans transition-colors ${
          isActive
            ? "border-default-100 text-default-100 font-bold"
            : "border-slate-200 text-[#344054] font-medium hover:border-slate-400"
        }`}
      >
        {item.label}
      </a>
      {expanded && item.subItems && (
        <div className="w-full flex flex-col items-start bg-default-25">
          {item.subItems.map((sub) => {
            const subId = slugify(sub.label);
            const subActive = subId === activeId;
            return (
              <a
                key={subId}
                href={`#${subId}`}
                className={`w-full py-2 pl-4 border-l-2 text-sm leading-5 font-sans transition-colors ${
                  subActive
                    ? "border-default-100 text-default-100 font-bold"
                    : "border-default-100/40 text-[#344054] font-medium"
                }`}
              >
                {sub.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({
  tocItems = [],
  reportTitle,
  reportCover = "https://placehold.co/143x203",
  downloadHref = "#",
}) => {
  const [activeId, setActiveId] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);

    const headingEls = tocItems
      .flatMap((item) => [item, ...(item.subItems || [])])
      .map((item) => document.getElementById(slugify(item.label)))
      .filter(Boolean);

    if (!headingEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <aside className="w-full lg:w-64 flex flex-col gap-10 lg:sticky lg:top-24">
      {/* On this page */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full pb-4 border-b border-slate-200">
          <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
            On this page
          </span>
        </div>
        <nav className="w-full flex flex-col items-start">
          {tocItems.map((item) => (
            <TocLink key={item.label} item={item} activeId={activeId} />
          ))}
        </nav>
      </div>

      {/* Download report */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full pb-4 border-b border-slate-200">
          <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
            Download report
          </span>
        </div>
        <div className="w-full flex flex-col items-start gap-6">
          <div className="w-48 h-64 relative bg-gradient-to-b from-blue-500 to-emerald-300 rounded-md overflow-hidden flex items-center justify-center">
            <img
              src={reportCover}
              alt={reportTitle}
              className="w-36 h-52 object-cover rounded shadow-lg"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <p className="text-[#1D2939] text-base font-bold font-serif leading-6">
              {reportTitle}
            </p>
            <a
              href={downloadHref}
              className="inline-flex items-center gap-2 py-2 text-[#1D2939] text-sm font-bold font-sans hover:text-default-100 transition-colors"
            >
              <DownloadIcon />
              Download full report
            </a>
          </div>
        </div>
      </div>

      {/* Share */}
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full pb-4 border-b border-slate-200">
          <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
            Share this whitepaper
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on X"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-slate-100 text-[#1D2939] hover:bg-slate-200 transition-colors"
          >
            <TwitterIcon />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-slate-100 text-[#1D2939] hover:bg-slate-200 transition-colors"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
