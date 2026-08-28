import React from "react";
import Button from "../common/button";
import Link from "next/link";
import Image from "next/image";

const OpsginieMigration = () => {
  return (
    <div className="py-24 ">
      <div className="max-w-[1081px] mx-auto bg-[#ECF6F9] border-[1.5px] border-[#33AFCD] rounded-lg px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center lg:flex-row py-14 px-4 md:px-10 gap-10">
          <div className="">
            <Image
              src="https://d38rkvi67t4lhi.cloudfront.net/assets/1787742081629-Mask-group-3.png"
              alt="Opsgenie image"
              height={183}
              width={435}
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col  gap-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-[4px] bg-[#008DAF]" />
              <div className="text-[#1D2939] text-sm md:text-sm font-bold font-sans uppercase tracking-[1px]">
                OPSGENIE MIGRATION
              </div>
            </div>
            <h2 className="font-merriweather font-bold text-[40px] leading-[48px] text-tertiary-200">
              Move off Opsgenie <br /> without the scramble.
            </h2>
            <p className="font-manrope font-medium text-lg text-tertiary-200 w-full lg:w-[460px]">
              Opsgenie ends support 5 April 2027. Most teams haven’t started
              moving. We run a structured 10-week migration to Jira Service
              Management Operations, with rollback planning and a live parallel
              period
            </p>
            <Link href="" className="">
              <Button size="md" variant="defaultSecondary">
                See the full migration plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpsginieMigration;
