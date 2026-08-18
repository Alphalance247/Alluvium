import React from "react";
import GrayBackground from "../common/grayBackground";
const lists = [
    "Personal Access Tokens (PATs) — identify orphaned tokens ",
    "OAuth app credentials — review third-party app access and revoke unused connections",
    "API token lifecycle — set expiry policies, rotation schedules, and access scoping",
    "Bot and service account tokens — ensure least-privilege access",
    "Align token governance with Atlassian Guard and your security policies",
];
const AtlassianTokenCredentialSecurity = () => {
    return (
        <GrayBackground
            className=" "
            title="Atlassian Token & Credential Security"
            description="Licences aren't the only risk. Unmanaged API tokens and credentials create security gaps."
        >
            <div className="flex flex-col gap-4 ">
                <div>
                    <p className="font-bold font-manrope text-lg text-tertiary-300">
                        What We Audit & Secure
                    </p>
                </div>
                <ul className="list-disc grid gap-4 marker:text-default-100 w-full md:w-[536px] lg:w-auto xl:w-[536px] md:mx-0 mx-6">
                    {lists.map((list, index) => (
                        <li
                            key={index}
                            className="text-tertiary-200 font-manrope font-medium text-lg"
                        >
                            {list}
                        </li>
                    ))}
                </ul>
            </div>
        </GrayBackground>
    );
};

export default AtlassianTokenCredentialSecurity;
