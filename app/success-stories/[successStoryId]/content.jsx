"use client";
import CaseStudyDetail from "components/Alluvium-Redesign-2026/success-stories/caseStudyDetails";
import HeroBanner from "components/Alluvium-Redesign-2026/success-stories/heroBanner";
import StatsBar from "components/Alluvium-Redesign-2026/success-stories/statusBar";
import Layout from "components/layout";
import CaseStudyGrid from "components/Alluvium-Redesign-2026/success-stories/caseStudyGridCard";

export default function SuccessStoryId({ storyData }) {
  if (!storyData) {
    return (
      <Layout>
        <div>Story not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroBanner
        title={storyData.title}
        backgroundImage={storyData.backgroundImage}
      />
      <StatsBar stats={storyData.stats} />
      <CaseStudyDetail
        client={storyData.client}
        solutionPillar={storyData.solutionPillar}
        challengeTitle={storyData.challengeTitle}
        challengeDescription={storyData.challengeDescription}
        solutionTitle={storyData.solutionTitle}
        solutionDescription={storyData.solutionDescription}
        solutionImage={storyData.solutionImage}
        industry={storyData.industry}
        toolsUsed={storyData.toolsUsed}
        servicesProvided={storyData.servicesProvided}
        results={storyData.results}
      />

      <CaseStudyGrid showHeading={true} backgroundColor={"#F5F5F5B2"} />
    </Layout>
  );
}

