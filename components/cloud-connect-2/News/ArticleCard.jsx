import styles from "../../../styles/cloud-connect-2/News/news.module.scss";
import BlogCover from "public/assets/cloud-connect/images/BlogCoverFallback.png";
import Image from "next/image";

const ArticleCard = ({ article }) => (
  <a href={`/cloud-connect/news/${article.id}`}>
    <article className={styles.articleCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={article.image || BlogCover}
          alt={article.title}
          width={400}
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

export default ArticleCard;
