import Image from "next/image";
import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import Container from "../common/container";
const items = [
    {
        title: "Model selection",
        list: [
            "Use Haiku for simple tasks — 60x cheaper than Opus",
            "Use Sonnet for everyday workflows — best value for most teams",
            "Reserve Opus for complex analysis and research",
            "Match model to task complexity automatically",
        ],
    },
    {
        title: "Prompt engineering",
        list: [
            "Reduce input tokens with concise, structured prompts",
            "Use system prompts to set boundaries and reduce output bloat",
            "Template common queries to standardise token usage",
            "Train teams on effective prompting techniques",
        ],
    },
    {
        title: "Caching & Efficiency",
        list: [
            "Enable prompt caching for repeated context — up to 90% savings",
            "Batch similar requests to reduce overhead",
            "Eliminate duplicate API calls across teams",
            "Set rate limits to prevent runaway usage",
        ],
    },
    {
        title: "Budgets & monitoring",
        list: [
            "Set team-level and project-level spending caps",
            "Dashboard showing consumption by team, model, and use case",
            "Alerts before budgets are exceeded",
            "Monthly reports with optimisation recommendation ",
        ],
    },
];

const ClaudeTokenCostControl = () => {
    return (
        <div className="bg-default-25">
            {/* <div className="max-w-7xl mx-auto "> */}
            <Container>
                <div className=" w-full md:w-[579px] ">
                    <h4 className="font-bold font-meriweather text-3xl leading-[38px] text-tertiary-300">
                        Claude token cost controls
                    </h4>
                    <p className="text-lg text-tertiary-200 font-medium font-manrope pt-4">
                        AI costs scale fast. Without governance, teams overspend before
                        anyone notices.
                    </p>
                </div>
                <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  w-full  ">
                    {items.map((item, index) => (
                        <div key={index} className="">
                            <div className="bg-white rounded-2xl p-8 h-full  ">
                                <div className="grid gap-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-[#FCFCFD] border-[1px] border-[#E4E7EC]">
                                        {index % 2 ? (
                                            <FaPencilRuler className="text-default-100 h-8 w-8" />
                                        ) : (
                                            <Image
                                                src="https://d38rkvi67t4lhi.cloudfront.net/assets/1785941058426-flowbite_search-solid-1.png"
                                                alt="search icon"
                                                height={26}
                                                width={26}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-lg pb-2 font-merriweather font-bold text-tertiary-200 ">
                                            {item.title}
                                        </p>
                                        <ul className="grid gap-2.5 ">
                                            {item.list.map((i, index) => (
                                                <li
                                                    key={index}
                                                    className="list-disc  text-tertiary-200 font-manrope list-inside font-medium pl-2"
                                                >
                                                    {i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            {/* </div> */}
        </div>
    );
};

export default ClaudeTokenCostControl;
