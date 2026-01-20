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
                text={"Full Name"}
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
          Why <span className={styles.title__highlight}>meet Alluvium</span> at
          SWP?
        </h2>
        <p className={styles.lead}>
          Lorem ipsum dolor sit amet consectetur. Facilisis dolor consequat ut
          donec tempor ullamcorper lacus. Odio congue habitant purus morbi duis.
          Amet ornare ultrices diam gravida morbi elementum nulla. Velit cras
          lacus felis risus elit dui amet nibh. Sem sit sed tristique a cursus.
          Fermentum posuere egestas sagittis mi
        </p>

        <div className={styles.paragraphs}>
          <p>
            Nisi malesuada adipiscing et adipiscing ut. Sapien sed tellus
            vulputate magna in arcu. In tellus eget libero arcu posuere
            imperdiet. Egestas lobortis interdum vivamus tellus odio massa.
            Faucibus interdum non nulla risus turpis egestas purus urna ligula.
            Urna pulvinar faucibus gravida vitae amet praesent porttitor
          </p>

          <p>
            Habitant scelerisque morbi neque at elementum tortor etiam nulla.
            Nec et euismod felis ornare. Tristique sed nec eu volutpat fringilla
            metus arcu vestibulum. Vel nisl pretium ipsum cursus. Imperdiet
            aliquet netus ridiculus
          </p>
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
