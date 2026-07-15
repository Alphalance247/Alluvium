import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/productMenu.module.scss";
import Image from "next/legacy/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const ProductNav = () => {
  const products = [
    {
      title: "Export & Count",
      description:
        "A powerful tool for Jira Cloud that allows you to export your data and get detailed insights into your projects, issues, and workflows.",
      image: "/assets/Alluvium-Redesign-2026/nav/export-count.png",
      theme: styles.skyTheme,
      link: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion?tab=overview&hosting=cloud",
    },
    {
      title: "Resource Compare",
      description: "Compare resources across your Jira projects with ease. ",
      image: "/assets/Alluvium-Redesign-2026/nav/compare.png",
      theme: styles.orangeTheme,
      link: "https://marketplace.atlassian.com/apps/1223507/resource-compare-for-jira?tab=overview&hosting=cloud",
    },
  ];

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <span className={styles.headerText}>OUR products</span>
        </div>

        <div className={styles.cardGrid}>
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
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
