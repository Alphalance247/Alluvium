import React from "react";
import { AltFooter } from "./footer";
import Navigation from "./navigation";
import styles from "../styles/layout.module.scss";
import { ConsultationForm } from "./Consultation";
import FaQuestions from "./licence-component/faQuestion";

export default function Layout({ children, withoutForm }) {
  return (
    <div>
      <Navigation />
      <div className={styles.layoutBody}>{children}</div>
      <FaQuestions />
      {!withoutForm && <ConsultationForm />}
      <AltFooter />
    </div>
  );
}
