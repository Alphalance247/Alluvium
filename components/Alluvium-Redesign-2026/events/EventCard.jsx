import { arrow } from "@popperjs/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const EventCard = ({
  eventId,
  imgUrl,
  date,
  link,
  title,
  variant = "dark",
}) => {
  const isLight = variant === "light";
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={imgUrl}
        alt="event image"
        className="rounded-lg"
        width={378.67}
        height={378.67}
      />
      <div className="flex flex-col gap-10">
        <div>
          <p
            className={`text-sm font-bold font-manrope pb-[16px]  ${
              isLight ? "text-tertiary-175" : "text-[#FFFFFFCC]"
            }`}
          >
            {date}
          </p>
          <h3
            className={`text-2xl font-bold font-merriweather ${
              isLight ? "text-tertiary-200" : "text-white"
            }`}
          >
            {title}
          </h3>
        </div>
        <div>
          <Link
            href={link}
            className={`font-manrope font-bold ${
              isLight ? "text-tertiary-200" : "text-white"
            } text-base flex items-center gap-2`}
          >
            Learn More
            <span>
              <IoIosArrowRoundForward
                color={isLight ? "#98A2B3" : "#FFFFFF99"}
                size={20}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
