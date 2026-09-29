import React from "react";
import NewEventDetailsHero from "./NewEventDetailsHero";
import Button from "../common/button";
import { FiCalendar, FiShare } from "react-icons/fi";
import Link from "next/link";
import Container from "../common/container";
import HostCard from "./HostCard";

const NewEventDetails = ({
  title,
  description,
  imgSrc,
  coverPoints = [],
  hosts = [],
  subtitle,
  date,
  time,
  location,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: title },
  ];
  const Details = ({ heading, text, desc }) => (
    <div className="flex flex-col gap-2">
      <div className="text-base font-bold font-manrope text-[#667085] uppercase">
        {heading}
      </div>
      <div className="text-xl font-bold font-manrope text-[#172033]">
        {text}
      </div>
      <div className="text-sm font-medium font-manrope text-[#667085]">
        {desc}
      </div>
    </div>
  );
  const handleLinkedInShare = () => {
    const url = window.location.href;

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url,
    )}`;

    window.open(
      linkedInUrl,
      "_blank",
      "width=600,height=600,noopener,noreferrer",
    );
  };

  return (
    <div>
      <NewEventDetailsHero
        title={title}
        description={description}
        imgSrc={imgSrc}
        breadcrumbItems={breadcrumbItems}
        date
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Link href="/contact-us">
              <Button className="px-5 py-[14px] bg-default-100">
                <div className="flex items-center gap-2">
                  <FiCalendar color="white" size={20} />
                  <p className="text-white font-bold text-base font-manrope">
                    Register for free
                  </p>
                </div>
              </Button>
            </Link>
          </div>
          <div>
            {/* <Link href="/contact-us"> */}
            <Button
              className="text-white border border-white/80  py-[14px] px-[24px]"
              onClick={handleLinkedInShare}
            >
              <div className="flex items-center gap-2">
                <FiShare color="white" size={24} />

                <p className="text-white font-bold text-base font-manrope">
                  Share
                </p>
              </div>
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </NewEventDetailsHero>
      <div>
        <Container>
          <div className="flex flex-col lg:flex-row gap-20 justify-between">
            <div className="flex flex-col w-full lg:w-[60%] xl:w-[716px]">
              <div className="inline-flex justify-start items-center gap-2 mb-6">
                <div className="w-5 h-0.5 outline outline-4 outline-offset-[-2px] outline-[#008DAF]" />

                <span className="text-tertiary-300 text-sm font-bold uppercase leading-4 font-manrope">
                  WHAT YOU’LL LEARN
                </span>
              </div>

              <h2 className="font-bold font-merriweather text-[36px] text-tertiary-200 mb-6">
                {subtitle}
              </h2>

              {coverPoints.map((item, index) => {
                return (
                  <p
                    className="text-tertiary-175 font-manrope font-medium text-lg"
                    key={index}
                  >
                    {item}
                  </p>
                );
              })}

              {/* Button/content at bottom */}
              <div className="mt-auto pt-8">
                <h3 className="font-merriweather font-bold text-tertiary-400 text-xl pb-6">
                  Host
                </h3>
                <div className="flex flex-col lg:flex-row gap-4">
                  {hosts.map((host, index) => {
                    return (
                      <HostCard
                        key={index}
                        name={host.name}
                        img={host.image}
                        role={host.role}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="border rounded-lg border-tertiary-100 flex flex-col gap-6 p-6 w-full lg:w-[420px]">
              <div className="flex gap-2 ">
                <FiCalendar color="#101828" size={20} />
                <div className="text-[#0A1220] font-medium font-manrope text-xl">
                  Event details
                </div>
              </div>
              <div className="border-b border-teriary-100"></div>

              <Details
                heading="date"
                text={date}
                desc="Add it to your calendar after registration"
              />
              <Details
                heading="Time"
                text={time}
                desc="60-minute live session"
              />
              <Details
                heading="Location"
                text={location}
                desc="Joining link sent by email"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewEventDetails;
