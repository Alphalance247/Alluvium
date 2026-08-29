import Image from "next/image";
import React from "react";
const results = [
  " Faster resolution — often cut by up to 60%",
  "Fewer repetitive tickets",
  " Lower operational overhead",
  "Full SLA visibility for leadership",
];
const ResultExpect = () => {
  return (
    <div className="py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12">
          <div>
            <h5 className="text-tertiary-300 font-merriweather font-bold text-[36px] leading-[44px] ">
              Results you can expect
            </h5>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {results.map((result, index) => {
              return (
                <div
                  key={index}
                  className="bg-lightBlue-150 rounded-2xl px-5 py-4 flex items-center gap-4"
                >
                  <Image
                    src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081524-carbon_cloud-infra-migration.png"
                    alt="cloud-infra-migration"
                    width={32}
                    height={32}
                  />
                  <p>{result}</p>
                </div>
              );
            })}
          </div> */}
          <div className="flex flex-wrap  gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className={[
                  "bg-lightBlue-150 rounded-2xl px-[20px] py-[16px] flex items-center gap-4 ",
                  index === 0 ? "w-full lg:w-[442px]" : "w-full",
                ]}
              >
                <Image
                  src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081524-carbon_cloud-infra-migration.png"
                  alt="cloud-infra-migration"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />

                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultExpect;
