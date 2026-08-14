"use client";
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

const AIAgentEconomics = () => {
  return (
    <>
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
