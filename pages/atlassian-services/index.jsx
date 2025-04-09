import Layout from "components/layout";
import FaQuestions from "components/licence-component/faQuestion";
import Head from "next/head";
import HeroSection from "components/Alluvium-Redesign-2025/Atlassian-Services/HeroSection";
import AtlassianServicesHero from "components/Alluvium-Redesign-2025/ReuseComponents/atlassianServicesHero";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import AtlassianSuite from "components/Alluvium-Redesign-2025/Atlassian-Services/AtlassianSuite";
import ExpertPartner from "components/Alluvium-Redesign-2025/Atlassian-Services/expertPartner";
import ChoosePartnerAlluvium from "components/Alluvium-Redesign-2025/Atlassian-Services/chooseAlluvium";

const AtlassianService = () => {
  const data = [
    {
      title: "Cloud & Data Migration",
      image: "/assets/Atlassian-Services-Assets/icons/1.svg",
      btnUrl: "/atlassian-services/cloud-migration",
      width: 36,
      height: 36,
      description: [
        {
          text: "Let us help you migrate your current Server environments to Atlassian Cloud smoothy.",
        },
      ],
    },
    {
      title: "Training",
      image: "/assets/Atlassian-Services-Assets/icons/2.svg",
      btnUrl: "/atlassian-services/training",
      width: 36,
      height: 36,
      description: [
        {
          text: "Need to train your Jira or Confluence users to become more skilled? We offer various Atlassian training sessions, from user training to advanced admin training.",
        },
      ],
    },
    {
      title: "Support",
      image: "/assets/Atlassian-Services-Assets/icons/3.svg",
      btnUrl: "/atlassian-services/support",
      width: 36,
      height: 36,
      description: [
        {
          text: "Our team of experts is ready to support you during every phase of your Atlassian journey. We offer support packages and subscriptions tailored to your needs.",
        },
      ],
    },

    {
      title: "License Management",
      image: "/assets/Atlassian-Services-Assets/icons/4.svg",
      btnUrl: "/atlassian-services/atlassian-licence",
      width: 36,
      height: 36,
      description: [
        {
          text: "Are you seeking an Atlassian partner to assist with purchasing Atlassian and Marketplace apps? Maximize your license investment by letting Alluvium manage your licenses.",
        },
      ],
    },
    {
      title: "Consulting & Strategy",
      image: "/assets/Atlassian-Services-Assets/icons/5.svg",
      btnUrl: "/atlassian-services/consulting",
      width: 36,
      height: 36,
      description: [
        {
          text: "Looking for Atlassian expertise to implement ITSM, optimize your current setup, migrate your data to Atlassian Cloud, or enhance your existing Atlassian configuration? We’re here for you.",
        },
      ],
    },
    {
      title: "ITSM Implementation",
      image: "/assets/Atlassian-Services-Assets/icons/6.svg",
      btnUrl: "/atlassian-services/itsm-services",
      width: 36,
      height: 36,
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
    </Layout>
  );
};

export default AtlassianService;
