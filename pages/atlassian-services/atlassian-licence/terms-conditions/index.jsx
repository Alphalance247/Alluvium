import Layout from "components/layout";
import Conditions from "components/atlassian-service-reuse/termsCondition";

const data = [
  {
    id: "1",
    heading: "Introduction",
    paragraph: [
      {
        highlight: [
          {
            text: '1.1  These  Terms  and  Conditions  ("Agreement")  govern  the  provision  of  Atlassian  License Management services ("Services") by Geniesys-Alluvium Ltd ("Company," "we," "us," or "our") to the client ("Client," "you," or "your"). Jointly referred to as “both parties',
          },
          {
            text: "1.2 By utilizing our Services, you agree to comply with and be bound by these terms.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    heading: "Definitions",
    paragraph: [
      {
        sub: "2.1 Atlassian",
        highlight:
          "Atlassian  refers  to Atlassian  Corporation  Plc,  an Australian  enterprise  software  company  that develops products for software development, project management, and content management. Their products include well-known software like Jira, Confluence, Bitbucket, and Trello.",
      },

      {
        sub: "2.2 Agreement",
        highlight: [
          {
            text: "This  refers  to  the  legally  binding  contract  between Alluvium  Ltd.  and  the  client  for  the  use, management, and provision of Atlassian licenses.",
          },
        ],
      },
      {
        sub: "2.3 Third Party",
        highlight: [
          {
            text: "Third Party refers to any entity other than the primary parties involved in the agreement (i.e., the customer and Alluvium).",
          },
        ],
      },
      {
        sub: "2.4 Licenses",
        highlight: [
          {
            text: "Licenses refer to the permissions granted by Atlassian to the customer to use its software products. These licenses define the scope, duration, and terms of use for Atlassian software. They typically include user limits, feature access, and any restrictions on usage.",
          },
        ],
      },
      {
        sub: "2.5 Licenses",
        highlight: [
          {
            text: "License Services refer to the services provided by Atlassian or its authorized partners to facilitate the management, distribution, and support of software licenses. These services  might  include license procurement, renewal management, compliance monitoring, and technical support related to the use and administration of licenses.",
          },
        ],
      },
      {
        sub: "2.6 Marketplace Vendors",
        highlight: [
          {
            text: "Marketplace Vendors refer to third-party developers and companies that create and offer apps, plugins,  or  add-ons  for Atlassian  products  through  the Atlassian  Marketplace. These  vendors provide enhancements or additional functionalities that integrate with Atlassian's core products, and their offerings are subject to separate terms and conditions specific to each vendor.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    heading: "Scope of Services",
    paragraph: [
      {
        highlight: [
          {
            text: "3.1  Alluvium Ltd offers services related to the management, procurement, renewal of Atlassian licenses, new purchases, upgrade and downgrade of Atlassian apps and/or 3rd party Marketplace apps.",
          },
          {
            text: "3.2 We will act as an intermediary between the Client and Atlassian, ensuring the proper handling of licenses and compliance with Atlassian`s policies.",
          },
          {
            text: "3.3 Specific services include:  a. License procurement and  renewal  of Atlassian licenses,  new purchases, upgrade and downgrade of Atlassian apps and/or 3rd party Marketplace apps. b. License compliance  and  auditing  c.  Usage  reporting  and  optimization  recommendations  d.  Technical support and consultation.",
          },
          {
            text: "3.4 Usage of Atlassian products and services are subject to the Atlassian Customer Agreement and",
            subtext: " Privacy Policy",
            subtextUrl: "/privacy-policy",
          },
          {
            text: "Usage of third party apps purchased through the Atlassian Marketplace is subject to the ",
            subtext: "Atlassian Marketplace",
            subtextUrl:
              "https://marketplace.atlassian.com/vendors/1218751/alluvium",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    heading: "Client Responsibilities",
    paragraph: [
      {
        highlight: [
          {
            text: "4.1 The Client must provide accurate and complete information necessary for the procurement and management of licenses.",
          },
          {
            text: "4.2 The Client is responsible for the proper use of licenses in accordance with Atlassian’s terms and policies.",
          },
          {
            text: "4.3 The Client agrees to notify Alluvium Ltd of any changes in their licensing needs or usage.",
          },
        ],
      },
    ],
  },

  {
    id: "5",
    heading: "Fees and Payment",
    paragraph: [
      {
        highlight: [
          {
            text: "5.1 Cost Estimate: Alluvium Ltd will provide a cost estimate based on the outcome of the initial assessment.",
          },
          {
            text: "5.2 Payment Terms: Payment terms will be outlined in the service agreement. Invoices are payable within 30 days after the invoiced date.",
          },
          {
            text: "5.3 Late payments may incur additional fees and could result in suspension of Services. The additional fees depend on the customer service agreement and will be determined by Alluvium Ltd on a case-by-case basis.",
          },
          {
            text: "5.4 Additional Costs: Any additional costs incurred due to changes in the scope of work or unforeseen issues will be communicated and approved by the Client before proceeding.",
          },
        ],
      },
    ],
  },

  {
    id: "6",
    heading: "Confidentiality",
    paragraph: [
      {
        highlight: [
          {
            text: "6.1 Data Protection: Alluvium Ltd agrees to handle all Client data with strict confidentiality and in compliance with relevant data protection laws.",
          },
          {
            text: "6.2 Non-Disclosure: Both parties agree not to disclose any confidential information to third parties without prior written consent.",
          },
          {
            text: "6.3 Both Parties agree, to the extent of their respective responsibilities that all information and  documents  (whether  financial,  technical  or  otherwise)  obtained  by  either  Party  or  its employees in the course of performing this service which are not published or otherwise publicly available shall be kept confidential and not disclosed to third parties or the public except with the prior written approval of the other Party or as required by regulatory authorities.",
          },
          {
            text: "6.4 The obligation of confidentiality shall survive termination or completion of  this Agreement.",
          },
          {
            text: "6.5 Both parties however, cannot be held liable for any disclosure if the elements were released into the public domain at the time of disclosure, or obtained from third parties through legitimate means.",
          },
        ],
      },
    ],
  },

  {
    id: "7",
    heading: "Limitation of Liability",
    paragraph: [
      {
        highlight: [
          {
            text: "7.1 Limitation of Liability: Alluvium Ltd liability for any claims arising out of or related to the services is limited to the amount paid by the Client for the services.",
          },
          {
            text: "7.2 Alluvium Ltd will not be held liable for any interruptions or unavailability of Cloud software caused by Atlassian and/or 3rd party Marketplace app vendors",
          },
          {
            text: "7.3 No Warranty: Alluvium Ltd provides the services `as is` without any warranties, express or implied.",
          },
        ],
      },
    ],
  },

  {
    id: "8",
    heading: "Termination",
    paragraph: [
      {
        highlight: [
          {
            text: "8.1 Termination by Client: The Client may terminate the agreement at any time by providing written notice. The Client will be responsible for payment for services rendered up to the date of termination.",
          },
          {
            text: "8.2 Termination by Alluvium Ltd: Alluvium Ltd may terminate the agreement if the Client breaches any terms or fails to make timely payments. Additionally, Alluvium Ltd reserves the right to terminate the contract if the Client does not pay their invoice before the due date stated on the invoice.",
          },
          {
            text: "8.3 Upon termination, the Client agrees to pay for all Services rendered up to the termination date.",
          },
          {
            text: "8.4 All provisions of this Agreement that by their nature should survive termination will survive, including confidentiality, payment obligations, and limitation of liability.",
          },
        ],
      },
    ],
  },

  {
    id: "9",
    heading: "Governing Law",
    paragraph: [
      {
        highlight: [
          {
            text: "9.1 This Agreement shall be governed by and construed in accordance with the laws of the United Kingdom.",
          },
          {
            text: "9.2 Any disputes arising out of or related to this Agreement shall be subject to the exclusive jurisdiction of the courts in that jurisdiction or the jurisdiction agreed upon by both parties.",
          },
        ],
      },
    ],
  },

  {
    id: "10",
    heading: "Dispute Resolution",
    paragraph: [
      {
        highlight: [
          {
            text: "10.1 Negotiation: In case of any disputes, Both parties agree to first attempt to resolve any disputes through good-faith negotiation.",
          },
          {
            text: "10.2 Arbitration: If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the Arbitration Jurisdiction as decided by both parties.(clause 9.2 will be in force in the case Arbitration fails).",
          },
        ],
      },
    ],
  },

  {
    id: "11",
    heading: "Relationship Between The Parties",
    paragraph: [
      {
        highlight: [
          {
            text: "11.1 Nothing in this Agreement shall constitute any long-term Partnership or Joint Venture between the parties. Hence, neither party to this Agreement shall have any right to incur any liabilities or obligations on behalf of or binding upon the other party except as provided for under this Agreement.",
          },
          {
            text: "11.2 Nothing in this Agreement shall be construed to constitute a relationship of employer and employee between the parties during or after the subsistence of this agreement until a review or confirmation of such engagement has been executed by the parties.",
          },
        ],
      },
    ],
  },

  {
    id: "12",
    heading: "Intellectual Property",
    paragraph: [
      {
        highlight: [
          {
            text: "12.1 All intellectual property rights related to the Services provided by Alluvium Ltd remain with Alluvium Ltd or its licensors (e.g., migration scripts, processes, templates, documentation and training materials).",
          },
          {
            text: "12.2 The Client is granted a limited, non-exclusive, non-transferable license to use the deliverables provided by Alluvium Ltd to get access to the Software developed by Atlassian and/or 3rd party Marketplace vendors.",
          },
        ],
      },
    ],
  },

  {
    id: "13",
    heading: "Amendments",

    paragraph: [
      {
        highlight: [
          {
            text: "13.1 Geniesys-Alluvium Ltd reserves the right to amend these Terms and Conditions at any time.",
          },
          {
            text: "13.2 Clients will be notified of any changes, and continued use of the Services will constitute acceptance of the revised terms.",
          },
        ],
      },
    ],
  },

  {
    id: "14",
    heading: "Miscellaneous",
    paragraph: [
      {
        highlight: [
          {
            text: "14.1 These terms and conditions, together with the project proposal or statement of work, constitute the entire agreement between the parties and supersede all prior agreements, understandings, and negotiations.",
          },
          {
            text: "14.2 If any provision of these terms and conditions is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
          },
        ],
      },
    ],
  },

  {
    id: "15",
    heading: "Contact Information",

    paragraph: [
      {
        highlight: [
          {
            text: "For any questions or concerns regarding these Terms and Conditions, please contact us at:",
          },
          {
            text: "Company Address: 680 E Main Street Ste A Stamford, CT 06901 US. Email: ",
          },
          {
            subtext1: "contact@alluvium.net ",
            url2: "mailto:contact@alluvium.net ",
            text: "Email: ",
          },
          {
            subtext2: "+442035762028",
            url3: "tel:+442035762028",
            text: "Phone Number: ",
          },
        ],
      },
    ],
  },
];

const LicenceTermsandCondition = () => {
  return (
    <Layout>
      <Conditions
        data={data}
        headings="Terms and Conditions for License Management Service"
        paragraphs="Last updated on February 23, 2024"
        subhead={true}
      />
    </Layout>
  );
};

export default LicenceTermsandCondition;
