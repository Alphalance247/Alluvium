import Layout from "components/layout";
import Head from "next/head";
import HeroSection from "components/Alluvium-Redesign-2025/atlassian-license/HeroSection";
import SecondSection from "components/Alluvium-Redesign-2025/atlassian-license/SecondSection";
import DeploymentOptions from "components/Alluvium-Redesign-2025/atlassian-license/DeploymentOptions";
import CloudMigrationSection from "components/Alluvium-Redesign-2025/data-migration/CloudMIgrationSection";
import ServicesCardReuse from "components/Alluvium-Redesign-2025/ReuseComponents/ServicesCardReuse";
import { licenseOptions } from "constants/atlassian-license";
import LicenseManager from "components/Alluvium-Redesign-2025/atlassian-license/LicenseManager";
import ConsultationCardServices from "components/Alluvium-Redesign-2025/ReuseComponents/consultationCard";

const AtlassianLicence = () => {
  return (
    <Layout>
      <Head>
        <title>Support | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Atlassian license management, atlassian jira service management license, atlassian license types, atlassian license cost, atlassian licenses, atlassian jira license, atlassian license agreement, license atlassian, jira license management, jira license management plugin, confluence license management, atlassian software license agreement, atlassian license, license jira service management"
        />
      </Head>
      <HeroSection />
      <SecondSection />
      <DeploymentOptions />
      <CloudMigrationSection
        backgroundVariant={"whitBg"}
        variant={"secondary"}
        heading="License Purchase Options"
        subhead="Optimize Your Atlassian Licensing with Alluvium: Tailored Solutions for Every Stage."
      />

      <ServicesCardReuse
        data={licenseOptions}
        useText={true}
        useImage={false}
        showAdditionalCard={true}
        ConsultationCardServices={
          <ConsultationCardServices
            title="Your Atlassian Partner and Solutions Expert"
            description="Let's discuss your unique needs and challenges, and we'll develop a customized solution tailored specifically for your use case."
            buttons={[
              {
                label: "Request License",
                variant: "redesign",
                size: "medium",
                href: "/atlassian-services/atlassian-licence/licence-request",
              },
              {
                label: "Request Site Audit",
                size: "medium",
                href: "/contact-us",
              },
            ]}
          />
        }
      />
      <LicenseManager />
    </Layout>
  );
};

export default AtlassianLicence;
