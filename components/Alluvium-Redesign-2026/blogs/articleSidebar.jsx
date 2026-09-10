"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { slugify } from "../common/slugify";

const ArticleSidebar = ({ sections = [] }) => {
  const [activeId, setActiveId] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — nothing to fall
      // back to, so just leave the button state unchanged.
    }
  };

  useEffect(() => {
    setShareUrl(window.location.href);

    const headingEls = sections
      .map((section) => document.getElementById(slugify(section)))
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
  }, [sections]);

  return (
    <aside className="w-full lg:w-52 shrink-0 flex flex-col gap-4 lg:sticky lg:top-24">
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full pb-4 border-b border-slate-200">
          <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
            On this page
          </span>
        </div>
        <nav className="w-full flex flex-col items-start">
          {sections.map((section) => {
            const id = slugify(section);
            const isActive = id === activeId;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`w-full py-2 pl-4 border-l-2 text-sm leading-5 font-sans transition-colors ${
                  isActive
                    ? "border-default-100 text-[#1D2939] font-bold"
                    : "border-transparent text-[#344054] font-medium hover:border-slate-300"
                }`}
              >
                {section}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="w-full pt-4 flex flex-col items-start gap-4">
        <div className="w-full pb-4 border-b border-slate-200">
          <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
            Share this article
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLink}
            aria-label="Copy link"
            className="relative w-10 h-10 flex items-center justify-center rounded-sm bg-slate-100 text-[#1D2939] hover:bg-slate-200 transition-colors"
          >
            <Image
              src="/assets/Alluvium-Redesign-2026/whitepaper/copy.png"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10"
            />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-[#1D2939] text-white text-xs font-sans">
                Copied!
              </span>
            )}
          </button>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Share on LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-sm bg-slate-100 text-[#1D2939] hover:bg-slate-200 transition-colors"
          >
            <Image
              src="/assets/Alluvium-Redesign-2026/whitepaper/reshare.png"
              alt="LinkedIn icon"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
