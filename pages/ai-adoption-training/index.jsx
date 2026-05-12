import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";
import TrainingHero from "components/Alluvium-Redesign-2026/AI-Adoption-Training/hero";
import Benefits from "components/Alluvium-Redesign-2026/AI-Adoption-Training/benefit";
import PatternSeparator from "components/Alluvium-Redesign-2026/AI-Adoption-Training/patternSeperator";
import Image from "next/image";
import WorkshopSection from "components/Alluvium-Redesign-2026/AI-Adoption-Training/workSection";
import CaseStudyTabs from "components/Alluvium-Redesign-2026/AI-Adoption-Training/caseStudy";
import ComplementaryCTA from "components/Alluvium-Redesign-2026/AI-Adoption-Training/complimentarySection";
import AboutAlluvium from "components/Alluvium-Redesign-2026/AI-Adoption-Training/aboutAlluvium";

const AIAdoptionTraining = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Alluvium | Atlassian Global Solution Partner </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="AI Adoption Training at Alluvium: Empowering teams to harness the full potential of AI in their workflows. Our expert-led training programs are designed to seamlessly integrate AI tools into your existing processes, enhancing productivity and driving innovation. Whether you're new to AI or looking to optimize your current usage, our tailored training solutions will help your team unlock new possibilities and stay ahead in the rapidly evolving digital landscape."
          />
          <meta
            name="keywords"
            content="AI adoption, AI training, Atlassian AI, enterprise AI, AI integration, workflow automation, AI tools training, AI for business, AI in the workplace, AI strategy, AI implementation, AI education, AI workshops, AI consulting, AI solutions, AI transformation"
          />
        </Head>
        <TrainingHero />

        <div style={{ borderBottom: "1px " }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              borderBottom: "1px dashed rgba(217, 217, 217, 0.80)",
            }}
          >
            <Badges variant={"sub-default"} badgesData={badges} />
          </div>
        </div>
        <Benefits />
        <PatternSeparator />
        <WorkshopSection />
        <PatternSeparator />
        <CaseStudyTabs />
        <PatternSeparator />
        <ComplementaryCTA />
        <AboutAlluvium />
      </Layout>
    </>
  );
};

export default AIAdoptionTraining;
