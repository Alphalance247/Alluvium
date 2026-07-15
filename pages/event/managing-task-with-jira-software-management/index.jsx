import Button from "components/atlassian-service-reuse/Button";
import Layout from "components/layout";
import styles from "../../../styles/EventBanners/managingjirasoftware.module.scss";
import Image from "next/legacy/image";
import LeadForm from "../itsm-solutions/form/leadform";
import Link from "next/link";

const ManagingTaskWithJira = ({ variant = "primary" }) => {
  const timeData = [
    {
      date: "31st January 2025",
      icon: "/assets/events/jira-software-class/eventdate.svg",
    },
    {
      date: "11am",
      icon: "/assets/events/jira-software-class/eventtime.svg",
    },
  ];

  const featureData = [
    {
      icon: "/assets/events/jira-software-class/1.svg",
      heading: "Interactive Hands-on Sessions",
      subhead:
        "Practical exercises to apply Jira skills in real-world scenarios.",
    },
    {
      icon: "/assets/events/jira-software-class/4.svg",
      heading: "Expert-led Demonstrations",
      subhead: "Live walkthroughs of Jira tools and techniques by experts",
    },
    {
      icon: "/assets/events/jira-software-class/3.svg",
      heading: "Networking Opportunities",
      subhead: "Connect with professionals and industry leaders",
    },
    {
      icon: "/assets/events/jira-software-class/2.svg",
      heading: "Live Q&A with Experts",
      subhead: "Ask questions and get tailored advice from Jira experts.",
    },
  ];
  return (
    <Layout>
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
          <p className={styles.heading}> User group event</p>
          <h1>Managing Tasks with Jira Work Management</h1>
          <p className={styles.subhead}>
            Join us to explore practical tips and strategies for managing tasks
            with Jira Work Management. Transform the way your team works
          </p>
          <Link href="#form">
            <Button size="large">Register Here</Button>
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
                    <Image src={el?.icon} width={20} height={17} alt="icon" />
                    <p>{el?.date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.description__section} id="form">
        <div className={styles.description}>
          <p>
            Curious about how Jira Work Management can enhance your team's task
            handling? Join us on 31st January 2025 at 11am WAT for "Managing
            Tasks with Jira Work Management." Discover how this tool can
            streamline your workflows and boost productivity. See if it's the
            right fit for your organization.
          </p>

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
              <p className={styles.event}>Register here</p>
              <LeadForm
                dataUrl={
                  "https://api.leadconnectorhq.com/widget/form/HPY7IVD9x9Cl6Y8s4zd2"
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.speaker__section}>
        <div className={styles.imageContainer1}>
          <img src="/assets/events/jira-software-class/1.png" alt="" />
        </div>
        <div className={styles.speaker__section__heading}>
          <div className={styles.speaker}>
            <div>
              <Image
                src="/assets/events/jira-software-class/Speaker.svg"
                width={245}
                height={164}
                alt=""
              />
              <p className={styles.name}> Babade Adewole</p>
              <p className={styles.jobTitle}> Atlassian Consultant</p>
            </div>

            <Image
              src="/assets/events/jira-software-class/babs.png"
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
    </Layout>
  );
};

export default ManagingTaskWithJira;
