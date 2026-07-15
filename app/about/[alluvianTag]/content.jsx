"use client";
import React from "react";
import Layout from "components/layout";
import styles from "../../../styles/teammatepage.module.scss";

export default function Teammate({ teamMate }) {
  const { firstName, lastName, role, imgUrl, dept, fruit, hobbies } = teamMate;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Layout>
      <div className={styles.teammatePageContainer}>

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

