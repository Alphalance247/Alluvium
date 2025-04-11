import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/accelerating-incident/AboutSection.module.scss";
import Button from "components/cloud-connect-2/Button";
import Link from "next/link";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";

const AboutSection = () => {
  return (
    <section className={styles.mainContainer}>
      <main>
        <section className={styles.about__alluvium__section}>
          <div className={styles.about__uss}>
            <p className={styles.subhead}>About us</p>
            <h4 className={styles.about}>We Are Problem Solvers</h4>
            <p className={styles.sub__about}>
              Alluvium's Mission is to provide highly capable, experienced
              consultants and dependable managed services for a seamless digital
              transformation to give our clients and partners the advantage in
              their business environment. <br /> <br />
              We invite you to learn more about Alluvium and our commitment to
              excellence. Our team is dedicated to helping you succeed, and we
              look forward to the opportunity to work with you.
            </p>
            <Link href={"/"}>
              <Button size="large">Learn more</Button>
            </Link>
          </div>
          <Badges variant={"default"} badgesData={badges} />
        </section>
      </main>
    </section>
  );
};

export default AboutSection;
