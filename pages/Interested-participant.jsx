import React from "react";
import Head from "next/head";

import Layout from "components/layout";
import Login from "components/Interested-cloudConnect/LogIn";
import Table from "components/Interested-cloudConnect/table-show";

const participant = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Intersted participant</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="This is an Atlassian Partner Event focused on remote work. It conveys the idea of collaboration, growth, and adaptability in the context of a remote and distributed work landscape. The event highlights the role of Atlassian in helping teams to collectively embrace the opportunities and challenges of remote work, striving for excellence in a distributed work environment."
          />
          <meta
            name="keywords"
            content="Alluvium, alluvium, Cloud connect, alluvium event, cloud connect event, cloud, connect, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
          />
        </Head>
        <Login />
        {/* <Table /> */}
      </Layout>
    </>
  );
};

export default participant;
