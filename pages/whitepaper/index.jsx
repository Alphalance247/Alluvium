import CardSection from "components/Alluvium-Redesign-2025/whitepaper/cardSection";
import ContentSection from "components/Alluvium-Redesign-2025/whitepaper/contentSetion";
import MainWhitepaperHero from "components/Alluvium-Redesign-2025/whitepaper/mainWhitepaperHero";
import Layout from "components/layout";
import styles from "styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import Head from "next/head";
import Publications from "components/Alluvium-Redesign-2025/whitepaper/publications";

const Whitepaper = () => {
  return (
    <div>
      <Layout>
        <Head>
          <title>Whitepaper | Alluvium</title>
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

        <main className={styles?.main}>
          <MainWhitepaperHero />
          <Publications />
        </main>
      </Layout>
    </div>
  );
};

export default Whitepaper;
