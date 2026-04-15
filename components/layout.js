import React from "react";
import { AltFooter } from "./footer";
import Navigation from "./navigation";
import styles from "../styles/layout.module.scss";
import { ConsultationForm } from "./Consultation";
import ContactSection from "./Alluvium-Redesign-2025/ContactSection";
import Footer from "./Alluvium-Redesign-2026/footer";
import CookieConsent from "./Alluvium-Redesign-2025/CookieConsent";
import Navbar from "./Alluvium-Redesign-2026/common/header";

export default function Layout({ children, withoutForm }) {
  return (
    <div>
      {/* <Navigation /> */}
      <Navbar />
      <div className={styles.layoutBody}>{children}</div>
      {/* {<ConsultationForm />} */}

      {/* <AltFooter /> */}
      {/* {!withoutForm && <ContactSection />} */}
      <CookieConsent />
      <Footer />
    </div>
  );
}
