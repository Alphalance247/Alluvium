import AICostProblem from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/AICostProblem";
import AssessmentCTA from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/assesmentCta";
import HowWeHelp from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/howWeHelp";
import TheOutcome from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/outCome";
import SeatToCredits from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/seatToCredit";
import ServiceHero from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/serviceHero";
import WhyAlluvium from "components/Alluvium-Redesign-2026/AI-Adoption-Training/ai-economic-agent/whyAlluvium";
import FooterBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/footerBar";
import Header from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/header";
import PartnerBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/partnerBadge";
import Head from "next/head";

const AIAgentEconomics = () => {
  return (
    <>
      <Head>
        <title>Alluvium | Atlassian Global Solution Partner</title>
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
      <ServiceHero />
      <PartnerBar />
      <SeatToCredits />
      <AICostProblem />
      <HowWeHelp />
      <TheOutcome />
      <WhyAlluvium />
      <AssessmentCTA />
      <FooterBar />
    </>
  );
};

export default AIAgentEconomics;
