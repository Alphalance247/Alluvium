import Layout from "components/layout";
import styles from "../../styles/Blogs/blogs.module.scss";
import Image from "next/image";
import Articles from "components/blog-component/article";
import Head from "next/head";
import HeroHeading from "components/Alluvium-Redesign-2025/ReuseComponents/heroHeading";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CardBlogDetails from "components/Alluvium-Redesign-2025/ReuseComponents/cardBlogDetails";
import FilterComponent from "components/Alluvium-Redesign-2025/ReuseComponents/FilterComponent";
import { blogCards } from "data";
import CaseCard from "components/Alluvium-Redesign-2025/ReuseComponents/CaseCard";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LoadingScreen from "components/loading";
import { environment } from "env/env.local";
import Button from "components/atlassian-service-reuse/Button";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [postOfTheWeek, setPostOfTheWeek] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleSelected = (option) => {
    console.log(option);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     axios
  //       .get(`${environment?.blogBaseUrl2}api/blog/posts/`)
  //       .then((res) => {
  //         const data = res.data;
  //         if (!res || res.status !== 200 || !res.data) {
  //           setError(true);
  //           return;
  //         }

  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //         setError(true);
  //       })
  //       .finally(() => {
  //         console.log("done");
  //       });
  //   };

  //   fetchData();
  // }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postsRes, postOfTheWeekRes] = await Promise.all([
        axios.get(`${environment?.blogBaseUrl2}api/blog/posts/`),
        axios.get(
          `${environment?.blogBaseUrl2}api/blog/posts/post_of_the_week/`
        ),
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

  console.log(data, postOfTheWeek);

  return (
    <Layout>
      <Head>
        <title>Blogs | Alluvium</title>
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
      {loading && (
        <LoadingScreen
          message={"Please wait while we fetch the list of blogs available"}
        />
      )}

      {error && (
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
      )}

      {!error && !loading && (
        <>
          <section className={styles.hero__blog__heading}>
            <div className={styles.sub__head__hero}>
              <div className={styles.hero__subhead}>
                <HeroHeading
                  variant="primary"
                  withLink={true}
                  heading="Smart Atlassian Solutions for Seamless Cloud Migrations."
                  subhead="Stay ahead with expert insights, best practices, and the latest trends in Atlassian migration, cloud solutions, and data management. Empower your team with seamless collaboration and smarter workflows."
                  subsec={"BLOG"}
                />
              </div>

              {Object.keys(postOfTheWeek).length > 0 && (
                <div className={styles.article__hero}>
                  <Link href={`/blogs/${postOfTheWeek?.slug}`} passHref>
                    <div className={styles.dhcs__main}>
                      <div style={{ width: "100%" }}>
                        <img
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
                          {postOfTheWeek?.tag_names?.map((tag, i) => (
                            <p className={styles.industry} key={i}>
                              {tag}
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
                          name={
                            `${postOfTheWeek?.author?.first_name} ${postOfTheWeek?.author?.last_name}` ||
                            "James Akinlabi"
                          }
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
              )}
            </div>
          </section>

          {/* <section className={styles.search__blog}>
            <div className={styles.search__blog__grid}>
              <FilterComponent
                onSelect={handleSelected}
                options={[
                  "insurance",
                  "agriculture",
                  "business",
                  "academics",
                  "hospitality",
                ]}
                title="THEME"
              />
              <FilterComponent
                onSelect={handleSelected}
                options={[
                  "insurance",
                  "agriculture",
                  "business",
                  "academics",
                  "hospitality",
                  "",
                ]}
                title="INDUSTRY"
              />
              <FilterComponent
                onSelect={handleSelected}
                options={[
                  "insurance",
                  "agriculture",
                  "business",
                  "academics",
                  "hospitality",
                  "",
                ]}
                title="SERVICE"
              />

              <div className={styles.search}>
                <p>SEARCH</p>
                <input
                  type="text"
                  id=""
                  placeholder="Search projects"
                  value={""}
                />
              </div>
            </div>
          </section> */}

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
                    );
                  })}
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Blogs;
