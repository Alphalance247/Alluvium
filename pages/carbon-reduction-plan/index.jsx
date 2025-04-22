import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import List from "../../components/privacy_policy/List";
import Layout from "components/layout";

const CarbonReductionPlan = () => {
  const policyContent = [
    {
      paragraph: [
        {
          type: "paragraphWithBoldText",
          subhead: "At ",
          subheadBold: `Alluvium Ltd., `,
          subheadBold2: ` Carbon Reduction Plan`,
          subheadCont: `we recognize the urgent need for businesses to take responsibility for their environmental impact. As an  Atlassian Partner, we are committed to driving digital transformation while minimizing our carbon footprint. As part of our sustainability commitment, we have developed a `,
          subheadCont2:
            " to reduce emissions across all our branches in the UK, US, Nigeria, and Kenya, while ensuring compliance with international and local regulations. ",
        },

        {
          head2: "Our Sustainability Vision ",
          type: "heading/subhead",
          text: "Our goal is to achieve net-zero carbon emissions in alignment with global and national environmental standards. We are dedicated to reducing our carbon footprint while maintaining the highest levels of service to our clients.",
        },
        {
          head2: "Key Areas of Focus ",
          type: "heading/subhead",
          text: "Since we operate remotely, our primary focus is on reducing digital energy consumption, optimizing remote work efficiency, and promoting sustainable business practices. Our approach includes: ",
        },
        {
          head2: "1. Energy Efficiency in Remote Work ",
          type: "heading/subhead",
        },
        {
          type: "list",
          isBold: true,
          list: "Encouraging our employees to use energy-efficient home office setups. ",
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: true,
          list: "Partnering with cloud service providers that prioritize renewable energy. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: "Reducing the carbon footprint of our data storage by optimizing file management and minimizing redundant data. ",
          isLinkAvailable: false,
        },
        {
          head2: "2. Sustainable Digital Practices ",
          type: "heading/subhead",
        },
        {
          type: "list",
          isBold: true,
          list: "Implementing a paperless strategy, relying on Atlassian’s cloud-based collaboration tools. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Reducing digital waste by archiving and deleting unnecessary data. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Encouraging video conferencing best practices, such as reducing resolution when possible to lower energy use. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Encouraging video conferencing best practices, such as reducing resolution when possible to lower energy use. ",
          isLinkAvailable: false,
        },
        {
          head2: "3. Eco-Friendly Transportation & Business Travel ",
          type: "heading/subhead",
        },
        {
          type: "list",
          isBold: true,
          list: "Reducing travel emissions by relying on virtual meetings instead of flights. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Encouraging low-carbon commuting options where necessary, such as cycling incentives and public transport. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Partnering with carbon offset programs for unavoidable travel emissions.",
          isLinkAvailable: false,
        },
        {
          head2: "4. Sustainable Procurement & Supply Chain ",
          type: "heading/subhead",
        },
        {
          type: "list",
          isBold: true,
          list: "Partnering with eco-conscious vendors who prioritize low-carbon operations.",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Ensuring that our procurement process aligns with sustainable sourcing principles.",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Encouraging our partners and suppliers to adopt green business practices. ",
          isLinkAvailable: false,
        },
        {
          head2: "5. Carbon Offsetting Initiatives ",
          type: "heading/subhead",
        },
        {
          type: "list",
          isBold: true,
          list: "Investing in carbon offset programs, such as reforestation projects and renewable energy developments. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Supporting community-led environmental initiatives in the regions where we operate. ",
          isLinkAvailable: false,
        },
        {
          type: "list",
          isBold: true,
          list: "Tracking and reporting our carbon footprint annually to monitor progress and identify areas for improvement. ",
          isLinkAvailable: false,
        },

        {
          head2: "Compliance & Regulatory Adherence ",
          type: "heading/subhead",
          text: "To ensure that our Carbon Reduction Plan aligns with international and national regulations, we adhere to: ",
        },
        {
          type: "list",
          isBold: true,
          list: "A global framework for reducing carbon emissions, adopted by the UK, US, Nigeria, and Kenya.",
          isLinkAvailable: false,
          boldText: "Paris Agreement –",
        },
        {
          type: "list",
          isBold: true,
          list: "Legally binding targets for reducing emissions and achieving net zero by 2050. ",
          isLinkAvailable: false,
          boldText: "UK Climate Change Act 2008 – ",
        },
        {
          type: "list",
          isBold: true,
          list: "Standards affecting international trade and carbon accountability. ",
          isLinkAvailable: false,
          boldText:
            "EU Green Deal & Carbon Border Adjustment Mechanism (CBAM) – ",
        },
        {
          type: "list",
          isBold: true,
          list: " Incentives for corporate sustainability and emissions reduction.",
          isLinkAvailable: false,
          boldText: "US Inflation Reduction Act (IRA) 2022 –",
        },
        {
          type: "list",
          isBold: true,
          list: " Federal guidelines on corporate carbon emissions and environmental impact.",
          isLinkAvailable: false,
          boldText: "US Environmental Protection Agency (EPA) Regulations – ",
        },
        {
          type: "list",
          isBold: true,
          list: "Framework guiding sustainable business practices and carbon reduction. ",
          isLinkAvailable: false,
          boldText: "Nigeria’s National Climate Change Policy – ",
        },
        {
          type: "list",
          isBold: true,
          list: "Mandating corporate environmental responsibility and emissions monitoring. ",
          isLinkAvailable: false,
          boldText: "Kenya’s Climate Change Act 2016 – ",
        },

        {
          head2: "Monitoring and Reporting",
          type: "heading/subhead",
          text: "To ensure transparency and accountability, we will: ",
        },
        {
          type: "list",
          isBold: false,
          list: "Engage with stakeholders, employees, and clients to promote sustainability awareness and innovation. ",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "Our Commitment to a Greener Future ",
      paragraph: [
        {
          type: "paragraphWithBoldText",
          subhead:
            " At Alluvium Ltd., sustainability is not just an obligation—it’s a core value that drives our business decisions. As an",
          subheadBold: ` Atlassian Partner, `,
          subheadBold2: ` remote collaboration, reduce travel emissions, and promote sustainable digital solutions. `,
          subheadCont: `we leverage cutting-edge technology to enhance`,
          subheadCont2:
            " By implementing our Carbon Reduction Plan, we are taking actionable steps toward a cleaner, greener future for our employees, clients, and the global community.",
        },

        {
          type: "paragraphandLink",
          text: "We invite you to join us on this journey by supporting sustainable business practices and contributing to a healthier planet. Stay updated on our progress and sustainability initiatives by following our blog and corporate social responsibility (CSR) updates. ",
        },
      ],
    },
  ];
  return (
    <Layout>
      <div>
        <Head>
          <title>Privacy Policy | Alluvium</title>

          <meta name="description" content="Alluvium privacy policy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section>
            <List
              content={policyContent}
              heading={
                "Alluvium Ltd.’s Commitment to a Sustainable Future: Our Carbon Reduction Plan "
              }
            />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default CarbonReductionPlan;
