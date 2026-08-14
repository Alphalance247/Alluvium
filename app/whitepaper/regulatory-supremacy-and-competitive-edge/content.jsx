"use client";
import CardSection from "components/Alluvium-Redesign-2025/whitepaper/cardSection";
import ContentSection from "components/Alluvium-Redesign-2025/whitepaper/contentSetion";
import WhitePaperHeroSection from "components/Alluvium-Redesign-2025/whitepaper/hero";
import Layout from "components/layout";
import styles from "styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import { heroData } from "components/Alluvium-Redesign-2025/whitepaper/whaitPaperHeroData";

const RegulatorySupremacy = () => {
  return (
    <div>
      <Layout>

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
