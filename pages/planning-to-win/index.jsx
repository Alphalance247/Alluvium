import Layout from "components/layout";
import LeadForm from "pages/event/itsm-solutions/form/leadform";
const InfoStrategyMirror = () => {
  return (
    <Layout>
      <Head>
        <title>Planning to Win | Alluvium</title>
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
      <LeadForm
        dataUrl={"https://alphalance247.github.io/info-strategy-mirror/"}
      />
    </Layout>
  );
};

export default InfoStrategyMirror;
