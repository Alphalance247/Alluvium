import Layout from "components/layout";
import styles from "../../styles/Blogs/blogs.module.scss";
import { Articledata } from "components/blog-component/informationItem";
import { articles } from "articles";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Potential from "components/blog-component/unlockquote";
import Articles from "components/blog-component/article";
import BlogCard from "components/blog-component/blogCard";
import Head from "next/head";
import useSticky from "components/customhooks/UseSticky";
import CardBlogDetails from "components/Alluvium-Redesign-2025/ReuseComponents/cardBlogDetails";
import RelatedCard from "components/Alluvium-Redesign-2025/case-studies/relatedStudy";
import { blogCards } from "data";
import CaseCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseCard";
import { environment } from "env/env.local";

export default function BlogsId({ article }) {
  let nextid = 0;
  const [activeTab, setActiveTab] = useState(nextid);
  const relatedBlog = blogCards.slice(0, 3);
  const { isSticky, sectionRef } = useSticky();

  const handleClick = (i) => {
    setActiveTab(i);
  };
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article.slug) {
    return <div>Article not found</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{article.pageTitle}</title>
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
      <article className={styles.blog__main__details}>
        <div className={styles.article__main}>
          <div className={styles.article__hero}>
            <h1>{article?.title}</h1>
            <CardBlogDetails name={article?.artcleName} variant="secondary" />
          </div>
          <div className={styles.article__image__div}>
            <img
              src={article?.featured_image}
              alt="imageContent"
              width={838}
              height={475}
              className={styles.article__image}
            />
          </div>
        </div>
      </article>

      <article className={styles.artcle__overview__content__heading}>
        {/* Article overview and mainContent */}
        <div className={styles.artcle__overview__content}>
          <div className={styles.article__content}>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div
            className={`${styles.article__overview}  ${
              isSticky ? styles.sticky : null
            } `}
          >
            <h3>IN THIS BLOG</h3>
            <div className={styles.overview__head}>
              {article?.overview?.map((items, i) => {
                return (
                  <div className={styles.overview} key={i}>
                    <h6
                      className={`${styles.overview__heading} ${
                        activeTab === i ? styles.active : styles.non__active
                      } `}
                      onClick={() => handleClick(i)}
                    >
                      {items?.heading}
                    </h6>
                    <div>
                      {items?.subHead?.map((el, i) => (
                        <p key={i}>{el}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

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

          {/* <div className={styles.article__content} ref={sectionRef}>
            {article?.content
              ?.filter((_, index) => index >= activeTab)
              .map((items, i) => {
                if (items?.type === "headingWithParagraph") {
                  return (
                    <div className={styles.heading__with__subhead} key={i}>
                      <h4
                        className={`${
                          items?.fontStyle === "iamsubheading"
                            ? styles.sub__primary
                            : styles.sub__secondary
                        }`}
                      >
                        {items?.heading}
                      </h4>
                      {items?.subhead.map((el, i) => (
                        <p key={i}>{el}</p>
                      ))}
                    </div>
                  );
                }

                if (items?.type === "headingWithParagraphList") {
                  return (
                    <div
                      className={`${styles.heading__with__subhead__list} ${styles.heading__with__subhead}`}
                      key={i}
                    >
                      <div className={styles.withList}>
                        <h4
                          className={`${
                            items?.fontStyle === "iamsubheading"
                              ? styles.sub__primary
                              : styles.sub__secondary
                          }`}
                        >
                          {items?.heading}
                        </h4>
                        <p>{items?.subhead}</p>
                      </div>
                      {items?.sublist?.map((list, i) => {
                        return (
                          <div key={i}>
                            <h4
                              className={`${
                                list?.fontStyle === "iamsubheading"
                                  ? styles.sub__primary
                                  : styles.sub__secondary
                              }`}
                            >
                              {list?.headingList}
                            </h4>
                            <p>{list?.subHeadList}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                if (items?.type === "image") {
                  return (
                    <div>
                      <Image
                        src={items?.url}
                        alt="imageContent"
                        width={720}
                        height={425}
                      />
                    </div>
                  );
                }

                if (items?.type === "headingWithParagraphwithUrl") {
                  return (
                    <div className={styles.heading__with__subhead} key={i}>
                      <h4
                        className={`${
                          items?.fontStyle === "iamsubheading"
                            ? styles.sub__primary
                            : styles.sub__secondary
                        }`}
                      >
                        {items?.heading}
                      </h4>
                      {items?.subhead.map((el, i) => (
                        <p key={i}>{el}</p>
                      ))}

                      {items?.textWithUrl?.map((el, i) => {
                        return (
                          <p key={i}>
                            {el?.text}{" "}
                            <a href={el?.link}>
                              <span
                                style={{
                                  color: "#E37915",
                                  textDecoration: "underline",
                                }}
                              >
                                {el?.textUrl}
                              </span>
                            </a>{" "}
                          </p>
                        );
                      })}

                      <p>{items?.subtext}</p>
                    </div>
                  );
                }
              })}
          </div> */}
        </div>
      </article>
      <section className={styles.cards}>
        <div className={styles.cards__details}>
          <h2>Related Story</h2>
          <div className={styles.card__encap}>
            {relatedBlog.map((item, i) => {
              return (
                <CaseCard
                  variant="secondary"
                  url={item?.url}
                  imgAlt={item?.title}
                  width={357}
                  height={191}
                  industry={item?.title}
                  industry1={item?.title1}
                  title={item?.heading}
                  imgSrc={item?.img}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const paths = Articledata.map((article) => ({
//     params: { blogsId: article.pageTitle },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const article = Articledata.find((el) => el.pageTitle === params.blogsId);

//   if (!article) {
//     return { notFound: true };
//   }

//   return { props: { article } };
// }

export async function getStaticPaths() {
  // Replace with your API URL for fetching all blog posts
  const res = await fetch(`${environment.blogBaseUrl2}api/blog/posts/`);
  const blogsData = await res.json();

  // If your API response is an object with the posts inside, for example:
  // const blogs = blogsData.posts;
  // Otherwise, if it's already an array, you can do:
  const blogs = blogsData;

  console.log(blogs);

  const paths = blogs?.results?.map((blog) => ({
    params: { blogsId: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Replace with your API URL for fetching a single blog post by slug
  const res = await fetch(
    // "https://pest.ec2.alluvium.net/api/blog/posts/shadow-ai-the-hidden-threat-lurking-in-your-organization/"
    `${environment?.blogBaseUrl2}api/blog/posts/${params?.blogsId}/`
  );
  const article = await res.json();

  console.log(article);

  // If no article is found, return a 404 page
  if (!article || !article.slug) {
    return { notFound: true };
  }

  return {
    props: { article },
  };
}
