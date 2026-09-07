import React from "react";
import RichText from "../whitepaper/richText";
import { slugify } from "./slugify";

const BulletList = ({ items }) => (
  <div className="w-full flex flex-col items-start gap-4">
    {items.map((item, index) => (
      <div key={index} className="w-full flex items-start gap-4">
        <span className="mt-2.5 w-3 h-3 shrink-0 rounded-full bg-default-100" />
        <RichText runs={item.runs} className="flex-1" />
      </div>
    ))}
  </div>
);

const DefinitionRows = ({ rows, labelWidth = "w-72" }) => (
  <div className="w-full flex flex-col items-start">
    {rows.map((row, index) => (
      <div
        key={index}
        className={`w-full flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-5 ${
          index < rows.length - 1 ? "border-b border-slate-200" : ""
        }`}
      >
        <span
          className={`${labelWidth} shrink-0 text-[#1D2939] text-xl font-bold font-serif leading-snug`}
        >
          {row.label}
        </span>
        {row.runs ? (
          <RichText runs={row.runs} className="flex-1" />
        ) : (
          <span className="flex-1 text-[#1D2939] text-lg font-medium font-sans leading-relaxed">
            {row.value}
          </span>
        )}
      </div>
    ))}
  </div>
);

const PolicySection = ({ section }) => {
  const id = slugify(section.title);

  return (
    <section
      id={id}
      className="w-full pb-10 border-b border-slate-200 flex flex-col items-start gap-6 scroll-mt-24"
    >
      <h2 className="text-[#1D2939] text-3xl font-bold font-serif leading-tight">
        {section.title}
      </h2>
      <div className="w-full flex flex-col items-start gap-6">
        {section.content.map((piece, index) => {
          switch (piece.type) {
            case "rich":
              return <RichText key={index} runs={piece.runs} />;
            case "heading3":
              return (
                <h3
                  key={index}
                  className="text-[#1D2939] text-xl md:text-2xl font-bold font-serif leading-snug"
                >
                  {piece.text}
                </h3>
              );
            case "bulletList":
              return <BulletList key={index} items={piece.items} />;
            case "definitionRows":
              return (
                <DefinitionRows
                  key={index}
                  rows={piece.rows}
                  labelWidth={piece.labelWidth}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

const PolicyBody = ({ sections }) => (
  <div className="w-full flex flex-col items-start gap-10">
    {sections.map((section, index) => (
      <PolicySection key={index} section={section} />
    ))}
  </div>
);

export default PolicyBody;
