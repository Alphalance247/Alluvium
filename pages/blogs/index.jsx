import Layout from "components/layout";
import styles from "../../styles/Blogs/blogs.module.scss";
import Head from "next/head";
import HeroHeading from "components/Alluvium-Redesign-2025/ReuseComponents/heroHeading";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CardBlogDetails from "components/Alluvium-Redesign-2025/ReuseComponents/cardBlogDetails";
import CaseCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { environment } from "env/env.local";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import EventsBanner from "components/Alluvium-Redesign-2026/events/hero";
import FeaturedPost from "components/Alluvium-Redesign-2026/blogs/featuredPost";
import ArticleGrid from "components/Alluvium-Redesign-2026/blogs/artcleGrid";
import CtaSection from "components/Alluvium-Redesign-2026/common/ctaSection";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [postOfTheWeek, setPostOfTheWeek] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const [postsRes, postOfTheWeekRes] = await Promise.all([
        axios.get(`${environment?.baseUrl}api/blog/posts/`),
        axios.get(`${environment?.baseUrl}api/blog/posts/post_of_the_week/`),
      ]);

      const postsData = postsRes.data;
      const postOfTheWeekData = postOfTheWeekRes.data;

      if (!postsRes || postsRes.status !== 200 || !postsData) {
        setError(true);
        return;
      }

      setData(postsData);
      setPostOfTheWeek(postOfTheWeekData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    } finally {
      console.log("done");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postWeek = [
    {
      id: "",
      tag: ["Artificial Intelligence"],
      title: "The Invisible Threat: Shadow AI",
      summary:
        "Unmanaged AI use is not just a compliance issue; it's a direct threat to your data, intellectual property, and reputation. The rapid, uncontrolled adoption of consumer-grade AI tools by employees creates significant, often hidden, vulnerabilities.",
      featured_image: "/assets/blogImages/strategic-ai.png",
      author: "Taiwo Ojo",
      formatted_published_at: "11-8-2025",
      read_time: "2",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Alluvium Insights | alluvium.net</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Atlassian Best Practices, ITSM & Cloud Migration Tips. Explore the Alluvium Blog for expert insights on Atlassian solutions, ITSM, DevOps, and Agile management. Learn how to optimize Jira, Confluence, and Bitbucket for better performance."
        />
        <meta
          name="keywords"
          content="Alluvium blog, Atlassian blog, ITSM best practices, Jira tips, DevOps automation, Agile project management, cloud migration guides"
        />
      </Head>
      {/* {loading && (
        <LoadingScreen
          message={"Please wait while we fetch the list of blogs available"}
        />
      )} */}
      <EventsBanner
        heading={"The Alluvium blog"}
        title={"Latest articles"}
        subhead={
          "Stay informed on industry trends and the future of work with insights and updates from thought leaders at Atlassian and Alluvium."
        }
        backgroundImage={
          "/assets/Alluvium-Redesign-2026/blogs/hero-section.png"
        }
      />

      {postWeek?.map((postOfTheWeek, i) => (
        <FeaturedPost
          img={postOfTheWeek?.featured_image}
          tags={postOfTheWeek?.tag}
          date={postOfTheWeek?.formatted_published_at}
          readTime={postOfTheWeek?.read_time + " mins read"}
          title={postOfTheWeek?.title}
          summary={postOfTheWeek?.summary}
          author={postOfTheWeek?.author}
        />
      ))}

      <ArticleGrid articles={data?.results} />

      <CtaSection />

      {/* {error && (
        <section className="">
          <div
            className=" text-center py-5"
            style={{
              maxWidth: "1272px",
              borderRight: "1px solid #e0e0e0",
              borderLeft: "1px solid #e0e0e0",
              paddingRight: "2rem",
              paddingLeft: "2rem",
              margin: "auto",
            }}
          >
            <p>Something went wrong, please try again or contact Admin</p>
            <Button onClick={() => fetchData()}>Refresh</Button>
          </div>
        </section>
      )} */}

      {/* {!error && !loading && (
        <>
          <section className={styles.hero__blog__heading}>
            <div className={styles.sub__head__hero}>
              <div className={styles.hero__subhead}>
                <HeroHeading
                  variant="primary"
                  withLink={true}
                  heading="Atlassian Best Practices, ITSM & Cloud Migration Tips."
                  subhead="Explore the Alluvium Blog for expert insights on Atlassian solutions, ITSM, DevOps, and Agile management. Learn how to optimize Jira, Confluence, and Bitbucket for better performance."
                  subsec={"BLOG"}
                />
              </div>

              {postWeek.map((postOfTheWeek, i) => (
                <div className={styles.article__hero}>
                  <Link href={`/blogs/aipolicy`} passHref>
                    <div className={styles.dhcs__main}>
                      <div style={{ width: "100%" }}>
                        <Image
                          src={postOfTheWeek?.featured_image}
                          width={600}
                          height={420}
                          alt="dhcs"
                          style={{
                            width: "100%",
                            height: "fit-content",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                      <div>
                        <div className={styles.indusrty__heading}>
                          {postOfTheWeek?.tag?.map((tag, i) => (
                            <p className={styles.industry} key={i}>
                              <span key={i}>{tag}</span>
                            </p>
                          ))}
                        </div>

                        <h4>
                          {postOfTheWeek?.title || "Blog Title not found"}
                        </h4>
                        <div className={styles.dhcs__content}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: postOfTheWeek?.summary,
                            }}
                          />
                        </div>
                        <CardBlogDetails
                          name={`${postOfTheWeek?.author}` || "James Akinlabi"}
                          blogDate={postOfTheWeek?.formatted_published_at}
                          minRead={postOfTheWeek?.read_time + " mins read"}
                        />
                        <button>
                          Read now
                          <span>
                            <FaArrowRightLong />
                          </span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.cards}>
            <div className={styles.cards__details}>
              <div className={styles.card__encap}>
                {data?.results?.length > 0 &&
                  data?.results?.map((item, i) => {
                    return (
                      <CaseCard
                        variant="secondary"
                        url={`/blogs/${item?.slug}`}
                        imgAlt={item?.title}
                        width={357}
                        height={191}
                        // industry={item?.title2 || "ARTIFICIAL INTELLIGNECE"}
                        // industry1={item?.title1 || "CONFLUENCE"}
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
                    );
                  })}
              </div>
            </div>
          </section>
        </>
      )} */}
    </Layout>
  );
};

export default Blogs;
