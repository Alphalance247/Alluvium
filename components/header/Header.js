import React, { useState } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";
import styles from "../../styles/header/header.module.scss";

const dropdownItems = [
  {
    title: "Alluvium University",
    description: "Welcome to Alluvium University, learning.",
    id: "university",
    url: "/support/contact",
  },
  {
    title: "Show Interest",
    description: "Easily track and manage your interest with alluvium.",
    id: "showInterest",
    url: "/expense",
  },
  {
    title: "Show Interest",
    description: "Easily track and manage your interest with alluvium.",
    id: "showInterest",
    url: "/expense",
  },
  {
    title: "Projects",
    description: "Seamless Projects management with ITSM.",
    id: "project",
    url: "/customer",
  },
  {
    title: "Blogs",
    description: "Get weekly health reports from our Blogs.",
    id: "blogs",
    url: "/report",
  },
  {
    title: "Values",
    description: "Automating record-keeping with AI.",
    id: "valuesID",
    url: "/ai",
  },
];

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/assets/alluvium-logo-dark.svg" alt="logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <div className={styles.servicesToggle} onClick={toggleDropdown}>
                <p>Services</p>
                {dropdownVisible ? (
                  <MdOutlineKeyboardArrowUp size={20} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={20} />
                )}
              </div>
              {dropdownVisible && <Dropdown items={dropdownItems} />}
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
