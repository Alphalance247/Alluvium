import Image from "next/image";
import styles from "../../styles/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logoDiv}>
          <div className={styles.flexBetween}>
            <Image
              src={"/assets/cloud-connect/logo.png"}
              alt="Cloud connect logo"
              width={135}
              height={71}
            />
            <div className={styles.eventDetails}>
              <span>Landmark Event Center</span>
              <span>Lagos, Nigeria</span>
              <span>November 26, 2024</span>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/agenda">Agenda</Link>
          </li>
          <li>
            <Link href="/sponsor">Sponsor</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
        <Button>Buy Tickets</Button>
      </nav>
    </header>
  );
};

export default Header;
