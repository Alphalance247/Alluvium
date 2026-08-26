import React from "react";
import Container from "../common/container";

const MigrationIntro = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[#1D2939] text-3xl font-bold font-serif leading-snug">
          Migration is more than a licensing swap.
        </h2>
        <p className="max-w-[700px] text-xl font-sans leading-8">
          <span className="text-[#1D2939] font-bold">
            Most teams haven&apos;t started moving. Alluvium is who they call.
          </span>
          <br />
          <br />
          <span className="text-[#344054] font-medium">
            This isn&apos;t a licensing swap — alert routing, on-call
            rotations, escalation policies, and every integration surface
            have to be rebuilt and proven before cutover — because the first
            real incident after go-live is the test.
          </span>
        </p>
      </Container>
    </section>
  );
};

export default MigrationIntro;
