import HeroSection from "components/Alluvium-Redesign-2025/data-migration/HeroSection";
import Layout from "components/layout";
import React from "react";
import styles from "../../styles/AlluviumRedesign2025/DataMigration/DataMigration.module.scss";
import Checklist from "components/Alluvium-Redesign-2025/data-migration/Checklist";

const DataMigration = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <div className={styles.section2}>
          <main>
            <div className={styles.content}>
              <h3 className={styles.title}>
                Atlassian Server to Cloud Migration
              </h3>
              <p className={styles.description}>
                From strategy to execution, our team of experts will provide the
                utmost guidance and smooth delivery throughout your data
                migration journey. We’ll help your team prepare for Cloud or
                Data Center migration by scrutinizing your systems and focusing
                on the estimation process and timeframe during business hours.{" "}
              </p>
              <p className={styles.description}>
                Moving forward, we'll conduct an in-depth analysis of the
                finances and technical aspects of your project and evaluate any
                probable risks. We ultimately get the job done and smoothly
                delivered—no dent, no stain. Just sit back and watch us bring
                your migration dream to life.
              </p>
            </div>
          </main>
        </div>
        <Checklist />
      </Layout>
    </div>
  );
};

export default DataMigration;
