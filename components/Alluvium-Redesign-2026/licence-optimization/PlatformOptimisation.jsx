import React from "react";
import Container from "../common/container";
import PlatformOptimisationCard from "./PlatformOptimisationCard";
const licenseOptimisationContents = [
    "Audit users, apps, and access across Jira, Confluence, and JSM",
    "Remove inactive users and ghost accounts",
    "Consolidate or remove unused Marketplace apps",
    "Right-size plans and tiers before renewal",
];
const claudeOptimisationContents = [
    "Improve prompts to reduce input/output token consumption",
    "Audit AI usage patterns across teams and workflows",
    "Select the right model per task — Opus, Sonnet, or Haiku",
    "Enable prompt caching to cut repeat query costs",
];
const PlatformOptimisation = () => {
    return (
        <div className="bg-secondary-100 w-full  ">
            {/* <div className="max-w-7xl mx-auto"> */}
            <Container>
                <div className="flex flex-col gap-12">
                    <div className="xl:w-[848px] w-full">
                        <h2 className="text-3xl font-bold text-tertiary-300 font-merriweather">
                            Two platforms. One optimisation service.
                        </h2>
                        <p className="pt-4 text-lg font-medium font-manrope text-tertiary-200 ">
                            Atlassian licences and Claude AI tokens are two different cost
                            centres — but waste looks the same in both. Unused seats. Wrong
                            tiers. No governance. We audit, right-size, and set controls
                            across your entire Atlassian + AI spend.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-6">
                        <PlatformOptimisationCard
                            className="md:w-1/2 w-full bg-default-400"
                            title="Claude Token Optimisation"
                            captionText="30–60% on AI API spend"
                            contents={claudeOptimisationContents}
                        />
                        <PlatformOptimisationCard
                            className="md:w-1/2  w-full bg-lightBlue-100"
                            title="Atlassian Licence Optimisation"
                            captionText="15–45% on annual spend"
                            contents={licenseOptimisationContents}
                        />

                    </div>
                </div>
            </Container>
            {/* </div> */}
        </div>
    );
};

export default PlatformOptimisation;
