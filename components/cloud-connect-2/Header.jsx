import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const router = useRouter();

  const isActive = (path) => router.pathname === path;
  const isResourcesActive = () => {
    return ["/cloud-connect/news", "/cloud-connect/media"].some((path) =>
      router.pathname.startsWith(path)
    );
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link href="/cloud-connect" className={styles.logoDiv}>
          <div className={styles.flexBetween}>
            <Image
              src={"/assets/cloud-connect/images/logo.png"}
              alt="Cloud connect logo"
              width={135}
              height={71}
            />
            <div className={styles.eventDetails}>
              <span>Landmark Event Center,</span>
              <span>Lagos, Nigeria</span>
              <span>November 26, 2024</span>
            </div>
          </div>
        </Link>
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
              isResourcesActive() ? styles.active : ""
            } ${isResourcesOpen ? styles.open : ""}`}
          >
            <div onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
              <span>Resources</span>
              <Image
                src={"/assets/cloud-connect/icons/lucide_chevron-down.svg"}
                alt=""
                width={16}
                height={16}
              />
            </div>
            {isResourcesOpen && (
              <ul className={styles.submenu}>
                <li>
                  <Link href="/cloud-connect/news">News</Link>
                </li>
                <li>
                  <Link href="/cloud-connect/media">Media</Link>
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
