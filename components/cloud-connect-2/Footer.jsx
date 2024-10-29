import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { environment } from "env/env.local";
import { useToasts } from "react-toast-notifications";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailSub = emailRegex.test(email);
  const { addToast } = useToasts();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleSubmit = () => {
    if (emailSub) {
      setLoading(true);
      axios
        .post(
          `${environment.baseUrl}${environment.EmailSubUrl}`,
          { email },
          { timeout: 40000 }
        )
        .then((res) => {
          setLoading(false);

          if (res.status >= 200 && res.status < 300) {
            addToast(
              "Thank you for subscribing! You'll receive exclusive updates relating to Cloud Connect.",
              {
                appearance: "success",
                autoDismiss: true, // Enable auto dismiss
                autoDismissTimeout: 5000, // Dismiss after 5 seconds
              }
            );
            setEmail("");
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
        })
        .catch((err) => {
          setLoading(false);
          let errMessage;

          // Handle timeout error
          if (err.code === "ECONNABORTED") {
            errMessage =
              "The request took too long. Please check your internet connection and try again.";
          }

          // Handle network error
          if (!err.response) {
            errMessage =
              "Network error. Please check your internet connection and try again.";
          }

          // Handle server-side error (response error)
          if (err.response) {
            if (err.response.status < 500) {
              errMessage =
                err?.response?.data?.error ||
                "Request failed. Please check the form and try again.";
            } else {
              errMessage = "Server error. Please try again later.";
            }
          }

          addToast(errMessage, {
            appearance: "error",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          });
        });
    } else {
      setEmailError(!emailSub);
    }
  };

  return (
    <footer
      style={{
        borderTop: "1px solid #ffffff1a",
      }}
    >
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <img
            src={"/assets/cloud-connect/images/logo.png"}
            alt="Cloud connect logo"
            className={styles.footer__logo}
          />
          <div className={styles.footer__links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/cloud-connect">Agenda</Link>
              </li>
              <li>
                <Link href="/cloud-connect/media">Media & Resources</Link>
              </li>
              <li>
                <Link href="/cloud-connect/sponsor">Sponsor</Link>
              </li>
              <li>
                <Link href="/cloud-connect/volunteer">Volunteer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__subscribe}>
            <h3>Stay updated</h3>
            <p>
              Don't miss the latest news and updates from Cloud Connect –
              subscribe to our newsletter now!
            </p>
            <div>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleChange}
                style={{
                  border: emailError ? "2px solid orangered" : null,
                }}
              />

              <Button onClick={handleSubmit}>
                {loading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.spinner}
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
            {emailError && (
              <p className=" text-start" style={{ marginTop: "1rem" }}>
                Please provide a valid email address
              </p>
            )}
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>© Copyright 2024 | Cloud Connect | All Rights Reserved</p>
          <div className={styles.policy}>
            <Link href="#">Privacy Policy</Link>
            <div className={styles.divider}></div>
            <Link href="#">Terms & Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
