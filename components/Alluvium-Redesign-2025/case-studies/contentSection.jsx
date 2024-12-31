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
              <div className={styles.subcontent} key={i}>
                {/* sub content with just paragraph */}

                <h4>{item?.highlightHeading}</h4>
                {item?.Highlightpargraph &&
                  item?.Highlightpargraph.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
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
        {/* <div className={styles.subcontent}>
          <h4>The Solution</h4>
          <p>Our client needed us to come in and assess the situation by:</p>

          <div>
            <ul>
              <li>Presenting a cost-efficient solution</li>
              <li>Deploying and training their staff</li>
              <li>
                Delivering a secure migration to simplify the internal processes
              </li>
            </ul>
          </div>

          <p>
            We presented two options to our client to choose from. The first
            option was a Server to DC migration and the second was a Server to
            Cloud migration.
          </p>

          <p>
            The second option Server to Cloud was chosen by us and approved by
            the client. Our solution needed to meet their specific requirements
            - they wanted a SaaS solution that was cost-efficient and easy to
            implement. In addition to this, it was the company’s policy to move
            to Cloud.
          </p>
        </div>

        <div className={styles.subcontent__img}>
          <Image
            src="/assets/redesign-2025/case-studies/furistic.png"
            width={686}
            height={425}
            alt="furistic"
          />
        </div>

        <div className={styles.subcontent}>
          <h4>The Result</h4>

          <div>
            <ul>
              <li>
                Our client saved costs by having in-house administrators who
                were trained by us to manage their tools and reduced the
                involvement of third-party’s network.
              </li>
              <li>
                A Cloud instance was set up a month early before their tendency
                agreement with the third party ended.
              </li>
              <li>
                Jira Service Management was chosen as their tickets tracking
                tool.
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContentSection;
