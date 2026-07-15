import Layout from "components/layout";
import styles from "../../styles/Knowledge-Zone/kz.module.scss";
import Badges from "components/Alluvium-Redesign-2025/ReuseComponents/badges";
import Input from "components/licence-component/inputP";
import { useState } from "react";
import { useToasts } from "lib/toast";
import ImageUpload from "./imageUpload";
import Button from "components/atlassian-service-reuse/Button";
import { environment } from "env/env.local";
import { postRequest } from "pages/api/helpers/postRequest";

const KnowledgeZone = () => {
  const [form, setForm] = useState({
    email: "",
    description: "",
    fullname: "",
    social_media: "",
    socialMediaLink: "",
  });

  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Helper function for displaying toast messages
  const showToast = (message, type = "success") => {
    addToast(message, {
      appearance: type,
      autoDismiss: true,
      autoDismissTimeout: 5000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form?.social_media || !file) {
      addToast("Please enter your prefered social media link", {
        appearance: "error",
        autoDismiss: true, // Enable auto dismiss
        autoDismissTimeout: 5000, // Dismiss after 5 seconds
      });
      return;
    }

    try {
      // Create FormData and append all form fields
      console.log("Setting loading to true...");
      setLoading(true);
      console.log("Loading state set to true.");
      const formData = new FormData();
      formData.append("fullname", form.fullname);
      formData.append("email", form.email);
      formData.append("description", form.description);
      formData.append("social_media", form.social_media);
      formData.append("socialMediaLink", form.socialMediaLink);
      if (file) {
        formData.append("image", file); // Add the file
      }

      const res = await postRequest(
        `${environment?.baseUrl}${environment?.EmailSubUrl}`,
        formData, // Pass only the FormData object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
          timeout: 30000,
        }
      );
      if (res.status >= 200 && res.status < 300) {
        showToast(
          `Your request has been submitted successfully. Thank you, we'll be in touch.`,
          "success"
        );

        setForm({
          email: "",
          description: "",
          fullname: "",
          social_media: "",
          socialMediaLink: "",
        });
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

      showToast(
        errMessage || "Request failed. Please check the form and try again.",
        "error"
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
              <label htmlFor="social_media" className={styles.labelStyle}>
                Social Media
              </label>
              <select
                name="social_media"
                id="social_media"
                className={`${styles.countrySelect} `}
                value={form?.social_media || ""}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Facebook">Facebook</option>
                <option value="Twitter">Twitter</option>
                <option value="Telegram">Telegram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>

            {form?.social_media && (
              <div>
                <Input
                  id={"socialMediaLink"}
                  label={"socialMediaLink"}
                  placeholder={`Enter your ${form?.social_media} link`}
                  text={`Please enter Your ${form?.social_media} handle or link`}
                  type={"url"}
                  name={"socialMediaLink"}
                  value={form?.socialMediaLink || ""}
                  onChange={handleChange}
                />
              </div>
            )}

            <ImageUpload file={file} setFile={setFile} />

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
              <Button>{`${
                loading ? "Submitting..." : "Submit request"
              }`}</Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default KnowledgeZone;
// This code defines a React component called KnowledgeZone that renders a section of a webpage. The section includes a title and a paragraph describing the purpose of the knowledge zone, which is to provide insights, resources, and expert advice on optimizing the Atlassian experience. The component uses CSS styles from an imported stylesheet to style the section.
