import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/hr/hr-vertical.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Modal from "./modal";
import { useState } from "react";
import CalendlyWidget from "components/calendlyWidget";
import LeadForm from "pages/event/itsm-solutions/form/leadform";
import { useRef } from "react";
import useSticky from "components/customhooks/UseSticky";

const Home = () => {
  const { sectionRef, isSticky } = useSticky();
  const [open, setOpen] = useState(false);
  const data = [
    {
      loom_link: "https://www.loom.com/embed/46553fd141484421ab654cd6e1afdc9a",
      subtext: "One Atlassian - HR - Onboarding ",
    },
    {
      loom_link: "https://www.loom.com/embed/b8fad43fd31d413b82b72c44387fb45e",
      subtext: "JSM Help Centre Overview",
    },
    {
      loom_link: "https://www.loom.com/embed/d0fba73325cc47559f5840a2b2487bfa",
      subtext: "Enhancing Customer Experience with Virtual Agents and AI 🤖 ",
    },
    {
      loom_link: "https://www.loom.com/embed/103bbe1353df42fe8d558afdc87585d3",
      subtext: "One Atlassian - HR Raise HR Case",
    },
    {
      loom_link: "https://www.loom.com/embed/64bfecff9f0f4a9b944bfa51ae17ff8c",
      subtext: "One Atlassian - HR Questions for HR",
    },
  ];
  return (
    <Layout>
      <Head>
        <title>HR-vertical | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
        />
        <meta
          name="keywords"
          content="Alluvium, alluvium, team alluvium, atlassian products migration lab, migration, about alluvium, alluvians, cloud counter, Migration Experts, Software Consulting atlassian, confluence, jira"
        />
      </Head>

      <section className={styles.hr__vertical}>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <CalendlyWidget />
        </Modal>
        <div className={styles?.hr__vertical__subhead}>
          <div className={styles?.hr__hero}>
            <p className={styles.hr__p}>ATLASSIAN HR DEMO</p>
            <h2 className={styles.hr__h2}>Optimizing HR Workflows</h2>
            <p className={styles.hr__para}>
              Leverage insights across onboarding, employee engagement, assets
              management and retention with Atlassian’s HR Analytics solutions.
            </p>
          </div>

          <div className={styles.video__section} ref={sectionRef}>
            <div className={styles.video__encap}>
              {data?.map((video, i) => (
                <div className={styles.video__1} key={i}>
                  <iframe
                    src={video?.loom_link}
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />

                  <div className={styles?.video__caption}>
                    <p>
                      Information + help organised by subject, rather than
                      departments/teams
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`${styles.video__encap} ${
                isSticky ? styles?.sticky : ""
              }`}
            >
              <div className={styles.book__call}>
                <div className={styles.book__call__text}>
                  <p className={styles.book__p}>Book a Meeting</p>
                  <p className={styles.book__question}>
                    Have questions or need assistance? Reach out to us for
                    support, inquiries, or feedback, and our team will get back
                    to you promptly.
                  </p>
                </div>

                <div className={styles?.btn__call}>
                  <Button
                    size="xxlarge"
                    className=" w-100"
                    onClick={() => setOpen(true)}
                  >
                    Book a Meeting
                  </Button>
                </div>
              </div>

              <LeadForm dataUrl={"https://zcform.com/LluxD"} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
