import CardSection from "components/Alluvium-Redesign-2025/whitepaper/cardSection";
import ContentSection from "components/Alluvium-Redesign-2025/whitepaper/contentSetion";
import WhitePaperHeroSection from "components/Alluvium-Redesign-2025/whitepaper/hero";
import Layout from "components/layout";
import styles from "styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import Head from "next/head";
import { heroData } from "components/Alluvium-Redesign-2025/whitepaper/whaitPaperHeroData";

const RegulatorySupremacy = () => {
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
          <WhitePaperHeroSection
            slug={"regulatory-supremacy-and-competitive-edge"}
            subhero={heroData.subhero}
            title={heroData.title}
            imageSrc={heroData.imageSrc}
            readTime={heroData.readTime}
            date={heroData.date}
            category={heroData.category}
          />
          <ContentSection />
          <CardSection />
        </main>
      </Layout>
    </div>
  );
};

export default RegulatorySupremacy;
