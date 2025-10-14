import React from "react";
import HeroHeading from "../ReuseComponents/heroHeading";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/HeroSection.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <main>
          <div className={styles.hero__head}>
            <HeroHeading
              variant="primary"
              withLink={true}
              heading="EMove Jira & Confluence with Alluvium."
              subhead="Migrate your Atlassian tools to the cloud with zero downtime. Alluvium helps teams securely move Jira, Confluence, and Bitbucket from server to Atlassian Cloud."
              subsec={"ATLASSIAN MIGRATION AND CONSOLIDATION"}
            />
            <Link className={styles.heroButton} href="/contact-us">
              <Button className={styles.heroButton} size="mediumL">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
