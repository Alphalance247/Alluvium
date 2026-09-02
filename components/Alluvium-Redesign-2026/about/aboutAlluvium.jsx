import React from "react";
import Image from "next/image";
import Container from "../common/container";

const founders = [
  {
    name: "Wale Olojo",
    role: "Co-Founder — technical direction and delivery.",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788261822169-Image-14.png",
  },
  {
    name: "Taiwo Ojo",
    role: "Co-Founder — growth and partnerships.",
    image:
      "https://d38rkvi67t4lhi.cloudfront.net/assets/1788261822170-Image-13.png",
  },
];

const AboutGrid = () => {
  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="flex flex-col items-center gap-12">
        <h2 className="text-center text-[#1D2939] text-3xl md:text-4xl font-bold font-serif leading-tight">
          Founded by practitioners
        </h2>

        <div className="w-full flex flex-col sm:flex-row justify-center items-start gap-10">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex flex-col items-start gap-6 w-full sm:w-80"
            >
              <div className="relative w-full h-80 bg-secondary-900 rounded-lg overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#1D2939] text-lg font-bold font-sans">
                  {founder.name}
                </span>
                <p className="w-full text-[#344054] text-base font-medium font-sans leading-relaxed">
                  {founder.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutGrid;
