import React from "react";
import Container from "../common/container";

const HeroHeader = () => {
  return (
    <div className="border-y">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10 md:px-12 lg:px-16 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold font-merriweather text-5xl text-tertiary-300">
            Events
          </h1>
          <p className="font-medium font-manrope text-lg text-tertiary-175">
            Join us for conversations, insights, and practical ideas across
            Atlassian and AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
