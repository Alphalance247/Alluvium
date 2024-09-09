import styles from "../../styles/atlassian-services-style/generalstyle.module.scss";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";
import { frequentlyAsked } from "data";
import Link from "next/link";

const FAQss = () => {
  const [expandIndex, setExpandIndex] = useState(null);

  const handleDropdown = (i) => {
    if (expandIndex === i) {
      setExpandIndex(null);
    } else {
      setExpandIndex(i);
    }
  };
  return (
    <div className={`${styles.faqsection}`}>
      {frequentlyAsked.map((item, i) => (
        <div key={item.id}>
          <div className={`${styles.questionsSection}`}>
            <div
              onClick={() => handleDropdown(i)}
              className={`${styles.questcontent}`}
            >
              <p>{item.questions}</p>
            </div>
            {expandIndex === i ? (
              <SlArrowUp
                onClick={() => handleDropdown(i)}
                style={{ cursor: "pointer", color: "#E37915" }}
              />
            ) : (
              <SlArrowDown
                onClick={() => handleDropdown(i)}
                style={{ cursor: "pointer", color: "#E37915" }}
              />
            )}
          </div>
          {expandIndex === i && (
            <p>
              {item?.answer}{" "}
              <Link href="/#consultationForm">
                <span
                  style={{
                    color: "#e37915",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {item?.subAnswer}
                </span>
              </Link>
              <span>{item?.subAnswer1}</span>
            </p>
          )}
          <hr className={` ${styles.horizon}`} />
        </div>
      ))}
    </div>
  );
};

export default FAQss;
