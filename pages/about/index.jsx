import Head from "next/head";
import styles from "../../styles/about.module.scss";
import Layout from "components/layout";
import Hero from "components/Alluvium-Redesign-2025/AboutUs/hero";
import AboutAlluvium from "components/Alluvium-Redesign-2025/AboutUs/aboutAlluvium";
import OurMission from "components/Alluvium-Redesign-2025/AboutUs/ourMission";
import HowItStarted from "components/Alluvium-Redesign-2025/AboutUs/howItStarted";
import CoreValueAbout from "components/Alluvium-Redesign-2025/AboutUs/coreValueAbout";
import AboutHero from "components/Alluvium-Redesign-2026/about/hero";
import MissionSection from "components/Alluvium-Redesign-2026/about/ourMission";
import AboutGrid from "components/Alluvium-Redesign-2026/about/aboutAlluvium";
import AwardsSection from "components/Alluvium-Redesign-2026/about/awardsNomination";
import ImpactStory from "components/Alluvium-Redesign-2026/about/ourImpact";
import ValuesGrid from "components/Alluvium-Redesign-2026/about/coreValue";

export default function AboutUs() {
  return (
    <Layout>
      <div className={styles.aboutUsPage}>
        <Head>
          <title>About Us | Alluvium | alluvium.net</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Your Trusted Atlassian Solution Partner. Learn about Alluvium an Atlassian Gold Partner delivering ITSM, DevOps, Agile, and cloud migration solutions across the US, UK, and Nigeria. We help teams work smarter and faster with modern tools."
          />
          <meta
            name="keywords"
            content="About Alluvium, Atlassian Gold Partner, Alluvium Nigeria, Alluvium UK, Alluvium USA, ITSM experts, cloud migration company, DevOps consulting."
          />
        </Head>
        <main>
          <AboutHero />
          <MissionSection />
          <AboutGrid />
          <AwardsSection />
          <ImpactStory />
          <ValuesGrid />
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
