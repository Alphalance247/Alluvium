import HeroBanner from "components/Alluvium-Redesign-2026/success-stories/heroBanner";
import StatsBar from "components/Alluvium-Redesign-2026/success-stories/statusBar";
import Layout from "components/layout";
import Head from "next/head";

export default function SuccessStoryId({ article }) {
  return (
    <Layout>
      <Head>
        <title>{article.pageTitle}</title>
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
      <HeroBanner />
      <StatsBar />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  // Replace with your API URL for fetching a single blog post by slu
  return {
    props: {
      article: {
        pageTitle: "Modern ITSM with Atlassian's Service Collection",
      },
    },
  };
}
