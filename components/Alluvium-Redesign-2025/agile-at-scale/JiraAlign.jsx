import React from "react";
import styles from "../../../styles/AlluviumRedesign2025/agile-at-scale/JiraAlign.module.scss";
import ReusableSection from "../ReuseComponents/ReusableSection";
import Image from "next/image";

const JiraAlign = () => {
  return (
    <div className={styles.mainContainer}>
      <main>
        <div className={styles.mainDiv}>
          <ReusableSection
            icon={"/assets/redesign-2025/agile-at-scale/JiraAlign.webp"}
            title={"Agile At Scale solutions with Jira Align"}
            description={
              "In the dynamic world of modern business, adaptability is paramount for achieving success. To truly embody agility at scale, reliance on more than mere sticky notes is crucial. Essential components include enhanced work visibility, precise reporting, a collective grasp of customer value, and seamless vertical alignment among teams, all pivotal for success."
            }
            height={84}
            width={148}
            noLine={true}
            isColumn={true}
          />
        </div>
        <Image
          src="/assets/redesign-2025/agile-at-scale/JIraAlignImage.webp"
          alt="jira align"
          width={1278}
          height={746}
        />
      </main>
    </div>
  );
};

export default JiraAlign;
