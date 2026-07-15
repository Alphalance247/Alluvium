import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/solutionNav.module.scss";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaArrowRight } from "react-icons/fa6";

const SolutionNav = () => {
  const services = [
    {
      name: "Cloud Upgrade",
      link: "/cloud-upgrade",
    },
    { name: "ESM", link: "/enterprise-service-management" },
    { name: "License Optimization", link: "/license-optimization" },
    { name: "Partnerships", link: "/strategic-partnerships" },
  ];

  return (
    <div className={styles.dropdownCard}>
      {/* Left: Navigation List */}
      <div className={styles.linksColumn}>
        <div className={styles.columnTitle}>Alluvium Solutions</div>
        {services.map((service, index) => (
          <Link href={service?.link} key={index}>
            <div key={index} className={styles.navLink}>
              {service.name}
              <span className={styles.chevron} />
            </div>
          </Link>
        ))}
      </div>

      {/* Center: Visual Divider */}
      <div className={styles.divider} />

      {/* Right: Featured Promotional Card */}
      <div className={styles.featuredCard}>
        <div className={styles.cardHeader}>
          <h4>Regulatory Supremacy and Competitive Edge</h4>
          <p>
            It argues that mastering regulation can be turned into a competitive
            advantage.
          </p>
          <Link href="/whitepaper/regulatory-supremacy-and-competitive-edge/">
            <button className={styles.badgeBtn}>
              Get The Report
              <FaArrowRight color="#E37915" size={14} />
            </button>
          </Link>
        </div>

        {/* The Graphic Preview */}
        <Image
          width={141}
          height={270}
          src="/assets/Alluvium-Redesign-2026/nav/cover.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SolutionNav;
