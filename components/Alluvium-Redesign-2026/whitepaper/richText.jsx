import React from "react";

// Text sizes are looked up rather than interpolated so Tailwind's JIT scanner
// always sees the full literal class name.
const SIZES = {
  base: "text-base",
  lg: "text-lg",
};

// Renders a flowing paragraph built from mixed plain/bold/lead runs and inline
// line breaks, mirroring the Figma export's <span>/<br/> structure.
const RichText = ({ runs, size = "lg", className = "" }) => {
  return (
    <p
      className={`text-[#344054] ${SIZES[size] || SIZES.lg} font-medium font-sans leading-relaxed ${className}`}
    >
      {runs.map((run, index) => {
        if (typeof run === "string") {
          return <React.Fragment key={index}>{run}</React.Fragment>;
        }
        if (run.break) {
          return <br key={index} />;
        }
        if (run.lead) {
          return (
            <span key={index} className="text-default-100 font-bold">
              {run.text}
            </span>
          );
        }
        if (run.bold) {
          return (
            <span key={index} className="text-[#1D2939] font-bold">
              {run.text}
            </span>
          );
        }
        if (run.link) {
          const isExternal = /^https?:\/\//.test(run.href || "");
          return (
            <a
              key={index}
              href={run.href}
              className="text-default-100 font-medium hover:underline"
              {...(isExternal
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {run.text}
            </a>
          );
        }
        return <React.Fragment key={index}>{run.text}</React.Fragment>;
      })}
    </p>
  );
};

export default RichText;
