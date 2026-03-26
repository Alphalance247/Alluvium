import CaseStudyDetail from "components/Alluvium-Redesign-2026/success-stories/caseStudyDetails";
import HeroBanner from "components/Alluvium-Redesign-2026/success-stories/heroBanner";
import StatsBar from "components/Alluvium-Redesign-2026/success-stories/statusBar";
import Layout from "components/layout";
import Head from "next/head";
import successData from "./successData";
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
      <Head>
        <title>{storyData.title}</title>
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

export async function getServerSideProps({ params }) {
  const story = successData.find((s) => s.slug === params.successStoryId);

  if (!story) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      storyData: story,
    },
  };
}
