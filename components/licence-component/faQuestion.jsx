"use client";
import styles from "../../styles/licence.module.scss";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";

const FaQuestions = () => {
  const [expandIndex, setExpandIndex] = useState(null);

  const frequentlyAsked = [
    {
      id: 1,
      questions: "What Atlassian services do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 2,
      questions:
        "How can we get started with your Atlassian services, and what should we expect during the initial consultation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 3,
      questions: " What kind of support do you offer post-implementation?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 4,
      questions: "What is involved in a holistic site audit and governance?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 5,
      questions:
        "Can you help us migrate from a different platform to Atlassian Cloud?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 6,
      questions:
        "Data security is our top priority. How does Atlassian guarantee it, particularly for cloud solutions?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 7,
      questions:
        "What types of training programs do you offer for our team, and how can they help us maximize the use of Atlassian tools?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
    {
      id: 8,
      questions:
        "What are the potential benefits of integrating artificial intelligence (AI) into our Atlassian tools, and how can it help our organization?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti quisquam eveniet pariatur quaerat, veniam sapiente nemo. Deserunt cum impedit incidunt cumque quia laborum praesentium, sed temporibus molestiae sapiente deleniti id ut tempore. Debitis nihil distinctio pariatur officiis! Doloremque vel laboriosam ab officiis, quas quasi minus facilis, aliquam provident consequuntur quisquam recusandae tempore debitis, error iste neque quod officia quos aperiam voluptatibus quia. Inventore repellat sunt quas esse molestiae fuga, rerum aperiam delectus corrupti quo quia dolores ducimus error pariatur iste consectetur eligendi nesciunt similique. Accusantium ipsam vel rerum deserunt officia sint quo, a explicabo harum officiis fugit aut dignissimos?",
    },
  ];

  const handleDropdown = (i) => {
    if (expandIndex === i) {
      setExpandIndex(null);
    } else {
      setExpandIndex(i);
    }
  };

  return (
    <div className={`container-fluid ${styles.faqDiv}`}>
      <div className={`container mx-auto ${styles.faqsEncap}`}>
        <div className={`${styles.faqContent}`}>
          <h5>FAQ</h5>
          <h3>Frequently Asked Questions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Purus dui eget felis congue
            arcu praesent proin. Nec varius orci placerat laoreet ut hendrerit
            id.
          </p>
        </div>

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
              {expandIndex === i && <p>{item.answer}</p>}
              <hr className={` ${styles.horizon}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaQuestions;
