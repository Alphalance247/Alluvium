import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/FilterComponent.module.scss";

const FilterComponent = ({ title, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass selected option to parent
  };

  return (
    <div className={styles.filterContainer}>
      <p className={styles.filterTitle}>{title}</p>
      <div
        className={styles.labelOption}
        onClick={toggleDropdown}
        role="button"
        aria-expanded={isOpen}
      >
        <p>{selectedOption}</p>
        {isOpen ? <SlArrowUp /> : <SlArrowDown />}
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterComponent;
