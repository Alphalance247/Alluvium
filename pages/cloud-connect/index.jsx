import styles from "../../styles/cloudconnect.module.scss";
import Footer from "components/cloud-connect/Footer";
import Header from "components/cloud-connect/Header";
import AboutCloudConnect from "components/cloud-connect/Home/AboutCloudConnect";
import Hero from "components/cloud-connect/Home/Hero";
import TopLeaders from "components/cloud-connect/Home/TopLeaders";
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
      <AboutCloudConnect />
      <TopLeaders />
      <Footer />
    </main>
  );
};

export default CloudConnectHomepage;
