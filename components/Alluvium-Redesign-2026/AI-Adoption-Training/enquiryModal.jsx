import React, { useState, useEffect } from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/enquiry-modal.module.scss";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { validateEmail } from "lib/validation";
import { useToasts } from "react-toast-notifications";
import { environment } from "env/env.local";

const EnquiryModal = ({ isOpen, onClose }) => {
  const { addToast } = useToasts();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      window.handleEnquiryCaptchaResponse = function (token) {
        setCaptchaValue(token);
      };
    }
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      addToast("Please enter a valid email address.", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      return;
    }

    if (!captchaValue) {
      addToast("Please verify you're not a robot.", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${environment?.baseUrl}utilities/support/inquiry/`,
        {
          fullname: form.name,
          email: form.email,
          phone_number: form.phone,
          company: form.company,
          how_we_can_help: form.message,
          recaptcha_token: captchaValue,
        },
        { headers: { "Content-Type": "application/json" } },
      );

      if (response.status === 200 || response.status === 201) {
        addToast("Your enquiry has been submitted successfully.", {
          appearance: "success",
          autoDismiss: true,
          autoDismissTimeout: 5000,
        });
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
        setCaptchaValue(null);
        onClose();
      } else {
        addToast(
          "There was an issue submitting your enquiry. Please try again.",
          {
            appearance: "info",
            autoDismiss: true,
            autoDismissTimeout: 5000,
          },
        );
      }
    } catch (err) {
      addToast(
        err.response?.data?.error ||
          "Oops something went wrong. Please try again.",
        { appearance: "error", autoDismiss: true, autoDismissTimeout: 5000 },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalCard}>
        {/* Header */}
        <div className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            <LiaTimesSolid />
          </button>
          <div className={styles.titleStack}>
            <h2 className={styles.title}>Enquire About AI Training</h2>
            <p className={styles.subtitle}>
              Tell us about your team and AI adoption goals.
            </p>
          </div>
        </div>

        {/* Form Body */}
        <form className={styles.formBody} onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.inputGroup}>
            <label>
              Full Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Jane"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Work Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="jane@company.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Phone <span>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+44..."
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              Company <span>*</span>
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              placeholder="Acme Inc."
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              How can we help? <span>*</span>
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us a bit about your goals..."
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {isClient && (
            <div
              className="g-recaptcha"
              data-sitekey="6LcJU-srAAAAALRX1h9OCch3tCogKyYMbyyXgtFD"
              data-callback="handleEnquiryCaptchaResponse"
            ></div>
          )}

          <p className={styles.privacyNote}>
            By submitting this form, you are agreeing to receive additional
            communications from Alluvium. Please review our{" "}
            <a
              href="http://alluvium.net/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            for additional information.
          </p>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!captchaValue}
            style={{
              cursor: !captchaValue ? "not-allowed" : undefined,
              opacity: !captchaValue ? 0.5 : undefined,
            }}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
