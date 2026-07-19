"use client";
import React from "react";
import Layout from "components/layout";
import TrainingHero from "components/Alluvium-Redesign-2026/AI-Adoption-Training/hero";
import Benefits from "components/Alluvium-Redesign-2026/AI-Adoption-Training/benefit";
import WorkshopSection from "components/Alluvium-Redesign-2026/AI-Adoption-Training/workSection";
import CaseStudyTabs from "components/Alluvium-Redesign-2026/AI-Adoption-Training/caseStudy";
import ComplementaryCTA from "components/Alluvium-Redesign-2026/AI-Adoption-Training/complimentarySection";
import AboutAlluvium from "components/Alluvium-Redesign-2026/AI-Adoption-Training/aboutAlluvium";
import PartnerBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/partnerBadge";
import PatternSeparator from "components/Alluvium-Redesign-2026/AI-Adoption-Training/patternSeperator";
import Header from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/header";
import FooterBar from "components/Alluvium-Redesign-2026/AI-Adoption-Training/main/footerBar";

const AIAdoptionTraining = () => {
  return (
    <>
      <Header />
      <TrainingHero />
      <PartnerBar />
      <Benefits />
      <PatternSeparator />
      <WorkshopSection />
      <PatternSeparator />
      <CaseStudyTabs />
      <PatternSeparator />
      <ComplementaryCTA />
      <AboutAlluvium />
      <FooterBar />
    </>
  );
};

export default AIAdoptionTraining;
