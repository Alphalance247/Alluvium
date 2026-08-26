import React from "react";
const works = [
  {
    id: 1,
    heading: "Discovery & assessment ",
    text: "We audit your current setup, map workflows, interview stakeholders, and assess service management maturity. You get a clear report of gaps, quick wins, and a prioritized roadmap.",
  },
  {
    id: 2,
    heading: "Solution design",
    text: "We design request types, queues, SLAs, automations, approval chains, and portal experiences around your policies and processes. Nothing is generic.",
  },
  {
    id: 3,
    heading: "Implementation & integration",
    text: "We configure and deploy JSM, connecting it with Confluence, Slack, Teams, email, Active Directory, and your existing tools. Multi-channel support is built in from day one.",
  },
  {
    id: 4,
    heading: "Enablement & continuous improvement",
    text: "We provide role-based training for agents, approvers, and end users, then continue with post-launch reviews, SLA tuning, automation refinement, and ongoing advisory as your business evolves.",
  },
];
const NoGuesswork = () => {
  return (
    <div className="bg-lightBlue-150 w-full px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto py-24">
        <div>
          <h4 className="text-tertiary-300 text-[36px] font-bold font-merriweather leading-[44px] text-center">
            A clear, phased approach — no guesswork,
            <br /> no bloated timelines
          </h4>
          {/* <div className="pt-20 flex md:flex-row flex-col justify-between  ">
            {works.map((work, index) => {
              return (
                <div
                  key={work.id}
                  className="flex flex-col gap-4  w-full md:w-1/2 lg:w-1/4"
                >
                  <div className="text-[#009BC0] font-bold font-merriweather text-3xl">
                    {work.id}
                  </div>
                  <div className="relative ">
                    <div className="h-4 w-4 rounded-full bg-[#009BC0]"></div>
                    <div
                      className={
                        index === works.length - 1
                          ? "border-t-none"
                          : "border-t-[3px] border-[#009BC0] w-full absolute top-2"
                      }
                    ></div>
                  </div>
                  <div className="w-full xl:w-[280px] ">
                    <p className="text-tertiary-200 text-xl font-bold font-merriweather">
                      {work.heading}
                    </p>

                    <p className="text-tertiary-200 font-medium font-manrope text-base pt-6">
                      {work.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div> */}
          <div className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {works.map((work, index) => {
                const isLast = index === works.length - 1;

                return (
                  <div
                    key={work.id}
                    className={[
                      "w-full",
                      "lg:pr-8",
                      "md:pr-8",
                      "pb-12 md:pb-0",
                    ].join(" ")}
                  >
                    {/* Number */}
                    <div className="text-[#009BC0] font-bold font-merriweather text-3xl">
                      {work.id}
                    </div>

                    {/* Timeline */}
                    <div className="relative mt-4 h-4">
                      {/* Dot */}
                      <div className="relative z-10 h-4 w-4 rounded-full bg-[#009BC0]" />

                      {/* Connecting line */}
                      {!isLast ? (
                        <div className="absolute left-2 top-[6px] h-[3px] w-full md:w-[calc(100%+2rem)] bg-[#009BC0] lg:w-[calc(100%+2rem)]" />
                      ) : (
                        <div className="absolute lg:hidden left-2 top-[6px] h-[3px] w-full md:w-[calc(100%+2rem)] bg-[#009BC0] lg:w-[calc(100%+2rem)]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="w-full mt-4">
                      <p className="text-tertiary-200 text-xl font-bold font-merriweather">
                        {work.heading}
                      </p>

                      <p className="text-tertiary-200 font-medium font-manrope text-base pt-6">
                        {work.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoGuesswork;
