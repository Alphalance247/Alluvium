import React, { useState } from "react";
import styles from "../../../styles/AlluviumRedesign2025/navbar/DropdownLink.module.scss";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import Link from "next/link";

const DropdownLink = ({ item }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li
      className={`${styles.dropdown_item} ${
        hasChildren ? `${styles.has_children}` : ""
      }`}
    >
      {hasChildren ? (
        <div
          onClick={() => setOpen(!open)}
          className={styles.item_with_children}
        >
          <span className={styles.item_label}>{item.label}</span>
          <span className={`arrow ${open ? "open" : ""}`}>
            {open ? (
              <MdOutlineKeyboardArrowDown
                size={"1.5em"}
                className="fw-bold text-dark"
              />
            ) : (
              <MdOutlineKeyboardArrowRight
                size={"1.5em"}
                className="fw-bold text-dark"
              />
            )}
          </span>
        </div>
      ) : (
        <Link
          style={{ cursor: "pointer" }}
          href={item.href}
          className={styles.item_label}
        >
          {item.label}
        </Link>
      )}

      {hasChildren && open && (
        <ul className={styles.dropdown_submenu}>
          {item.children.map((child, idx) => (
            // <DropdownLink key={idx} item={child} />
            <Link style={{ cursor: "pointer" }} href={child.href}>
              {child.label}
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownLink;
