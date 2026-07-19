"use client";
import FooterBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/footerBar";
import Header from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/header";
import ImpactCards from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/ImpactCards";
import MetricsCounter from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/metricsCard";
import PartnershipGrid from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/PartnershipGrid";
import SolutionsGrid from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/solutions";
import TrustBanner from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/trustBanner";
import PartnerBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/partnerBadge";

const AI = () => {
  return (
    <>
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
