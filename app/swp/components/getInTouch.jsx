import { useState } from "react";
import styles from "styles/AlluviumRedesign2025/swp/swp.module.scss";
import Button from "components/atlassian-service-reuse/Button";
import Image from "next/legacy/image";
import Input from "components/licence-component/inputP";
import { useToasts } from "lib/toast";
import axios from "axios";
import useSticky from "components/customhooks/UseSticky";
import CustomerStory from "./customerStory";
import MeetBoard from "./meetBoard";

const GetInTouch = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { isSticky, sectionRef } = useSticky();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // Clear success message when user starts typing
    if (responseMessage) {
      setResponseMessage("");
    }
  };

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
        {
          ...form,
        },
        { timeout: 40000 },
      )
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          // Log to see actual response structure
          console.log("API Response:", res.data);

          const successMessage =
            res?.data?.body ||
            res?.data?.message ||
            res?.data ||
            "Request submitted successfully.";

          addToast(successMessage, {
            appearance: "success",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          });

          setResponseMessage(successMessage);
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
    <section className="relative" ref={sectionRef}>
      <section className={styles.getInTouch__layout}>
        <div
          className={`${styles.getInTouch} ${isSticky ? styles.sticky : ""}`}
        >
          <div className={styles.card}>
            <h3 className={styles.card__title}>
              Want Free Professional Headshot? Fill the Form Below{" "}
              <span>😉</span>
            </h3>
            <p className={styles.card__hint}></p>

            {responseMessage && (
              <div className={styles.success__message}>
                <div className={styles.success__checkmark}>✓</div>
                <p className={styles.success__text}>{responseMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} aria-label="get-in-touch-form">
              <div className={styles.formGroup}>
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

              <div className={styles.formGroup}>
                <Input
                  text="Work email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
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

              <Button type="submit">
                {loading ? "Submitting..." : "I'm Interested"}
              </Button>
            </form>
          </div>
        </div>

        <div>
          <div className={styles.getInTouch__content}>
            <h2 className={styles.title}>
              {/* Why <span className={styles.title__highlight}>meet Alluvium</span> at */}
              Alluvium’s role: your guide and transformation partner
            </h2>
            <p className={styles.lead}>
              At the summit, “Transformation partner” is more than a label for
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
          <CustomerStory />
          <MeetBoard />
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;
