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

  if (!article.pageTitle) {
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
            <h1>{article?.heading}</h1>
            <CardBlogDetails name={article?.artcleName} variant="secondary" />
          </div>
          <div className={styles.article__image__div}>
            <Image
              src={article?.imageInfo}
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
                {article?.social?.map((el) => {
                  return (
                    <a style={{ cursor: "pointer" }} href={el?.link}>
                      <Image
                        src={el?.img}
                        width={24}
                        height={24}
                        alt="socials"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.article__content} ref={sectionRef}>
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

            {/* <div
              className={`${styles.heading__with__subhead__list} ${styles.heading__with__subhead}`}
            >
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
                <p>{items?.subhead}</p>
              </div>

              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>
              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>
              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>
              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>
              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>

              <div>
                <h4>1. Establish an AI Usage Policy</h4>
                <p>
                  Set clear guidelines on which AI tools employees can use, what
                  data they can process, and who approves AI adoption.
                  Organizations need an AI governance framework that outlines
                  security, compliance, and ethical considerations.
                </p>
              </div>
            </div> */}

            {/* <div className={styles.heading__with__subhead}>
              <h4>Introduction</h4>
              <p>
                AI is here to stay, but how it’s used will determine whether
                it’s an asset or a liability. If you’re an executive, IT leader,
                or cybersecurity professional, don’t wait for an AI disaster to
                unfold—take control now.
              </p>
              <p>
                With years of experience as an AI, Cybersecurity, and Service
                Management Consultant, I have helped companies of all sizes—from
                100-person startups to Fortune 500 enterprises—navigate the
                complex landscape of AI governance. I understand the risks
                you’re facing and the solutions that can safeguard your
                organization.
              </p>
              <p>
                If you have concerns about Shadow AI or need a roadmap for safe
                AI adoption, let's discuss how I can help you implement a
                secure, compliant, and efficient AI strategy.
              </p>

              <p>
                Email me at tojo{" "}
                <a href="">
                  <span>@alluvium.net</span>
                </a>{" "}
              </p>
              <p>
                Find me on{" "}
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <span> LinkedIn</span>
                </a>
              </p>

              <p>
                Let’s build a secure, AI-powered future—without the hidden risks
                of Shadow AI.
              </p>
            </div> */}
          </div>
        </div>

        {/* <section className={`container-fluid ${styles.related__articles}`}>
          <div className="container mx-auto">
        
            <div className={styles.related__cards}>
              {relatedBlog.map((el) => {
                return <BlogCard el={el} key={el.id} />;
              })}
            </div>
          </div>
        </section> */}
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
      {/* <RelatedCard /> */}
      {/* <article className={`${styles.blog__content} container-fluid px-0`}>
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
          <div className={`${styles.table__of__content}`}>
            <div className={` ${isSticky ? styles.sticky : null} `}>
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

            <div className={`d-flex flex-column row-gap-4`} ref={sectionRef}>
              {article.content
                .filter((_, index) => index >= activeTab)
                .map((el, i) => {
                  return (
                    <div className={styles.content} key={i}>
                      <h4>{el?.textHeading}</h4>
                      {el.paragraph.map((el, index) => {
                        return (
                          <div className="d-flex flex-column gap-5" key={index}>
                            <p
                              className={`mb-${
                                index === el.length - 1 ? null : "1rem"
                              }`}
                            >
                              {el}
                            </p>
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

      
      </article> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = Articledata.map((article) => ({
    params: { blogsId: article.pageTitle },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = Articledata.find((el) => el.pageTitle === params.blogsId);

  if (!article) {
    return { notFound: true };
  }

  return { props: { article } };
}
