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
            text: '1.1  These Terms and Conditions ("Terms") govern the provision of Atlassian training services ("Services") provided by Geniesys-Alluvium Ltd ("Company," Alluvium ltd""we,""us," or"our ") to the Enrollee (“you”, “enrollee”).',
          },
          {
            text: "Jointly referred to as “both parties”",
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
        highlight: [
          {
            numb: "2.1 ",
            boldText: "Client: ",
            text: "The  individual  or  entity  engaging Alluvium  Ltd  for Atlassian  migration services.",
          },
          {
            numb: "2.2 ",
            boldText: " Alluvium Ltd: ",
            text: "The service provider offering Atlassian migration services.",
          },
          {
            numb: "2.3 ",
            boldText: "Services: ",
            text: "The  migration  services  include  either  migrations  to  Atlassian  Cloud, consolidations  of  existing  (Cloud)  environments  or  migrations  to  on-premises environments (e.g., Data Center) with the use of Atlassian products (e.g., Jira, Confluence) as specified in the service agreement.",
          },
          {
            numb: "2.4 ",
            boldText: "Atlassian: ",
            text: "refers to a company that develops products for software development, project management, and content management. Their products include well-known software like Jira, Confluence, Bitbucket, and Trello.",
          },
          {
            numb: "2.5 ",
            boldText: "Service Agreement: ",
            text: "This refers to the legally binding contract between Alluvium Ltd. and the client for migration services.",
          },
          {
            numb: "2.6 ",
            boldText: "Third Party: ",
            text: "Third Party refers to any entity other than the primary parties involved in the agreement (i.e., the customer and Alluvium).",
          },
          {
            numb: "2.7 ",
            boldText: "Marketplace  Vendors: ",
            text: "Marketplace Vendors refer to third-party developers  and companies that create and offer apps, plugins, or add-ons for Atlassian products through the Atlassian Marketplace. These vendors provide enhancements or additional functionalities that integrate with Atlassian's core products, and their offerings are subject to separate terms and conditions specific to each vendor.",
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
            numb: "3.1 ",
            boldText: "Assessment: ",
            text: "Alluvium Ltd will conduct an initial assessment to understand the Client's requirements and existing Atlassian setup.",
          },
          {
            numb: "3.2 ",
            boldText: " Migration Plan: ",
            text: "Alluvium Ltd will develop a detailed migration plan outlining the steps, timeline, and costs involved.",
          },
          {
            numb: "3.3 ",
            boldText: "Execution: ",
            text: "Alluvium Ltd will execute the migration plan, ensuring minimal disruption to the Client’s operations.",
          },
          {
            numb: "3.4 ",
            boldText: "Post-Migration Support: ",
            text: "Alluvium Ltd will provide support for a specified period(as specified in the service agreement) after the migration to address any issues that arise.",
          },
          {
            text: "Note that the scope is clarified in the service agreement and it can occur that not all of these elements are part of the scope.",
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
            numb: "4.1 ",
            boldText: "Access  and  Information: ",
            text: "The Client agrees to provide Alluvium Ltd with the necessary access to systems and information required to perform the migration.",
          },
          {
            numb: "4.2 ",
            boldText: "Timely Feedback: ",
            text: "The Client agrees to provide timely feedback and approvals to avoid delays in the migration process.",
          },
          {
            numb: "4.3 ",
            boldText: "Data Backup: ",
            text: "The Client is responsible for backing up their data before the migration. Alluvium Ltd is not liable for any data loss.",
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
            numb: "5.1 ",
            boldText: "Cost Estimate: ",
            text: "Alluvium Ltd will provide a cost estimate based on the outcome of the initial assessment.",
          },
          {
            numb: "5.2 ",
            boldText: "Payment Terms: ",
            text: "Payment terms will be outlined in the service agreement. Invoices are payable within 30 days after the invoiced date.",
          },
          {
            text: "5.3 Late payments may incur additional fees and could result in suspension of ServicesThe additional fees depend on the customer service agreement and will be determined by Alluvium Ltd on a case-by-case basis.",
          },
          {
            numb: "5.4 ",
            boldText: "Additional Costs: ",
            text: "Any additional costs incurred due to changes in the scope of work or unforeseen issues will be communicated and approved by the Client before proceeding.",
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
            numb: "6.1 ",
            boldText: "Data Protection: ",
            text: "Alluvium Ltd agrees to handle all Client data with strict confidentiality and in compliance with relevant data protection laws.",
          },
          {
            numb: "6.2 ",
            boldText: "Non-Disclosure: ",
            text: "Both parties agree not to disclose any confidential information to third parties without prior written consent.",
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
            numb: "7.1 ",
            boldText: "Limitation of Liability: ",
            text: "Alluvium Ltd liability for any claims arising out of or related to the services is limited to the amount paid by the Client for the services.",
          },
          {
            text: "7.2 Alluvium Ltd will not be held liable for any interruptions or unavailability of Cloud software caused by Atlassian and/or 3rd party Marketplace app vendors",
          },
          {
            numb: "7.3 ",
            boldText: "No Warranty: ",
            text: "Alluvium Ltd provides the services `as is` without any warranties, express or implied.",
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
            numb: "8.1. ",
            boldText: "Termination by Client: ",
            text: "The Client may terminate the agreement at any time by providing written notice. The Client will be responsible for payment for services rendered up to the date of termination.",
          },
          {
            numb: "8.2. ",
            boldText: "Termination by Alluvium Ltd: ",
            text: "Alluvium Ltd may terminate the agreement if the Client breaches any terms or fails to make timely payments. Additionally, Alluvium Ltd reserves the right to terminate the contract if the Client does not pay their invoice before the due date stated on the invoice.",
          },
          {
            text: "8.3 Upon termination, the enrollee agrees to pay for all Services rendered up to the termination date.",
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
            numb: "10.1 ",
            boldText: "Negotiation: ",
            text: "In case of any disputes, Both parties agree to first attempt to resolve any disputes through good-faith negotiation.",
          },
          {
            numb: "10.2 ",
            boldText: "Arbitration: ",
            text: "  If negotiation fails, disputes will be resolved through binding arbitration in accordance with the rules of the Arbitration Jurisdiction as decided by both parties.(clause 9.2 will be in force in the case Arbitration fails).",
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
            text: "13.2 Enrollees will be notified of any changes, and continued use of the Services will constitute acceptance of the revised terms.",
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

const CloudMigrationTermsandCondition = () => {
  return (
    <Layout>
      <Conditions
        data={data}
        headings="Terms and Conditions for Atlassian Migration Services"
        paragraphs="Last updated on February 23, 2024"
        subhead={true}
      />
    </Layout>
  );
};

export default CloudMigrationTermsandCondition;
