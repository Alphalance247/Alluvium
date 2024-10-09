import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import AboutAlluvium from "components/cloud-connect-2/Home/AboutAlluvium";
import AboutCloudConnect from "components/cloud-connect-2/Home/AboutCloudConnect";
import AgendaSection from "components/cloud-connect-2/Home/AgendaSection";
import EventVideo from "components/cloud-connect-2/Home/EventVideo";
import Hero from "components/cloud-connect-2/Home/Hero";
import TopLeaders from "components/cloud-connect-2/Home/TopLeaders";
import WhyAttend from "components/cloud-connect-2/Home/WhyAttend";
import Head from "next/head";
import Layout from "../../components/cloud-connect-2/Layout";
import Partners from "components/cloud-connect-common/partners";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cloud Connect 2024 | Alluvium</title>
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
      <Hero />
      <img
        src="/assets/cloud-connect/images/podiumpic.jpg"
        alt="Cloud connect event image"
        className={styles.eventImg}
      />
      {/* <Partners showheadSponsor /> */}
      <AboutCloudConnect />
      <TopLeaders />
      <EventVideo />
      <WhyAttend />
      <AboutAlluvium />
    </Layout>
  );
}
