import React from "react";
import Container from "../common/container";
import Image from "next/image";
import Breadcrumbs from "./EventDetailsBreadcrumbs";

const NewEventDetailsHero = ({
  imgSrc,
  title,
  description,
  children,
  //   capping,
  breadcrumbItems,
  date,
  time,
  location,
}) => {
  return (
    <div className="bg-secondary-900">
      <Container>
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex flex-col lg:flex-row justify-between gap-[70px] items-stretch h-auto lg:h-[576px] ">
          <div className="flex flex-col w-full lg:w-[570px]">
            <div className="inline-flex justify-start items-center gap-2 mb-6">
              <div className="w-5 h-0.5 outline outline-4 outline-offset-[-2px] outline-[#E77956]" />

              <span className="text-white text-sm font-bold uppercase leading-4 font-manrope">
                Live webinar
              </span>
            </div>

            <h1 className="font-bold font-merriweather text-5xl text-white mb-6">
              {title}
            </h1>

            <p className="text-white font-manrope font-medium text-xl">
              {description}
            </p>

            {/* Button/content at bottom */}
            <div className="mt-auto pt-8">{children}</div>
          </div>
          {imgSrc && (
            <div>
              <Image
                src={imgSrc}
                alt="event image"
                width={576}
                height={576}
                className="rounded-lg w-full lg:w-[576px] h-auto lg:h-[576px]"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NewEventDetailsHero;
