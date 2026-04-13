import React from "react";
import styles from "../../../../styles/AlluviumRedesign2026/common/dropdown/productMenu.module.scss";

const ProductNav = () => {
  const products = [
    {
      title: "Export & Count",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae malesuada",
      image: "https://placehold.co/288x247",
      theme: styles.skyTheme,
    },
    {
      title: "Resource Compare",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae malesuada",
      image: "https://placehold.co/288x247",
      theme: styles.orangeTheme,
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
            <div
              key={index}
              className={`${styles.productCard} ${product.theme}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                  <h4 className={styles.productTitle}>{product.title}</h4>
                  <div className={styles.arrowIcon}>
                    <div className={styles.arrowShape} />
                  </div>
                </div>
                <p className={styles.productDescription}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
