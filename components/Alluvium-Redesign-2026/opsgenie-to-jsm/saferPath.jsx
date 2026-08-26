import React from "react";
import Container from "../common/container";
import Image from "next/image";

const includedItems = [
  "Full audit of existing alert routing, on-call rotations, and escalation policies",
  "Integration-by-integration rebuild and testing before cutover",
  "Rollback plan, in case anything needs to reverse",
  "Live parallel period — old and new systems run together until the new one's proven",
  "Structured 10-week timeline, not open-ended",
];

const SaferPath = ({
  image = "https://d38rkvi67t4lhi.cloudfront.net/assets/1787732584475-image-6.png",
  imageAlt = "Safer Path from Opsgenie to JSM",
}) => {
  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="flex flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-[#1D2939] text-3xl font-bold font-serif leading-snug">
            A safer path from Opsgenie to JSM
          </h2>
          <p className="max-w-2xl text-[#344054] text-lg font-medium font-sans leading-relaxed">
            Our approach: 10 weeks, structured. We run this as a structured
            10-week migration to Jira Service Management Operations, with
            rollback planning and a live parallel period, so nothing fires into
            a gap.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          <Image
            width={612}
            height={280}
            src={image}
            alt={imageAlt}
            className="w-full lg:w-1/2 h-[280px] rounded-2xl"
          />

          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
            <h3 className="text-[#1D2939] text-lg font-bold font-sans">
              What&apos;s included
            </h3>
            <ul className="flex flex-col items-start gap-4">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2 w-3 h-3 shrink-0 rounded-full bg-default-100" />
                  <span className="text-[#344054] text-lg font-medium font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SaferPath;
