import React, { useState, useEffect } from "react";
import styles from "../../styles/AlluviumRedesign2025/contactSection.module.scss";
import Image from "next/image";
import { useToasts } from "react-toast-notifications";
import { validateEmail } from "lib/validation";
import axios from "axios";
import { Lines } from "./ReuseComponents/Lines";
import Button from "components/atlassian-service-reuse/Button";
import Link from "next/link";
import { environment } from "env/env.local";

const contactArr = [
  {
    icon: "/assets/redesign-2025/mail.svg",
    alt: "mail",
    url: "mailto:contact@alluvium.net",
    title: "contact@alluvium.net",
  },
  {
    icon: "/assets/redesign-2025/phone.svg",
    alt: "phone number",
    url: "tel:+12073607252",
    title: "+1 (207) 360-7252",
  },
  {
    icon: "/assets/redesign-2025/map.svg",
    alt: "office location",
    url: "#",
    title: "Connecticut: 680 E Main Street Ste A Stamford, CT 06901 US.",
  },
  {
    icon: "/assets/redesign-2025/newFB.svg",
    alt: "facebook",
    url: "https://www.facebook.com/alluviumhq/?ti=as",
    title: "Facebook",
  },
  {
    icon: "/assets/redesign-2025/newX.svg",
    alt: "twitter/X",
    url: "https://twitter.com/alluviumhq?s=08",
    title: "X",
  },
  {
    icon: "/assets/redesign-2025/newLinkedin.svg",
    alt: "Linkedin",
    url: "https://www.linkedin.com/company/alluvium-hq/",
    title: "LinkedIn",
  },
];

const ContactSection = ({ withLines = true }) => {
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

    if (!firstName || !lastName || !phone) {
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
        }
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
        }
      );
      console.log(error.response?.data?.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.consultation} id="consultationForm">
      <div className={styles.container}>
        {withLines && <Lines variant="primary" />}
        <div className={styles.mainContainer}>
          <div className={styles.section1}>
            <div className={styles.question}>
              <h4>
                We Can’t Wait to <br /> Hear From You
              </h4>
              <p className={styles.Pdesktop}>
                Have questions or need assistance? We're here to <br /> help.
                Reach out to us for support, inquiries, or <br />
                feedback, and our team will get back to you promptly.
              </p>
              <p className={styles.Pmobile}>
                Have questions or need assistance? We're here to help. Reach out
                to us for support, inquiries, or feedback, and our team will get
                back to you promptly.
              </p>
            </div>
            <div className={styles.ourDetail}>
              <div style={{ paddingRight: "37px" }} className={styles.contact}>
                <h5>CONTACT DETAILS</h5>
                <ul>
                  {contactArr.slice(0, 2).map((contact, index) => (
                    <li key={index}>
                      <div className={styles.iconContainer}>
                        <a href={contact?.url}>
                          <img
                            src={contact?.icon}
                            alt={contact?.alt}
                            width={20}
                            height={20}
                          />
                        </a>
                      </div>
                      <a href={contact?.url}>
                        <div className={styles.title}>{contact.title}</div>
                      </a>
                    </li>
                  ))}
                </ul>
                <ul style={{ marginTop: "24px" }}>
                  <li style={{ alignItems: "start" }}>
                    <div className={styles.iconContainer}>
                      <a href={"#"}>
                        <img
                          src={"/assets/redesign-2025/map.svg"}
                          alt={"office location"}
                          width={20}
                          height={20}
                        />
                      </a>
                    </div>
                    <a href={"#"}>
                      <div
                        style={{ textDecoration: "none" }}
                        className={styles.title}
                      >
                        Connecticut: 680 E Main Street Ste A Stamford, CT 06901
                        US.
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className={`${styles.contact} ${styles.social}`}>
                <h5>SOCIAL MEDIAS</h5>
                <ul>
                  {contactArr.slice(3, 6).map((contact, index) => (
                    <li key={index}>
                      <div className={styles.iconContainer}>
                        <a href={contact.url}>
                          <img
                            src={contact.icon}
                            alt={contact.alt}
                            width={20}
                            height={20}
                          />
                        </a>
                      </div>
                      <a href={contact?.url}>
                        <div className={styles.title}>{contact.title}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.quick__call}>
              <Image
                src="/assets/redesign-2025/contact-us/call.svg"
                width={40}
                height={40}
                alt="meeticon"
              />
              <div>
                <h4>Reach Out to Us</h4>
                <p>
                  Need a quick chat? Skip the form and book a time that works
                  for you.
                </p>
                <Link href={"/support/contact#schedule-a-call"}>
                  <Button variant="redesign" size="xxlarge">
                    Book a Meeting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <form onSubmit={onsubmit} action="">
              <div className={styles.contact_form}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="firstName">
                    First Name <span className="text-required">*</span>
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
                <div style={{ width: "100%" }}>
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
                </div>
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

              <p>
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
                for additional information about how Alluvium protects your
                privacy.
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
        </div>

        <Lines variant="secondary" />
      </div>
    </section>
  );
};

export default ContactSection;
