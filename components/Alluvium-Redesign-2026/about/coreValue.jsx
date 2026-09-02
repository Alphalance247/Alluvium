import React from "react";
import Image from "next/image";
import Container from "../common/container";

const ValuesGrid = () => {
  return (
    <section className="w-full bg-secondary-900 overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="w-5 h-1 bg-default-100" />
            <span className="text-white text-sm font-bold font-sans uppercase tracking-wide">
              Where we operate
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold font-serif leading-tight">
            Built to deliver globally
          </h2>
          <p className="max-w-lg text-white/80 text-lg font-medium font-sans leading-relaxed">
            Wherever you&apos;re calling from, there&apos;s a team ready to
            help. We deliver across AMER, EMEA, and Africa — with offices in
            Orlando, Stamford, and New York, growing presence on the West Coast,
            and teams in the UK and Nigeria, one of the few Africa practices in
            the Atlassian partner ecosystem.
          </p>
        </div>

        <div className="w-full lg:w-[588px] shrink-0">
          <Image
            src="https://d38rkvi67t4lhi.cloudfront.net/assets/1788259097847-Image-11.png"
            alt="Map of Alluvium's global office locations"
            width={588}
            height={368}
            className="w-full h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default ValuesGrid;
