import Layout from "components/layout";
import styles from "../../styles/Blogs/blogs.module.scss";
import { Articledata } from "components/blog-component/informationItem";
import { articles } from "articles";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Potential from "components/blog-component/unlockquote";
import Articles from "components/blog-component/article";
import BlogCard from "components/blog-component/blogCard";

export default function BlogsId({ article }) {
  let nextid = 0;
  const [activeTab, setActiveTab] = useState(nextid);
  const relatedBlog = Articledata.slice(0, 3);

  const handleClick = (i) => {
    setActiveTab(i);
  };
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <article className={`${styles.blog__content} container-fluid px-0`}>
        <div className={`${styles.blog__hero} `}>
          <div className="container">
            <h1>{article.heading}</h1>

            <div className="mb-4">
              <p className={styles.author__name}>By James Akinlabi</p>
              <p className={styles.time__read}>7 mins read | Sept 15th, 2024</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className={styles.article__image__div}>
            <Image
              src={article.imageInfo}
              alt="imageContent"
              width={1216}
              height={574}
              className={styles.article__image}
            />
          </div>
          <div className={styles.table__of__content}>
            <div className=" ">
              <h3 className=" mb-4">TABLE OF CONTENTS</h3>
              {article.content.map((el, i) => {
                return (
                  <div
                    className={styles.content__head}
                    key={i}
                    onClick={() => handleClick(i)}
                  >
                    <p className={activeTab === i ? styles.active : null}>
                      {el.contentHeading}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className=" d-flex flex-column row-gap-5">
              {article.content
                .filter((_, index) => index >= activeTab)
                .map((el, i) => {
                  return (
                    <div className={styles.content} key={i}>
                      <h4>{el.contentHeading}</h4>
                      {el.paragraph.map((el, index) => {
                        return (
                          <div className="d-flex flex-column gap-2" key={index}>
                            <p>{el}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Potential />

        <section className={`container-fluid ${styles.related__articles}`}>
          <div className="container mx-auto">
            <h2>Related Articles</h2>
            <div className={styles.related__cards}>
              {relatedBlog.map((el) => {
                return <BlogCard el={el} key={el.id} />;
              })}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = Articledata.map((article) => ({
    params: { blogsId: article.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = Articledata.find((a) => a.id.toString() === params.blogsId);

  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
}
