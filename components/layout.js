import React, { useEffect, useState } from "react";
import { AltFooter } from "./footer";
import Navigation from "./navigation";
import styles from "../styles/layout.module.scss";
import { ConsultationForm } from "./Consultation";
import ContactSection from "./Alluvium-Redesign-2025/ContactSection";
import Footer from "./Alluvium-Redesign-2026/footer";
import CookieConsent from "./Alluvium-Redesign-2026/common/cookieConsent";
import Navbar from "./Alluvium-Redesign-2026/common/header";
import AnnouncementBar from "./Alluvium-Redesign-2026/common/banner/team26CatchUp";

export default function Layout({ children, withoutForm, heroTheme = "light" }) {
  // const [heroTheme, setHeroTheme] = useState("dark");

  // useEffect(() => {
  //   const hero = document.querySelector("[data-hero-theme]");

  //   if (hero) {
  //     setHeroTheme(hero.dataset.heroTheme || "light");
  //   }
  // }, [children]);
  return (
    <div>
      {/* <Navigation /> */}
      <Navbar heroTheme={heroTheme} />
      {/* <AnnouncementBar /> */}
      <div className={styles.layoutBody}>{children}</div>
      {/* {<ConsultationForm />} */}

      {/* <AltFooter /> */}
      {/* {!withoutForm && <ContactSection />} */}
      <CookieConsent />
      <Footer />
    </div>
  );
}
