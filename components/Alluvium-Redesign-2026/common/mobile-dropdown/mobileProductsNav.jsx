import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import styles from "../../../../styles/AlluviumRedesign2026/common/mobile-dropdown/produts.module.scss";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const MobileProductsNav = () => {
  const products = [
    {
      title: "Export & Count",
      description:
        "A powerful tool for Jira Cloud that allows you to export your data and get detailed insights into your projects, issues, and workflows.",
      image: "/assets/Alluvium-Redesign-2026/navbar/export&count2.png",
      theme: styles.skyTheme,
      link: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion?tab=overview&hosting=cloud",
    },
    {
      title: "Resource Compare",
      description: "Compare resources across your Jira projects with ease. ",
      image: "/assets/Alluvium-Redesign-2026/navbar/resource-compare2.png",
      theme: styles.orangeTheme,
      link: "https://marketplace.atlassian.com/apps/1223507/resource-compare-for-jira?tab=overview&hosting=cloud",
    },
  ];
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownTitle}>our products</div>
      {/* <div className={styles.cardGrid}>
        {products.map((product, index) => (
          <a
            href={product.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${styles.productCard} ${product.theme}`}>
              <div className={styles.imageContainer}>
                <Image
                  width={248}
                  height={141}
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h4 className={styles.productTitle}>{product.title}</h4>
                  <MdOutlineKeyboardArrowRight color="#8C8C8C" />
                </div>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div> */}
      <div className={styles.childrenContainerParent}>
        {products.map((product) => (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            key={product.title}
          >
            <div className={`${styles.childrenContainer} `}>
              <div className={styles.childrenImageContainer}>
                <Image
                  width={311}
                  height={251}
                  src={product.image}
                  alt={product.title}
                />

              </div>
              <div
                className={
                  product.title === "Export & Count"
                    ? styles.exportCount
                    : styles.resourceCompare
                }
              >
                <div>
                  <div className={styles.childrenLinkTitle}>
                    {product.title}
                    <span>
                      {" "}
                      <FaChevronRight className={styles.childrenLinkIcon} />
                    </span>
                  </div>
                </div>
                <p className={styles.childrenDescription}>
                  {product.description}
                </p>
              </div>
            </div>
          </a>
        ))}
        {/* <div style={{ height: '251px', backgroundColor: 'red', width: '100%' }}></div>
        <div style={{ height: '251px', backgroundColor: 'red', width: '100%' }}></div> */}

      </div>
    </div >
  );
};

export default MobileProductsNav;
