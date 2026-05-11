import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/cloud-upgrade/cjr.module.scss";
import Image from "next/image";

const CJRAdvantage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentLayout}>
          {/* Image Side */}
          <Image
            src="/assets/Alluvium-Redesign-2026/services/cjr-tool.png"
            alt="CJR Tool Interface"
            //   className={styles.feature8Image}
            width={547}
            height={382}
          />

          {/* Text Side */}
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>
              <span className={styles.highlight}>
                Our Proprietary Precision:
              </span>
              <span className={styles.mainTitle}> The CJR Advantage</span>
            </h2>
            <p className={styles.description}>
              Unlike other partners who rely on manual spot-checks, we use our
              own CJR (Compare Jira Resources) tool to programmatically verify
              every scheme, project, and issue. This eliminates human error and
              guarantees a 1:1 match between your old server and new cloud
              instance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CJRAdvantage;
