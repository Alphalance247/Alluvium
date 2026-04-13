import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/resourcesNav.module.scss";

const ResourcesNav = () => {
  const resourceLinks = [
    {
      title: "Success Stories",
      desc: "Case studies of workforce transformation.",
    },
    { title: "Blog", desc: "Latest insights on strategic planning." },
    { title: "Whitepapers", desc: "In-depth research and industry reports." },
  ];

  const companyLinks = [
    { title: "Webinars & Events", desc: "Join our upcoming live sessions." },
    { title: "About us", desc: "Our mission and the team behind it." },
    { title: "Contact & Support", desc: "We are here to help you succeed." },
  ];

  return (
    <div className={styles.megaMenu}>
      {/* COLUMN 1: RESOURCES */}
      <div className={styles.navColumn}>
        <h3 className={styles.columnHeader}>Resources</h3>
        {resourceLinks.map((link, i) => (
          <div key={i} className={styles.menuItem}>
            <div className={styles.itemTitleRow}>
              <span>{link.title}</span>
              <div className={styles.arrowIcon}>→</div>
            </div>
            <p className={styles.itemDescription}>{link.desc}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      {/* COLUMN 2: COMPANY */}
      <div className={styles.navColumn}>
        <h3 className={styles.columnHeader}>Company</h3>
        {companyLinks.map((link, i) => (
          <div key={i} className={styles.menuItem}>
            <div className={styles.itemTitleRow}>
              <span>{link.title}</span>
              <div className={styles.arrowIcon}>→</div>
            </div>
            <p className={styles.itemDescription}>{link.desc}</p>
          </div>
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
          <button className={styles.cardButton}>GET THE REPORT</button>
        </div>
        <div className={styles.cardGraphic}>
          <img src="https://placehold.co/136x192" alt="Report Cover" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesNav;
