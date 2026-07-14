import FooterBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/footerBar";
import Header from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/header";
import ImpactCards from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/ImpactCards";
import MetricsCounter from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/metricsCard";
import PartnershipGrid from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/PartnershipGrid";
import SolutionsGrid from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/solutions";
import TrustBanner from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/trustBanner";
import PartnerBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/partnerBadge";
import Head from "next/head";

const AI = () => {
  return (
    <>
      <Head>
        <title>Alluvium | Atlassian Global Solution Partner </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          as="image"
          href="/assets/redesign-2025/home/high-velocity.webp"
        />
        <meta
          name="description"
          content="Alluvium, an Atlassian Solution Partner in the United States, United Kingdom, and Nigeria. We  deliver ITSM, DevOps, Agile, Cloud Migration, and workflow automation services. "
        />
        <meta
          name="keywords"
          content="Atlassian Solution Partner, Atlassian services, ITSM solutions, Jira Service Management,  Confluence, Jira Software, Bitbucket, DevOps tools, Agile workflows, Cloud migration, workflow  automation, project management tools, Atlassian partner US, Atlassian partner UK, Atlassian  partner Nigeria, ITSM Atlassian consultant, enterprise collaboration tools."
        />
      </Head>
      <Header />
      <TrustBanner />
      <PartnerBar />
      <PartnershipGrid />
      <SolutionsGrid />
      <ImpactCards />
      <MetricsCounter />
      <FooterBar />
    </>
  );
};

export default AI;
