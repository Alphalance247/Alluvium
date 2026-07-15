import Button from "components/atlassian-service-reuse/Button";
import Layout from "components/layout";
import styles from "../../../styles/EventBanners/managingjirasoftware.module.scss";
import Image from "next/legacy/image";
import LeadForm from "../itsm-solutions/form/leadform";
import Link from "next/link";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";

const ShadowAI = ({ variant = "secondary" }) => {
  const timeData = [
    {
      date: "26th March, 2025",
      icon: "/assets/events/jira-software-class/eventdate.svg",
    },
    {
      date: "3pm",
      icon: "/assets/events/jira-software-class/eventtime.svg",
    },
    {
      date: "London Chamber of Commerce",
      icon: "/assets/events/shadow-ai/location.svg",
    },
  ];

  const featureData = [
    {
      icon: "/assets/events/shadow-ai/4.svg",
      heading: "Unmasking Hidden AI",
      subhead: "Identify how Shadow AI operates within your organization.",
    },
    {
      icon: "/assets/events/jira-software-class/1.svg",
      heading: "Managing Risks",
      subhead:
        "Learn strategies for mitigating  security, compliance, and the  risks associated with Shadow AI.",
    },
    {
      icon: "/assets/events/jira-software-class/3.svg",
      heading: "Networking Opportunities",
      subhead: "Connect with industry leaders and peers to share insights. ",
    },
    {
      icon: "/assets/events/jira-software-class/2.svg",
      heading: "Live Q&A with Experts",
      subhead:
        "Get expert answers to your questions from AI governance specialists.",
    },
  ];
  return (
    <Layout withoutForm={true}>
      <section
        className={`${styles.jira__software__management__hero} ${
          styles[`jira__software__management__hero--${variant}`]
        }`}
      >
        <div
          className={`${styles.jira__software__management} ${
            styles[`jira__software__management--${variant}`]
          }
        `}
        >
          <h1>Shadow AI: The silent disruptor in business</h1>
          <p className={styles.subhead}>
            Join us to explore how Shadow AI is impacting businesses.
          </p>
          <Link href="#form">
            <Button size="large">Register Now</Button>
          </Link>

          <div className={`${styles.time} ${styles[`time--${variant}`]}`}>
            <div className={`${styles.timing} ${styles[`timing--${variant}`]}`}>
              {timeData.map((el) => {
                return (
                  <div
                    className={`${styles.actual__time} ${
                      styles[`actual__time--${variant}`]
                    }`}
                  >
                    <img src={el?.icon} width={21} height={21} alt="icon" />
                    <p>{el?.date}</p>
                    <p>{el?.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.description__section}>
        <div className={styles.description}>
          {variant === "secondary" && (
            <h3 className={styles.subheadAI}>
              Unlock the Secrets to Managing Shadow AI
            </h3>
          )}

          <div className={styles.feature__description__section}>
            <div>
              <p className={styles.event}>Event Features</p>
              <div className={styles.card__section}>
                {featureData.map((item) => {
                  return (
                    <div className={styles.card}>
                      <Image
                        src={item?.icon}
                        width={102}
                        height={98}
                        alt="icon"
                      />
                      <h4>{item?.heading}</h4>
                      <p className={styles.subhead}>{item?.subhead}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.form} id="form">
              <p className={styles.event}>Registration</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.speaker__section}>
        <div className={styles.imageContainer1}>
          <img src="/assets/events/jira-software-class/1.png" alt="" />
        </div>
        <div className={styles.speaker__section__heading}>
          <h5 className={styles.heading__title}>Our Speaker</h5>
          <div className={styles.speaker}>
            <div>
              <Image
                src="/assets/events/jira-software-class/Speaker.svg"
                width={245}
                height={164}
                alt=""
              />
              <p className={styles.name}>Taiwo Ojo</p>
              <p className={styles.jobTitle}>CEO & Technical Lead</p>
            </div>

            <Image
              src="/assets/events/shadow-ai/jaytee.png"
              width={426}
              height={378}
              alt="babs"
            />
          </div>
        </div>
        <div className={styles.imageContainer2}>
          <img src="/assets/events/jira-software-class/2.png" alt="" />
        </div>
      </section>

      <section className={styles.about__alluvium__section}>
        <div className={styles.about__us__content}>
          <div className={styles.about__uss}>
            <h4 className={styles.about}>About Us</h4>
            <p className={styles.sub__about}>
              Alluvium's Mission is to provide highly capable, experienced
              consultants and dependable managed services for a seamless digital
              transformation to give our clients and partners the advantage in
              their business environment. <br /> <br />
              We invite you to learn more about Alluvium and our commitment to
              excellence. Our team is dedicated to helping you succeed, and we
              look forward to the opportunity to work with you.
            </p>
            <Link href={"/"}>
              <Button size="large">Learn more</Button>
            </Link>
          </div>

          <Badges variant={"default"} badgesData={badges} />
        </div>
      </section>
    </Layout>
  );
};

export default ShadowAI;
