import React from "react";
import DropdownNavItem from "./DropdownNavItem";
import styles from "../../../styles/AlluviumRedesign2025/navbar/NewNavbar.module.scss";
import { navItems } from "lib/constants";

const NewNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        {navItems.map((item, idx) => (
          <DropdownNavItem key={idx} title={item.title} links={item.links} />
        ))}
      </ul>
    </nav>
  );
};

export default NewNavbar;
