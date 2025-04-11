import styles from "../../../styles/AlluviumRedesign2025/CaseStudy/content-section.module.scss";
import Image from "next/image";

const ContentSection = ({ caseStudy }) => {
  const data = [
    {
      head: "Industry",
      subhead: "Agriculture",
      img: "/assets/redesign-2025/case-studies/svg/facebook.svg",
    },
    {
      head: "Tools USED",
      subhead: "Jira, Jira Service Management",
      img: "/assets/redesign-2025/case-studies/svg/x.svg",
    },
    {
      head: "Service Provided",
      subhead: "Data Migration, Cloud Instance Training",
      img: "/assets/redesign-2025/case-studies/svg/linkedIn.svg",
    },
    {
      head: "Duration",
      subhead: "5 months",
    },
  ];
  const image = data.slice(0, 3);
  return (
    <section className={styles.content__section}>
      <div className={styles.highlight}>
        <div className={styles.industry__encap}>
          {caseStudy?.details?.industry?.map((item, i) => {
            return (
              <div key={i} className={styles.industry}>
                <p className={styles.heading}>{item?.heading}</p>
                <p className={styles.subhead}>{item?.subHead}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.share}>
          <p>SHARE THIS STORY</p>

          <div className=" d-flex gap-3">
            {image.map((el) => {
              return (
                <a style={{ cursor: "pointer" }} href="#">
                  <Image src={el?.img} width={24} height={24} alt="socials" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {caseStudy?.content.map((item, i) => {
          if (item.type === "subcontent") {
            return (
              <div
                className={`${styles.subcontent} ${
                  item?.subTextAvailable
                    ? styles.noMargin
                    : styles.marginAvailable
                }`}
                key={i}
              >
                {/* sub content with just paragraph */}

                <h4>{item?.highlightHeading}</h4>
                {item?.Highlightpargraph &&
                  item?.Highlightpargraph.map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>
                      {paragraph}
                    </p>
                  ))}

                {/* sub content with paragraph and list */}

                {item?.list && (
                  <ul>
                    {item?.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}

                {item?.additionalText &&
                  item?.additionalText.map((text, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>
                      {text}
                    </p>
                  ))}
              </div>
            );
          }

          if (item?.type === "headingwithSublist") {
            return (
              <div
                className={`${styles.subcontent2} ${
                  item?.subTextAvailable
                    ? styles.noMargin
                    : styles.marginAvailable
                }`}
                key={i}
              >
                {item?.Highlightpargraph &&
                  item?.Highlightpargraph.map((paragraph, i) => (
                    <p key={i} style={{ marginBottom: "1rem" }}>
                      {paragraph}
                    </p>
                  ))}

                {item?.list && (
                  <ul>
                    {item?.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          if (item?.type === "subsubList") {
            return (
              <div className={styles.subsub__list}>
                {item?.list && (
                  <ul>
                    {item?.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          }

          if (item?.type === "image") {
            return (
              <div className={styles.subcontent__img} key={i}>
                <Image
                  src={item?.src}
                  width={item?.width}
                  height={item?.height}
                  alt={item?.alt}
                />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default ContentSection;
