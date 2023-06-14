import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Switch from "react-input-switch";
import styles from "../styles/footer.module.scss";
import { useToasts } from "react-toast-notifications";
import { ImFacebook, ImLinkedin2 } from "react-icons/im";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export function AltFooter() {
  const { addToast } = useToasts();

  function submitNewsletterForm(e) {
    e.preventDefault();
    addToast("Currently unavailable, Check back later", {
      appearance: "info",
      autoDismiss: true,
    });
  }

  return (
    <footer className={styles.altFooter}>
      <div className={`container ${styles.altFooterMainSection}`}>
        <div className={styles.altFooterMainSectionComponents}>
          <div className={styles.altFooterMainSectionComponent}>
            <div className={styles.altFooterLogo}>
              <img src={"/assets/alluvium-logo-dark.svg"} alt="Footer logo" />
            </div>
            <div>
              <p>
                We are a team of passionate professionals dedicated to providing
                businesses with cutting-edge solutions leveraging the Atlassian
                suite of tools.
              </p>
            </div>
            <div>
              <h3>DOWNLOAD BROCHURE</h3>

              <a
                aria-label="Download our brochure"
                href="https://blog.alluvium.net/wp-content/uploads/2023/06/Alluvium-brochure.pdf"
                className={styles.download}
                target="_blank"
              >
                Download
              </a>
            </div>
          </div>
          <div className={styles.altFooterMainSectionComponent}>
            <h3 className={styles.altFooterMainSectionComponentTitle}>
              COMPANY
            </h3>
            <ul className={styles.altFooterContactList}>
              <li className={styles.contactListItem}>
                <Link href="/about">About us</Link>
              </li>
              {/* <li className={styles.contactListItem}>
                <Link href="#">Leadership</Link>
              </li> */}
              <li className={styles.contactListItem}>
                <Link href="https://blog.alluvium.net/">
                  <a target="_blank" rel="norefferer">
                    Blog
                  </a>
                </Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/support/contact">
                  <a>
                    Contact us
                  </a>
                </Link>
              </li>
              {/* <li className={styles.contactListItem}>
                <Link href="#">Success Stories</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/showing-interest">Show interest</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/showing-interest-list">Login</Link>
              </li> */}
            </ul>
          </div>
          <div className={styles.altFooterMainSectionComponent}>
            <h3 className={styles.altFooterMainSectionComponentTitle}>
              SERVICES
            </h3>
            <ul className={styles.altFooterContactList}>
              <li className={styles.contactListItem}>
                <Link href="/#services">Atlassian Services</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/#services">Consulting</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/#services">Software Development</Link>
              </li>
            </ul>
          </div>
          <div className={styles.divider}>
            <hr />
          </div>
          <div className={styles.altFooterMainSectionComponent}>
            <h3 className={styles.altFooterMainSectionComponentTitle}>
              SUPPORT
            </h3>
            <ul className={styles.altFooterContactList}>
              <li className={styles.contactListItem}>
                <Link href="/support">FAQ</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/event/lagos-startup-expo">Lagos Startup Expo</Link>
              </li>
              <li className={styles.contactListItem}>
                <Link href="/event/signup">Event Follow Up Form</Link>
              </li>
              {/* <li className={styles.contactListItem}>
                <Link href="/#">Trouble Shooting</Link>
              </li> */}
            </ul>
          </div>
          <div className={styles.altFooterMainSectionComponent}>
            <h3 className={styles.altFooterMainSectionComponentTitle}>
              CONTACT US
            </h3>
            <ul className={styles.altFooterContactList}>
              <li className={styles.contactListItem}>
                <p>
                  <b>Headquarter:</b> No.1 JayTee Ojo Crescent, Off Okemesi
                  Road, Ikoro Ekiti, Ekiti State.
                </p>
                <p>
                  <b>Europe:</b> Kemp House 160, City Road London, EC1V
                  2NX.
                </p>
                <p>
                  <b>America:</b> 2000 Auburn Drive
                  One Chagrin Highlands
                  Suite 200
                  Beachwood, Ohio 44122 USA
                </p>
                <p>
                  <b>Africa:</b> Dominion Plaza, 140/141 Lekki - Epe Expressway, Lekki, Lagos 106104
                </p>
              </li>
              <li className={styles.contactListItem}>
                <b>Email:</b>
                <a href="mailto:contact@alluvium.net"> contact@alluvium.net</a>
              </li>
              <li className={styles.contactListItem}>
                <b>Phone Number:</b>
                <a href="tel:+442035762028"> +442035762028</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <hr />
          </div>
          <div className="col-md-2 px-4 mx-md-auto d-flex justify-content-between align-items-center">
            <a
              href="https://www.facebook.com/alluviumhq/?ti=as"
              aria-label="facebook"
              target="_blank"
            >
              <ImFacebook />
            </a>
            {/* <AiFillInstagram /> */}
            <a
              href="https://twitter.com/alluviumhq?s=08"
              aria-label="twitter"
              target="_blank"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/alluvium-hq/"
              aria-label="linkedIn"
              target="_blank"
            >
              <ImLinkedin2 />
            </a>
          </div>
          <div className="col-md-5">
            <hr />
          </div>
        </div>
        <div className="d-md-flex justify-content-between mt-4">
          <div className={styles.copyrights}>
            <p>
              © {new Date().getFullYear()} Alluvium Corporation. All rights
              reserved.
            </p>
          </div>
          <div className={styles.extralinks}>
            {/* <a href="#" className="me-3">
              Cookie Settings
            </a>
            <a href="#" className="me-3">
              Legal Information
            </a> */}
            <Link href={'/privacy-policy'}>
              <a aria-label="privacy-policy">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
