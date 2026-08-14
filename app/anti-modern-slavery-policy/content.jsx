"use client";
import Layout from "components/layout";
import List from "components/privacy_policy/List";

const AntiModernSlaveryPolicy = () => {
  const policyContent = [
    {
      paragraph: [
        {
          type: "paragraphWithBoldText",
          subhead: "At ",
          subheadBold: `Alluvium Consulting Ltd., `,
          subheadCont: `we are committed to combating all forms of modern slavery, 
          human  trafficking,  forced  labor,  and  exploitation  within our business operations and supply 
          chains.  We  uphold  the  highest  standards  of  ethics  and  compliance  with  relevant  local  and 
          international laws, including:`,
        },
        {
          type: "list",
          isBold: true,
          list: "Modern Slavery Act 2015 (UK)",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Trafficking  in  Persons  (Prohibition)  Enforcement  and  Administration  Act,  2015 (Nigeria)",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Labour Act, Cap L1 (Nigeria) ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: "Child Rights Act, 2003 (Nigeria) ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Section 34 of the Constitution of the Federal Republic of Nigeria 1999 (as amended) ",
          isLinkAvailable: false,
        },

        {
          type: "paragraphWithBoldText",
          subhead: "Alluvium Consulting Ltd.  is ",
          subheadBold: `incorporated in Nigeria and the United Kingdom, `,
          subheadBold2: `branches 
in the United States and Kenya. `,
          subheadCont: ` with  `,
          subheadCont2:
            "This policy reflects our commitment across all jurisdictions to uphold the highest standards of integrity and compliance in addressing modern slavery.",
        },
      ],
    },
    {
      head: "Scope",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "This policy applies to all employees, contractors, suppliers, third parties and business partners of Alluvium Consulting Ltd. across all regions where we operate. ",
        },
      ],
    },
    {
      head: "Our Policy Commitments ",

      paragraph: [
        {
          head2: "1. Zero-Tolerance Approach to Modern Slavery: ",
          type: "heading/subhead",
          text: "We do not tolerate any form of slavery, human trafficking, or exploitation within our organization or supply chain. This applies to all employees, contractors, suppliers, and partners. ",
        },

        {
          head2: "2. Compliance with Legal and Ethical Standards: ",
          type: "heading/subhead",
          text: ` Alluvium Consulting Ltd. strictly adheres to the Modern Slavery Act 2015 and relevant 
Nigerian anti-trafficking and labor laws. We ensure that all business practices comply 
with these regulations. ,`,
        },

        {
          head2: "3. Supply Chain Due Diligence",
          type: "heading/subhead",
        },

        {
          type: "list",
          isBold: false,
          list: `We require all suppliers and contractors to demonstrate that they comply with 
anti-slavery and trafficking laws.`,
        },
        {
          type: "list",
          isBold: false,
          list: `All  suppliers  must  include  provisions  prohibiting  forced  labor  and  human 
trafficking in their agreements.`,
        },
        {
          type: "list",
          isBold: false,
          list: `We conduct regular assessments of high-risk areas in our supply chain to mitigate 
potential risks. `,
        },

        {
          head2: "4. Fair and Ethical Employment Practices ",
          type: "heading/subhead",
          isBold: true,
        },

        {
          type: "list",
          isBold: false,
          list: ` All employees and contractors are hired voluntarily and receive fair wages for 
their work.`,
        },
        {
          type: "list",
          isBold: false,
          list: `We  prohibit  the  use  of  child  labor,  forced  labor, or debt bondage within our 
operations. `,
        },
        {
          type: "list",
          isBold: false,
          list: `Our  employees  have  the  freedom  to leave their employment upon reasonable 
notice, as specified by their contracts.`,
        },

        {
          head2: "5. Training and Awareness",
          type: "heading/subhead",
          isBold: true,
        },

        {
          type: "list",
          isBold: false,
          list: ` We  provide  training  to  staff,  especially  those  in  procurement  and  human 
resources, on recognizing and addressing risks of modern slavery. `,
        },

        {
          type: "list",
          isBold: false,
          list: ` Senior management regularly reviews our policies to ensure compliance with best 
practices.`,
        },

        {
          head2: "6. Whistleblowing and Reporting Mechanism ",
          type: "heading/subhead",
          isBold: true,
        },

        {
          type: "list",
          isBold: false,
          list: `We encourage employees, contractors, and third parties to report any suspicions of 
unethical  behavior,  human  trafficking,  or  modern  slavery  via  a  confidential 
whistleblowing platform. `,
        },

        {
          type: "list",
          isBold: false,
          list: `All reports will be investigated promptly, and appropriate action will be taken.`,
        },

        {
          head2: "7. Cooperation with Authorities and Partners",
          type: "heading/subhead",
          isBold: true,
        },
        {
          type: "paragraphWithBoldText",
          subhead: "We  work  closely  with  the",
          subheadBold: ` National  Agency  for  the  Prohibition  of  Trafficking  in 
Persons (NAPTIP) `,

          subheadCont: `and other local and international organizations to prevent and address 
trafficking and exploitation.`,
        },

        {
          head2: "8. Continuous Improvement",
          type: "heading/subhead",
          text: "We are committed to reviewing and improving our practices regularly to ensure that our  policies remain effective and aligned with evolving legal frameworks and global best practices.",
        },
      ],
    },

    {
      head: "Responsibility for the Policy",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "The Legal and Compliance Officer and the Management are responsible for the implementation and oversight of this policy. All employees, contractors, and suppliers are required to adhere to the policy and report any concerns in line with our whistleblowing procedure.",
        },
      ],
    },
    {
      head: "Approval and Review",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "This policy is reviewed annually to ensure its continued relevance and effectiveness.",
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
              heading={"ANTI MODERN SLAVERY STATEMENT AND POLICY"}
            />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default AntiModernSlaveryPolicy;
