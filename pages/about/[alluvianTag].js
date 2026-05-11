import React from "react";
import Head from "next/head";
import { teamData, productData } from "../../data";
import Layout from "components/layout";
import styles from "../../styles/teammatepage.module.scss";

export default function Teammate({ teamMate, products }) {
  const { firstName, lastName, role, imgUrl, dept, fruit, hobbies } = teamMate;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Layout>
      <div className={styles.teammatePageContainer}>
        <Head>
          <title>
            {`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(
              lastName,
            )}`}{" "}
            | Alluvium{" "}
          </title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content={`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(
              lastName,
            )} Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira`}
          />
        </Head>

        <main className={styles.teammatePage}>
          <section className={styles.teammate}>
            <div className={styles.teammateFavorites}>
              <div className={styles.teammateFavorite}>
                <h3 className={styles.question}>
                  If you were a fruit what would you be?
                </h3>
                <p className={styles.answer}>{fruit}</p>
              </div>
              <div className={styles.teammateFavorite}>
                <h3 className={styles.question}>
                  When I’m not working I enjoy -
                </h3>
                <p className={styles.answer}>{hobbies}</p>
              </div>
            </div>
            <div className={styles.teammateProfile} data-aos="zoom-in">
              <div className={styles.teammateImg}>
                <img src={imgUrl} alt={`${firstName} ${lastName}`} />
              </div>
              <div className={styles.teammateInfo}>
                <h2 className={styles.name}>{`${firstName} ${lastName}`}</h2>
                <p className={styles.role}>{role}</p>
                <p className={styles.dept}>{dept}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const teamArr = teamData.filter(
    (alluvian) => alluvian.alluvianTag.toString() === params.alluvianTag,
  );
  return {
    props: {
      teamMate: teamArr[0],
      products: productData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = teamData.map((alluvian) => ({
    params: { alluvianTag: alluvian.alluvianTag.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
