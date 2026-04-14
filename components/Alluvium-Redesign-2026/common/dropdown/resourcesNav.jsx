import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/resourcesNav.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const ResourcesNav = () => {
  const resourceLinks = [
    {
      title: "Success Stories",
      desc: "Explore how we’ve helped organizations deliver successful cloud migrations, optimize costs, and scale with Atlassian.",
      link: "/success-stories",
    },
    {
      title: "Blog",
      desc: "Insights, best practices, and expert perspectives on cloud, Agile, and enterprise transformation.",
      link: "/blogs",
    },
    {
      title: "Whitepapers",
      desc: "Insights, best practices, and expert perspectives on cloud, Agile, and enterprise transformation.",
      link: "/whitepaper",
    },
  ];

  const companyLinks = [
    {
      title: "Webinars & Events",
      desc: "Join our sessions to learn from experts, discover new trends, and explore practical solutions.",
      link: "/event",
    },
    {
      title: "About us",
      desc: "Learn who we are, what we stand for, and how we help organizations succeed with Atlassian.",
      link: "/about",
    },
    {
      title: "Contact & Support",
      desc: "Get in touch with our team or access support for your products and services.",
      link: "/contact-us",
    },
  ];

  return (
    <div className={styles.megaMenu}>
      {/* COLUMN 1: RESOURCES */}
      <div className={styles.navColumn}>
        <h3 className={styles.columnHeader}>Resources</h3>
        {resourceLinks.map((link, i) => (
          <Link href={link.link} key={i}>
            <div key={i} className={styles.menuItem}>
              <div className={styles.itemTitleRow}>
                <span>{link.title}</span>
                <MdOutlineKeyboardArrowRight color="#8C8C8C" />
              </div>
              <p className={styles.itemDescription}>{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.divider} />

      {/* COLUMN 2: COMPANY */}
      <div className={styles.navColumn}>
        <h3 className={styles.columnHeader}>Company</h3>
        {companyLinks.map((link, i) => (
          <Link href={link.link} key={i}>
            <div key={i} className={styles.menuItem}>
              <div className={styles.itemTitleRow}>
                <span>{link.title}</span>
                <MdOutlineKeyboardArrowRight color="#8C8C8C" />
              </div>
              <p className={styles.itemDescription}>{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.divider} />

      {/* COLUMN 3: FEATURED CARD */}
      <div className={styles.featuredCard}>
        <div className={styles.cardContent}>
          <h4 className={styles.cardTitle}>
            Why Strategic Workforce Planning is the Ultimate Choice
          </h4>
          <p className={styles.cardText}>
            The contemporary business landscape is defined by a persistent and
            widening gap...
          </p>
          <Link href="/success-stories/strategic-agile-transformation-&-cloud-migration">
            <button className={styles.cardButton}>
              GET THE REPORT
              <FaArrowRight color="#E37915" size={14} />
            </button>
          </Link>
        </div>
        <div className={styles.cardGraphic}>
          <Image
            width={191}
            height={213}
            src="/assets/Alluvium-Redesign-2026/nav/strategic.png"
            alt="Report Cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;
