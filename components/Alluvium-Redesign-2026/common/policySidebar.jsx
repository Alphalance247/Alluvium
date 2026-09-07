"use client";
import React, { useEffect, useState } from "react";
import { slugify } from "./slugify";

const PolicySidebar = ({ sections = [] }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headingEls = sections
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
        {sections.map((section) => {
          const id = slugify(section.title);
          const isActive = id === activeId;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`w-full py-2 pl-4 border-l-2 text-sm leading-5 font-sans transition-colors ${
                isActive
                  ? "border-default-100 text-default-100 font-bold"
                  : "border-slate-200 text-[#344054] font-medium hover:border-slate-400"
              }`}
            >
              {section.title}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default PolicySidebar;
