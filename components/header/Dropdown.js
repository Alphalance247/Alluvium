import React from "react";
import Link from "next/link";
import styles from "../../styles/dropdown.module.scss";

const Dropdown = ({ items }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownGrid}>
        {items.map((item) => (
          <div key={item.id} className={styles.dropdownItem}>
            <Link href={item.url}>
              <h4>{item.title}</h4>
            </Link>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
