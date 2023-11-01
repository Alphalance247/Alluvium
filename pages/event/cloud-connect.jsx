import React from "react";
import Head from "next/head";

import Layout from "components/layout";
import EventHero from "components/cloud-connect/EventHero";
import Register from "components/cloud-connect/Register";
import Schedule from "components/cloud-connect/Schedule";
import Speaker from "components/cloud-connect/Speaker";

const CloudConnect = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Cloud Connect | Alluvium</title>
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
        <EventHero />
        <Schedule />
        {/* <Speaker /> */}
        <Register />
      </Layout>
    </>
  );
};

export default CloudConnect;
