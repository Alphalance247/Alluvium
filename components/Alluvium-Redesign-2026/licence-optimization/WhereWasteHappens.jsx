import Image from "next/image";
import React from "react";
import Container from "../common/container";

const WhereWasteHappens = () => {
    return (
        <div className="">
            <Container>
                <div className="flex flex-col gap-4 justify-center">
                    <h2 className="text-3xl font-bold text-tertiary-300 font-merriweather text-center ">
                        Where Waste Happens
                    </h2>
                    <p className="text-lg text-tertiary-300 font-manrope font-medium text-center">
                        Different platforms, same problem — spend without visibility.
                    </p>
                </div>
                <div className=" mt-12 w-full overflow-x-auto">
                    <table className="min-w-[1152px] w-full ">
                        <thead>
                            <tr>
                                <th className="w-[297px] bg-[#F9FAFB]">
                                    <div></div>
                                </th>
                                <th className="col-span-2 border-b-[1px] border-[#E4E7EC]">
                                    <div className="flex justify-between items-baseline ">
                                        <div className="w-[427.5px]  flex flex-col gap-3 px-[20px] py-[20px]">
                                            <div>
                                                <Image
                                                    src="/assets/Alluvium-Redesign-2026/badges/atlassian-logo.png"
                                                    alt="atlassian logo"
                                                    width="58"
                                                    height="57"
                                                    className="flex-shrink-0 h-auto w-auto"
                                                />
                                            </div>
                                            <div className="font-semibold text-lg font-merriweather text-tertiary-400">
                                                Atlassian licences & tokens
                                            </div>
                                        </div>
                                        <div className="w-[427.5px] flex flex-col gap-3 px-[20px] py-[20px]">
                                            {/* <div className=""> */}
                                            <div>
                                                <Image
                                                    src="/assets/Alluvium-Redesign-2026/badges/logos_claude.png"
                                                    alt="claude logo"
                                                    width="139"
                                                    height="30"
                                                    className="flex-shrink-0 "
                                                />
                                            </div>
                                            {/* </div> */}
                                            <div className="font-semibold text-lg font-merriweather text-tertiary-400">
                                                Claude AI tokens
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="align-top pt-[20px] w-[297px] bg-[#F9FAFB]">
                                    <div className="">
                                        <p className="px-4 text-[#454545] font-medium font-manrope text-base">
                                            What they are
                                        </p>
                                    </div>
                                </td>
                                <td className="col-span-2 border-b-[1px] border-[#E4E7EC] w-[459.5px]">
                                    <div className="flex">
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                User licences, Marketplace app subscriptions, API
                                                tokens, PATs, and OAuth credentials
                                            </p>
                                        </div>
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Usage units — every prompt and response consumes input
                                                and output tokens, which is how Claude API billing works
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-top pt-[20px] w-[297px] bg-[#F9FAFB]">
                                    <p className="px-4 text-[#454545] font-medium font-manrope tedxt-base">
                                        Common waste
                                    </p>
                                </td>
                                <td className="col-span-2 border-b-[1px] border-[#E4E7EC] w-[459.5px]">
                                    <div className="flex">
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Orphaned tokens from ex-employees, unused integrations,
                                                no expiry policies, duplicate app subscriptions
                                            </p>
                                        </div>
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Verbose prompts, wrong model for the task, no caching,
                                                no team budgets, duplicate API calls
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-top pt-[20px] w-[297px] bg-[#F9FAFB]">
                                    <p className="px-4 text-[#454545] font-medium font-manrope text-base">
                                        What we fix
                                    </p>
                                </td>
                                <td className="col-span-2 border-b-[1px] border-[#E4E7EC] w-[459.5px]">
                                    <div className="flex">
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Audit → revoke unused → set lifecycle policies → align
                                                with Atlassian Guard
                                            </p>
                                        </div>
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Prompt engineering → model selection → caching strategy
                                                → usage budgets → consumption monitoring
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-top pt-[20px] w-[297px] bg-[#F9FAFB]">
                                    <p className="px-4 text-[#454545] font-medium font-manrope text-base">
                                        Cost impact
                                    </p>
                                </td>
                                <td className="col-span-2 border-b-[1px] border-[#E4E7EC] w-[459.5px]">
                                    <div className="flex">
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Security risk + compliance gaps + 15–45% overspend
                                            </p>
                                        </div>
                                        <div className="w-[459.5px] px-[20px] py-[20px] ">
                                            <p className="text-base font-medium text-tertiary-200 font-manrope">
                                                Direct API spend — overspending 30–60% is common without
                                                governance
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>

        </div>
    );
};

export default WhereWasteHappens;
