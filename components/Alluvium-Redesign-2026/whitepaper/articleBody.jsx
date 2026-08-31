import React from "react";
import RichText from "./richText";
import { slugify } from "./slugify";

const Heading = ({ level = 2, text }) => {
  const id = slugify(text);
  if (level === 2) {
    return (
      <h2
        id={id}
        className="text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight scroll-mt-24"
      >
        {text}
      </h2>
    );
  }
  return (
    <h3
      id={id}
      className="text-[#1D2939] text-2xl font-bold font-serif leading-tight scroll-mt-24"
    >
      {text}
    </h3>
  );
};

const Paragraph = ({ text }) => (
  <div className="flex flex-col gap-4">
    {text.split("\n\n").map((para, index) => (
      <p
        key={index}
        className="text-[#344054] text-lg font-medium font-sans leading-relaxed"
      >
        {para}
      </p>
    ))}
  </div>
);

const ImageBlock = ({ src, alt, heightClassName = "h-96" }) => (
  <div
    className={`relative w-full ${heightClassName} rounded-lg overflow-hidden bg-zinc-200`}
  >
    <img
      src={src}
      alt={alt || ""}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

const BulletList = ({ items }) => (
  <ul className="flex flex-col items-start gap-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-default-100" />
        <RichText runs={item.runs} className="flex-1" />
      </li>
    ))}
  </ul>
);

const DataTable = ({ columns, rows }) => (
  <div className="w-full rounded-lg border border-zinc-300 overflow-hidden overflow-x-auto">
    <table className="w-full min-w-[640px] border-collapse">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              className="p-4 bg-gray-900 text-white text-sm font-bold font-sans text-left"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-[#F2F4F7]" : "bg-white"}
          >
            <td className="p-4 align-top text-[#1D2939] text-base font-bold font-sans">
              {row.requestType}
            </td>
            <td className="p-4 align-top text-[#344054] text-base font-medium font-sans">
              {row.dataCaptured}
            </td>
            <td className="p-4 align-top text-[#344054] text-base font-medium font-sans">
              {row.analyticsValue}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Callout = ({ runs }) => (
  <div className="w-full p-8 bg-default-25 rounded-lg">
    <RichText runs={runs} />
  </div>
);

const ArticleBody = ({ blocks }) => {
  return (
    <div className="w-full flex flex-col items-start gap-16">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <Heading key={index} level={block.level} text={block.text} />
            );
          case "paragraph":
            return <Paragraph key={index} text={block.text} />;
          case "rich":
            return <RichText key={index} runs={block.runs} />;
          case "image":
            return (
              <ImageBlock
                key={index}
                src={block.src}
                alt={block.alt}
                heightClassName={block.heightClassName}
              />
            );
          case "bulletList":
            return <BulletList key={index} items={block.items} />;
          case "table":
            return (
              <DataTable key={index} columns={block.columns} rows={block.rows} />
            );
          case "callout":
            return <Callout key={index} runs={block.runs} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ArticleBody;
