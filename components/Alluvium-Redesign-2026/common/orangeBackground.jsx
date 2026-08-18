import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Container from "./container";
import Button from "./button";

const OrangeBackground = ({ className, title, btnText, description }) => {
  return (
    <div className={`bg-default-100  ${className} `}>
      <Container>
        <div className="flex lg:flex-row flex-col gap-10 justify-between items-end ">
          <div className=" w-full lg:w-[514px] xl:w-[564px]">
            <h3 className="font-merriweather font-bold text-white text-4xl leading-[44px] ">
              {title}
            </h3>
            <div className=" w-full   ">
              <p className="text-white text-xl font-medium font-manrope pt-4">
                {description}
              </p>
            </div>
          </div>
          <Link href="" className="w-full lg:w-fit">
            <Button
              size="semi-md"
              backgroundColor="secondaryLv3"
              className="text-white flex items-center gap-3"
            >
              {btnText}
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default OrangeBackground;
