import Layout from "components/layout";
import Head from "next/head";
import EventDetail from "components/Alluvium-Redesign-2026/events/eventDetails";
import MainStageHero from "components/Alluvium-Redesign-2026/events/mainStageHero";

export default function EventId({ article }) {
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
      <MainStageHero />
      <EventDetail />
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
