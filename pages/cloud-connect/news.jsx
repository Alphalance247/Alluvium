import Head from "next/head";
import styles from "../../styles/cloud-connect-2/News/news.module.scss";
import Layout from "../../components/cloud-connect-2/Layout";
import SectionHeader from "../../components/cloud-connect-2/SectionHeader";
import BlogCover from "../../public/assets/cloud-connect/images/BlogCoverFallback.png";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Renowned Keynote Speakers Announced for Cloud Connect 2024",
    excerpt:
      "We are thrilled to announce the keynote speakers for Cloud Connect 2024. This year’s lineup features some of the most influential voices .",
    datePublished: "July 17, 2024",
  },
  {
    id: 2,
    title: "Early Bird Registration Now Open for Cloud Connect 2024",
    excerpt:
      "Exciting news! Early bird registration for Cloud Connect 2024 is now open. ake advantage of discounted rates and secure your spot",
    image: "/assets/cloud-connect/images/AboutCC1.jpg",
    datePublished: "August 1, 2024",
  },
  {
    id: 3,
    title: "Volunteer Applications Now Open for Cloud Connect 2024",
    excerpt:
      "A world-leading aviation company sought assistance in enhancing their utilization and understanding of Atlassian products and services.",
    image: "/assets/cloud-connect/images/AboutCC2.jpg",
    datePublished: "July 17, 2024",
  },
  {
    id: 4,
    title: "Renowned Keynote Speakers Announced for Cloud Connect 2024",
    excerpt:
      "We are thrilled to announce the keynote speakers for Cloud Connect 2024. This year’s lineup features some of the most influential voices .",
    datePublished: "July 17, 2024",
  },
  {
    id: 5,
    title: "Early Bird Registration Now Open for Cloud Connect 2024",
    excerpt:
      "Exciting news! Early bird registration for Cloud Connect 2024 is now open. ake advantage of discounted rates and secure your spot",
    image: "/assets/cloud-connect/images/AboutCC1.jpg",
    datePublished: "August 1, 2024",
  },
  {
    id: 6,
    title: "Volunteer Applications Now Open for Cloud Connect 2024",
    excerpt:
      "A world-leading aviation company sought assistance in enhancing their utilization and understanding of Atlassian products and services.",
    image: "/assets/cloud-connect/images/AboutCC2.jpg",
    datePublished: "July 17, 2024",
  },
  {
    id: 7,
    title: "Renowned Keynote Speakers Announced for Cloud Connect 2024",
    excerpt:
      "We are thrilled to announce the keynote speakers for Cloud Connect 2024. This year’s lineup features some of the most influential voices .",
    datePublished: "July 17, 2024",
  },
  {
    id: 8,
    title: "Early Bird Registration Now Open for Cloud Connect 2024",
    excerpt:
      "Exciting news! Early bird registration for Cloud Connect 2024 is now open. ake advantage of discounted rates and secure your spot",
    image: "/assets/cloud-connect/images/AboutCC1.jpg",
    datePublished: "August 1, 2024",
  },
  {
    id: 9,
    title: "Volunteer Applications Now Open for Cloud Connect 2024",
    excerpt:
      "A world-leading aviation company sought assistance in enhancing their utilization and understanding of Atlassian products and services.",
    image: "/assets/cloud-connect/images/AboutCC2.jpg",
    datePublished: "July 17, 2024",
  },
];

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
        <SectionHeader heading="Blog" />
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

const ArticleCard = ({ article }) => (
  <a href={`/cloud-connect/news/${article.id}`}>
    <article className={styles.articleCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={article.image || BlogCover}
          alt={article.title}
          width={384}
          height={226}
          className={styles.articleImage}
        />
      </div>
      <div className={styles.articleContent}>
        <div>
          <h4 className={styles.articleTitle}>{article.title}</h4>
          <p className={styles.articleExcerpt}>{article.excerpt}</p>
        </div>
        <p className={styles.datePublished}>{article.datePublished}</p>
      </div>
    </article>
  </a>
);

export default Media;
