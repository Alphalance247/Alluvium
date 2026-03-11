import { ToastProvider, useToasts } from "react-toast-notifications";
import { validateEmail } from "lib/validation";
import styles from "../styles/booking.module.scss";
import React, { useState } from "react";

const ConsutomerConsultation = ({ variant = "default" }) => {
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
        },
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
      <div id="consultation-form">
        <div className={`${styles.content} ${styles[`content--${variant}`]}`}>
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
      </div>
    </ToastProvider>
  );
};

export default ConsutomerConsultation;
