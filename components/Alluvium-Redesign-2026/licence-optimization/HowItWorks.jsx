import React from "react";
import Container from "../common/container";
const workItems = [
    {
        id: "01",
        heading: "Audit",
        description:
            "Full review of Atlassian licences, tokens, apps, and Claude API usage",
    },
    {
        id: "02",
        heading: "Report",
        description:
            "Clear breakdown of waste, risk, and savings opportunities across both platforms",
    },
    {
        id: "03",
        heading: "Optimise",
        description:
            "Right-size licences, revoke unused tokens, tune prompts, set AI budgets",
    },
    {
        id: "04",
        heading: "Govern",
        description:
            "Ongoing monitoring, lifecycle policies, quarterly reviews, and cost alerts",
    },
];
const HowItWorks = () => {
    return (
        <div className="bg-white">
            {/* <div className="max-w-7xl mx-auto w-full"> */}
            <Container>
                <div className=" h-full lg:h-[527px] ">
                    <div className="grid gap-12">
                        <div className="">
                            <h5 className="text-4xl leading-[44px] font-bold text-tertiary-300 font-merriweather ">
                                How it works
                            </h5>
                            <p className="text-lg text-tertiary-200 font-medium font-manrope pt-4">
                                Four steps. Full visibility. Immediate savings.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {workItems.map((workItem) => (
                                <div className="grid gap-10" key={workItem.id}>
                                    <div className="text-3xl leading-[38px] font-bold font-merriweather text-default-100">
                                        {workItem.id}
                                    </div>
                                    <div className="w-fit xl:w-[274px]">
                                        <p className="pb-2 text-lg font-bold font-merriweather text-tertiary-200">
                                            {workItem.heading}
                                        </p>
                                        <p className="text-lg text-tertiary-200 font-medium font-manrope">
                                            {workItem.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            {/* </div> */}
        </div>
    );
};

export default HowItWorks;
