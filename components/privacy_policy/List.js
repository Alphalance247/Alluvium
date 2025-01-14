import { FaCheckCircle } from "react-icons/fa";
import styles from "../../styles/AlluviumRedesign2025/policy and cookies/policy.module.scss";
import Link from "next/link";

const List = ({ color, content }) => {
  const policyContent = [
    {
      head: "1. INTRODUCTION",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We understand how important your personal information is to you,
              and are committed to protecting your personal data. This Notice
              covers the personal information Alluvium ("us", "we", "our")
              collects, uses and protects the data you provide to us when you
              visit and use`,
          isLinkAvailable: true,
          linkText: " https://alluvium.net/ ",
          url: " https://alluvium.net ",
          textCont: ` ("website", "service"). We reserve the right to change this policy at any given time, of which you
                       will be promptly updated. If you want to make sure that you are up to date with the latest changes,
                        we advise you to frequently visit this page.`,
        },

        {
          type: "paragraphandLink",
          text: `We urge you to read the whole Notice to understand how we process your personal information.`,
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "2. DATA PROTECTION OFFICER (DPO)",
      paragraph: [
        {
          type: "paragraphandLink",
          text: " Alluvium has in compliance with the GDPR appointed a Data Protection Officer to guide and manage our processing activities. If you have any question and issue regarding this Notice, kindly contact our DPO @",
          isLinkAvailable: true,
          linkText: " contact@alluvium.net ",
          url: " mailto:contact@alluvium.net",
        },
      ],
    },
    {
      head: "3. INFORMATION WE COLLECT ABOUT YOU",
      paragraph: [
        {
          type: "paragraphandLink",
          text: " In connection with the services we offer you, we will collect, use and store the following categories of personal information about you:",
        },

        {
          type: "list",
          isBold: false,
          list: "Our IP address",
        },
        {
          type: "list",
          isBold: false,
          list: "Data profile regarding your online behavior on our website.",
        },
        {
          type: "list",
          isBold: true,
          boldText: "Communication: ",
          list: " We may use this data to provide information about our services or new product to you. We also use this information to communicate with you in order to provide inquiry and support. The information includes phone number, call log, email address and email content..",
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: true,
          boldText: "Technical data: ",
          list: " When you visit our website our servers may automatically log the standard data provided by your web browser. It may include your device’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, the location and other details about your visit.",
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: true,
          boldText: "Other Data -",
          list: "we may collect data from you to be processed in relation to administrative or judicial proceedings and other information such as interests and preferences",
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: true,
          boldText: "Information About other people",
          list: "If you provide information to us about any person other than yourself, your employees, counterparties, your advisers or your suppliers, you must ensure that they understand how their information will be used, and that they have given their consent for you to disclose it to us and for you to allow us, and our outsourced service providers to use it.",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "4. CHILDREN’S DATA",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We do not aim any of our products or services directly at children or persons under the age of
eighteen (16) years and we have put appropriate measures in place to block a person below the
age of 16years from registering into our platforms. In the event that need arises for us to process
personal information of a person below 16years we will obtain a verified consent of the parent
or guardian. (state the measures for getting parental consent)`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "5. COOKIES",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `Once you agree to allow our website to use cookies, you also agree to use the data it collects
regarding your online behavior (analyze web traffic, web pages you spend the most time on,
and websites you visit).`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `The data we collect by using cookies is used to customize our website to your needs. After we
use the data for statistical analysis, the data is completely removed from our systems. Please
note that cookies don't allow us to gain control of your computer in any way. They are strictly
used to monitor which pages you find useful and which you do not so that we can provide a
better experience for you. If you want to disable cookies, you can do it by accessing the settings
of your internet browser.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `For more information, kindly check our cookie policy @ `,
          isLinkAvailable: true,
          linkText: "Cookie Policy ",
          url: "https://alluvium.net/cookie-policy",
          textCont:
            " (Provide links for cookie settings for major internet browsers).",
        },
      ],
    },

    {
      head: "6. HOW IS YOUR PERSONAL INFORMATION COLLECTED?",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We use different methods to collect personal information about your and they include:`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          boldText: "Direct interactions. ",
          isBold: true,
          list: `These are information to provide to us when you sign up for
our services or products, communicate with us or create account with us.`,
        },

        {
          type: "list",
          boldText: "Automated technological interactions. ",
          isBold: true,
          list: `We collect these personal information as you interact with our website or application. These include personal data about your equipment, browsing actions and patterns, location data. We collect this personal data by using cookies, server logs and other similar technologies.`,
        },

        {
          type: "list",
          boldText: "Third parties or publicly available sources. ",
          isBold: true,
          list: `We may receive personal
information about you from various third parties and public sources available to us
such as your financial institution, open government sources, agencies amongst
others.`,
        },
      ],
    },

    {
      head: "7. HOW WE USE YOUR PERSONAL DATA",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We process your personal data for the following reasons:`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: false,
          list: `To better understand your needs.`,
        },

        {
          type: "list",
          isBold: false,
          list: `To improve our services and products.`,
        },

        {
          type: "list",
          isBold: false,
          list: `To send you promotional emails containing the information we think you will find interesting.`,
        },

        {
          type: "list",
          isBold: false,
          list: `To contact you to fill out surveys and participate in other types of market research.`,
        },

        {
          type: "list",
          isBold: false,
          list: `To customize our website according to your online behavior and personal preferences.`,
        },
        {
          type: "list",
          isBold: false,
          list: `To comply with our obligation under the law.`,
        },
        {
          type: "list",
          isBold: false,
          list: `To resolve dispute resolution that may arise in the course of providing services or products to you.`,
        },
        {
          type: "list",
          isBold: false,
          list: `To carry out know your customer (KYC) due diligence.`,
        },
        {
          type: "list",
          isBold: false,
          list: `To ensure fraud prevention and investigation.`,
        },

        {
          type: "list",
          isBold: false,
          list: `To respond to your inquiries and correspondence.`,
        },
        {
          type: "list",
          isBold: false,
          list: `To establish, defend, investigate and exercise our legal right.`,
        },
        {
          type: "list",
          isBold: false,
          list: `For our own legitimate business interests.`,
        },

        {
          type: "list",
          isBold: false,
          list: `We process your personal information in order to enhance security, monitor and
verify identity or service access, combat other malware or security risks, and to
comply with applicable security laws and regulations in our jurisdiction.`,
        },

        {
          type: "list",
          isBold: true,
          boldText: "Further Purpose",
          list: `We will only process your personal information for the particular purposes for which we
collect it. We will notify you and rely on an appropriate lawful basis if we intend to use it for
another purpose and such further purpose is not compatible with the original purpose.`,
        },
      ],
    },

    {
      head: "8. LEGAL BASES FOR PROCESSING YOUR PERSONAL DATA",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "We may process your personal data on one or more lawful grounds depending on the specific purpose for which we are using your personal data. Kindly contact us if you need further details or clarity about the specific legal ground, we are relying on to process your personal information where more than one ground has been stated. We will rely on any of the legal bases listed below depending on the processing activities:",
        },

        {
          type: "list",
          isBold: false,
          list: "We will ask you for your consent in certain processing activities, especially where it involves collection of biometric information. Where we obtain your consent, kindly note that you can withdraw the consent at any time, and we will comply by not further processing your personal data.",
        },

        {
          type: "list",
          isBold: false,
          list: "We may process your personal data in order to fulfill the contract you have entered with us or we have entered with your company or take pre-contractual steps at your instruction.",
        },

        {
          type: "list",
          isBold: false,
          list: "We may rely on our legitimate interest to process your personal data to tailor our services to suit your needs.",
        },
        {
          type: "list",
          isBold: false,
          list: "We may process your personal data where law mandates us to do so.",
        },
      ],
    },
    {
      head: "9. WHO DO WE SHARE YOUR PERSONAL DATA WITH?",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "We disclose your personal data to the following third parties:",
        },

        {
          type: "list",
          isBold: false,
          list: "To enforcement agencies among others.",
        },

        {
          type: "list",
          isBold: false,
          list: "To our vendors, agents, and service providers that assist us with certain services.",
        },

        {
          type: "list",
          isBold: false,
          list: "To financial institutions to enable payment processing.",
        },
        {
          type: "list",
          isBold: false,
          list: "To judicial authorities where necessary to litigate, establish and defend legal rights.",
        },
        {
          type: "list",
          isBold: false,
          list: "To our legal counsel where the need arises.",
        },
      ],
    },
    {
      head: "10. Links to Other Websites",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `Our website contains links that lead to other websites. If you click on these links, Alluvium is not
held responsible for your data and privacy protection. Visiting those websites is not governed by
this privacy policy agreement. Make sure to read the privacy policy documentation of the website
you go to from our website.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "11. International Data Transfers",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `Alluvium complies with GDPR requirements for international data transfers, including the use
of standard contractual clauses or other approved mechanisms.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "12. DATA SECURITY",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We have put appropriate security measures in the latest technologies and software such as
encryption, firewall, fingerprint identification and two factor authentication to prevent your
personal information from being accidentally lost, used or accessed in an unauthorized way,
altered or disclosed. Also, we limit access to your personal information to those agents,
contractors and other third parties who need it to assist in providing services to products to
you. They will only process your personal information on our instructions and they are subject
to a duty of confidentiality.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "13. DATA RETENTION",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `All personal information shall be retained, stored and destroyed by the Company in line with
legislative and regulatory guidelines. For all Personal Data and records obtained, used and
stored within the Company, We shall perform periodical reviews of the data retained to confirm
the accuracy, purpose, validity and requirement to retain.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `To the extent permitted by applicable laws and without prejudice to the Company’s retention
policy, the length of storage of Personal Data shall, amongst other things, be determined by: `,
          isLinkAvailable: false,
        },

        {
          type: "list",
          list: `the contract terms agreed between the Company and the Data Subject or as long as it is needed
for the purpose for which it was obtained; or `,
          isBold: false,
        },

        {
          type: "list",
          list: `Whether the transaction or relationship has statutory implication or a required retention period;
or`,
          isBold: false,
        },
        {
          type: "list",
          list: `Whether there is an express request for deletion of Personal Data by the Data Subject, provided
that such request will only be treated where the Data Subject is not under any investigation which
may require the Company to retain such Personal Data or there is no subsisting contractual
arrangement with the Data Subject that would require the processing of the Personal Data; or`,
          isBold: false,
        },

        {
          type: "list",
          list: `whether the Company has another lawful basis for retaining that information beyond the period
for which it is necessary to serve the original purpose.`,
          isBold: false,
        },

        {
          type: "paragraphWithBoldText",
          subhead: `Notwithstanding the foregoing and pursuant to the  `,
          subheadBold:
            "Nigeria Data Protection Act AND The Data Protection Act 2018 Of The United Kingdom, ",
          subheadCont:
            " the Company shall be entitled to retain and process Personal Data for archiving, scientific research, historical research or statistical purposes for public interest.",
        },

        {
          type: "paragraphandLink",
          text: `The Company would forthwith delete Personal Data in its possession where such Personal Data is
no longer required by the Company or in line with the Company’s retention policy, provided no
law or regulation being in force requires the Company to retain such Personal Data.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `In some circumstances we will anonymise your personal data so that it can no longer be
associated with you for research or statistical purposes, in which case we may use this
information indefinitely without further notice to you. We will securely destroy your personal
information once we fulfill the purpose for which it was collected.`,
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "14. YOUR LEGAL RIGHTS",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `You have certain rights under the law which we respect and adhere to and which can be exercised
by you at any time. However, note that these rights are not absolute and may only apply in certain
circumstances. Your rights are as itemized:`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          list: `Request access to your personal information (commonly known as a "data subject access
request"). This enables you to receive a copy of the personal information we hold about you and
to check that we are lawfully processing it. `,
          isBold: false,
        },

        {
          type: "list",
          list: `Request correction of the personal information that we hold about you. This enables you to have
any incomplete or inaccurate information we hold about you corrected.`,
          isBold: false,
        },
        {
          type: "list",
          list: `Request erasure of your personal information. This enables you to ask us to delete or remove
personal information where there is no good reason for us continuing to process it. You also have
the right to ask us to delete or remove your personal information where you have exercised your
right to object to processing.`,
          isBold: false,
        },

        {
          type: "list",
          list: `Object to processing of your personal information where we are relying on a legitimate interest
(or those of a third party) and there is something about your particular situation which makes you
want to object to processing on this ground. You also have the right to object where we are
processing your personal information for direct marketing purposes.`,
          isBold: false,
        },
        {
          type: "list",
          list: `Request the restriction of processing of your personal information. This enables you to ask us
to suspend the processing of personal information about you, for example if you want us to
establish its accuracy or the reason for processing it.`,
          isBold: false,
        },
        {
          type: "paragraphWithBoldText",
          subheadBold: "What we may need from you",
        },

        {
          type: "paragraphandLink",
          text: `We may need to request specific information from you to help us confirm your identity and
ensure your right to access your personal information or to exercise any of your other rights.
This is a security measure to ensure that personal data is not disclosed to any person who has
no right to receive it. We may also contact you to ask you for further information in relation to
your request to speed up our response.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "15. RIGHT TO COMPLAINT",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "We would appreciate the chance to deal with your concerns,so please contact us in the first instance.",
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: "Kindly note however, that you have the right to make a complaint at any time to the Data Protection Authority or approach a competent court of law to enforce your data protection rights.",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "16. CHANGES TO OUR PRIVACY NOTICE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "This Notice will be updated from time to time to reflect our processing activities and we will aim to notify you when this happens.",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "17. Related Policies and Procedures",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "This Notice will be updated from time to time to reflect our processing activities and we will aim to notify you when this happens.",
          isLinkAvailable: false,
        },

        {
          type: "linkWithList",
          linkListText: "IT & CyberSecurity Policy",
          isLinkAvailable: false,
          linkUrl: "",
          linkText: "",
        },

        {
          type: "linkWithList",
          linkListText: "Cookies Policy ",
          isLinkAvailable: false,
          linkUrl: "",
          linkText: "",
        },

        {
          type: "linkWithList",
          linkListText: "Internal Privacy Policy ",
          isLinkAvailable: false,
          linkUrl: "",
          linkText: "",
        },
      ],
    },

    {
      head: "18. CONTACT DETAILS",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "Please address questions, comments and requests regarding this Notice to our DPO @",
          isLinkAvailable: true,
          linkText: " contact@alluvium.net",
          url: "mailto:contact@alluvium.net",
        },
      ],
    },
  ];

  return (
    <section className={styles.privacy__policy}>
      <div className={styles.privacy__policy__container}>
        <h1 className={styles.privacy__policy__heading}>PRIVACY NOTICE</h1>

        <div className={styles.privacy__policy__content}>
          {policyContent.map((item, i) => {
            return (
              <div key={i} className={styles.privacy__policy__content__text}>
                <div>
                  <h3>{item.head}</h3>

                  {item?.paragraph?.map((para, i) => {
                    if (para.type === "paragraphandLink") {
                      return (
                        <p>
                          {para.text}
                          {para?.isLinkAvailable && (
                            <span key={i}>
                              <Link href={para.url}>
                                <a>{para.linkText}</a>
                              </Link>
                              {para.textCont}
                            </span>
                          )}
                        </p>
                      );
                    }

                    if (para.type === "paragraphWithBoldText") {
                      return (
                        <p>
                          {para?.subhead}
                          <span>{para?.subheadBold}</span>
                          {para?.subheadCont}
                        </p>
                      );
                    }

                    if (para?.type === "list") {
                      return (
                        <div className={styles.privacy__list}>
                          <ul>
                            <li>
                              {para?.isBold && (
                                <span className={styles.boldSpan}>
                                  {para?.boldText}
                                </span>
                              )}{" "}
                              {para?.list}
                            </li>
                          </ul>
                        </div>
                      );
                    }

                    if (para?.type === "linkWithList") {
                      return (
                        <div className={styles.privacy__list}>
                          <ul>
                            <li>
                              {para?.linkListText}
                              <span key={i}>
                                <Link href={para?.linkUrl}>
                                  {para?.linkText}
                                </Link>
                              </span>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default List;
