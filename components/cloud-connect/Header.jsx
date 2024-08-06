import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logoDiv}>
          <div className={styles.flexBetween}>
            <Image
              src={"/assets/cloud-connect/images/logo.png"}
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
        <ul className={styles.navList}>
          <li className={isActive("/cloud-connect") ? styles.active : ""}>
            <Link href="/cloud-connect">Home</Link>
          </li>
          <li
            className={isActive("/cloud-connect/agenda") ? styles.active : ""}
          >
            <Link href="/cloud-connect/agenda">Agenda</Link>
          </li>
          <li
            className={isActive("/cloud-connect/sponsor") ? styles.active : ""}
          >
            <Link href="/cloud-connect/sponsor">Sponsor</Link>
          </li>
          <li
            className={`${styles.resources} ${
              isResourcesOpen ? styles.open : ""
            }`}
          >
            <button onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
              Resources
              <Image
                src={"/assets/cloud-connect/icons/lucide_chevron-down.svg"}
                alt=""
                width={16}
                height={16}
              />
            </button>
            {isResourcesOpen && (
              <ul className={styles.submenu}>
                <li
                  className={
                    isActive("/cloud-connect/news") ? styles.active : ""
                  }
                >
                  <Link href="/resources/documents">News</Link>
                </li>
                <li
                  className={
                    isActive("/cloud-connect/media") ? styles.active : ""
                  }
                >
                  <Link href="/cloud-connect/videos">Media</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Button>Buy Tickets</Button>
      </nav>
    </header>
  );
};

export default Header;
