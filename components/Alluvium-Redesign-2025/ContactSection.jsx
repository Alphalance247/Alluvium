import React, { useState } from "react";
import styles from "../../styles/AlluviumRedesign2025/contactSection.module.scss";
import Image from "next/image";
import { useToasts } from "react-toast-notifications";
import { validateEmail } from "lib/validation";
import axios from "axios";

const contactArr = [
  {
    icon: "/assets/redesign-2025/mail.svg",
    alt: "mail",
    url: "#",
    title: "contact@alluvium.net",
  },
  {
    icon: "/assets/redesign-2025/phone.svg",
    alt: "phone number",
    url: "#",
    title: "+234 812 345 6789",
  },
  {
    icon: "/assets/redesign-2025/map.svg",
    alt: "office location",
    url: "#",
    title: "Kemp House 160, City Road <br /> London, EC1V 2NX, UK.",
  },
  {
    icon: "/assets/redesign-2025/newFB.svg",
    alt: "facebook",
    url: "#",
    title: "Facebook",
  },
  {
    icon: "/assets/redesign-2025/newX.svg",
    alt: "twitter/X",
    url: "#",
    title: "X",
  },
  {
    icon: "/assets/redesign-2025/newLinkedin.svg",
    alt: "Linkedin",
    url: "#",
    title: "LinkedIn",
  },
];

const rowsData = ["", "", "", "", "", "", "", "", "", ""];

const ContactSection = () => {
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
        "https://vast.ec2.alluvium.net/support/inquiry/",
        newFormData,
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
      } else {
        addToast("There was an issue submitting your inquiry. try again.", {
          appearance: "info",
        });
      }
    } catch (error) {
      console.error(error);
      addToast("Oops something went wrong. Please try again.", {
        appearance: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lineContainer}>
        {rowsData.map((row, index) => (
          <div key={index} className={styles.row}></div>
        ))}
      </div>
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
                {contactArr.slice(0, 3).map((contact, index) => (
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
                    <div
                      dangerouslySetInnerHTML={{ __html: contact.title }}
                      className={styles.title}
                    ></div>
                  </li>
                ))}
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
                    <div className={styles.title}>{contact.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.core}>
            <p className={styles.pp} style={{ fontStyle: "italic" }}>
              <span>
                "At Alluvium, we’re all about making technology work for people.{" "}
              </span>
              We focus on building smart solutions that make life easier, more
              connected, and efficient."
            </p>

            <div className={styles.ceo}>
              <p>TAIWO OJO</p>
              <p className={styles.title}>Chief Executive Officer, Alluvium</p>
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

            <p>
              By submitting this form, you are agreeing to receive additional
              communications from Alluvium. Please review our{" "}
              <span style={{ color: "#E37915" }}>Privacy Policy</span> for
              additional information about how Alluvium protects your privacy.
            </p>

            <button type="submit" aria-label="submit">
              {isSubmitting ? "Submitting..." : "Contact Sales"}
            </button>
          </form>
        </div>
      </div>

      <div className={styles.lineContainer}>
        {rowsData.map((row, index) => (
          <div key={index} className={styles.row}>
            {row.dotted && <span className={styles.dottedLine}></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
