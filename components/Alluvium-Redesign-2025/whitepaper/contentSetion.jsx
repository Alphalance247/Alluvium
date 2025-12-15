import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import HeadingText from "./heading";

const ContentSection = () => {
  const share = [
    {
      id: "",
      content: "",
      img: "",
    },
  ];
  return (
    <section className={styles.content__section}>
      <div className={styles.heading__setion}>
        <div className={styles.name__section}>
          <p className={styles?.title}>
            {" "}
            <span className={styles.sub}>By:</span> Taiwo Ojo, CEO, Alluvium
          </p>
          <p className={styles?.title}>
            <span className={styles.sub}>Delivered By: </span>
            Alluvium, Atlassian Solution Partner with over 10,000 hours of
            Atlassian implementations every year and expertise with Financial
            Services globally
          </p>
        </div>

        <div>
          {share?.map((el, i) => (
            <div key={i}>
              <img src="" alt="" />
              <p>Share</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sub__topic}>
        <p className={styles.unified__p}>
          The Unified Service Nexus: Achieving CBN Compliance, Customer Delight,
          and Competitive Velocity in Nigerian Financial Institutions
        </p>

        <hr className={styles.hr} />
      </div>

      <div className={styles.content__body}>
        <div className={styles?.executive__summary}>
          <div className={styles?.content__encap}>
            <div>
              <p className={styles.summary}>Executive Summary:</p>
              <div
                style={{
                  width: "80%",
                  marginTop: "14px",
                  marginBottom: "1.5rem",
                }}
              >
                <HeadingText
                  text1={"I. The Atlassian-Alluvium Compliance Blueprint"}
                  heading={true}
                />
              </div>

              <HeadingText
                text2={"The Mandate: Compliance as a Service Delivery Metric"}
                subhead={true}
              />
              <div>
                <p className={`${styles.ptag} `}>
                  The Central Bank of Nigeria (CBN) has established a stringent
                  regulatory environment for Financial Institutions (FIs)
                  through the Consumer Protection Regulations (2019), which
                  mandate that complaint redress mechanisms must be{" "}
                  <span className={`${styles.psubtag}`}>
                    "free, fair, timely, transparent, accessible and
                    independent".
                  </span>
                </p>

                <HeadingText
                  text3={`For Nigerian FIs, operational excellence is now defined by
              demonstrable adherence to these rules, turning Service Level
              Agreements (SLAs) into high-stakes regulatory mandates. Failure to
              comply with the 7-day ATM refund period or the 14-day general
              complaint resolution window results in financial penalties and
              regulatory escalation.`}
                  paragraph={true}
                />
                <HeadingText
                  text3={`This whitepaper details how the strategic implementation of the
              Atlassian Service Collection, guided by the deep, global financial
              services expertise of Alluvium Solutions, transforms this
              regulatory burden into a source of competitive advantage.`}
                  paragraph={true}
                />
              </div>
            </div>

            <div>
              <HeadingText
                text2={
                  "The Alluvium Advantage: Implementing Verified Compliance at Scale"
                }
                subhead={true}
              />

              <div className={styles.sub__text}>
                <p className={styles?.ptag}>
                  As a leading Atlassian Solution Partner, Alluvium Solutions
                  brings over 10,000 hours of implementation expertise annually
                  to the Nigerian financial sector, including specialized
                  experience deploying solutions for banks, insurance companies,
                  and brokerage firms globally. Our implementation approach
                  focuses on achieving the following measurable outcomes
                </p>

                <div>
                  <ul className={styles.under}>
                    <li className={styles.list__disc}>
                      <span className={styles.certainty}>
                        Regulatory Certainty:
                      </span>{" "}
                      The platform ensures immutable correspondence linkage
                      through the JSM Audit Log, satisfying the CBN's
                      requirement for a "durable" and verifiable record.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            width={191}
            height={251}
            src="/assets/redesign-2025/whitepaper/Download.png"
            alt="white paper dowload"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
