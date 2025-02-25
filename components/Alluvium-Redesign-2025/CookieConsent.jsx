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
        <img
          src="/assets/redesign-2025/cookiesLogo.svg"
          alt="Cookie Icon"
          className={styles.icon}
        />
        <h2>Cookie consent</h2>
        <p>
          We use cookies to improve your experience and analyze site usage.
          Cookies help us understand what content you find useful so we can
          enhance your experience. You can disable cookies in your browser
          settings, but some parts of our site may not function properly.{" "}
          <a href="/cookies-policy">Read cookies policies.</a>
        </p>
        <div className={styles.buttonContainer}>
          <button onClick={handleAccept} className={styles.acceptButton}>
            Accept & continue
          </button>
          <button onClick={handleDecline} className={styles.declineButton}>
            Decline cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
