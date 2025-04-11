"use client";
import styles from "../../styles/licence.module.scss";
import FAQss from "components/atlassian-service-compo/FAQss";

const FaQuestions = () => {
  return (
    <div className={`${styles.faqDiv}`}>
      <div className={`${styles.faqsEncap}`}>
        <div className={`${styles.faqContent}`}>
          {/* <h5>FAQ</h5> */}
          <h3>Frequently Asked Questions</h3>
        </div>

        <FAQss />
      </div>
    </div>
  );
};

export default FaQuestions;
