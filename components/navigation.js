import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/navigation.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { ourServicesData } from "data";

export default function Navigation({ theme }) {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState("");
  const [dropdownActive, setDropdownActive] = useState(false);

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
      <div className="container d-flex gap-5 justify-content-between align-items-center">
        <div className={styles.logo}>
          <Link href="/">
            <img src="/assets/alluvium-logo-dark.svg" alt="logo" />
          </Link>
        </div>
        {!displayMobileMenu && (
          <nav className={styles.navigation}>
            <ul
              className={
                theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu
              }
            >
              <li>
                <div>
                  <p
                    onClick={() => toggleDropdown("company")}
                    className={
                      dropdownActive && currentDropdown === "company"
                        ? styles.dropdownActive
                        : styles.dropdownToggler
                    }
                  >
                    <span>Company</span>
                    {dropdownActive && currentDropdown === "company" ? (
                      <MdOutlineKeyboardArrowUp
                        size={"1.5em"}
                        className="fw-bold text-dark"
                      />
                    ) : (
                      <MdOutlineKeyboardArrowDown
                        size={"1.5em"}
                        className="fw-bold text-dark"
                      />
                    )}
                  </p>
                  <div
                    className={
                      dropdownActive && currentDropdown === "company"
                        ? styles.dropdownDiv
                        : styles.dropdownHidden
                    }
                  >
                    <ul>
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <a
                          href="http://university.alluvium.net"
                          target="_blank"
                        >
                          Alluvium University (AU)
                        </a>
                      </li>
                      <li>
                        <Link href="/showing-interest">Show Interest (AU)</Link>
                      </li>
                      <li>
                        <Link href="/our-project">Project Reel</Link>
                      </li>
                      <li>
                        <Link href="/support/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/blogs">blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>

              <li>
                <a
                  href="https://marketplace.atlassian.com/vendors/1218751/alluvium"
                  target="_blank"
                >
                  Our Products
                </a>
              </li>
              <li>
                <Link href="/blogs">Blog</Link>
                {/* <a href="/blogs" rel="Alluvium" target="_blank">
                  Blogs
                </a> */}
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
              {/* <li>
                            <div>
                                <p onClick={() => toggleDropdown('Case Studies')} className={(dropdownActive && (currentDropdown === 'Case Studies')) ? styles.dropdownActive : styles.dropdownToggler}>
                                    <span>Case Studies</span>
                                    {
                                        (dropdownActive && (currentDropdown === 'Case Studies')) ?
                                            <MdOutlineKeyboardArrowUp size={'1.5em'} className="fw-bold text-dark" />
                                            :
                                            <MdOutlineKeyboardArrowDown size={'1.5em'} className="fw-bold text-dark" />
                                    }
                                </p>
                                <div className={(dropdownActive && (currentDropdown === 'Case Studies')) ? styles.dropdownDiv : styles.dropdownHidden}>
                                    <ul>
                                        {
                                            caseStudiesData?.length && caseStudiesData.map((caseStudy) => (
                                                <li key={caseStudy.id}><Link href="/#case-studies">{caseStudy.title}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </li> */}
            </ul>
            <div className="ms-auto d-flex align-items-center justify-content-between gap-3">
              <Link href="/atlassian-services/support">
                <a className={styles.contactUsButton}>Support</a>
              </Link>
              <Link href="/support/contact#schedule-a-call">
                <a className={styles.scheduleButton}>Schedule a Call</a>
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
          {/* <div className={theme === "dark" ? styles.menuBtnDark : styles.menuBtn}> */}
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
          <ul>
            <li>
              <Link href="/">+ Home</Link>
            </li>
            {/* <li><Link href="/products">+ Our Products</Link></li> */}
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
              <Link href="/our-project">+ Project Reel</Link>
            </li>
            {/* <li><Link href="/support/contact">Contact Us</Link></li> */}
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
              <a
                href="https://blog.alluvium.net/"
                rel="Alluvium"
                target="_blank"
              >
                + Blog
              </a>
            </li>
            {/* <li><Link href="/reel">+ Project Reel</Link></li> */}
            <li>
              <Link href="/case-studies">+ Case Studies</Link>
            </li>
            {/* <li><Link href="/about">+ About us</Link></li> */}
            {/* <li><Link href="/team">+ Our Team</Link></li> */}
            {/* <li><a href="http://university.alluvium.net" target='_blank'>+ Alluvium University (AU)</a></li> */}
            {/* <li><Link href="/showing-interest">+ Show Interest (AU)</Link></li> */}
            {/* <li><Link href="/onboarding">+ Onboarding</Link></li> */}
            <li>
              <Link href="/support">+ Support (FAQs)</Link>
            </li>
            <li>
              <Link href="/support/contact">+ Contact Us</Link>
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
          </ul>
        </div>
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
