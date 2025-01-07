import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/Checklist.module.scss";
import Image from "next/image";

const Checklist = () => {
  return (
    <div className={styles.sectionMain}>
      <main>
        <div className={styles.content}>
          <div className={styles.section1}>
            <h4>The Essential Migration Checklist</h4>
            <p style={{ marginTop: "32px" }}>
              Is your organization ready to migrate from Server to Atlassian
              Cloud?
            </p>
            <p style={{ marginBottom: "32px" }}>
              Fill in our 5-minute checklist created by our Atlassian experts
              and discover if <br /> you have everything in place to migrate
              successfully to Atlassian Cloud.
            </p>
            <button>Take Me to the Checklist</button>
          </div>
          <div className={styles.section2}>
            <Image
              src={"/assets/redesign-2025/data-migration/OBJECTS.webp"}
              alt="checklist"
              width={294}
              height={291}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checklist;
