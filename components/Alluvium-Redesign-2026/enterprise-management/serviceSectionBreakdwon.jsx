import React from "react";
import Container from "../common/container";

const ServiceBreakdownSection = ({
  imageSrc,
  imageAlt = "Illustration showing service process bottleneck",
}) => {
  return (
    <section className="w-full bg-tertiary-150">
      <Container className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[122px]">
        <div className="w-full lg:w-[508px] h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 bg-grey-150">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        <div className="w-full flex flex-col items-start gap-6">
          <h2 className="text-tertiary-300 text-3xl font-bold font-merriweather leading-9">
            Where service breaks down
          </h2>

          <div className="flex flex-col gap-4 lg:max-w-[536px]">
            <p className="text-tertiary-200 text-lg font-medium font-manrope leading-7">
              Most organisations outgrow their service tools before anyone names
              the problem. Requests vanish into inboxes&mdash;lost, duplicated,
              or stuck with the wrong owner. Nobody can see what&apos;s open or
              overdue, so chasing updates becomes a job in itself.
            </p>
            <p className="text-tertiary-200 text-lg font-medium font-manrope leading-7">
              IT becomes the front door for every department, routing leave
              requests instead of running infrastructure. Approvals move at the
              speed of someone&apos;s inbox, and leadership has no data on what
              any of it costs.
            </p>
          </div>

          <p className="text-tertiary-200 text-lg italic font-bold font-merriweather leading-7">
            The fix isn&apos;t another tool. It&apos;s a platform built for how
            service actually flows.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceBreakdownSection;
