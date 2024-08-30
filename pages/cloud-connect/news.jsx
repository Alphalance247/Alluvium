import Head from "next/head";
import styles from "../../styles/cloud-connect-2/News/news.module.scss";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";
import { articles } from "articles";
import ArticleCard from "components/cloud-connect-2/News/ArticleCard";

const Media = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | Cloud Connect 2024</title>
        <meta
          name="description"
          content="Latest blog posts from Cloud Connect 2024"
        />
      </Head>
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <SectionHeader heading="Blog" />
        </div>
      </section>
      <section className={styles.latestArticles}>
        <div className={styles.container}>
          <h3 className={styles.latestArticlesHeading}>Latest Articles</h3>
          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;