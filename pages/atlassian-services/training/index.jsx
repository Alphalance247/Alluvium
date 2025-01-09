import Layout from "components/layout";
// import styles from "../../../styles/licence.module.scss";
import Exceptional from "components/licence-component/exceptional";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { trainingPageCards } from "data";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Head from "next/head";
import HeroHeading from "components/Alluvium-Redesign-2025/ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/training/training.module.scss";
import { Lines } from "components/Alluvium-Redesign-2025/ReuseComponents/Lines";
import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";

const Training = () => {
  const data = [
    {
      title: "Jira Admin Training",
      image: "/assets/redesign-2025/cardIcons/jira.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Become the architect of your team's project management success. Our Jira Admin training empowers you to:",
        },
      ],
      list: [
        "Master Jira's common challenges, from configuration to customization",
        "Optimize workflows and automations for maximum efficiency",
        "Ensure seamless collaboration across multiple teams",
      ],
    },
    {
      title: "Jira Admin Training",
      image: "/assets/redesign-2025/cardIcons/jira.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Transform your team into Jira power users. Our training focuses on:",
        },
      ],
      list: [
        "Navigating Jira with ease",
        "Effective issue tracking and management",
        "Leveraging Jira for improved collaboration and productivity",
      ],
    },
    {
      title: "JSM Admin Training",
      image: "/assets/redesign-2025/cardIcons/training.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Elevate your service delivery with our JSM Admin training. You'll learn to:",
        },
      ],
      list: [
        "Configure and manage Jira Service Management effortlessly",
        "Enhance customer satisfaction through efficient service desk operations",
        "Optimize your IT service management processes by getting to know all JSM best practices.",
      ],
    },

    {
      title: "Confluence Mastery",
      image: "/assets/redesign-2025/cardIcons/mastery.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Turn your team into knowledge creators and collaborators with our Confluence User training. You'll learn to:",
        },
      ],
      list: [
        "Create and organize engaging content",
        "Foster a culture of knowledge-sharing",
        "Enhance teamwork and collaboration",
      ],
    },
    {
      title: "App-Specific Workshops",
      image: "/assets/redesign-2025/cardIcons/workshop.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Expand your Atlassian toolkit with our app-specific workshops. We offer tailored training on multiple marketplace apps to help you:",
        },
      ],
      list: [
        "Maximize the value of your chosen apps",
        "Integrate them seamlessly into your Atlassian instances",
        "Optimize their usage for specific business needs",
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Atlassian-Training | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Atlassian training, jira atlassian training, confluence atlassian training, bamboo atlassian training, atlassian training certification, atlassian training partner, atlassian admin training, atlassian access training, jira training and certification, atlassian jira align training, atlassian jira administrator training, atlassian jira and confluence training, atlassian bitbucket training, atlassian bamboo training, jira training basics"
        />
      </Head>

      <AtlassianServicesHero
        heading={"Atlassian Training"}
        subhead={
          "Upgrade your Atlassian tool skills and master the best practices for your daily work by getting trained by our certified Atlassian trainers."
        }
        buttonText={"Schedule a Call"}
        url={"/contact-us"}
      />

      <Exceptional
        heading="Specialized Training to Master the Atlassian Tooling"
        paragraphs={[
          "More than being a licensed Atlassian training partner, we have a proven track record of expertise and smooth deliveries. We’ll provide comprehensive Atlassian training customized to suit your personal, business, and budget needs. ",
          "Our Experienced Atlassian Consultants will make it a point of duty to equip you with Atlassian customized solutions. Regardless of your team size, we will ensure you fully leverage the benefits of Atlassian tools. By listening to your needs and customizing your training program, we equip your team with the precise skills required for success.",
        ]}
        image="/assets/services/training-partner.png"
        redesignStyle={true}
      />

      <AtlassianServicesHero
        variantHeading="secondary"
        heading={"Our Training Programs"}
        subhead={
          "Explore our Atlassian training options to identify which one fits your needs best."
        }
        withLines={false}
        withLink={true}
        withBtn={false}
        showParagraph={true}
        subsec={"Our ATLASSIAN Training EXPERTISE"}
        variantMargingFix={"second"}
      />

      <ServicesCardReuse
        withList={true}
        data={data}
        showAdditionalCard={true}
      />

      {/* <ServicesHero
        contentsheading1="Atlassian Training"
        contentsheading2="Upgrade your Atlassian tool skills and master the best practises for your daily work by getting trained by our certified Atlassian trainers."
        withSlide={false}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large">Get in Touch</Button>
          </Link>
        }
      /> */}

      {/* <WhyMigrate
        heading="Our Training Programs"
        description="Explore our Atlassian training options to identify which one fits your needs best."
        data={trainingPageCards}
        freeconsult={true}
      /> */}
      {/* <div className={`container-fluid ${styles.seamlessMigration}`}>
        <GetStarted
          heading="Book a Free Training Consultation With Our Experts Today."
          text={false}
          variant="primary"
          button1={
            <Link href="/support/contact#schedule-a-call" passHref>
              <Button size="large">Schedule a Call</Button>
            </Link>
          }
        />
      </div> */}
    </Layout>
  );
};

export default Training;
