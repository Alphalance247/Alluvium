import Head from "next/head";
import styles from "../../styles/about.module.scss";
import Layout from "components/layout";
import Hero from "components/Alluvium-Redesign-2025/AboutUs/hero";
import AboutAlluvium from "components/Alluvium-Redesign-2025/AboutUs/aboutAlluvium";
import OurMission from "components/Alluvium-Redesign-2025/AboutUs/ourMission";
import HowItStarted from "components/Alluvium-Redesign-2025/AboutUs/howItStarted";
import CoreValueAbout from "components/Alluvium-Redesign-2025/AboutUs/coreValueAbout";

export default function AboutUs() {
  return (
    <Layout>
      <div className={styles.aboutUsPage}>
        <Head>
          <title>About Us | Alluvium</title>
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
        <main>
          <Hero />
          <AboutAlluvium />
          <OurMission />
          <HowItStarted />
          <CoreValueAbout />
        </main>
      </div>
    </Layout>
  );
}
