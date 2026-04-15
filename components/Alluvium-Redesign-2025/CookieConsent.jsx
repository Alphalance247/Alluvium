import React, { useEffect, useState } from "react";
import styles from "../../styles/AlluviumRedesign2025/CookieConsent/CookieConsent.module.scss";

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookieConsent");
    if (!hasAcceptedCookies) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowModal(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className={styles.cookieOverlay}>
      <div className={styles.cookieModal}>
        {/* <img
          src="/assets/redesign-2025/cookiesLogo.svg"
          alt="Cookie Icon"
          className={styles.icon}
        /> */}
        <h2 >We value your privacy</h2>
        <p>
          We use cookies to improve your experience and analyze site usage.
          Cookies help us understand what content you find useful so we can
          enhance your experience. You can disable cookies in your browser
          settings, but some parts of our site may not function properly.{" "}
          <div className={styles.linkContainer}>
            <a
              href="/privacy-policy
          "
            >
              Privacy policy
            </a>
            <div>|</div>
            <a
              href="/cookie-policy
          "
            >
              cookies policies.
            </a>
          </div>
        </p>
        <div className={styles.buttonContainer}>

          <button onClick={handleDecline} className={styles.declineButton}>
            I disagree
          </button>
          <button onClick={handleAccept} className={styles.acceptButton}>
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
