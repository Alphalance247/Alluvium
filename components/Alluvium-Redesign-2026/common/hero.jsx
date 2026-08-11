import React from "react";
import { Children } from "react";
import Container from "./container";
import Link from "next/link";
import Button from "./button";

const Hero = ({ heroTitle, children, heroDescription }) => {
  const [left, right] = Children.toArray(children);
  return (
    // <div className=" w-full bg-secondary-900 ">
    //   <div className="flex lg:flex-row flex-col h-full lg:h-[634px] ">
    //     <div className="w-full  py-16 lg:py-24  ">
    //       <div className="gap-8 flex flex-col max-w-2xl mx-auto py-16 lg:py-0  pl-28 pr-10 flex-shrink-0 w-full">
    //         <div>
    //           <div className="pb-[16px]">
    //             <h1 className="w-full md:w-[418px] font-bold text-white font-merriweather text-5xl leading-[60px]">
    //               {heroTitle}
    //             </h1>
    //           </div>
    //           <div className="xl:w-[598px] lg:w-[420px] w-full">
    //             <p className="text-lg text-white font-manrope font-medium ">
    //               {heroDescription}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="w-full ">{left}</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-full lg:w-1/2 ">{right}</div>

    // </div>
    <section className="w-full bg-secondary-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:max-w-[700px] 2xl:max-w-[700px] mx-auto flex-shrink-0 flex flex-col items-start gap-8 px-6 py-16 md:px-12  md:py-20 lg:pl-16 2xl:pl-[134px] lg:pr-10 lg:py-24">
          <div className="flex flex-col items-start gap-4">
            <h1 className="w-full md:w-[418px] font-bold text-white font-merriweather text-3xl lg:text-5xl leading-[38px] lg:leading-[60px]">
              {heroTitle}
            </h1>
            <p className="text-lg text-white font-manrope font-medium xl:w-[598px] lg:w-[420px] w-full">
              {heroDescription}
            </p>
          </div>

          <div>{left}</div>
        </div>

        <div className="relative w-full lg:w-[724px] h-[400px] lg:h-[634px] bg-grey-150 flex-shrink-0">
          {right}
        </div>
      </div>
    </section>
  );
};

export default Hero;
