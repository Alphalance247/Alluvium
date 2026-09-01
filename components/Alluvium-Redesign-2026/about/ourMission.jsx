import React from "react";
import Container from "../common/container";

const MissionSection = () => {
  return (
    <section className="w-full bg-[#F2F4F7] overflow-hidden">
      <Container className="f">
        <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
          <div className="w-full md:w-[464px] flex flex-col items-start gap-6 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-5 h-1 bg-[#008DAF]" />
              <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
                Who we are
              </span>
            </div>
            <h2 className="text-[#1D2939] max-w-[400px] text-3xl md:text-4xl font-bold font-serif leading-tight">
              Turning powerful tools into real business value
            </h2>
          </div>

          <p className=" text-[#344054] text-lg font-medium font-sans leading-relaxed">
            Organizations invest in powerful tools but rarely get the full value
            from them. We close that gap — as an Atlassian consulting partner
            across Jira, Confluence, Jira Service Management, and Bitbucket, and
            as an Anthropic partner bringing Claude and Rovo into enterprise
            workflows that actually get used.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
