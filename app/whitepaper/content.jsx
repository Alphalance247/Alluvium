"use client";
import MainWhitepaperHero from "components/Alluvium-Redesign-2025/whitepaper/mainWhitepaperHero";
import Layout from "components/layout";
import styles from "styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import Publications from "components/Alluvium-Redesign-2025/whitepaper/publications";

const Whitepaper = () => {
  return (
    <div>
      <Layout>

        <main className={styles?.main}>
          <MainWhitepaperHero />
          <Publications />
        </main>
      </Layout>
    </div>
  );
};

export default Whitepaper;
