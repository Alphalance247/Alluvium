import { useState } from "react";
import styles from "styles/AlluviumRedesign2025/swp/swp.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/image";
import Input from "components/licence-component/inputP";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

const GetInTouch = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        `https://site-api.alluvium.net/utilities/wps-event/`,
        {
          first_name_1: form.firstName,
          last_name_4: form.lastName,
          email_5: form?.email,
          company_3: form?.company,
        },
        { timeout: 40000 },
      )
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          addToast(res?.data?.message || "Request submitted successfully.", {
            appearance: "success",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          });
          setLoading(false);
          setForm({ firstName: "", lastName: "", company: "", email: "" });
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

  const badges = [
    {
      img: "/assets/redesign-2025/Solution partner.svg",
      width: 191,
      height: 58,
      alt: "solution partner",
    },
    {
      img: "/assets/redesign-2025/Certs.svg",
      width: 191,
      height: 70,
      alt: "marketplace partner",
    },

    {
      img: "/assets/redesign-2025/Cert.svg",
      width: 191,
      height: 68,
      alt: "training partner",
    },

    {
      img: "/assets/redesign-2025/londonchamber.svg",
      width: 231,
      height: 78,
      alt: "london chamber of commerce",
    },

    {
      img: "/assets/redesign-2025/awscerts.svg",
      width: 84,
      height: 78,
      alt: "aws partner",
    },

    {
      img: "/assets/redesign-2025/Chamber of Commerce.svg",
      width: 132,
      height: 78,
      alt: "stamford chamber of commerce",
    },
  ];

  const list = [
    {
      sublistContent: "Co-shape the conversation ",
      cont: "about Strategic Workforce Planning – bringing real frameworks, case studies and operating models that you can use, not just theory.",
      content: "",
    },

    {
      content: "Act as a  ",
      sublistContent:
        "guide for leaders who want to move from idea to implementation",
      cont: "– helping you make sense of where you are and what needs to change.",
    },

    {
      content: "Help you  ",
      sublistContent:
        "shift from static headcount planning to skills‑based Strategic Workforce Planning ",
      cont: "that connects HR, Finance and the business.",
    },

    {
      content: "Provide  ",
      sublistContent: "the governance, workflows, architecture and tools ",
      cont: "that make skills data usable in real planning cycles and decisions.",
    },
    {
      content:
        "Support you before, during and after the summit so that insights from London turn into sustained change in your organisation.  ",
    },
  ];

  return (
    <section className={styles.getInTouch__layout}>
      <div className={styles.getInTouch}>
        <div className={styles.card}>
          <h3 className={styles.card__title}>
            Let's grab a coffee <span>😉</span>
          </h3>
          <p className={styles.card__hint}>
            Can't go? Sign up here and let's have a virtual coffee chat!
          </p>

          <form onSubmit={handleSubmit} aria-label="get-in-touch-form">
            <div className={styles.formGroup}>
              <Input
                text={"First Name"}
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <Input
                name="lastName"
                text={"Last Name"}
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <Input
                text={"Company name"}
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <Input
                text="Work email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <Button type="submit">
              {loading ? "Submitting..." : "I'm Interested"}
            </Button>
          </form>
        </div>
      </div>

      <div className={styles.getInTouch__content}>
        <h2 className={styles.title}>
          {/* Why <span className={styles.title__highlight}>meet Alluvium</span> at */}
          Alluvium’s role: your guide and transformation partner
        </h2>
        <p className={styles.lead}>
          At the summit, “transformation partner” is more than a label for
          Alluvium.
        </p>

        <div className={styles.paragraphs}>
          <p>It means we:</p>

          {list?.map((el, i) => (
            <ul key={i} className={styles?.list__style}>
              <li className={styles?.list__style__list}>
                {el?.content}
                <span>{el?.sublistContent}</span>
                {el?.cont}
              </li>
            </ul>
          ))}
        </div>

        <div className={styles.badges_row}>
          {badges.map((badge, index) => (
            <Image
              key={index}
              width={badge?.width}
              height={badge?.height}
              src={badge.img}
              alt={badge.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
