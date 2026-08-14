import styles from "../../styles/AlluviumRedesign2025/contactSection.module.scss";
import { useToasts } from "lib/toast";
import { validateEmail } from "lib/validation";
import axios from "axios";
import { environment } from "env/env.local";
import { useState, useEffect } from "react";

const FormSection = ({ color = "white" }) => {
  const { addToast } = useToasts();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    jobTitle: "",
    email: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      window.handleCaptchaResponse = function (token) {
        setCaptchaValue(token);
      };
    }
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, jobTitle, email, message } = formData;

    if (!firstName || !phone) {
      addToast("All fields marked with asterisks are required", {
        appearance: "error",
      });

      return;
    }
    if (!validateEmail(email)) {
      addToast("Please enter a valid email address", { appearance: "error" });
      return;
    }

    if (!captchaValue) {
      addToast("Please verify you're not a robot.");
      return;
    }

    const newFormData = {
      fullname: `${firstName} ${lastName}`,
      email: email,
      company: jobTitle,
      phone_number: phone,
      how_we_can_help: message,
    };

    setIsSubmitting(true);
    try {
      const response = await axios.post(
        `${environment?.baseUrl}utilities/support/inquiry/`,
        { ...newFormData, recaptcha_token: captchaValue },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 200 || response.status === 201) {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          jobTitle: "",
          email: "",
          message: "",
        });
        addToast("Your inquiry has been submitted successfully.", {
          appearance: "success",
        });

        dataLayer.push({
          event: "ajaxFormSubmission",
        });
      } else {
        addToast("There was an issue submitting your inquiry. try again.", {
          appearance: "info",
        });
      }
    } catch (error) {
      addToast(
        error.response?.data?.error ||
          "Oops something went wrong. Please try again.",
        {
          appearance: "error",
        },
      );
      console.log(error.response?.data?.error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className={styles.section2} style={{ background: color }}>
      <form onSubmit={onsubmit} action="">
        <div className={styles.contact_form}>
          <div style={{ width: "100%" }}>
            <label htmlFor="firstName">
              Full Name <span className="text-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          {/* <div style={{ width: "100%" }}>
            <label htmlFor="lastName">
              Last Name <span className="text-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div> */}
        </div>

        <div className={styles.contact_form}>
          <div style={{ width: "100%" }}>
            <label htmlFor="phone">
              Phone Number <span className="text-required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              id="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className={styles.contact_form}>
          <div style={{ width: "100%" }}>
            <label htmlFor="email">Work Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="">
          <label htmlFor="message">Your message</label>
          <textarea
            style={{ height: "216px" }}
            name="message"
            id="message"
            className="form-control"
            rows="7"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="" style={{ marginTop: "1rem" }}>
          {/* <ReCAPTCHA
                  sitekey={"6LcJU-srAAAAALRX1h9OCch3tCogKyYMbyyXgtFD"}
                  onChange={(value) => setCaptchaValue(value)}
                /> */}
          {isClient && (
            <div
              className="g-recaptcha"
              data-sitekey="6LcJU-srAAAAALRX1h9OCch3tCogKyYMbyyXgtFD"
              data-callback="handleCaptchaResponse"
            ></div>
          )}
        </div>

        <p style={{ fontSize: "13px" }}>
          By submitting this form, you are agreeing to receive additional
          communications from Alluvium. Please review our privacy-policy{" "}
          <span style={{ color: "#E37915", textDecoration: "underline" }}>
            <a
              href="http://alluvium.net/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
          </span>{" "}
          for additional information about how Alluvium protects your privacy.
        </p>

        <button
          type="submit"
          aria-label="submit"
          disabled={!captchaValue}
          style={{
            cursor: !captchaValue && "not-allowed",
            opacity: !captchaValue && "0.5",
          }}
        >
          {isSubmitting ? "Submitting..." : "Contact Sales"}
        </button>
      </form>
    </div>
  );
};

export default FormSection;
