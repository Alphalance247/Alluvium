"use client";
import Layout from "components/layout";
import styles from "../../../styles/Blogs/blogs.module.scss";
import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import CardBlogDetails from "components/Alluvium-Redesign-2025/ReuseComponents/cardBlogDetails";
import CaseCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseCard";
import { environment } from "env/env.local";
import Button from "components/atlassian-service-reuse/Button";

export default function BlogsId({ article }) {
  // const relatedBlog = blogCards.slice(0, 3);
  const [loadingRelated, setLoadingRelated] = useState(true);
  const [errorRelated, setErrorRelated] = useState(false);
  const [relatedBlog, setRelatedBlogs] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      if (!article?.slug) return;

      try {
        setLoadingRelated(true);
        const res = await fetch(
          `${environment?.baseUrl}api/blog/posts/${article?.slug}/related_posts/`
        );
        const data = await res.json();

        if (!res.ok || !data) {
          throw new Error("Failed to fetch related blogs");
        }

        setRelatedBlogs(data || "No related blog found");
        setLoadingRelated(false);
      } catch (error) {
        setErrorRelated(true);
        setErrorMessage(
          error.message || "An error occurred while fetching related blogs."
        );
        setLoadingRelated(false);
      }
    };

    fetchRelatedBlogs();
  }, [article?.slug]);

  if (!article.slug) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <article className={styles.blog__main__details}>
        <div className={styles.article__main}>
          <div className={styles.article__hero}>
            <h1>{article?.title}</h1>
            <CardBlogDetails
              name={`${article?.author?.first_name} ${article?.author?.last_name}`}
              blogDate={article?.formatted_published_at}
              minRead={article?.read_time + " mins read"}
              variant="secondary"
            />
          </div>
          <div className={styles.article__image__div}>
            <img
              src={article?.featured_image}
              alt="imageContent"
              width={838}
              height={475}
              style={{
                borderRadius: "8px",
              }}
              className={styles.article__image}
            />
          </div>
        </div>
      </article>

      <article className={styles.artcle__overview__content__heading}>
        {/* Article overview and mainContent */}
        <div className={styles.artcle__overview__content}>
          <div
            className={`${styles.article__content__blog} ${styles.article__content}`}
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {article &&
            article?.slog ===
              "shadow-ai-risks-implications-and-strategic-mitigation-approaches" && (
              <div>
                <Button>Download white paper</Button>
              </div>
            )}

          <div className={`${styles.article__overview} `}>
            <div className={styles.share}>
              <p>SHARE THIS STORY</p>

              <div className=" d-flex gap-3">
                <a
                  style={{ cursor: "pointer" }}
                  href="https://web.facebook.com/alluviumhq/?ti=as&_rdc=1&_rdr#"
                >
                  <Image
                    src="/assets/redesign-2025/case-studies/svg/facebook.svg"
                    width={24}
                    height={24}
                    alt="socials"
                  />
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  href="https://x.com/alluviumhq?s=08"
                >
                  <Image
                    src="/assets/redesign-2025/case-studies/svg/x.svg"
                    width={24}
                    height={24}
                    alt="socials"
                  />
                </a>
                <a
                  style={{ cursor: "pointer" }}
                  href="https://www.linkedin.com/company/alluvium-hq/"
                >
                  <Image
                    src="/assets/redesign-2025/case-studies/svg/linkedIn.svg"
                    width={24}
                    height={24}
                    alt="socials"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className={styles.cards}>
        <div className={styles.cards__details}>
          <h2>Related Stories</h2>
          {loadingRelated && <p>Loading related blogs...</p>}
          {errorRelated && <p>{errorMessage}</p>}
          {!loadingRelated && !errorRelated && relatedBlog.length > 0 ? (
            <div className={styles.card__encap}>
              {relatedBlog.map((item, i) => (
                <CaseCard
                  variant="secondary"
                  url={`/blogs/${item?.slug}`}
                  imgAlt={item?.title}
                  width={357}
                  height={191}
                  industry={item?.title2 || "ARTIFICIAL INTELLIGNECE"}
                  industry1={item?.title1 || "CONFLUENCE"}
                  title={item?.title}
                  imgSrc={item?.featured_image}
                  key={i}
                  industries={item?.tag_names}
                  publisherName={
                    `${item?.author?.first_name} ${item?.author?.last_name}` ||
                    "James Akinlabi"
                  }
                  blogDate={item?.formatted_published_at}
                  minRead={item?.read_time + " mins read"}
                />
              ))}
            </div>
          ) : (
            <p>No related blogs found </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

