import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Layout from "components/layout";
import ServerMigration from "components/support-component/serverMigration";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import SupportServices from "components/support-component/supportServices";
import LearnMore from "components/support-component/learnMore";
import Head from "next/head";
import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import AboutAtlassianSupport from "components/Alluvium-Redesign-2025/support/AboutAtlassianSupport";
import styles from "../../../styles/atlassian-services-style/supports.module.scss";
import HeroHeading from "components/Alluvium-Redesign-2025/ReuseComponents/heroHeading";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";

const Support = () => {
  const data1 = [
    {
      title: "Installation",
      image: "/assets/redesign-2025/cardIcons/btn1.svg",
      width: 44,
      height: 44,
      description: [
        {
          text: "Struggling with installing new Atlassian apps in your on-premise environment? Let Alluvium handle it. We specialize in installing databases, servers, Atlassian apps, and Marketplace apps to ensure your environment runs at peak performance.",
          withLink: false,
        },
      ],
    },
    {
      title: "Configuration",
      image: "/assets/redesign-2025/cardIcons/btn2.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Need assistance configuring Atlassian tools? As a certified Atlassian partner, we bring extensive experience in configuring both Atlassian and Marketplace apps. Together, we'll tailor these tools to optimally support your internal processes.",
          withLink: false,
        },
      ],
    },
    {
      title: "License Management",
      image: "/assets/redesign-2025/cardIcons/btn3.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Looking for guidance on managing your licenses? Our expertise has helped clients save significant time and money on licensing. ",
          withLink: false,
          url: "#",
          urlText: "",
        },
      ],
    },

    {
      title: "Troubleshooting",
      image: "/assets/redesign-2025/cardIcons/btn4.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Facing technical or functional challenges? Let us handle the troubleshooting so you can quickly identify and resolve issues, saving valuable time and effort.",
          withLink: false,
        },
      ],
    },
    {
      title: "App-Specific Workshops",
      image: "/assets/redesign-2025/cardIcons/btn5.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Planning to migrate or consolidate your data into a new Atlassian instance? Whether you need support during the migration process or prefer a full-service data migration, we're here to help. Learn more about our migration services ",
          withLink: true,
          url: "/contact-us",
          urlText: "here",
        },
      ],
    },

    {
      title: "Maintenance",
      image: "/assets/redesign-2025/cardIcons/btn6.svg",
      width: 40,
      height: 40,
      description: [
        {
          text: "Keep your Atlassian Data Center secure, up-to-date, and running smoothly with our expert maintenance support. Regular updates enhance security and unlock new features to boost performance. Contact us today to learn how we can help optimize your environment.",
          withLink: false,
        },
      ],
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Atlassian Support Services | Alluvium | alluvium.net</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="24/7 Assistance from Alluvium Experts. Get ongoing Jira and Confluence support with Alluvium’s managed services. We help resolve issues, optimize workflows, and ensure smooth operations."
        />
        <meta
          name="keywords"
          content="Atlassian support, Jira support, Confluence help, Atlassian managed services, technical support."
        />
      </Head>
      <div style={{ background: "#fcfcfc" }}>
        <div style={{ maxWidth: "1272px", margin: "auto" }}>
          <Lines variant={"secondary"} />
        </div>
      </div>
      <AtlassianServicesHero
        withLink={true}
        subsec={"ATLASSIAN SUPPORT"}
        heading={"24/7 Assistance from Alluvium Experts."}
        subhead={
          "Get ongoing Jira and Confluence support with Alluvium’s managed services. We help resolve issues, optimize workflows, and ensure smooth operations."
        }
        buttonText={"Go to Support"}
        url={"https://support.portal.alluvium.net/servicedesk/customer/portals"}
      />
      <AboutAtlassianSupport />
      <div className={styles.dedicated__support}>
        <div className={styles.dedicated}>
          <div className={styles.support}>
            <HeroHeading
              heading={"Dedicated Support for Every Use Case"}
              subhead={
                "Explore the range of Atlassian support services we offer to meet your needs."
              }
              withLink={false}
              variant={"secondary"}
            />
          </div>
        </div>
      </div>

      <ServicesCardReuse
        withList={false}
        marginVariant={"marginPrimary"}
        subHeadingVariant={"primary"}
        headingVariant={"primary"}
        gridVariant="primary"
        data={data1}
      />
      {/* <ServicesHero
        contentsheading1="Dedicated Atlassian Support"
        contentsheading2="Be assured of having technical and functional Atlassian expertise by your side with our Atlassian support packages."
        withSlide={false}
        button1={
          <Link href="https://support.portal.alluvium.net/servicedesk/customer/portals">
            <Button size="large">Go to Support</Button>
          </Link>
        }
      />
      <ServerMigration />
      <SupportServices /> */}
      {/* <SupportPackages /> */}
      {/* <LearnMore /> */}
    </Layout>
  );
};

export default Support;
