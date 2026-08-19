import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/blogs/article-grid.module.scss";
import Link from "next/link";

const ArticleCard = ({ article }) => (
  <Link href={`/blogs/${article.slug}`}>
    <div className={styles.articleCard}>
      <div className={styles.topContent}>
        <div className={styles.imageContainer}>
          <img src={article.img} alt={article.title} />
          <div className={styles.categoryTag}>{article.category}</div>
        </div>

        <div className={styles.metaRow}>
          <span>{article.date}</span>
          <span className={styles.divider}>|</span>
          <span>{article.readTime}</span>
        </div>

        <h4 className={styles.title}>{article.title}</h4>
      </div>

      <div className={styles.authorRow}>
        <img src="https://placehold.co/24x24" alt={article.author} />
        <span>{article.author}</span>
      </div>
    </div>
  </Link>
);

const ArticleGrid = ({ articles = [] }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const transformedArticles = articles.map((item) => ({
    id: item.id || item.slug,
    category: item.tag_names?.[0] || "ARTICLE",
    date: item.formatted_published_at,
    readTime: `${item.read_time} MIN READ`,
    title: item.title,
    author: `${item.author?.first_name} ${item.author?.last_name}`.trim(),
    img: item.featured_image,
    slug: item.slug,
  }));

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Latest Articles</h3>
        </div>

        <div className={styles.grid}>
          {transformedArticles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>

        <button className={styles.loadMoreBtn}>Load More</button>
      </div>
    </section>
  );
};

export default ArticleGrid;
