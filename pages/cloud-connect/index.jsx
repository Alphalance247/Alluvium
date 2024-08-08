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

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Cloud Connect 2024 | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <img
        src="/assets/cloud-connect/images/Cloud connect event image.jpg"
        alt="Cloud connect event image"
        className={styles.eventImg}
      />
      <AboutCloudConnect />
      <TopLeaders />
      <EventVideo />
      <WhyAttend />
      <AgendaSection />
      <AboutAlluvium />
    </Layout>
  );
}
