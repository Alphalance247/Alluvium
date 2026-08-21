import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Container from "../common/container";

const CaseStudy = ({
  heading,
  title,
  description,
  imageUrl,
  percentage,
  hours,
  role,
  name,
  linkUrl,
}) => {
  return (
    <div className="bg-tertiary-150">
      {/* <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 lg:py-24 "> */}
      <Container>
        <div className="flex flex-col gap-20">
          <div className="">
            <div className="text-base text-tertiary-175 font-bold font-manrope">
              CASE STUDY
            </div>
            <h5 className="text-3xl font-merriweather font-bold text-tertiary-300 pt-6">
              {title}
            </h5>
          </div>
          <div className="flex flex-col lg:flex-row border border-[#E4E7EC] rounded-2xl w-full  ">
            <div className="relative w-full lg:w-2/3 h-[558px]">
              <Image
                src={imageUrl}
                alt="Image"
                fill
                className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/50 z-10 w-full xl:w-[696px] rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"></div>
              <div className="absolute bottom-10 left-10 z-50">
                <div className="w-full lg:w-[596px] ">
                  <p className="uppercase text-base font-bold font-manrope text-white">
                    {heading}
                  </p>
                  <q className="text-2xl text-white font-bold font-merriweather pt-4">
                    {description}
                  </q>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full bg-white rounded-b-2xl  lg:rounded-r-2xl flex flex-col  p-8 h-full lg:h-[558px]">
              <div className="flex flex-col gap-[20px] border-[#E4E7EC] pb-[149.5px]">
                <div>
                  <Image
                    src="https://d38rkvi67t4lhi.cloudfront.net/assets/1785944613772-LogoIpsum-Asset.png"
                    alt="logoispum image"
                    width={123}
                    height={28}
                  />
                </div>
                <div>
                  <div className="border-b pb-[20px]">
                    <p className="font-bold font-merriweather text-3xl text-tertiary-300 pb-2">
                      {percentage}
                    </p>
                    <p className="text-tertiary-175 font-medium font-manrope text-base">
                      decommissioning of tools
                    </p>
                  </div>
                  <div className="pt-[20px]">
                    <p className="font-bold font-merriweather text-3xl text-tertiary-300 pb-2">
                      {hours}
                    </p>
                    <p className="text-tertiary-175 font-medium font-manrope text-base">
                      hours saved
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-manrope font-normal text-tertiary-200">
                    <span className="font-semibold capitalize">{name},</span>
                    {role}
                  </p>
                </div>
                <Link href={linkUrl}>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold font-manrope text-tertiary-200 text-base">
                      Read case study
                    </p>

                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default CaseStudy;
