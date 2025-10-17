import Layout from "components/layout";
import React from "react";
import ServerToCloud from "components/atlassian-service-reuse/serverToCloud";
import WhyMigrate from "components/cloud-migration-compo/whymigrate";
import { consultingPageCards } from "data";
import Head from "next/head";
import AtlassianConsultingHero from "components/Alluvium-Redesign-2025/consulting/atlassianConsultingHero";
import Empower from "components/Alluvium-Redesign-2025/consulting/empower";
import Solutions from "components/Alluvium-Redesign-2025/consulting/solutions";
import StreamlineServer from "components/Alluvium-Redesign-2025/data-migration/streamlineServer";

const Consulting = () => {
  return (
    <Layout>
      <Head>
        <title>Atlassian Consulting & Strategy | Alluvium | alluvium.net</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Workflow Optimization by Alluvium. Alluvium provides expert Atlassian consulting to align tools like Jira, Confluence, and Bitbucket with strategic goals and operational excellence."
        />
        <meta
          name="keywords"
          content="Atlassian consulting, Jira optimization, Atlassian partner consulting, agile strategy, workflow automation."
        />
      </Head>

      <AtlassianConsultingHero />
      <Empower />
      <Solutions />
      <StreamlineServer />
    </Layout>
  );
};

export default Consulting;
