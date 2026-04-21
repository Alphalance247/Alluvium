import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/about/about-alluvium.module.scss";
import Image from "next/image";

const AboutGrid = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <div className={styles.layout}>
          {/* Staggered Image Container */}
          {/* <div className={styles.imageMasonry}> */}
          <Image
            height={580}
            width={543}
            //   className={styles.img1}
            src="/assets/Alluvium-Redesign-2026/about/ceo.png"
            alt="Team Working"
          />
          {/* </div> */}

          {/* About Text Content */}
          <article className={styles.textContent}>
            <div className={styles.badge}>About Alluvium</div>

            <h2>Driving Digital Transformation with Atlassian Expertise</h2>

            <div className={styles.description}>
              <p>
                Welcome to Alluvium, where innovation meets expertise. We are a
                team of passionate professionals dedicated to providing
                businesses with cutting-edge solutions leveraging the Atlassian
                suite of tools. Our aim is to simplify the complexity of digital
                transformation and help our clients achieve their goals with
                ease and efficiency.
              </p>
              <p>
                At Alluvium, we believe in delivering more than just products
                and services. We strive to provide a unique and personalized
                experience for each of our clients, understanding their specific
                needs and providing customized solutions. Our unique value
                proposition lies in our extensive expertise in the Atlassian
                platform, combined with a focus on innovation and a commitment
                to excellence.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;
