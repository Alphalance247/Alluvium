import Layout from "components/layout";
import styles from "../../styles/Knowledge-Zone/kz.module.scss";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import Input from "components/licence-component/inputP";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import ImageUpload from "./imageUpload";
import Button from "components/atlassian-service-reuse/Button";

const KnowledgeZone = () => {
  const [form, setForm] = useState({
    email: "",
    description: "",
    image: null,
    fullname: "",
  });

  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postRequest(
        "https://vast.ec2.alluvium.net/challenge/request/",
        { ...form },
        { timeout: 10000 }
      );
      if (res.status >= 200 && res.status < 300) {
        addToast(
          "Your request has been submitted successfully. Thank you, we'll be in touch.",
          {
            appearance: "success",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          }
        );

        setForm({ ...form, email: "", description: "" });
      } else {
        addToast(
          "Unexpected response from server. Please try again or contact Admin",
          {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          }
        );
        return;
      }
    } catch (err) {
      let errMessage;
      if (err.response) {
        if (err?.response?.status < 500) {
          errMessage =
            err?.response?.data?.error ||
            "Request failed. Please check the form and try again.";
        } else {
          errMessage = "Server error. Please try again later.";
        }
      }

      addToast(
        errMessage || "Request failed. Please check the form and try again.",
        {
          appearance: "error",
          autoDismiss: true, // Enable auto dismiss
          autoDismissTimeout: 5000, // Dismiss after 5 seconds
        }
      );
    } finally {
      setLoading(false);
    }
  };
  const badges = [
    {
      img: "/assets/KZ/1.png",
      width: 333,
      height: 270,
      alt: "solution partner",
    },
    {
      img: "/assets/KZ/2.png",
      width: 333,
      height: 270,
      alt: "marketplace partner",
    },

    {
      img: "/assets/KZ/3.png",
      width: 333,
      height: 270,
      alt: "training partner",
    },

    {
      img: "/assets/KZ/4.png",
      width: 333,
      height: 270,
      alt: "aws partner",
    },
    {
      img: "/assets/KZ/1.png",
      width: 333,
      height: 270,
      alt: "solution partner",
    },
    {
      img: "/assets/KZ/2.png",
      width: 333,
      height: 270,
      alt: "marketplace partner",
    },

    {
      img: "/assets/KZ/3.png",
      width: 333,
      height: 270,
      alt: "training partner",
    },

    {
      img: "/assets/KZ/4.png",
      width: 333,
      height: 270,
      alt: "aws partner",
    },
    {
      img: "/assets/KZ/1.png",
      width: 333,
      height: 270,
      alt: "solution partner",
    },
    {
      img: "/assets/KZ/2.png",
      width: 333,
      height: 270,
      alt: "marketplace partner",
    },

    {
      img: "/assets/KZ/3.png",
      width: 333,
      height: 270,
      alt: "training partner",
    },

    {
      img: "/assets/KZ/4.png",
      width: 333,
      height: 270,
      alt: "aws partner",
    },
    {
      img: "/assets/KZ/1.png",
      width: 333,
      height: 270,
      alt: "solution partner",
    },
    {
      img: "/assets/KZ/2.png",
      width: 333,
      height: 270,
      alt: "marketplace partner",
    },

    {
      img: "/assets/KZ/3.png",
      width: 333,
      height: 270,
      alt: "training partner",
    },

    {
      img: "/assets/KZ/4.png",
      width: 333,
      height: 270,
      alt: "aws partner",
    },
  ];

  return (
    <Layout>
      <section className={`${styles.knowledge__zone}`}>
        <div className={styles.knowledge__zone__content}>
          <h1>
            Share Your Knowledge. <br /> <span>Inspire Growth.</span>
          </h1>
          <p>
            Are you passionate about sharing insights and empowering others?
            Become a speaker at our monthly Knowledge Zone and lead engaging
            discussions on impactful topics. Sign up now to be our next thought
            leader!
          </p>
        </div>

        <Badges badgesData={badges} />
      </section>

      <section
        className={`${styles.knowledge__zone__form} ${styles.form__section}`}
      >
        <h3>Become a Knowledge Zone Speaker</h3>
        <p>
          Fill out the form below to share your expertise at our next session.
        </p>
        <div className={styles.form__container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              {/* <label htmlFor="">Email</label> */}
              <Input
                id={"fullname"}
                label={"fullname"}
                placeholder={""}
                text={"Full Name"}
                type={"text"}
                name={"fullname"}
                value={form?.fullname || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              {/* <label htmlFor="">Email</label> */}
              <Input
                id={"email"}
                label={"email"}
                placeholder={""}
                text={"Email"}
                type={"email"}
                name={"email"}
                value={form?.email || ""}
                onChange={handleChange}
              />
            </div>

            <div className=" position-relative">
              <label htmlFor="volunteer_reason_9" className={styles.labelStyle}>
                Social Media
              </label>
              <select
                name="volunteer_reason_9"
                id="volunteer_reason_9"
                className={`${styles.countrySelect} `}
                value={form.volunteer_reason_9}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="To gain experience in event management or organization">
                  To gain experience in event management or organization.
                </option>
                <option value="To contribute to the success of the IT and service management community">
                  To contribute to the success of the IT and service management
                  community.
                </option>
                <option value="To network with industry professionals and expand my network">
                  To network with industry professionals and expand my network.
                </option>
                <option value="To learn more about service management and its impact on businesses">
                  To learn more about service management and its impact on
                  businesses.
                </option>
                <option value="To give back to the community and support a worthwhile cause">
                  To give back to the community and support a worthwhile cause.
                </option>
                <option value="To enhance my resume and gain valuable skills">
                  To enhance my resume and gain valuable skills.
                </option>
              </select>
              {/* {formError.volunteer_reason_9 && (
                <h6 style={{ color: "#F30000", marginTop: "1rem" }}>
                  This field is required
                </h6>
              )} */}
            </div>

            <ImageUpload />

            <div className={styles.description}>
              <label htmlFor="">Short Bio *</label>
              <br />
              <textarea
                style={{ width: "100%" }}
                id="description"
                name="description"
                rows="10"
                required
                placeholder=""
                value={form?.description || ""}
                onChange={handleChange}
                className={styles.countrySelect}
              ></textarea>
            </div>

            <div>
              <Button>Submit request</Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default KnowledgeZone;
// This code defines a React component called KnowledgeZone that renders a section of a webpage. The section includes a title and a paragraph describing the purpose of the knowledge zone, which is to provide insights, resources, and expert advice on optimizing the Atlassian experience. The component uses CSS styles from an imported stylesheet to style the section.
