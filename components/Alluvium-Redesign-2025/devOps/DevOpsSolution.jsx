import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/devOps/DevOpsSolution.module.scss";
import Link from "next/link";
import Button from "components/atlassian-service-reuse/Button";

const DevOpsSolution = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <div className={styles.child1}>
          <h3>Transform Your Business with Our custom DevOps Solutions</h3>
        </div>
        <div className={styles.child2}>
          <p>
            Let`s discuss your unique needs and challenges, and we`ll develop a
            customized solution tailored specifically for your use case.
          </p>
          <Link className={styles.heroButton} href="/contact-us">
            <Button className={styles.heroButton} size="mediumL">
              Schedule a Demo
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DevOpsSolution;
