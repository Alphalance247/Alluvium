"use client";
import React, { useEffect, useState } from "react";
import { slugify } from "./slugify";

const ChevronIcon = ({ expanded }) => (
  <svg
    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
      expanded ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const TocLink = ({ section, activeId, overrideValue, onToggle }) => {
  const id = slugify(section.title);
  const isActive = id === activeId;
  const hasActiveChild = section.subItems?.some(
    (sub) => slugify(sub.title) === activeId,
  );
  const hasSubItems = Boolean(section.subItems?.length);
  const naturallyExpanded = isActive || hasActiveChild;
  // Follow scroll position until the user explicitly toggles this item —
  // after that, their choice sticks regardless of scroll.
  const expanded =
    overrideValue === undefined ? naturallyExpanded : overrideValue;
  // The left border is only a "you collapsed this" marker, shown after an
  // explicit click — not a default/active-section indicator.
  const showCollapsedMarker = hasSubItems && overrideValue === false;

  return (
    <div className="w-full flex flex-col items-start">
      <div
        className={`w-full flex items-center gap-2 py-2 pl-4 border-l-2 transition-colors ${
          isActive
            ? "border-default-100"
            : showCollapsedMarker
              ? "border-slate-300"
              : "border-transparent hover:border-slate-300"
        }`}
      >
        <a
          href={`#${id}`}
          className={`flex-1 text-sm leading-5 font-sans ${
            isActive ? "text-[#1D2939] font-bold" : "text-[#344054] font-medium"
          }`}
        >
          {section.navLabel || section.title}
        </a>
        {hasSubItems && (
          <button
            type="button"
            onClick={() => onToggle(id, expanded)}
            aria-label={expanded ? "Collapse section" : "Expand section"}
            aria-expanded={expanded}
            className="text-[#667085] hover:text-[#1D2939] transition-colors"
          >
            <ChevronIcon expanded={expanded} />
          </button>
        )}
      </div>
      {expanded && hasSubItems && (
        <div className="w-full flex flex-col items-start">
          {section.subItems.map((sub) => {
            const subId = slugify(sub.title);
            const subActive = subId === activeId;
            return (
              <a
                key={subId}
                href={`#${subId}`}
                className={`w-full py-2 pl-8 border-l-2 text-sm leading-5 font-sans transition-colors ${
                  subActive
                    ? "border-default-100 text-[#1D2939] font-bold"
                    : "border-transparent text-[#344054] font-medium hover:border-slate-300"
                }`}
              >
                {sub.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const PolicySidebar = ({ sections = [] }) => {
  const [activeId, setActiveId] = useState("");
  // Explicit expand/collapse choices, keyed by heading id. Undefined = follow
  // scroll position; a stored boolean means the user has clicked that item.
  const [overrides, setOverrides] = useState({});

  const toggleExpanded = (id, currentlyExpanded) => {
    setOverrides((prev) => ({ ...prev, [id]: !currentlyExpanded }));
  };

  useEffect(() => {
    const headingEls = sections
      .flatMap((section) => [section, ...(section.subItems || [])])
      .map((section) => document.getElementById(slugify(section.title)))
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
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-4 lg:sticky lg:top-24">
      <div className="w-full pb-4 border-b border-slate-200">
        <span className="text-[#667085] text-xs font-bold font-sans uppercase tracking-wide">
          On this page
        </span>
      </div>
      <nav className="w-full flex flex-col items-start">
        {sections.map((section) => (
          <TocLink
            key={section.title}
            section={section}
            activeId={activeId}
            overrideValue={overrides[slugify(section.title)]}
            onToggle={toggleExpanded}
          />
        ))}
      </nav>
    </aside>
  );
};

export default PolicySidebar;
