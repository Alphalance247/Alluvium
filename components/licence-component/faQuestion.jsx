"use client";
import styles from "../../styles/licence.module.scss";
import FAQss from "components/atlassian-service-compo/FAQss";

const FaQuestions = () => {
  return (
    <div className={`container-fluid ${styles.faqDiv}`}>
      <div className={`container mx-auto ${styles.faqsEncap}`}>
        <div className={`${styles.faqContent}`}>
          <h5>FAQ</h5>
          <h3>Frequently Asked Questions</h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p> */}
        </div>

        <FAQss />
      </div>
    </div>
  );
};

export default FaQuestions;
