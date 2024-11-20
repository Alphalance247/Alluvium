import CloudMain from "components/cloud-migration-case-study/cloudMain";
import Layout from "components/layout";
import CaseStudyCard from "../../components/cloud-migration-case-study/caseStudyCard";
import Head from "next/head";

const CloudMigrationCaseStudy = () => {
  return (
    <Layout>
      <Head>
        <title>Atlassian cloud migration case study | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="We can seamlessly migrate your data and configurations from on-premise Jira, Confluence and Bitbucket to Atlassian Cloud."
        />
        <meta
          name="keywords"
          content="atlassian cloud migration, atlassian cloud migration assistant, atlassian cloud migration sales accreditation, atlassian cloud migration support, atlassian cloud migration simulation, atlassian cloud migration guide, atlassian cloud migration accreditation, confluence cloud migration assistant, Migration Experts, atlassian app cloud migration listener, atlassian confluence cloud migration assistant, atlassian jira cloud migration, atlassian bitbucket cloud migration, atlassian server to cloud migration"
        />
      </Head>

      <section>
        <CloudMain />
        <CaseStudyCard />
      </section>
    </Layout>
  );
};

export default CloudMigrationCaseStudy;
