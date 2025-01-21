import DiscoverAtlassian from "components/atlassian-service-compo/discoverAtlassian";
import MarketPlace from "components/atlassian-service-compo/marketplace";
import ProductAtlassian from "components/atlassian-service-compo/productAtlassian";
import Layout from "components/layout";
import CustomerReview from "components/our-customers/customer";
import ChooseAlluvium from "components/atlassian-service-compo/chooseAlluvium";
import FaQuestions from "components/licence-component/faQuestion";
import ServicesHero from "components/atlassian-service-reuse/servicesHero";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";
import GetStarted from "components/atlassian-service-reuse/getStarted";
import { chooseUsAlluvium } from "data";
import Head from "next/head";
import HeroSection from "components/Alluvium-Redesign-2025/Atlassian-Services/HeroSection";
import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import { FaGalacticSenate } from "react-icons/fa6";
import TrustedAtlassian from "components/Alluvium-Redesign-2025/Atlassian-Services/TrustedAtlassian";
import AtlassianSuite from "components/Alluvium-Redesign-2025/Atlassian-Services/AtlassianSuite";
import ExpertPartner from "components/Alluvium-Redesign-2025/Atlassian-Services/expertPartner";
import ChoosePartnerAlluvium from "components/Alluvium-Redesign-2025/Atlassian-Services/chooseAlluvium";

const AtlassianService = () => {
  const data = [
    {
      title: "Jira Admin Training",
      image: "/assets/redesign-2025/cardIcons/jira.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Let us help you migrate your current Server environments to Atlassian Cloud smoothy.",
        },
      ],
    },
    {
      title: "Jira Admin Training",
      image: "/assets/redesign-2025/cardIcons/jira.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Need to train your Jira or Confluence users to become more skilled? We offer various Atlassian training sessions, from user training to advanced admin training.",
        },
      ],
    },
    {
      title: "JSM Admin Training",
      image: "/assets/redesign-2025/cardIcons/training.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Our team of experts is ready to support you during every phase of your Atlassian journey. We offer support packages and subscriptions tailored to your needs.",
        },
      ],
    },

    {
      title: "Confluence Mastery",
      image: "/assets/redesign-2025/cardIcons/mastery.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Are you seeking an Atlassian partner to assist with purchasing Atlassian and Marketplace apps? Maximize your license investment by letting Alluvium manage your licenses.",
        },
      ],
    },
    {
      title: "App-Specific Workshops",
      image: "/assets/redesign-2025/cardIcons/workshop.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Looking for Atlassian expertise to implement ITSM, optimize your current setup, migrate your data to Atlassian Cloud, or enhance your existing Atlassian configuration? We’re here for you.",
        },
      ],
    },
    {
      title: "App-Specific Workshops",
      image: "/assets/redesign-2025/cardIcons/workshop.svg",
      width: 54,
      height: 54,
      description: [
        {
          text: "Transform your IT service operations into a streamlined and efficient powerhouse with our ITSM implementation using the best-in-class tool: Jira Service Management.",
        },
      ],
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Atlassian-Services | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
      </Head>
      <HeroSection />
      <AtlassianServicesHero
        variantHeading="secondary"
        heading={"Discover Our Atlassian Services"}
        subhead={
          "Our team of Atlassian certified experts is ready to help you tackle any of your Atlassian challenges."
        }
        withLines={false}
        withLink={true}
        withBtn={false}
        showParagraph={true}
        subsec={"OUR SERVICES"}
        variantMargingFix={"second"}
      />

      <ServicesCardReuse
        withList={false}
        data={data}
        showAdditionalCard={false}
        isBtn={true}
        subHeadingVariant={"tertiary"}
        borderRemove={false}
        trusted={true}
        borderVariant="default"
      />

      <AtlassianSuite />
      <ExpertPartner />
      <ChoosePartnerAlluvium />
      <FaQuestions />

      {/* <ServicesHero
        contentsheading="ATLASSIAN SERVICES"
        contentsheading1="Customized Atlassian Services for Enhanced Productivity"
        contentsheading2="Implement or optimize your Atlassian apps through our Atlassian products and services."
        withSlide={true}
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large" className="mx-md-3 my-4">
              Schedule a Call
            </Button>
          </Link>
        }
        button2={
          <Link href="/atlassian-services/atlassian-licence/licence-request">
            <Button size="large" variant="tertiary">
              Get a Free Atlassian Audit
            </Button>
          </Link>
        }
      />

      <DiscoverAtlassian />
      <MarketPlace />
      <ProductAtlassian />
      <GetStarted
        heading="Your Atlassian Partner and Solution Expert"
        text="Let`s discuss your unique needs and challenges, and we`ll develop a customized solution tailored specifically for your use case."
        button1={
          <Link href="/support/contact#schedule-a-call">
            <Button size="large" className="mx-md-3 my-4">
              Schedule a Call
            </Button>
          </Link>
        }
      /> */}

      {/* <ChooseAlluvium
        choose="Why Choose Us"
        strategy="From strategy to execution, our team of experts will provide the utmost guidance and smooth delivery through your data migration journey."
        chooseUsAlluvium={chooseUsAlluvium}
      /> */}
      {/* <CustomerReview /> */}
    </Layout>
  );
};

export default AtlassianService;
