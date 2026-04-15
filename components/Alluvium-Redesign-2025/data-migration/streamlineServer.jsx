import Image from "next/image";
import Heading from "../heading";
import ReadMore from "../ReuseComponents/readmore";
import styles from "../../../styles/AlluviumRedesign2025/DataMigration/DataMigration.module.scss";

const StreamlineServer = () => {
  return (
    <div className={styles.streamline__server}>
      <Image
        src="/assets/redesign-2025/data-migration/OurMission1.webp"
        width={635}
        height={523}
        alt="hii"
      />
      <div className={styles.infoChild}>
        <Heading
          title="INSURANCE"
          heading="Streamlining Server to Atlassian Cloud Migration for an Insurance Company"
          subhead="An insurance and asset management company sought to enhance Atlassian product user experiences and optimize performance across its entire organization. They turned to our team of certified experts with a profound knowledge base in Jira and Confluence to find a solution."
          titleVariant="whiteVar"
          variant="tertiary"
        />
        <div className={styles.readMore}>
          {/* <ReadMore content={"Read More"} /> */}
        </div>
      </div>
    </div>
  );
};

export default StreamlineServer;
