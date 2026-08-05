import React from "react";
import { Children } from "react";
import Container from "./container";

const Hero = ({ heroTitle, children, heroDescription }) => {
  const [left, right] = Children.toArray(children);
  return (
    <div className="bg-secondary-900 w-full  ">
      <Container>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-start  ">
          <div className="flex flex-col gap-4">
            <h1 className="w-full md:w-[418px] font-bold text-white font-merriweather text-5xl leading-[60px]">
              {heroTitle}
            </h1>
            <div className="xl:w-[598px] lg:w-[420px] w-full">
              <p className="text-lg text-white font-manrope font-medium ">
                {heroDescription}
              </p>
            </div>
            <div>{left}</div>
          </div>
          <div className="flex items-center justify-center">{right}</div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
