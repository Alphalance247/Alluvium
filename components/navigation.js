import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navigation.module.scss";
import style from "../styles/AlluviumRedesign2025/navbar/MobileNavbar.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ourServicesData } from "data";
import NewNavbar from "./Alluvium-Redesign-2025/navbar/NewNavbar";
import MobileNavbar from "./Alluvium-Redesign-2025/navbar/MobileNavbar";
import Image from "next/image";

export default function Navigation({ theme }) {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState("");
  const [dropdownActive, setDropdownActive] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});

  const toggleDropdownss = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const toggleSubDropdown = (label) => {
    setOpenSubDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleMenu = () => {
    setDisplayMobileMenu((prev) => !prev);
  };

  const toggleDropdown = (title) => {
    if (dropdownActive) {
      if (currentDropdown === title) {
        setDropdownActive(!dropdownActive);
        setCurrentDropdown("");
      } else {
        setCurrentDropdown(title);
      }
    } else {
      setCurrentDropdown(title);
      setDropdownActive(!dropdownActive);
    }
    // setDisplayMobileMenu(prev=>!prev);
  };

  return (
    <div
      className={`${styles.navigationMenu}`}
      data-aos-delay="300"
      data-aos="fade-down"
      onMouseLeave={() => toggleDropdown("")}
    >
      <div
        className={`d-flex gap-5 justify-content-between align-items-center ${styles.heading__new}`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image
              width={150}
              height={50}
              src="/assets/alluvium-logo-dark.svg"
              alt="logo"
            />
          </Link>
        </div>
        {!displayMobileMenu && (
          <nav className={styles.navigation}>
            <NewNavbar />
            <div className="ms-auto d-flex align-items-center justify-content-between gap-3">
              {/* <Link href="/atlassian-services/support">
                <a className={styles.contactUsButton}>Support</a>
              </Link> */}
              <Link href="/contact-us">
                <a className={styles.scheduleButton}>Contact Us Today</a>
              </Link>
            </div>
          </nav>
        )}
        <button
          onClick={() => toggleMenu()}
          className={
            displayMobileMenu ? ` ${styles.closeBtn}` : styles.menuBtnDark
          }
          arial-label="Toggle Menu"
          id="toggleMenu"
          title={`${displayMobileMenu ? "open menu" : "close menu"}`}
        >
          <div className={styles.menuBtnDark}>
            <div className={styles.barOne}></div>
            <div className={styles.barTwo}></div>
            <div className={styles.barThree}></div>
          </div>
        </button>
      </div>
      <div className="container">
        <div
          className={
            displayMobileMenu === true
              ? styles.mobileMenu
              : styles.hideMobileMenu
          }
        >
          {/* <ul>
            <li>
              <Link href="/">+ Home</Link>
            </li>
            <li>
              <Link href="/about">+ About us</Link>
            </li>
            <li>
              <a href="http://university.alluvium.net" target="_blank">
                + Alluvium University (AU)
              </a>
            </li>
            <li>
              <Link href="/showing-interest">+ Show Interest (AU)</Link>
            </li>
            <li>
              <Link href="/project-reel">+ Project Reel</Link>
            </li>
            <li>
              <Link href="/#services">+ Our Services</Link>
            </li>
            <li>
              <a
                href="https://marketplace.atlassian.com/vendors/1218751/alluvium"
                target="_blank"
              >
                + Our Products
              </a>
            </li>
            <li>
              <Link href={"/blogs"}>+ Blog</Link>
            </li>
            <li>
              <Link href="/case-studies">+ Case Studies</Link>
            </li>
            <li>
              <Link href="/support">+ Support (FAQs)</Link>
            </li>
            <li>
              <Link href="/contact-us">+ Contact Us</Link>
            </li>
            <li>
              <a
                href="https://calendly.com/alluvium-hq"
                rel="Alluvium"
                target="_blank"
              >
                + Schedule a Call
              </a>
            </li>
          </ul> */}
          <MobileNavbar />
          {/* <div className={style.navItemButton}>
            <button className={style.support}>
              <Link href="/atlassian-services/support" >
                <a className="">Support</a>
              </Link>
            </button>
            <button>

              <Link href="/contact-us" className="border border-danger">
                <a className="">Contact Us Today</a>
              </Link>
            </button>
          </div> */}
        </div>
        {/* <div className={displayMobileMenu === true ? styles.mobileMenu : ""}>
          <Link href="/atlassian-services/support">
            <a className={styles.contactUsButton}>Support</a>
          </Link>
          <Link href="/contact-us">
            <a className={styles.scheduleButton}>Contact Us Today</a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
    },
  };
};
