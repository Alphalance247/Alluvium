import CardSection from "components/Alluvium-Redesign-2025/whitepaper/cardSection";
import ContentSection from "components/Alluvium-Redesign-2025/whitepaper/contentSetion";
import WhitePaperHeroSection from "components/Alluvium-Redesign-2025/whitepaper/hero";
import Layout from "components/layout";
import Head from "next/head";

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

        <main>
          <WhitePaperHeroSection />
          <ContentSection />
          <CardSection />
        </main>
      </Layout>
    </div>
  );
};

export default Whitepaper;
