import Layout from "components/layout";
import styles from "../../styles/Blogs/blogs.module.scss";
import Image from "next/image";
import Articles from "components/blog-component/article";
import Head from "next/head";

const Blogs = () => {
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
      <section className={styles.hero__blog}>
        <div className={styles.hero__overlay}></div>
        <h1>Blog, Insights & News</h1>
      </section>

      <section className={`container-fluid  ${styles.insight__section}`}>
        <div className="container mx-auto">
          <div>
            <input
              type="text"
              className={styles.insight__input}
              placeholder="Search our insights"
              style={{
                filter: "drop-shadow(0px 4px 250px rgba(255, 201, 62, 0.18))", // Yellow shadow with blur and opacity
              }}
            />
          </div>

          <div className={styles.team24__blog}>
            <div className={styles.Image}>
              <Image
                src="/assets/blogImages/team24recap.png"
                alt="team24recap"
                width={710}
                height={389}
              />
            </div>
            <div>
              <h2>From Africa with love: A recap of Atlassian Team 24 event</h2>
              <p>
                We experienced a lot of goodness in Vegas that we can’t just
                keep it to ourselves.
              </p>
            </div>
          </div>

          <div className={styles.blogs__cards}>
            <p className={styles.latest}>Latest Release</p>
            <Articles />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
