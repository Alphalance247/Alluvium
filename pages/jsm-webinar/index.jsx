import Layout from "components/layout";
import Navigation from "components/navigation";
import Head from "next/head";

const PluginPage = () => {
  return (
    <>
      <Head>
        <title>Home | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
        <Navigation />
        <div
          style={{
            width: "100%",
            height: "100vh",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          <iframe
            src="https://sites.ziftsolutions.com/atlassian.ziftsolutions.com/8a9983108fc086ab018fc109022335b8"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              marginTop: "4rem",
            }}
            title="Plugin"
          />
        </div>
      </Head>
    </>
  );
};

export default PluginPage;
