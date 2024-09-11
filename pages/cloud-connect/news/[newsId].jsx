import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../../components/cloud-connect-2/Layout";
import styles from "../../../styles/cloud-connect-2/News/news.module.scss";
import { articles } from "articles";
import BlogCover from "../../../public/assets/cloud-connect/images/BlogCoverFallback.png";
import ArticleCard from "components/cloud-connect-2/News/ArticleCard";
import Link from "next/link";
import Button from "components/cloud-connect-2/Button";

const relatedArticles = articles.slice(0, 3);

export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content?.map((item, index) => {
      switch (item.type) {
        case "section":
          return (
            <section key={index} className={styles.articleSection}>
              {item.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph.text}{" "}
                  <Link href="/cloud-connect/book-a-ticket">
                    <span
                      style={{
                        color: "orange",
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      {paragraph.link}
                    </span>
                  </Link>
                  <span>{paragraph.subText}</span>
                </p>
              ))}
            </section>
          );
        case "paragraph":
          return (
            <p key={index} className={styles.paragraph}>
              {item.text}
            </p>
          );
        case "subheading":
          return (
            <h2 key={index} className={styles.subheading}>
              {item.text}
            </h2>
          );
        case "theme":
          return (
            <section key={index}>
              <p key={index} className={styles.paragrap}>
                <span style={{ color: "#082433", fontWeight: "bold" }}>
                  {item.subText}
                </span>
                {item.text}
              </p>

              {/* <p key={index} className={styles.paragrap}>
                <span style={{ color: "#082433", fontWeight: "bold" }}>
                  {item.subText}
                </span>
                {item.text}
              </p> */}
            </section>
          );
        case "image":
          return (
            <figure key={index} className={styles.articleFigure}>
              <Image
                src={item.src}
                alt={item.alt}
                width={1024}
                height={399}
                className={styles.contentImage}
              />
              {/* {item.caption && <figcaption>{item.caption}</figcaption>} */}
            </figure>
          );
        case "cta":
          return (
            <div key={index} className={styles.ctaContainer}>
              <div className={styles.ctaContent}>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
                <Link href={item.link} target="_blank">
                  <Button size="large">{item.buttonText}</Button>
                </Link>
              </div>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Layout>
      <Head>
        <title>{article.title} | Cloud Connect 2024</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <article className={styles.articlePage}>
        <div className={styles.container}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.metaInfoContainer}>
            <div className={styles.authorInfo}>
              <p className={styles.author}>{article.author}</p>
              <div className={styles.metaDetails}>
                <p className={styles.datePublished}>{article.datePublished}</p>
                <span>•</span>
                <p className={styles.readTime}>{article.readTime}</p>
              </div>
            </div>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/alluviumhq"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/FB.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://x.com/alluviumhq"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/X.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/alluvium-hq/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/Linkedin.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/Instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={article.image || BlogCover}
              alt={article.title}
              width={1024}
              height={487}
              className={styles.articleImage}
            />
          </div>

          <div className={styles.articleContent}>
            {renderContent(article.content)}
          </div>

          <div className={styles.shareSection}>
            <p>Enjoyed this article? Make sure to share it!</p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.facebook.com/alluviumhq"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/Facebook_Text.svg"
                  alt="Share on Facebook"
                  width={122}
                  height={40}
                />
              </a>
              <a
                href="https://x.com/alluviumhq"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/Twitter_Text.svg"
                  alt="Share on Twitter"
                  width={104}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/alluvium-hq/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/LinkedIn_Text.svg"
                  alt="Share on LinkedIn"
                  width={115}
                  height={40}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/cloud-connect/icons/Instagram_Text.svg"
                  alt="Share on Instagram"
                  width={125}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className={styles.relatedArticlesSection}>
        <div className={styles.container}>
          <h3>Related Articles</h3>
          <div className={styles.articlesGrid}>
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { newsId: article.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.id.toString() === params.newsId);

  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
}
