import { useState } from "react";
import Link from "next/link";
import { mobileNavItems, navItems } from "lib/constants";
import styles from "../../../styles/AlluviumRedesign2025/navbar/MobileNavbar.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

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
              <p>{item.title}</p>
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
              <ul
                style={{ marginLeft: "24px" }}
                className={`dropdown ${openDropdown === item.title ? "open" : ""
                  }`}
              >
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

                        <ul
                          className={`${styles.sub_dropdown} ${openSubDropdowns[link.label] ? "open" : ""
                            }`}
                        >
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href}>
                                <span>{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li key={link.label}>
                        <Link href={link.href}>
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>

            )}
          </li>
        ))}
        <li className={styles.navItemButton}>
          <button className={styles.support}>
            <Link href="/atlassian-services/support">
              <a className={styles.support}>Support</a>
            </Link>
          </button>
          <Link href="/contact-us">
            <a className={styles.contactUs}>Contact Us Today</a>
          </Link>
        </li>
      </ul>
    </div >
  );
};

export default MobileNavbar;
