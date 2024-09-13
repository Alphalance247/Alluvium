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
            text: "1.2 By enrolling in or using our Services, you agree to be bound by these Terms.",
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
            text: "2.1 Agreement: The formal contract between Alluvium Ltd. and the enrollee or client, outlining the terms and conditions under which the Atlassian training services are provided.",
          },
          {
            text: "2.2 Atlassian: The company that develops software products such as Jira, Confluence, Bitbucket, etc., which are the focus of the training services provided by Alluvium Ltd.",
          },
          {
            text: "2.3 Third Party: Any individual or entity other than Alluvium Ltd. and the client that may be involved or referenced in the training services, possibly including partners, affiliates, or other service providers.",
          },
          {
            text: "2.4 Training: The educational services provided by Alluvium Ltd. to the enrollee, designed to teach users how to effectively use Atlassian products.",
          },
          {
            text: "2.5  Marketplace Vendors: Companies or individuals who sell add-ons or applications for Atlassian  products  through  the Atlassian  Marketplace,  which  may  be  referenced  or included in the training services.",
          },
          {
            text: "2.6 Client: The individual or organization that has entered into an agreement with Alluvium Ltd to receive Atlassian training.",
          },
          {
            text: "2.7  Enrollee: The individual who has been registered or signed up to participate in the Atlassian training provided by Alluvium Ltd.",
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
            text: "Alluvium Ltd. offers training services for various Atlassian products. The specific scope of the training, including duration, content, and format, will be outlined in the service agreement or course description provided to you.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    heading: "Enrolment and Payment",
    paragraph: [
      {
        highlight: [
          {
            text: "4.1 Enrolment: To enroll in our training services, you must complete the registration process and provide accurate and complete information.",
          },
          {
            text: "4.2 Payment: All fees for the Services must be paid in full before the commencement of the training unless otherwise agreed. Accepted payment methods include credit card, bank transfer, or any other method specified by the Company.",
          },
        ],
      },
    ],
  },

  {
    id: "5",
    heading: " Cancellations and Rescheduling",
    paragraph: [
      {
        highlight: [
          {
            text: "5.1 Cancellations by Participant: If you need to cancel your enrollment, you must provide notice to the Company via email or the other communication means being utilized between you and the Company at least 7 days before the training start date to receive a refund. Cancellations made less than 7 days before the start date may not be eligible for a refund.",
          },
          {
            text: "5.2 Cancellations by Company: The Company reserves the right to cancel or reschedule training sessions due to unforeseen circumstances. In such cases, you will be offered a full refund or the option to attend a rescheduled session.",
          },
          {
            text: "5.3 Rescheduling: Requests to reschedule must be made to the Company via email or the other communication means being utilized between you and the Company at least 7 days before the training start date. Rescheduling requests made less than 7 days before the start date may incur additional fees.",
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
            text: "8.1 Termination by Enrollee: The  enrollee  may  terminate  the  agreement  at  any  time  by providing written notice. The enrollee will be responsible for payment for services rendered up to the date of termination.",
          },
          {
            text: "8.2 Termination by Alluvium Ltd: Alluvium Ltd may terminate the agreement if the enrollee breaches any terms or fails to make timely payments. Additionally, Alluvium Ltd reserves the right to terminate the contract if the enrollee does not pay their invoice before the due date stated on the invoice.",
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
            text: "12.2 All training materials, including but not limited to presentations, documents, and software, provided during the training are the intellectual property of Alluvium Ltd. You are granted a limited, non-transferable license to use these materials for your personal or internal business use only. You may not reproduce, distribute, or create derivative works from these materials without the Company’s express written consent.",
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

const TrainingTermsandCondition = () => {
  return (
    <Layout>
      <Conditions
        data={data}
        headings="Terms and Conditions for Atlassian Training"
        paragraphs="Last updated on February 23, 2024"
        subhead={true}
      />
    </Layout>
  );
};

export default TrainingTermsandCondition;
