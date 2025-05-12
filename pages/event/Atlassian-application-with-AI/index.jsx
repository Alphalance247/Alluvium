import Button from "components/atlassian-service-reuse/Button";
import Layout from "components/layout";
import styles from "../../../styles/EventBanners/managingjirasoftware.module.scss";
import Image from "next/image";
import LeadForm from "../itsm-solutions/form/leadform";
import Link from "next/link";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import { badges } from "data";

const AtlassianApplication = ({ variant = "tertiary" }) => {
  const timeData = [
    {
      date: "12th June, 2025",
      icon: "/assets/events/jira-software-class/eventdate.svg",
    },
    {
      date: "3pm",
      icon: "/assets/events/jira-software-class/eventtime.svg",
    },
    {
      date: "Zoom",
      icon: "/assets/events/shadow-ai/location.svg",
    },
  ];

  const featureData = [
    {
      icon: "/assets/events/shadow-ai/4.svg",
      heading: "AI-Powered Workflows in Jira",
      subhead: " Discover how AI streamlines repetitive tasks in Jira",
    },
    {
      icon: "/assets/events/jira-software-class/1.svg",
      heading: "Predictive Insights with Confluence AI",
      subhead: "Gain real-time insights and predictions with Confluence",
    },
    {
      icon: "/assets/events/jira-software-class/3.svg",
      heading: "Smarter Project Planning with AI",
      subhead:
        " Enhance project planning and reporting with smarter strategies",
    },
    {
      icon: "/assets/events/jira-software-class/2.svg",
      heading: "Real-World AI Use Cases",
      subhead: "Examine use cases that promote efficiency and innovation",
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
          <h1>AI in Atlassian Applications</h1>
          <p className={styles.subhead} style={{ color: "#141414" }}>
            Join us on June 12, 2025, at 3 PM UK for an exclusive virtual event
            featuring Taiwo Ojo. Together, we will explore the future of
            artificial intelligence in Atlassian tools such as Jira and
            Confluence.
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
          {variant === "tertiary" && (
            <>
              <h3 className={styles.subheadAI}>
                Discover the Future of Work with AI in Atlassian
              </h3>

              <p className={styles.subheadAIsub}>
                Explore the revolutionary impact of AI on the Atlassian
                ecosystem. This session is tailored for project managers,
                developers, team leads, and anyone eager to leverage automation,
                insights, and AI-driven productivity.
              </p>
            </>
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
              <LeadForm
                dataUrl={
                  "https://api.leadconnectorhq.com/widget/form/XkOMSJvFcmw5xB4G96Jj"
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.speaker__section}>
        {/* <div className={styles.imageContainer1}>
          <img src="/assets/events/jira-software-class/1.png" alt="" />
        </div> */}
        <div className={styles.speaker__section__heading}>
          <div className={styles.speaker}>
            <div className={styles.speaker__details}>
              <p className={styles.meet__speaker}>Meet the Speaker</p>
              <p className={styles.name}>Taiwo Ojo</p>
              <p className={styles.jobTitle}>CEO & Technical Lead</p>
              <p className={styles.description}>
                Taiwo serves as the CEO of Alluvium Hq, an Atlassian solution
                and marketplace partner. As a prominent advocate for AI and
                enterprise productivity, he brings extensive hands-on experience
                in integrating artificial intelligence within Atlassian
                environments. His pragmatic and innovative approach empowers
                businesses to fully leverage the capabilities of smart
                collaboration tools.
              </p>
            </div>

            <Image
              src="/assets/events/shadow-ai/jaytee.png"
              width={426}
              height={378}
              alt="babs"
            />
          </div>
        </div>
        {/* <div className={styles.imageContainer2}>
          <img src="/assets/events/jira-software-class/2.png" alt="" />
        </div> */}
      </section>

      <section className={styles.about__alluvium__section}>
        <div className={styles.about__us__content}>
          <div className={styles.about__uss}>
            <h4 className={styles.about}>Powered by Alluvium HQ</h4>
            <p className={styles.sub__about}>
              As an official Atlassian Solution Partner, we are committed to
              empowering teams to excel through innovative tools and effective
              strategies.
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

export default AtlassianApplication;
