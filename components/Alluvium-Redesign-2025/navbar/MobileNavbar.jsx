import { useState } from "react";
import Link from "next/link";
import { mobileNavItems, navItems } from "lib/constants";
import styles from "../../../styles/AlluviumRedesign2025/navbar/MobileNavbar.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";

const MobileNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  const toggleSubDropdown = (label) => {
    setOpenSubDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  return (
    <div>
      <ul className={styles.nav_menu}>
        {mobileNavItems.map((item) => (
          <li key={item.title} className={styles.nav_item}>
            <button
              onClick={() => toggleDropdown(item.title)}
              className={styles.nav_button}
            >
              <p className={styles.navItemTitle}>{item.title}</p>
              <span>
                {openDropdown == item.title ? (
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
              </span>
            </button>

            {openDropdown === item.title && item.links && (
              <>
                <div className={styles.dropdownTitle}>{item.header}</div>
                <div
                  style={{}}
                  className={`dropdown ${openDropdown === item.title ? "open" : ""
                    }`}
                >
                  {/* <li>helo</li>
                  <li>helo</li> */}
                  {item.links.map((link) => {
                    if (link.children) {
                      return (
                        <li key={link.label} className={styles.nav_subitem}>
                          <button
                            onClick={() => toggleSubDropdown(link.label)}
                            className={styles.nav_sublink}

                          >
                            {link.label}
                          </button>

                          <div
                            className={`${styles.sub_dropdown} ${openSubDropdowns[link.label] ? "open" : ""
                              }`}
                          >
                            {link.children.map((child) => (
                              <div key={child.href} className={styles.childrenContainerParent}>
                                <div className={styles.childrenContainer}
                                >
                                  <div className={styles.childrenImageContainer}
                                  >
                                    <img src={child.image} alt={child.label} className={styles.childrenImage}
                                    />
                                  </div>
                                  <div
                                    className={child.label === 'Export & Count' ? styles.exportCount : styles.resourceCompare}>
                                    <Link href={child.href} >
                                      <div className={styles.childrenLinkTitle}>{child.label}
                                        <span> <FaChevronRight className={styles.childrenLinkIcon} /></span></div>
                                    </Link>
                                    <p className={styles.childrenDescription}>
                                      {child.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li key={link.label}>
                          <Link href={link.href}>
                            <div className={styles.linkContainer}>{link.label}
                              <span> <FaChevronRight className={styles.linkIcon} /></span></div>
                          </Link>
                          <div className={styles.linkDescription}>{link.description}</div>
                        </li>
                      );
                    }
                  })}
                </div>
              </>
            )}
          </li>
        ))
        }
        <li className={styles.navItemButton}>
          {/* <button className={styles.support}> */}
          {/* <Link href="/atlassian-services/support">
              <a className={styles.support}>Support</a>
            </Link> */}
          {/* </button> */}
          <Link href="/contact-us">
            <p className={styles.contactUs}>Contact Us Today</p>
          </Link>
        </li>
      </ul >
    </div >
  );
};

export default MobileNavbar;
