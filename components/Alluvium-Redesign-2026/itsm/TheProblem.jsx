import React from "react";

const TheProblem = () => {
  return (
    <div className="bg-tertiary-150 py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1019px] mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-10 items-center ">
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-start">
            <div className="flex items-center gap-2">
              <div className="w-5 h-[4px] bg-[#008DAF]" />
              <div className="text-[#1D2939] text-sm md:text-sm font-bold font-sans uppercase tracking-[1px]">
                The problem
              </div>
            </div>
            <div className="max-w-[316px]">
              <h3 className="font-merriweather font-bold text-[36px] leading-[44px] text-tertiary-200">
                When every request becomes an IT problem.
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-col gap-6 items-start">
              <p className="text-lg text-tertiary-200 font-medium font-manrope">
                Email-based requests get lost. Nobody has visibility into what’s
                open or overdue. IT becomes the bottleneck for every department.
              </p>
              <div className="border-l-4 border-[#008DAF] pl-10 py-2.5 ">
                <h3 className="text-2xl text-tertiary-200 font-bold font-merriweather">
                  The fix isn’t more tools — it’s one platform, built right.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProblem;
