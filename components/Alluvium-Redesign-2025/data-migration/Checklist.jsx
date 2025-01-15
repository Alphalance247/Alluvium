import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/Checklist.module.scss";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="https://support.portal.alluvium.net/servicedesk/customer/portal/59/group/181/create/691">
              <button>Take Me to the Checklist</button>
            </Link>
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
