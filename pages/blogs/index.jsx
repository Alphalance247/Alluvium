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

const Blogs = () => {
  const handleSelected = (option) => {
    console.log(option);
  };
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

          <div className={styles.article__hero}>
            <Link
              href="/atlassian-cloud-migration-case-studies/california-DHCS-saves-millions-with-atlassian-cloud-modernization"
              passHref
            >
              <div className={styles.dhcs__main}>
                <div>
                  <Image
                    src="/assets/blogImages/artificial.png"
                    width={627}
                    height={420}
                    alt="dhcs"
                  />
                </div>
                <div>
                  <div className={styles.indusrty__heading}>
                    <p className={styles.industry}>FEATURED ARTICLE</p>
                    <p className={styles.industry}>ARTIFICIAL INTELLIGNECE</p>
                    <p className={styles.industry}>CONFLUENCE</p>
                  </div>
                  <h4>
                    Shadow AI: The Hidden Threat Lurking in Your Organization
                  </h4>
                  <p className={styles.dhcs__content}>
                    Explore more of our transformative projects that drive
                    positive change in atlassian world and helped our clients
                    achieve data migration goals.
                  </p>
                  <CardBlogDetails />
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
        </div>
      </section>

      <section className={styles.search__blog}>
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
            <input type="text" id="" placeholder="Search projects" value={""} />
          </div>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card__encap}>
          {blogCards.map((item, i) => {
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
      </section>

      {/* <section className={`${styles.cloud__main__hero}`}>
        <div className={styles.article__hero}>
          <Link
            href="/atlassian-cloud-migration-case-studies/california-DHCS-saves-millions-with-atlassian-cloud-modernization"
            passHref
          >
            <div className={styles.dhcs__main}>
              <div>
                <Image
                  src="/assets/blogImages/artificial.png"
                  width={627}
                  height={420}
                  alt="dhcs"
                />
              </div>
              <div>
                <p className={styles.dhcs__head}>HEALTH</p>
                <h4>
                  California’s Health Department saved millions with Atlassian
                  Cloud Enterprise
                </h4>
                <p className={styles.dhcs__content}>
                  DHCS centralized with Atlassian and upgraded to an Enterprise
                  Cloud plan. With more than 1,000 active users and counting,
                  DHCS is targeting 4000 users by the end of 2024 as the largest
                  California state agency on Atlassian Cloud Enterprise.
                </p>

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
      </section> */}

      {/* <section className={styles.hero__blog}>
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
      </section> */}
    </Layout>
  );
};

export default Blogs;
