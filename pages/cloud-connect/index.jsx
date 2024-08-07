import styles from "../../styles/cloudconnect.module.scss";
import Footer from "components/cloud-connect-2/Footer";
import Header from "components/cloud-connect-2/Header";
import AboutCloudConnect from "components/cloud-connect-2/Home/AboutCloudConnect";
import AgendaSection from "components/cloud-connect-2/Home/AgendaSection";
import EventVideo from "components/cloud-connect-2/Home/EventVideo";
import Hero from "components/cloud-connect-2/Home/Hero";
import TopLeaders from "components/cloud-connect-2/Home/TopLeaders";
import WhyAttend from "components/cloud-connect-2/Home/WhyAttend";
import Head from "next/head";

const CloudConnectHomepage = () => {
  return (
    <main className={styles.cloudConnectHome}>
      <Head>
        <title>Cloud Connect 2024 | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
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
      <Footer />
    </main>
  );
};

export default CloudConnectHomepage;
