import React, { useState } from "react";
import styles from "../../../../styles/AlluviumRedesign2026/ai-adoption-training/main/header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/ai" },
    { label: "AGENT ECONOMICS", href: "/ai/ai-agent-economics" },
    { label: "AI ADOPTION", href: "/ai-adoption-training" },
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.innerContainer}>
        {/* Brand Logo Wrapper */}
        <div className={styles.logoGroup}>
          <Link href="/">
            <Image
              width={120}
              height={24}
              src="/assets/alluvium-logo-dark.svg"
              alt="Alluvium logo"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className={`${styles.mobileToggle} ${isMenuOpen ? styles.isOpen : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* Navigation Link Stack */}
        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.menuActive : ""}`}
        >
          <div className={styles.linksList}>
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className={styles.navLink}>{link.label}</div>
              </Link>
            ))}
          </div>

          {/* Action Callout Button */}
          <div className={styles.actionGroup}>
            <button className={styles.contactBtn}>CONTACT US</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
