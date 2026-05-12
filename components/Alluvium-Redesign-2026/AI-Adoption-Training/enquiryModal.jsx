import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/ai-adoption-training/enquiry-modal.module.scss";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { isWorkEmail } from "lib/ga";
import { useToasts } from "react-toast-notifications";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { addToast } = useToasts();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);

  // Close modal when clicking on the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isWorkEmail(form.email)) {
      addToast("Please use your work email address (no personal emails).", {
        appearance: "error",
        autoDismiss: true,
        autoDismissTimeout: 5000,
      });
      setLoading(false);
      return;
    }

    axios
      .post(
        `https://ssswuzxlxj5rkjd4bjmkfq4aii0dkkqt.lambda-url.us-east-1.on.aws/`,
        {
          ...form,
        },
        { timeout: 40000 },
      )
      .then((res) => {
        if (res?.status >= 200 && res?.status < 300) {
          // Log to see actual response structure
          console.log("API Response:", res.data);

          const successMessage =
            res?.data?.body ||
            res?.data?.message ||
            res?.data ||
            "Request submitted successfully.";

          addToast(successMessage, {
            appearance: "success",
            autoDismiss: true, // Enable auto dismiss
            autoDismissTimeout: 5000, // Dismiss after 5 seconds
          });

          setResponseMessage(successMessage);
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

          <button type="submit" className={styles.submitBtn}>
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
