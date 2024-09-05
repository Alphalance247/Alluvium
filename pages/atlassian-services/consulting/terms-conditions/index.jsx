import Layout from "components/layout";
import styles from "../../../../styles/atlassian-services-style/TermsAndCondtions.module.scss";
import Conditions from "components/atlassian-service-reuse/termsCondition";

const data = [
  {
    id: "1",
    heading: "Introduction",
    paragraph: [
      {
        highlight: [
          {
            text: '1.1 These terms and conditions govern the provision of Atlassian consultancy services (“Services”) by Geniesys-Alluvium Ltd ("Consultant”, “Company," "we," "us," or "our") to the client ("Client," "you," or "your").',
          },
          {
            text: "Jointly referred to as “both parties”",
          },
          {
            text: "1.2 By engaging the Consultant for Services, the Client agrees to be bound by these terms and conditions.",
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
            text: "2.1 Agreement: This refers to the formal contract between Alluvium Ltd and the client regarding the provision of Atlassian consultancy services.",
          },
          {
            text: "2.2 Atlassian: This refers to Atlassian Corporation Plc, the company that develops and sells software products like Jira, Confluence, Bitbucket, and other tools for software development and collaboration.",
          },
          {
            text: "2.3 Third Party: This refers to any individual or organization that is not a party to the agreement. Third parties can include external vendors, subcontractors, or other entities that might be involved in providing certain aspects of the consultancy services but are not directly contracted by Alluvium Ltd.",
          },
          {
            text: "2.4 Consultant: This  refers  to  the  individuals  or team  members  employed  or contracted  by Alluvium  Ltd  to  provide  the  Atlassian  consultancy  services  to  the  client.  Consultants  are responsible for delivering the specified services and ensuring they meet the client's requirements",
          },
          {
            text: "2.5 Client: This refers to the individual or organization that has entered into the agreement with Alluvium Ltd to receive Atlassian consultancy services. The client is the recipient of the services and  is  responsible  for  providing  necessary  information  and  cooperation  to  facilitate  the consultancy",
          },
          {
            text: "2.6 Service: This refers to the specific tasks, activities, and deliverables that Alluvium Ltd agrees to provide to the client as part of the Atlassian consultancy. Services can include assessments, implementations, customizations, training, and support related to Atlassian products.",
          },
          {
            text: "2.7  Marketplace Vendors: This refers to third-party developers or companies that create and offer add-ons, plugins, or extensions for Atlassian products through the Atlassian Marketplace. These vendors are responsible for their own products, and their terms and conditions may apply in addition to those of Alluvium Ltd and Atlassian.",
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
            text: "3.1 The Consultant agrees to provide the Client with professional consultancy services related to Atlassian products as specified in the project proposal or statement of work.",
          },
          {
            text: "3.2 The Consultant will use reasonable skill and care in providing the Services.",
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
            text: "4.1 The Client shall provide the Consultant with access to all necessary information, systems, and personnel to enable the Consultant to perform the Services.",
          },
          {
            text: "4.2 The Client shall ensure that its employees and agents cooperate with the Consultant and shall comply with all reasonable instructions provided by the Consultant.",
          },
          {
            text: "4.3 The Client shall provide the Consultant with timely feedback.",
          },
          {
            text: "4.4 The Client shall ensure that all data is always backed up.",
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
            text: "6.4 The obligation of confidentiality shall survive termination or completion of this Agreement.",
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
            subtext1: "contact@alluvium.net ",
            boldText2: "Phone Number: ",
            subtext2: "+442035762028 ",
            url2: "mailto:contact@alluvium.net ",
            url3: "tel:+442035762028",
            text: "Alluvium Ltd [Company Address: Kemp House 160, City Road London, EC1V 2NX, UK.] Email: ",
          },
        ],
      },
    ],
  },
];

const TermsandCondition = () => {
  return (
    <Layout>
      <Conditions
        data={data}
        headings="Terms and Conditions for Atlassian Consultancy Service"
        paragraphs="Last updated on February 23, 2024"
      />
    </Layout>
  );
};

export default TermsandCondition;
