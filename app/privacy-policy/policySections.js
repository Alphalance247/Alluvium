export const policySections = [
  {
    title: "Introduction",
    content: [
      {
        type: "rich",
        runs: [
          'This Privacy Notice explains how Alluvium ("Alluvium," "we," "us," "our") collects, uses, discloses, and protects personal information when you visit or interact with ',
          { link: true, text: "https://alluvium.net", href: "https://alluvium.net" },
          ' (the "Website") and related services (together, the "Services").',
          { break: true },
          "We apply a single, consistent set of privacy protections and rights to all visitors, regardless of where you are located, at or above the standard required by applicable data protection laws.",
          { break: true },
          "We may update this Notice periodically. Material changes will be notified via a prominent notice on the Website prior to taking effect, and the effective date above will be updated accordingly.",
        ],
      },
    ],
  },
  {
    title: "Who We Are - Controller Identification & DPO",
    content: [
      {
        type: "definitionRows",
        rows: [
          {
            label: "Data Controller:",
            runs: [
              "Alluvium Consulting Limited",
              { break: true },
              "Alluvium's registered offices are listed on our ",
              { link: true, text: "Contact us page", href: "/contact-us" },
              ".",
            ],
          },
          {
            label: "Data Protection Officer",
            runs: [
              "Email: ",
              {
                link: true,
                text: "contact@alluvium.net",
                href: "mailto:contact@alluvium.net",
              },
              { break: true },
              "All requests regarding this Notice, or the exercise of your rights, should be directed to the DPO using the contact details above.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Information We Collect and How We Use It",
    content: [
      {
        type: "bulletList",
        items: [
          {
            runs: [
              {
                lead: true,
                text: "Identity & contact data (name, email, phone number)",
              },
              { break: true },
              "Responding to inquiries; providing support; account administration. Necessary to provide the service you requested, or our legitimate interest in operating the Website.",
            ],
          },
          {
            runs: [
              { lead: true, text: "Your IP address, device/browser data, server logs" },
              { break: true },
              "Website security, fraud prevention, troubleshooting. Our legitimate interest in keeping the Website secure and functioning.",
            ],
          },
          {
            runs: [
              {
                lead: true,
                text: "Online behavioral data (pages visited, time on page, click patterns)",
              },
              { break: true },
              "Website analytics, service improvement, personalization. Your consent (see Section 6, Cookies).",
            ],
          },
          {
            runs: [
              {
                lead: true,
                text: "Communications content (call logs, email content, support tickets)",
              },
              { break: true },
              "Customer support, service delivery, dispute resolution. Necessary to provide the service, or our legitimate interest in resolving your query.",
            ],
          },
          {
            runs: [
              { lead: true, text: "Marketing preferences & engagement data" },
              { break: true },
              "Sending promotional communications, newsletters. Your consent.",
            ],
          },
          {
            runs: [
              {
                lead: true,
                text: "Verification / due-diligence data (business or financial identifiers)",
              },
              { break: true },
              "Verifying identity, preventing fraud, meeting compliance obligations. Necessary to comply with a legal or regulatory obligation applicable to our business.",
            ],
          },
          {
            runs: [
              { lead: true, text: "Biometric data (where collected, e.g., secure access)" },
              { break: true },
              "Identity verification for access control. Your explicit consent.",
            ],
          },
          {
            runs: [
              { lead: true, text: "Third-party or publicly sourced data" },
              { break: true },
              "Verification, due diligence, fraud prevention. Our legitimate interest in verifying the accuracy of information provided to us.",
            ],
          },
        ],
      },
      {
        type: "rich",
        runs: [
          { bold: true, text: "Further use: " },
          "We only use personal data for the purposes described above. If we intend to use it for a materially different purpose, we will notify you and, where required, seek your consent before doing so.",
        ],
      },
    ],
  },
  {
    title: "How Your Information Is Collected",
    content: [
      { type: "heading3", text: "Direct interactions" },
      {
        type: "rich",
        runs: [
          "Information you provide when signing up, communicating with us, or creating an account, including where you provide information about another individual (e.g., an employee, counterparty, or supplier). If you do so, you confirm you have informed that individual how Alluvium will use their information and, where required, obtained any necessary permission to share it with us.",
        ],
      },
      { type: "heading3", text: "Automated interactions" },
      {
        type: "rich",
        runs: [
          "Data collected as you use the Website, device data, browsing behavior, and location data, gathered via cookies and similar technologies, subject to your consent where required (Section 6).",
        ],
      },
      { type: "heading3", text: "Third parties or public sources" },
      {
        type: "rich",
        runs: [
          "Information we receive about you from financial institutions, public records, or other lawfully operating sources.",
        ],
      },
    ],
  },
  {
    title: "Children's Data",
    content: [
      {
        type: "rich",
        runs: [
          "Our Services are not directed to, and are not intended for use by, individuals under the age of ",
          { bold: true, text: "sixteen (16)" },
          ". We do not knowingly collect personal data from anyone under 16.",
        ],
      },
      { type: "heading3", text: "Safeguards in place:" },
      {
        type: "bulletList",
        items: [
          {
            runs: ["A mandatory age-affirmation step at account/registration sign-up;"],
          },
          {
            runs: [
              "Automated blocking of account creation where the declared age is under 16;",
            ],
          },
          { runs: ["Periodic review of account data for indicators of underage use."] },
        ],
      },
      {
        type: "rich",
        runs: [
          {
            bold: true,
            text: "If we discover we hold data from someone under 16 without appropriate consent, ",
          },
          "we will suspend processing, seek verifiable parental/guardian consent via a documented process (contact contact@alluvium.net), and delete the data within 30 days if such consent is not obtained.",
        ],
      },
    ],
  },
  {
    title: "Cookies & Tracking Technologies",
    content: [
      {
        type: "rich",
        runs: [
          "We use cookies and similar technologies on the Website, and we apply a ",
          { bold: true, text: "prior opt-in consent model:" },
        ],
      },
      {
        type: "bulletList",
        items: [
          {
            runs: [
              { bold: true, text: "Strictly Necessary cookies" },
              " (required for the Website to function, e.g., session management, security) load without consent, as permitted by law, and cannot be disabled.",
            ],
          },
          {
            runs: [
              { bold: true, text: "Functional, Analytics, and Marketing cookies" },
              " are ",
              { bold: true, text: "off by default" },
              " and will not be set until you give affirmative, granular, opt-in consent through our Cookie Consent Banner.",
            ],
          },
          {
            runs: [
              "You can accept, reject, or customize consent by category at any time via the ",
              { bold: true, text: '"Cookie Settings"' },
              " control in the Website footer.",
            ],
          },
          {
            runs: [
              "Consent is logged with a timestamp and can be withdrawn at any time as easily as it was given.",
            ],
          },
        ],
      },
      { type: "heading3", text: "Browser-level controls:" },
      {
        type: "bulletList",
        items: [
          { runs: ["Google Chrome: chrome://settings/cookies"] },
          { runs: ["Mozilla Firefox: about:preferences#privacy"] },
          { runs: ["Apple Safari: Preferences → Privacy"] },
          { runs: ["Microsoft Edge: edge://settings/privacy"] },
        ],
      },
      {
        type: "rich",
        runs: [
          "Full detail on each cookie category, provider, and retention period is in our ",
          { link: true, text: "Cookie Policy", href: "/cookie-policy" },
          ".",
        ],
      },
    ],
  },
  {
    title: "Who We Share Your Information With",
    content: [
      {
        type: "rich",
        runs: ["We disclose personal data only where necessary, to:"],
      },
      {
        type: "bulletList",
        items: [
          {
            runs: [
              "Vendors, agents, and service providers who assist us in delivering the Services, under written confidentiality and data protection obligations;",
            ],
          },
          { runs: ["Financial institutions, to enable payment processing;"] },
          {
            runs: [
              "Law enforcement, regulators, or courts, where legally required or necessary to establish, exercise, or defend a legal claim;",
            ],
          },
          { runs: ["Our external legal counsel, where necessary."] },
        ],
      },
      {
        type: "rich",
        runs: [
          {
            bold: true,
            text: "We do not sell or share your personal data for cross-context advertising purposes.",
          },
          " Should this change in the future, we will update this Notice and provide a clear mechanism to opt out before any such activity takes effect.",
        ],
      },
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      {
        type: "rich",
        runs: [
          "Because Alluvium operates across multiple locations, personal data may be transferred to, stored, and processed in a country other than the one in which you are located.",
          { break: true },
          "Where this occurs, we rely on recognised safeguards designed to ensure your data receives a consistent level of protection wherever it is processed. These may include standard contractual clauses, intra-group data transfer agreements, or other legally recognised transfer mechanisms. Where required, we conduct a transfer impact assessment before a transfer takes place. You may request a copy of the applicable safeguards from our DPO.",
        ],
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        type: "rich",
        runs: ["We take the security of your personal data seriously. Our security program includes:"],
      },
      {
        type: "bulletList",
        items: [
          {
            runs: [
              "Operating on infrastructure and platforms that are independently certified to recognised information security standards, including ISO/IEC 27001;",
            ],
          },
          {
            runs: [
              "An internal Information Security Management System maintained in alignment with ISO/IEC 27001:2022 practices;",
            ],
          },
          { runs: ["Encryption of personal data in transit and at rest;"] },
          { runs: ["Firewalls and network segmentation;"] },
          {
            runs: ["Multi-factor authentication for access to systems processing personal data;"],
          },
          {
            runs: [
              "Role-based access controls limiting access to personnel and processors who need it;",
            ],
          },
          {
            runs: [
              "Confidentiality and data protection obligations imposed on all processors and sub-processors;",
            ],
          },
          {
            runs: [
              "Regular security testing, vulnerability management, and incident response procedures.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Data Retention",
    content: [
      {
        type: "rich",
        runs: [
          "We retain personal data only for as long as necessary to fulfil the purpose for which it was collected. Indicative retention periods are set out below; actual periods may vary based on the nature of our relationship with you and applicable legal requirements.",
        ],
      },
      {
        type: "definitionRows",
        rows: [
          {
            label: "Account and identity data",
            value:
              "Duration of the relationship, plus 6 to 7 years thereafter for legal and contractual compliance",
          },
          {
            label: "Marketing preference data",
            value: "Until consent is withdrawn or you opt out",
          },
          {
            label: "Communications / support records",
            value: "Duration of the relationship, plus up to 2 years",
          },
          {
            label: "Verification / compliance records",
            value:
              "3 to 6 years, as required by applicable tax, legal, or regulatory obligations",
          },
          {
            label: "Website analytics data (where consented)",
            value: "Up to 12 months, then aggregated or deleted",
          },
        ],
      },
      {
        type: "rich",
        runs: [
          "We may retain and process data beyond these periods for archiving, research, or statistical purposes in the public interest, subject to appropriate safeguards. Where data is anonymized such that it can no longer be linked to you, we may retain it indefinitely for research purposes. Data no longer required is securely deleted or destroyed in line with our internal Data Retention Policy.",
        ],
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        type: "rich",
        runs: ["We apply the same set of rights to every visitor, wherever you are located:"],
      },
      {
        type: "definitionRows",
        rows: [
          {
            label: "Access",
            value: "Request confirmation of, and a copy of, the personal data we hold about you.",
          },
          {
            label: "Correction",
            value: "Request correction of inaccurate or incomplete data.",
          },
          {
            label: "Erasure",
            value:
              "Request deletion of your data where there is no continuing basis for retaining it.",
          },
          {
            label: "Restriction",
            value:
              "Request that we suspend processing of your data in specified circumstances.",
          },
          {
            label: "Objection",
            value:
              "Object to processing based on our legitimate interests, or to direct marketing at any time.",
          },
          {
            label: "Data Portability",
            value:
              "Request your data in a structured, commonly used, machine-readable format, and its transfer to another provider where technically feasible.",
          },
          {
            label: "Automated Decision-Making & Profiling",
            value:
              "Request not to be subject to a decision based solely on automated processing that produces a legal or similarly significant effect on you, obtain human review, and contest the decision.",
          },
          {
            label: "Withdraw Consent",
            value: "Withdraw consent at any time where processing is based on consent.",
          },
          {
            label: "Complain",
            value:
              "Lodge a complaint with the data protection authority or regulator responsible for your country or state of residence, or seek redress through a competent court.",
          },
        ],
      },
      { type: "heading3", text: "How to Exercise Your Rights" },
      {
        type: "rich",
        runs: [
          "Submit requests to the DPO at contact@alluvium.net. We may request additional information to verify your identity before processing your request; this is a security measure and does not extend the response deadline beyond what is needed to complete verification.",
        ],
      },
      { type: "heading3", text: "Response SLA" },
      {
        type: "definitionRows",
        rows: [
          {
            label: "Acknowledgment of request",
            value: "Within 5 business days of receipt",
          },
          {
            label: "Identity verification (if required)",
            value: "Within 5 business days of acknowledgment",
          },
          {
            label: "Substantive response / fulfilment",
            value: "Within 30 calendar days of receipt of a verified request",
          },
          {
            label: "Extension for complex/numerous requests",
            value:
              "One further extension of up to 60 additional days, with written notice explaining the reason, provided within the initial 30-day period",
          },
        ],
      },
    ],
  },
  {
    title: "Right to Complain",
    content: [
      {
        type: "rich",
        runs: [
          "We encourage you to contact our DPO first so we can try to resolve your concern directly. You also have the right, at any time, to lodge a complaint with the data protection authority or regulator responsible for your country or state of residence, or to seek redress through a competent court.",
        ],
      },
    ],
  },
  {
    title: "Links to Other Websites",
    content: [
      {
        type: "rich",
        runs: [
          "Our Website may contain links to third-party websites. Alluvium is not responsible for the privacy practices or content of those websites. This Notice does not extend to any site you access through a link on our Website. We encourage you to review the privacy notice of every website you visit.",
        ],
      },
    ],
  },
  {
    title: "Changes to This Notice",
    content: [
      {
        type: "rich",
        runs: [
          "We may update this Notice periodically to reflect changes in our processing activities, legal requirements, or Services. Material changes will be communicated via a notice on the Website prior to taking effect, and the effective date at the top of this Notice will be updated accordingly.",
        ],
      },
    ],
  },
  {
    title: "Contact Details",
    content: [
      {
        type: "rich",
        runs: [
          "For questions, comments, or requests regarding this Notice, or to exercise your rights, contact our Data Protection Officer:",
          { break: true },
          "Email: ",
          {
            link: true,
            text: "contact@alluvium.net",
            href: "mailto:contact@alluvium.net",
          },
        ],
      },
    ],
  },
];
