"use client";
import Layout from "components/layout";
import List from "components/privacy_policy/List";

const VettingPolicy = () => {
  const policyContent = [
    {
      head: " 1. Pre-Employment Vetting:",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `All prospective employees, contractors, and third parties must
undergo a comprehensive vetting process before engagement with the company. This ensures
that individuals meet the company's standards for integrity, competence, and trustworthiness.`,
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "2. Vetting Process and Responsibilities:",
      paragraph: [
        {
          type: "list",
          isBold: true,
          boldText: "Specialist Involvement:",
          list: "Vetting is mostly conducted in-house by the HR and legal department but it is sometimes outsourced to a specialist background-checking service, depending on the role's sensitivity and risk level.",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Scope of Vetting:",
          list: "The vetting process includes, but is not limited to:",
          isLinkAvailable: false,
        },

        {
          type: "sublist",
          list: `Identity verification`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `Academic and professional qualification checks`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `Employment history verification`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `Criminal record checks (where applicable and permitted by law)`,
          isBold: false,
        },
        {
          type: "sublist",
          list: ` Reference checks, including the use of a guarantor's form requiring two
responsible referees who can vouch for the candidate's character and credibility.
`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `Social media screening, limited to publicly available information relevant to
professional conduct and reputation.`,
          isBold: false,
        },
      ],
    },
    {
      head: "3. Continuous Monitoring During Employment:",
      paragraph: [
        {
          type: "list",
          isBold: false,
          list: "Vetting is not limited to pre-employment but continues throughout the period of engagement to ensure continued compliance and integrity.",
        },
        {
          type: "list",
          isBold: false,
          list: "Periodic reviews may involve re-verification of key credentials and performance-based assessments.",
        },
        {
          type: "list",
          isBold: true,
          list: "Employees are required to disclose any changes in circumstances that may affect their eligibility for continued engagement",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "4. Continuous Monitoring During Employment:",
      paragraph: [
        {
          type: "list",
          isBold: false,
          list: "All vetting activities are conducted in compliance with GDPR and relevant data protection laws of the Country of the Employee, contractor and third party.",
        },
        {
          type: "list",
          isBold: false,
          list: "Personal data collected during vetting will be used strictly for the purpose of assessing suitability for employment and ensuring workplace security.",
        },
      ],
    },

    {
      head: "5. Accountability",
      paragraph: [
        {
          type: "list",
          isBold: false,
          list: " All vetting decisions are documented and securely stored.",
        },
        {
          type: "list",
          isBold: false,
          list: "Discrepancies discovered during or after the vetting process will be addressed according to company policies on integrity and disciplinary actions.",
        },
      ],
    },
  ];
  return (
    <Layout>
      <div>

        <main>
          <section>
            <List
              content={policyContent}
              heading={
                "VETTING POLICY FOR EMPLOYEES, CONTRACTORS, AND THIRD PARTIES"
              }
            />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default VettingPolicy;
