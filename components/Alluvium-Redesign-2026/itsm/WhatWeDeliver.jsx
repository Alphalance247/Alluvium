import React from "react";

const items = [
  {
    id: 1,
    heading: "ITSM",
    text: "Incidents, changes, and requests, aligned to ITIL, powered by JSM",
  },
  {
    id: 2,
    heading: "Multi-department service management",
    text: "HR, Finance, Legal, Facilities, and Operations on one platform",
  },
  {
    id: 3,
    heading: "Legacy platform displacement",
    text: "Off ServiceNow, HubSpot, Salesforce Precursive, Opsgenie, and PagerDuty, proven with real migrations",
  },
  {
    id: 4,
    heading: "AI-powered delivery",
    text: "Virtual Agent deflects 40–70% of routine tickets; Rovo surfaces answers before a ticket is raised; Claude drafts summaries and resolution notes",
  },
];

const WhatWeDeliver = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto  flex flex-col gap-12 px-6 md:px-12 lg:px-16 ">
        <div>
          <h4 className="font-bold font-merriweather text-[36px] text-tertiary-300">
            What we deliver
          </h4>
        </div>

        {/* Desktop top/bottom border */}
        <div className="lg:border-y border-tertiary-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const isSecondColumn = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={[
                    "w-full  py-10",
                    index === 0
                      ? "pl-0 pr-0 md:pr-8"
                      : "sm:px-0 md:px-6 lg:px-4 xl:px-8 ",
                    index === 2 ? "pl-0 md:pl-0 pr-0 md:pr-8 " : "",
                    !isLast ? "border-b border-b-tertiary-100" : "border-b-0",
                    "md:border-b-0",
                    isSecondColumn
                      ? "md:border-l md:border-l-tertiary-100"
                      : "",
                    !isLast
                      ? "lg:border-l-0 lg:border-r lg:border-r-tertiary-100"
                      : "lg:border-r-0",
                  ].join(" ")}
                >
                  <div className="w-full  lg:w-[256.25px]">
                    <p className="text-xl font-bold font-merriweather text-[#008DAF]">
                      {item.heading}
                    </p>
                  </div>

                  <div className="w-full xl:w-[256.25px] pt-6">
                    <p className="text-lg text-tertiary-200 font-medium font-manrope">
                      {item.text}
                    </p>
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
