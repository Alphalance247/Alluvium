import Image from "next/image";
import styles from "../../styles/blogpost.module.scss";
import { blogheading } from "./blogdata";
import ContentList from "./blogdata";
import Introduction from "./introduction";
import AtlassianPartner from "./atlassianpartner";
import WorkWithAtlassian from "./workwithatlassian";
import Benefit from "./atlassianwork";
import ChoosingAlluvium from "./chooseAlluvium";
import Lifecycle from "./lifecycle";
import Conclusion from "./conclusion";
import { useState } from "react";

const ContentTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleToggle = (i) => {
    setActiveTab(i);
  };

  return (
    <section className={`container m-auto ${styles.contentB}`}>
      <div className={`${styles.blogimg}`}>
        <Image
          src="/assets/blog-images/shaking.png"
          width={1216}
          height={574}
          alt="shape"
        />
      </div>

      <div className={`${styles.innerContent}`}>
        <div className={styles.styleTab}>
          <p className={styles.styleP}>TABLE OF CONTENT</p>
          {blogheading.map((data, i) => (
            <div
              key={data.id}
              onClick={() => handleToggle(i)}
              className={`${styles.heading}`}
            >
              <p className={`${activeTab === i ? styles.active : ""}`}>
                {data.heading}
              </p>
            </div>
          ))}
        </div>

        <div className={`${styles.contentListing}`}>
          {activeTab === 1 && <AtlassianPartner />}
          {activeTab === 2 && <WorkWithAtlassian />}
          {activeTab === 3 && <Benefit />}
          {activeTab === 4 && <ChoosingAlluvium />}
          {/* {activeTab === 5 && <Lifecycle />} */}
          {activeTab === 6 && <Conclusion />}
          {activeTab === 0 && (
            <>
              <Introduction />
              <AtlassianPartner />
              <WorkWithAtlassian />
              <Benefit />
              <ChoosingAlluvium />
              {/* <Lifecycle /> */}
              <Conclusion />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentTab;
