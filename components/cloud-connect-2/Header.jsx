import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/cloud-connect-2/cloudconnect.module.scss";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path) => router.pathname === path;
  const isResourcesActive = () => {
    return ["/cloud-connect/news", "/cloud-connect/media"].some((path) =>
      router.pathname.startsWith(path)
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItems = () => (
    <>
      <li className={isActive("/cloud-connect") ? styles.active : ""}>
        <Link href="/cloud-connect">Home</Link>
      </li>
      <li className={isActive("/cloud-connect/agenda") ? styles.active : ""}>
        <Link href="/cloud-connect/agenda">Agenda</Link>
      </li>
      <li className={isActive("/cloud-connect/sponsor") ? styles.active : ""}>
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
    </>
  );

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
              <span>The Zone, Plot 9, Gbagada</span>
              <span>Industrial Scheme beside UPS,</span>
              <span>Lagos, Nigeria</span>
              <span>November 28th, 2024</span>
            </div>
          </div>
        </Link>
        {isMobile && (
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            <img src="/assets/cloud-connect/icons/menu-sharp.svg" alt="menu" />
          </div>
        )}
        {(!isMobile || isMobileMenuOpen) && (
          <ul
            className={`${styles.navList} ${
              isMobileMenuOpen ? styles.mobileMenu : ""
            }`}
          >
            {renderNavItems()}
          </ul>
        )}
        <div className={styles.ctaButton}>
          <Link href="/cloud-connect/book-a-ticket">
            <Button>Buy Tickets</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
