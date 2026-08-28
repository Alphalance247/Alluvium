import React from "react";
const items = [
  {
    heading: "Teams migrating off Opsgenie or PagerDuty before 5 April 2027 ",
    text: "the deadline is fixed; the earlier you start, the more room there is to test before cutover",
  },
  {
    heading:
      "Organizations replacing spreadsheets or email-based request management",
    text: "if requests are getting lost or duplicated, this is the fix",
  },
  {
    heading:
      "Teams migrating from ServiceNow, HubSpot, or Salesforce Precursive to JSM",
    text: "We’ve done all three, with clean data migration and reporting rebuilds each time.",
  },
  {
    heading: "Companies expanding service management across departments ",
    text: "not just IT: HR, Finance, Legal, Facilities, and Operations all run on the same platform.",
  },
  {
    heading:
      "Businesses already on Atlassian looking to activate JSM and AI capabilities",
    text: "if you’re paying for the platform but not using it fully, this closes that gap.",
  },
];

const ReadyToModernize = () => {
  return (
    <div className="bg-secondary-100 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12">
          <div>
            <h6 className="text-tertiary-300 font-merriweather font-bold text-[36px] leading-[44px]">
              Ready to modernize?
            </h6>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const shouldSpan = isLast && items.length % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`py-10 border-t border-tertiary-100 ${
                    shouldSpan ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="w-full md:w-[320px] lg:w-[280px] xl:w-[378px]">
                    <p className="text-tertiary-200 font-medium font-merriweather text-xl pb-6">
                      {item.heading}
                    </p>
                    <p className="text-base font-normal font-manrope">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToModernize;
