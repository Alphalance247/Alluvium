import React, { useState } from "react";
import styles from "../../../styles/AlluviumRedesign2025/navbar/DropdownNavItem.module.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import DropdownLink from "./DropdownLink";

const DropdownNavItem = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={styles.dropdown_nav_item}
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <span className={styles.nav_link}>
        {title}
        <span className={`arrow ${open ? "open" : ""}`}>
          {open ? (
            <MdOutlineKeyboardArrowUp
              size={"1.5em"}
              className="fw-bold text-dark"
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              size={"1.5em"}
              className="fw-bold text-dark"
            />
          )}
        </span>
      </span>

      {open && (
        <ul className={styles.dropdown_menu}>
          {links.map((item, idx) => (
            <DropdownLink key={idx} item={item} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownNavItem;
