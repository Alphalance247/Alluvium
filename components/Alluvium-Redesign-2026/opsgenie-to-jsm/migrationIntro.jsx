import React from "react";
import Container from "../common/container";

const MigrationIntro = ({ heading, children }) => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-[#1D2939] text-3xl font-bold font-serif leading-snug">
          {heading}
        </h2>
        <p className="max-w-[700px] text-xl font-manrope leading-8">
          {children}
        </p>
      </Container>
    </section>
  );
};

export default MigrationIntro;
