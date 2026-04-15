import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/AlluviumRedesign2026/common/navigation.module.scss";
import SolutionNav from "./dropdown/solutionNav";
import Image from "next/image";
import Link from "next/link";
import ResourcesNav from "./dropdown/resourcesNav";
import ProductNav from "./dropdown/productNav";
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
  // Track which dropdown is currently open
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown if user clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Handle Mouse Enter
  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  // Handle Mouse Leave with a tiny delay to prevent flickering
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 31150);
  };

  return (
    <nav className={styles.navWrapper} ref={navRef}>
      <div className={styles.innerNav}>
        {/* Logo Section */}

        <div className={styles.logo}>
          <Link href="/">
            <Image
              width={150}
              height={50}
              src="/assets/alluvium-logo-dark.svg"
              alt="Alluvium logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={styles.menuLinks}>
          {/* SOLUTIONS - Triggering the real component */}
          <div className={styles.navItemContainer}>
            <div
              className={`${styles.navItem} ${activeDropdown === "solutions" ? styles.active : ""}`}
              onClick={() => toggleDropdown("solutions")}
            >
              SOLUTIONS
              <GoChevronDown width={16} />
            </div>
            {activeDropdown === "solutions" && <SolutionNav />}
          </div>

          {/* PRODUCTS - Placeholder */}
          <div className={styles.navItemContainer}>
            <div
              className={`${styles.navItem} ${activeDropdown === "products" ? styles.active : ""}`}
              onClick={() => toggleDropdown("products")}
            >
              PRODUCTS
              {/* <div className={styles.chevron} /> */}
              <GoChevronDown width={16} />
            </div>
            {activeDropdown === "products" && <ProductNav />}
          </div>

          {/* RESOURCES - Placeholder */}
          <div className={styles.navItemContainer}>
            <div
              className={`${styles.navItem} ${activeDropdown === "resources" ? styles.active : ""}`}
              onClick={() => toggleDropdown("resources")}
            >
              RESOURCES
              {/* <div className={styles.chevron} /> */}
              <GoChevronDown width={16} />
            </div>
            {activeDropdown === "resources" && <ResourcesNav />}
          </div>
        </div>

        {/* Action Button */}
        <div className={styles.actions}>
          <Link href="/contact-us">
            <button className={styles.btnContact}>CONTACT US</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
