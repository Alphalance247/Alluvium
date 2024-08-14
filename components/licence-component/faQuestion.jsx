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

        {/* <div className={`${styles.faqsection}`}>
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
                <p data-aos-delay="100" data-aos="fade-down">
                  {item.answer}
                </p>
              )}
              <hr className={` ${styles.horizon}`} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FaQuestions;
