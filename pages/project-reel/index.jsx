import React from "react";
import Layout from "components/layout";
import HeroSection from "components/Alluvium-Redesign-2025/projectReel/Hero";
import ReelSection from "components/Alluvium-Redesign-2025/ReuseComponents/ReelSection";
import ChartIcon from "components/Alluvium-Redesign-2025/icons/ChartIcon";
import ReportIcon from "components/Alluvium-Redesign-2025/icons/ReportIcon";
import TrainingIcon from "components/Alluvium-Redesign-2025/icons/TrainingIcon";
import CloudIcon from "components/Alluvium-Redesign-2025/icons/ClouIcon";
import Settings from "components/Alluvium-Redesign-2025/icons/Settings";
import IntegrationIcon from "components/Alluvium-Redesign-2025/icons/IntegrationIcon";
import MarkIcon from "components/Alluvium-Redesign-2025/icons/MarkIcon";
import LegacyIcon from "components/Alluvium-Redesign-2025/icons/LegacyIcon";

const gridArray = [
  {
    icon: <IntegrationIcon />,
    title: "Agile Implementation",
    paragraph:
      "We transitioned a UK bank to Agile with Atlassian tools and legacy system integration.",
  },
  {
    icon: <MarkIcon />,
    title: "Compliance & Security",
    paragraph:
      "We ensured compliance with ISO and audit standards during the migration.",
  },
  {
    icon: <LegacyIcon />,
    title: "Legacy Systems Integration",
    paragraph:
      "We migrated from taiga.io and Jira to Jira Cloud, integrating SharePoint with Confluence.",
  },
];

const accomplishments = [
  { title: "2 Jira servers", paragraph: "Successfully migrated to Jira Cloud" },
  {
    title: "100% Compliance",
    paragraph: "with ISO and audit standards",
  },
];

const gridArray1 = [
  {
    icon: <ChartIcon />,
    title: "Scalable Agile Framework",
    paragraph:
      "Streamlined a telco's transformation with scalable Safe Agile practices.",
  },
  {
    icon: <ReportIcon />,
    title: "Advanced Reporting Tools",
    paragraph:
      "Set up BigGantt and BigPicture for tracking progress and dependencies.",
  },
  {
    icon: <TrainingIcon />,
    title: "Staff Training",
    paragraph: "Conducted workshops to enhance Atlassian tool proficiency.",
  },
];
const accomplishments1 = [
  {
    title: "1 Multimillion-Pound",
    paragraph: "Transformation Program Conducted",
  },
  {
    title: "10+ Training Sessions",
    paragraph: "conducted for staff onboarding",
  },
];
const gridArray2 = [
  {
    icon: <CloudIcon />,
    title: "Cloud Migration Successk",
    paragraph:
      "Migrated Jira and Service Desk to Atlassian Cloud, cutting third-party reliance.",
  },
  {
    icon: <Settings />,
    title: "Optimized Workflows",
    paragraph:
      "Created dashboards, workflows, and automation for smooth ticket management.",
  },
  {
    icon: <TrainingIcon />,
    title: "Customer-Centric Portal",
    paragraph: "Designed a service desk portal for improved customer support.",
  },
];
const accomplishments2 = [
  {
    title: "3 Atlassian products",
    paragraph: "migrated: Jira, Confluence, and Jira Service Desk",
  },
  {
    title: "1 customer-centric portal",
    paragraph: "successfully designed and deployed",
  },
];

const ProjectReel = () => {
  return (
    <Layout>
      <HeroSection />

      <ReelSection
        title={"Agile Implementation at a UK Bank"}
        subtitle={
          "We implemented a large-scale Agile way of working using Atlassian tools, ensuring compliance and seamless integration"
        }
        imageSrc="/assets/redesign-2025/OurMission.webp"
        imageAlt="agile way"
        agileTitle={
          "Agile Way of Working implementation on a large scale at a top tier UK bank."
        }
        description1={
          "We helped a major UK bank set up an entirely new way of working by using Atlassian tools and process in conjunction with their existing legacy tools. This delivery included meeting compliance standard to satisfy the stringent ISO and Audit requirements of the compliance department of the institution."
        }
        description2={
          "This helped to bring structure and organisation during this massive change. Part of the legacy systems and tools involved in the migration included taiga.io, migration of 2 Jira servers to Jira Cloud and integration of SharePoint with Confluence."
        }
        gridArray={gridArray}
        accomplishments={accomplishments}
      />
      <ReelSection
        title={"Atlassian Tools for a UK Telco"}
        subtitle={
          "We empowered a major telco’s multimillion-pound transformation with scalable Agile frameworks, advanced tools, and hands-on training."
        }
        imageSrc="/assets/redesign-2025/OurMission1.webp"
        imageAlt={"our mission"}
        agileTitle={
          "Deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance with a major UK Telco"
        }
        description1={
          "At the time a major telco company was going through a multimillion-pound transformation program, we came to help bring structure, simplicity, and scalability to their Safe Agile way of working adoption. This required restructuring of the entire Atlassian product set up, setting up of new configuration to help with progress reporting using advanced roadmap and BigGant, dependency tracking using Big Picture solution board."
        }
        description2={
          "As part of the delivery, regular training and workshops were organised and delivered by our team to get the clients staffs comfortable with the tools usage."
        }
        gridArray={gridArray1}
        accomplishments={accomplishments1}
        reverse={true}
      />

      <ReelSection
        title={"Jira Migration to Cloud"}
        subtitle={
          "Streamlined server-to-cloud migration to enhance efficiency, cut costs, and ensure a smooth transition."
        }
        imageSrc="/assets/redesign-2025/OurMission2.webp"
        imageAlt={"our mission"}
        agileTitle={"Jira Server/Jira Service Desk Migration"}
        description1={
          "The client had their instance being hosted on a 3rd party’s server and wanted options when it was time to renew the hosting license, the client wanted options that would help reduce cost and improve efficiency within their delivery."
        }
        description2={
          "A feasibility report was provided to compare but on prem and cloud hosting of Atlassian and a cost benefit analysis was provide, once all the security questions and checks were satisfactorily answered, the client took the cloud recommendation and we proceeded to set up Atlassian cloud products (Jira, Confluence and Jira Service Desk) and then migrated the existing 3rd party hosted instances to the cloud in a timely manner to prevent them from getting double billed as their license was almost ready for renewal."
        }
        gridArray={gridArray2}
        accomplishments={accomplishments2}
      />
    </Layout>
  );
};

export default ProjectReel;
