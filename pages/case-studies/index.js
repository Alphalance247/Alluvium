import Head from "next/head";
import styles from "../../styles/casestudiespage.module.scss";
import Layout from "components/layout";
import { productData, caseStudiesData } from "../../data";
import Link from "next/link";
import { AltCaseStudyLink } from "components/caseStudyLink";

export default function Support({ products, caseStudies }) {
  return (
    <Layout>
      <div className={styles.casestudiesPage}>
        <Head>
          <title>Case Studies | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content={`Alluvium, alluvium,alluvium case studies, atlassian products case studies,  atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira`}
          />
        </Head>
        <section className={styles.hero}></section>
        <div className={`container ${styles.hero_section}`}>
          <h1>Case Studies</h1>
          <p>
            Explore more of our transformative projects that drive positive
            change in atlassian world and helped our clients achieve data
            migration goals.
          </p>
          <div className={styles.list}>
            {caseStudies.map((caseStudy) => {
              return (
                <Link
                  key={caseStudy.id}
                  href={"/case-studies/" + caseStudy?.caseStudyPageName}
                >
                  <a>
                    <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                  </a>
                </Link>
              );
            })}
          </div>

          {/* <button className={`btn ${styles.load_btn}`}>Load More</button> */}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
      caseStudies: caseStudiesData,
    },
  };
};

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <div key={caseStudy.id} className={styles.card}>
      <div
        className={styles.card_image}
        style={{ backgroundImage: `url(${caseStudy?.clientLogo})` }}
      >
        {/* <img style={{ width: "100%" }} src={caseStudy.details.displayImage} /> */}
      </div>
      <div className={styles.card_body}>
        <h2 className={styles.card_title}>
          {caseStudy.details.caseStudyTitle}
        </h2>
        <div className={styles.card_desc}>
          <span className={styles.card_content}>
            {caseStudy.details.description.slice(0, 220)}...
          </span>
        </div>
        <div className={styles.card_services}>
          {caseStudy.details.serviceProvided.split(", ").map((service) => (
            <div key={service} className={styles.card_service}>
              {service}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.card_footer}>
        <div>
          <span className={styles.card_footer_header}>Tools</span>
          <span className={styles.card_footer_body}>
            : {caseStudy.details.tools}
          </span>
        </div>
        <div>
          <span className={styles.card_footer_header}>Industry:</span>
          <span className={styles.card_footer_body}>
            {" "}
            {caseStudy.details.industry}
          </span>
        </div>
      </div>
    </div>
  );
};
