import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import Layout from "components/layout";
import List from "components/privacy_policy/List";

const CookiePolicy = () => {
  const policyContent = [
    {
      paragraph: [
        {
          type: "paragraphandLink",
          text: `This Cookie Policy explains how we use cookies and similar technologies on our website(s) and
related services (collectively referred to as the "Services"). By accessing or using our Services,
you consent to the use of cookies as described in this policy.`,
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "1. What are Cookies?",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.",
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "2. How We Use Cookies",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "We use cookies for a variety of reasons especially for the general administration of our website. These cookies will usually be deleted when you log out; however, in some cases they may remain afterwards to remember your site preferences when logged out.",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "3. Types of Cookies We Use:",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We use the following types of cookies for various purposes:`,
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Essential Cookies: ",
          list: `These cookies are necessary for the operation of our website and
services. They enable you to navigate our website and use its features.`,
        },
        {
          type: "list",
          isBold: false,
          isBold: true,
          boldText: "Functional Cookies: ",
          list: `Functional Cookies: These cookies allow us to remember choices you make and provide
enhanced, more personalized features.`,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Analytical Cookies: ",
          list: ` These cookies help us understand how visitors interact with our
website by collecting and reporting information anonymously. We use this information to
improve our website and services.`,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Marketing Cookies: ",
          list: `Marketing Cookies: These cookies are used to track visitors across websites. The
intention is to display ads that are relevant and engaging for the individual user.`,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Personalization: ",
          list: ` These cookies and scripts allow us to remember choices you make (such
as your user name and language) and provide enhanced, more personal features for you.`,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Login related cookies: ",
          list: ` We use cookies when you are logged in so that we can remember
that you are logged in. This prevents you from having to log in every single time you visit
a new page. These cookies are typically removed or cleared when you log out to ensure
that you can only access restricted features and areas when logged in.`,
        },
        {
          type: "list",
          isBold: true,
          boldText: "Email newsletters related cookies: ",
          list: ` This site offers newsletter or email subscription
services and cookies may be used to remember if you are already registered and whether
to show certain notifications which might only be valid to subscribed/unsubscribed users.`,
        },
      ],
    },

    {
      head: "4. Consent and Control:",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `By using our website, you consent to the use of cookies in accordance with this Cookie Policy.
You can manage your cookie preferences by adjusting your browser settings. Please note that
disabling certain cookies may affect the functionality of our website.Unfortunately in most cases
there are no industry standard options for disabling cookies without completely disabling the
functionality and features they add to this site. It is recommended that you leave on all cookies if
you are not sure whether you need them or not in case they are used to provide a service that you
use.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "5. Data Protection and Privacy:",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We are committed to protecting your privacy and personal information. Any data collected
through cookies will be used in accordance with our Privacy Policy. For more information on
how we handle your data, please refer to our Privacy Policy  `,
          linkText: "https://alluvium.net/privacy-policy",
          url: "/privacy-policy",
          isLinkAvailable: true,
        },
      ],
    },

    {
      head: "6. Updates to this Cookie Policy:",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `We update this Cookie Policy from time to time to reflect changes in our practices or for other
operational, legal, or regulatory reasons. Any changes will be posted on this page with an
updated effective date.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "7. Cookies We May Use:",
    },
  ];
  return (
    <Layout>
      <List content={policyContent} heading={"ALLUVIUM’S COOKIE POLICY"} />
    </Layout>
  );
};

export default CookiePolicy;
