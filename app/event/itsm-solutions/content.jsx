"use client";
import Layout from "components/layout";
import Image from "next/legacy/image";
import styles from "../../../styles/eventpage.module.scss";
import LeadForm from "components/leadform";

const ItsmSolution = () => {
  return (
    <Layout>
      <section className={`container-fluid ${styles.itsmHero}`}>
        <div className={`${styles.groupEvent}`}>
          <div className="">
            <p className={`${styles.users}`}>Alluvium User Group Event</p>
            <Image
              src="/assets/events/itsmimg.svg"
              width={659}
              height={223}
              alt="itsm"
            />
            <p>
              Are you curious about Jira Service Management (JSM) but unsure if
              it's the right fit for your business? Join us for an insightful
              discussion on July 13th, 10 am WAT at the Alluvium User Group
              event: JSM vs. Other ITSM Solutions: A Head-to-Head Comparison
            </p>
            <div className={`${styles.imgaws}`}>
              <Image
                src="/assets/events/awsimg.svg"
                width={500}
                height={106}
                alt="certifications"
              />
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
      <section className={`container-fluid ${styles.speakersection}`}>
        <div className={`container px-5 ${styles.spearkersStore}`}>
          <p className={`${styles.spearkersPara}`}>What’s in store</p>

          <div className={`${styles.titleDivsUl}`}>
            <ul>
              <li>AI offerings from different ITSM solutions</li>
              <li>
                The key features and functionalities of JSM compared to other
                leading ITSM solutions.
              </li>
              <li>
                Identifying the ideal ITSM solution for your specific business
                needs.
              </li>
              <li>
                Leveraging JSM to streamline your IT service desk operations and
                boost customer satisfaction.
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.meet}>Meet our speakers</p>
            <div className={styles.meetingssp}>
              <div>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/assets/events/jaytee.svg"
                    width={278}
                    height={298}
                    alt="speakers"
                    className={`${styles.imgaws}`}
                  />
                </div>
                <p className={`${styles.spname}`}>Taiwo Ojo</p>
                <p className={`${styles.sptitle}`}>Lead Atlassian Practice</p>
              </div>

              <div>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/assets/events/isaac.svg"
                    width={278}
                    height={298}
                    alt="speakers"
                    className={`${styles.imgaws} `}
                  />
                </div>
                <p className={`${styles.spname}`}>Adebayo Isaac</p>
                <p className={`${styles.sptitle}`}>Lead, Alluvium ITSM Team</p>
              </div>

              <div>
                <div style={{ textAlign: "center" }}>
                  <Image
                    src="/assets/events/ralph.svg"
                    width={278}
                    height={298}
                    alt="speakers"
                    className={`${styles.imgaws}`}
                  />
                </div>
                <p className={`${styles.spname}`}>Muritala Ralpheal</p>
                <p className={`${styles.sptitle}`}>Lead Advocate Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ItsmSolution;
