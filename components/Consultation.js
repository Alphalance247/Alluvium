import React, { useState } from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { validateEmail } from "lib/validation";
import Link from "next/link";
import styles from "../styles/booking.module.scss";
import Image from "next/image";

const socialButton = [
  {
    image: "/assets/icons/facebook.svg",
    alt: "facebook",
    url: "https://www.facebook.com/alluviumhq/?ti=as",
  },
  {
    image: "/assets/icons/instagram.svg",
    alt: "instagram",
    url: "https://twitter.com/alluviumhq?s=08",
  },
  {
    image: "/assets/icons/linkedIn.svg",
    alt: "linkedIn",
    url: "https://www.linkedin.com/company/alluvium-hq/",
  },
  {
    image: "/assets/icons/twitter.svg",
    alt: "twitter",
    url: "https://x.com/alluviumhq",
  },
];

export const BookingCTA = () => {
  return (
    <div className={styles.booking}>
      <h3>Talk to an Expert About Your Project</h3>
      <Link href="#consultationForm">
        <a className={`${styles.button} ${styles.defaultButton}`}>
          Book Consultation
        </a>
      </Link>
    </div>
  );
};

export const ConsultationForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { addToast } = useToasts();

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !phone || !message) {
      addToast("All fields marked with asterisks are required", {
        appearance: "error",
      });
      return;
    }
    if (!validateEmail(email)) {
      addToast("Please enter a valid email address", { appearance: "error" });
      return;
    }
    if (!isChecked) {
      addToast("You must agree to the terms and conditions", {
        appearance: "error",
      });
      return;
    }

    let formData = {
      fullname: fullname,
      email: email,
      company: company,
      phone_number: phone,
      how_we_can_help: message,
    };

    try {
      let response = await fetch(
        "https://vast.ec2.alluvium.net/support/inquiry/",
        {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      let result = await response.json();
      const status = result.status;
      console.log(result);
      // show message based on status
      addToast(result.success, { appearance: status });
    } catch (e) {
      console.log(e.message);
      addToast("Oops something went wrong. Please try again.", {
        appearance: "error",
      });
    }

    setFullname("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setIsChecked(false);
  };

  return (
    <ToastProvider>
      <section id="consultationForm" className={styles.contact}>
        <div className={`container ${styles.book} p-0`}>
          <div className={styles.content}>
            <div>
              <h2>Let’s get in touch!</h2>
              <form method="POST" onSubmit={onsubmit}>
                <div className="row my-4">
                  <div className="form-group col-md-6">
                    <label htmlFor="fullname">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                      type="text"
                      className="form-control"
                      name="fullname"
                      id="fullname"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row my-4">
                  <div className="form-group col-md-6">
                    <label htmlFor="company">
                      Company <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                      type="text"
                      className="form-control"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="telephone">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      type="text"
                      className="form-control"
                      name="telephone"
                      id="telephone"
                      placeholder="Contact number"
                    />
                  </div>
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="message">
                    How can we help you? <span className="text-danger">*</span>
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    id="message"
                    className="form-control"
                    rows="7"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div
                  className=""
                  style={{
                    display: "flex",
                    marginTop: "3rem",
                    columnGap: "1.5rem",
                  }}
                >
                  <div>
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="mr-2 leading-tight"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      required
                      style={{ transform: "scale(1.5)" }}
                    />
                  </div>
                  <div className="" style={{ marginTop: "1.3rem" }}>
                    <label htmlFor="consent">
                      Please be aware that the information you provide will be
                      used in our website, news letter, and other marketing
                      materials. <br /> <br />
                      <span className="text-danger">*</span> If you change your
                      mind in the future, you can email us at
                      <span>
                        <a
                          href="mailto:contact@alluvium.net"
                          className=" text-danger"
                        >
                          {` contact@alluvium.net `}
                        </a>
                      </span>
                      to withdraw your consent.
                    </label>
                  </div>
                </div>

                <div className="form-group mt-5 d-flex column-gap-2">
                  {/* <button
                    type="submit"
                    aria-label="submit"
                    className={`${styles.buttonClear} ${styles.consultButton}`}
                  >
                    Clear
                  </button> */}

                  <button
                    type="submit"
                    aria-label="submit"
                    className={`${styles.button} ${styles.defaultButton} ${styles.consultButton}`}
                    disabled={!isChecked}
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={`${styles.location}`}>
            <h3 className={`${styles.contact__us}`}>Contact Us</h3>
            <p className={`${styles.contact__us__text}`}>
              We’re here to help! Whether you have questions, need assistance,
              or want to provide feedback, our team at Alluvium is always ready
              to assist you.
            </p>

            {/* <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/icons/Email.svg"
                alt="email"
                width={32}
                height={32}
              />
              <a
                href="mailto:contact@alluvium.net"
                className="text-decoration-underline"
              >
                contact@alluvium.net
              </a>
            </div>

            <div className="d-flex align-items-center gap-2">
              <Image
                src="/assets/icons/Call.svg"
                alt="call"
                width={32}
                height={32}
              />
              <a
                href="tel:+442035762028"
                className="cursor-pointer text-decoration-underline"
              >
                +442035762028
              </a>
            </div> */}

            <div>
              <p className={styles.follow__us}>Follow us</p>

              <div className="d-flex justify-content-between">
                {socialButton.map((el, i) => (
                  <div key={i} className="cursor-pointer">
                    <a href={el.url}>
                      <Image
                        src={el.image}
                        alt={el.alt}
                        width={25}
                        height={25}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ToastProvider>
  );
};
