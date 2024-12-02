import React, { useState } from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { validateEmail } from "lib/validation";
import Link from "next/link";
import styles from "../styles/booking.module.scss";
import Image from "next/image";
import ConsutomerConsultation from "./consutomerConsultation";

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
  return (
    <section id="consultationForm" className={styles.contact}>
      <div className={`container ${styles.book} p-0`}>
        <ConsutomerConsultation />

        <div className={`${styles.location}`}>
          <h3 className={`${styles.contact__us}`}>Contact Us</h3>
          <p className={`${styles.contact__us__text}`}>
            We’re here to help! Whether you have questions, need assistance, or
            want to provide feedback, our team at Alluvium is always ready to
            assist you.
          </p>

          <div className="d-flex align-items-center gap-2">
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
          </div>

          <div className="d-flex align-items-center gap-2">
            <b>Connecticut Office:</b>
            <a
              href="tel:+12073607252"
              className="cursor-pointer text-decoration-underline"
            >
              +1 (207) 360-7252
            </a>
          </div>

          <div>
            <p className={styles.follow__us}>Follow us</p>

            <div className="d-flex justify-content-between">
              {socialButton.map((el, i) => (
                <div key={i} className="cursor-pointer">
                  <a href={el.url}>
                    <Image src={el.image} alt={el.alt} width={25} height={25} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
