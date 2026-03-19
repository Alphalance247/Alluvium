import React from "react";
import Head from "next/head";
import Layout from "components/layout";
import styles from "../../styles/AlluviumRedesign2025/hr/hr-vertical.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Modal from "./modal";
import { useState } from "react";
import CalendlyWidget from "components/calendlyWidget";
import useSticky from "components/customhooks/UseSticky";
import Input from "components/licence-component/inputP";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

const Home = () => {
  const { sectionRef, isSticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const isWorkEmail = (email) => {
    const value = (email || "").trim().toLowerCase();
    if (!value) return false;
    const atIndex = value.lastIndexOf("@");
    if (atIndex <= 0) return false;

    const domain = value.slice(atIndex + 1);
    if (!domain || domain.includes(" ")) return false;

    const personalDomains = new Set([
      "gmail.com",
      "googlemail.com",
      "yahoo.com",
      "yahoo.co.uk",
      "yahoo.ca",
      "outlook.com",
      "hotmail.com",
      "live.com",
      "msn.com",
      "aol.com",
      "icloud.com",
      "me.com",
      "mac.com",
      "protonmail.com",
      "proton.me",
      "pm.me",
      "gmx.com",
      "gmx.net",
      "yandex.com",
      "yandex.ru",
      "mail.com",
      "fastmail.com",
      "hey.com",
      "zoho.com",
    ]);

    return !personalDomains.has(domain);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isWorkEmail(form.email)) {
      addToast("Please use your work email address (no personal emails).", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      setLoading(false);
      return;
    }

    axios
      .post(
        `https://ssswuzxlxj5rkjd4bjmkfq4aii0dkkqt.lambda-url.us-east-1.on.aws/`,
        { ...form },
        { timeout: 40000 },
      )
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          addToast(
            res?.data?.body ||
              "Request submitted successfully. Please check your email for verification code",
            {
              appearance: "success",
              autoDismiss: true, // Enable auto dismiss
              autoDismissTimeout: 5000, // Dismiss after 5 seconds
            },
          );
          setLoading(false);
          setForm({ name: "", email: "", phone: "" });
        } else {
          addToast(
            "Unexpected response from server. Please try again or contact Admin",
            {
              appearance: "error",
              autoDismiss: true, // Enable auto dismiss
              autoDismissTimeout: 5000, // Dismiss after 5 seconds
            },
          );
          setLoading(false);
          return;
        }
      })
      .catch((err) => {
        setLoading(false);

        addToast(
          err?.message ||
            "Unexpected response from server. Please try again or contact Admin",
          {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          },
        );
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const data = [
    {
      loom_link: "https://play.goconsensus.com/s185e6185",
      subtext: "Talent",
    },
    {
      loom_link: "https://play.goconsensus.com/u86fb8108",
      subtext: "Focus",
    },
    // {
    //   loom_link: "https://www.loom.com/embed/d0fba73325cc47559f5840a2b2487bfa",
    //   subtext: "Virtual Service Agent",
    // },
    // {
    //   loom_link: "https://www.loom.com/embed/103bbe1353df42fe8d558afdc87585d3",
    //   subtext: "Request Security 1",
    // },
    // {
    //   loom_link: "https://www.loom.com/embed/64bfecff9f0f4a9b944bfa51ae17ff8c",
    //   subtext: "Request Security 2",
    // },
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
            <p className={styles.hr__p}>SWP DEMO</p>
            <h2 className={styles.hr__h2}>Meet Us at SWP Summit 2026</h2>
            <p className={styles.hr__para}>
              Discover how to build a Strategic Workforce Planning model that
              tracks the positions, timeline, and costs needed to deliver your
              strategy. Visit us for a live demo and complimentary workforce
              planning health check, plus get your free professional headshot by
              registering below!
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
                    <p>{video?.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`${styles.video__encap} ${
                isSticky ? styles?.sticky : ""
              }`}
            >
              <form action="submit" onSubmit={handleSubmit}>
                <div className={styles.book__call__form}>
                  <div className={styles.book__call__text}>
                    <p className={styles.book__p}>
                      Want Free Professional Headshot? Fill the Form Below
                    </p>
                  </div>

                  <div className=" flex-column d-flex gap-3">
                    <div>
                      <Input
                        id="fullname"
                        label="fullname"
                        text="Full Name "
                        name="name"
                        type="text"
                        value={form.name || ""}
                        placeholder=""
                        onChange={handleChange}
                        // errorF={formError.first_name}
                      />
                    </div>
                    <div>
                      <Input
                        id="email"
                        label="email"
                        text="Email "
                        name="email"
                        type="email"
                        value={form.email || ""}
                        placeholder=""
                        onChange={handleChange}
                        // errorF={formError.first_name}
                      />
                    </div>
                    <div>
                      <Input
                        id="phone__number"
                        label="phone_number"
                        text="Phone Number "
                        name="phone"
                        type="text"
                        value={form.phone || ""}
                        placeholder=""
                        onChange={handleChange}
                        // errorF={formError.first_name}
                      />
                    </div>

                    <div className={styles?.btn__call}>
                      <Button size="xxlarge" className=" w-100" type="submit">
                        {loading ? "Submitting.." : "Submit"}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

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

              {/* <LeadForm dataUrl={"https://zcform.com/LluxD"} /> */}
            </div>
          </div>
          <div className={styles.book__call_2}>
            <div className={styles.book__call__text}>
              <p className={styles.book__p}>Book a Meeting</p>
              <p className={styles.book__question}>
                Have questions or need assistance? Reach out to us for support,
                inquiries, or feedback, and our team will get back to you
                promptly.
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
        </div>
      </section>
    </Layout>
  );
};

export default Home;
