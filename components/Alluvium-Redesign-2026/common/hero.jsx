import React from "react";
import { Children } from "react";
import Container from "./container";

const Hero = ({ heroTitle, children, heroDescription }) => {
  const [left, right] = Children.toArray(children);
  return (
    <div className=" w-full  ">
      {/* <Container> */}
      <div className="  ">
        {/* <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-start  "> */}
        <div className="flex lg:flex-row flex-col h-full lg:h-[634px]">
          {/* <div className="flex flex-col gap-4 max-w-[644px] max-auto "> */}
          {/* <div className="w-full lg:w-[55%] lg:flex-shrink-0 bg-secondary-900 h-[634px] flex items-center xl:justify-center"> */}
          <div className="w-full lg:w-[55%] bg-secondary-900 flex items-center ">
            <div className="w-full  py-16 lg:py-24  ">
              <div className="gap-8 flex flex-col max-w-[320px] mx-auto py-16 lg:py-0 bg-red-100">
                <div>
                  <div className="pb-[16px]">
                    <h1 className="w-full md:w-[418px] font-bold text-white font-merriweather text-5xl leading-[60px]">
                      {heroTitle}
                    </h1>
                  </div>
                  <div className="xl:w-[598px] lg:w-[420px] w-full">
                    <p className="text-lg text-white font-manrope font-medium ">
                      {heroDescription}
                    </p>
                  </div>
                </div>
                <div className="w-full ">{left}</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] lg:flex-shrink-0">{right}</div>
        </div>
      </div>

      {/* </Container> */}
    </div>
  );
};

export default Hero;
