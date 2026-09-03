import React from "react";

const WhatWeDeliver = ({ className, items, borderColor }) => {
  return (
    <div className={`${className} py-24`}>
      <div className="max-w-7xl mx-auto  flex flex-col gap-12 px-6 md:px-12 lg:px-16 ">
        <div>
          <h4 className="font-bold font-merriweather text-[36px] text-tertiary-300">
            What we deliver
          </h4>
        </div>

        {/* Desktop top/bottom border */}
        <div className={`lg:border-y  ${borderColor}`}>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-0">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isSecondColumn = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={[
                    "w-full md:w-1/2 lg:w-1/4",
                    `${index === 0 && "w-full md:w-1/2 lg:w-1/4 xl:w-[288.25px"}`,
                    `${index === 1 && "w-full md:w-1/2 lg:w-1/4 xl:w-[320.25px] "}`,
                    `${index === 2 && "w-full md:w-1/2 lg:w-1/4 xl:w-[320.25px]"}`,
                    `${index === 3 && "w-full md:w-1/2 lg:w-1/4 xl:w-[287.25px]"}`,
                    index === 0 ? "pl-0 pr-0 md:pr-8" : "",
                    index === 1 || index === 2
                      ? "sm:px-0 md:px-6 lg:px-4 xl:px-8"
                      : "",
                    isLast && "pl-0 md:pl-8 pr-0 ",
                    // index === 2 ? "pl-0 md:pl-0 pr-0 md:pr-8 " : "",
                    !isLast
                      ? ` md:border-b-0 ${borderColor} border-t lg:border-t-0 xl:border-t-0`
                      : "border-b-0 border-b md:border-b-0 border-t lg:border-t-0 xl:border-t-0 lg:border-b-0 xl:border-b-0",
                    "",
                    isSecondColumn ? `md:border-l ${borderColor}` : "",
                    !isLast
                      ? `lg:border-l-0 lg:border-r  ${borderColor}`
                      : "lg:border-r-0",
                  ]}
                >
                  <div className="w-full xl:w-[256.25px]  py-10">
                    <p className="text-xl font-bold font-merriweather text-[#008DAF]">
                      {item.heading}
                    </p>

                    <div className="w-full xl:w-[256.25px] pt-6">
                      <p className="text-lg text-tertiary-200 font-medium font-manrope">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDeliver;
