import Image from "next/image";
import React from "react";
const listItems = [
  {
    id: 1,
    title: "Atlassian expertise",
    description: "Atlassian-specialized delivery",
  },
  {
    id: 2,
    title: "AI from day one",
    description: "AI built in from day one, not bolted on.",
  },
  {
    id: 3,
    title: "Flexible ITIL workflows",
    description: "ITIL-aligned workflows without the rigidity.",
  },
  {
    id: 4,
    title: "Proven displacement",
    description: "Proven displacement track record.",
  },
  {
    id: 5,
    title: "Global delivery",
    description:
      "Delivery across AMER, EMEA, and Africa, billed in USD, GBP, or NGN.",
  },
];

const WhyTeam = () => {
  return (
    <div className="bg-[#008DAF] w-full py-24 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12">
          <div>
            <h5 className="text-white text-[36px] leading-[44px] font-bold font-merriweather">
              Why teams choose Alluvium
            </h5>
          </div>
          {/*  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className=" w-full lg:w-1/2">
              <div>
                {listItems.map((listItem, index) => (
                  <div
                    key={listItem.id}
                    className="flex items-start border-t border-[#FFFFFF33] py-6 gap-2"
                  >
                    {/* Number */}

                    {/* Title */}
                    <div className="w-1/2 ">
                      <div className="">
                        <h6 className="font-bold text-white font-merriweather text-lg lg:text-xl">
                          <span className="text-white opacity-70 font-merriweather text-[28px] font-bold pr-3">
                            {index + 1}
                          </span>

                          {listItem.title}
                        </h6>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="w-1/2">
                      <p className="text-white text-base lg:text-lg font-medium font-manrope max-w-[283px]">
                        {listItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081657-Mask-group-4.png"
                alt="connector image"
                width={589}
                height={363}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTeam;
