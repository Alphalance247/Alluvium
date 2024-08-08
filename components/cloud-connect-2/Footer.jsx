import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #ffffff1a",
      }}
    >
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <img
            src="/assets/cloud-connect/images/logo.png"
            alt="Cloud connect logo"
            className={styles.footer__logo}
          />
          <div className={styles.footer__links}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/cloud-connect/agenda">Agenda</Link>
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
              <input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
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
