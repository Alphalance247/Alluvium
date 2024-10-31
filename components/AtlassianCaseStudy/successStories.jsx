import { useState } from "react";
import styles from "../../styles/Atlassian-Case-Study/SuccessStories.module.scss";

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = [
    {
      btn: "Yale School of Management",
      content: "",
    },
    {
      btn: "Twitter",
      content: "",
    },
    {
      btn: "DHI Group",
      content: "",
    },
    {
      btn: "CBS",
      content: "",
    },
    {
      btn: "The Telegraph",
      content: "",
    },
  ];

  const handleClick = (i) => {
    setActiveTab(i);
  };
  return (
    <section className={`container-fluid px-0 ${styles.success__stories}`}>
      <div className={`${styles.tab}`}>
        <div>
          <p className={`${styles.success}`}>
            Real Success Stories Powered by Atlassian
          </p>
        </div>

        <div>
          <div className={`${styles.btn__all}`}>
            {data.map((el, i) => {
              return (
                <button
                  className={`${styles.btns} ${
                    activeTab === i ? styles.active : null
                  }`}
                  onClick={() => handleClick(i)}
                  key={i}
                >
                  {el.btn}
                </button>
              );
            })}
          </div>

          <div className={styles.feedback__view}>
            {/* // <div className={styles.body__content__all}>
              //   <p className={`${styles.expectations}`}>
              //     Meeting student expectations by standardizing on a single
              //     platform
              //   </p>
              //   <div className={styles.body__content}>
              //     <div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>INDUSTRY</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Higher Education
              //         </p>
              //       </div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>LOCATION</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           New Haven, CT, USA
              //         </p>
              //       </div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>NUMBER OF USERS</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           31 IT Employeess
              //         </p>
              //       </div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>PRODUCTS</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Jira Service Desk
              //         </p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Jira Software
              //         </p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Jira Software
              //         </p>
              //       </div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>INDUSTRY</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Higher Education
              //         </p>
              //       </div>
              //       <div style={{ marginBottom: "2.5rem" }}>
              //         <p className={styles.heading__styles}>INDUSTRY</p>
              //         <p className={`${styles.subHeading__styles}`}>
              //           Higher Education
              //         </p>
              //       </div>
              //     </div>

              //     <div>
              //       <p className={styles.heading__styles__1}>The challenge</p>
              //       <p className={`${styles.subHeading__styles__1}`}>
              //         As the Yale School of Management (SOM) set its sights on
              //         becoming a global powerhouse, the IT team needed a more
              //         robust solution to better support the school’s goals.
              //         What’s more, they needed to keep up with the high service
              //         expectations of their customers – digital native students
              //         accustomed to the modern world of on demand anything
              //         <br />
              //         <br />
              //         Before implementing the Atlassian solution, Yale SOM was
              //         working with a disjointed set of tools: BMC Footprints and
              //         email for Help Desk requests, Basecamp for managing
              //         development projects, and “a hodgepodge of tools” for
              //         documentation and collaboration. As a result, they lacked
              //         transparency and visibility into tasks, statuses, and key
              //         metrics and had no knowledge base for internal or external
              //         communities.
              //         <br />
              //         <br />n order to better serve the school and its students,
              //         the SOM IT department decided to standardize on Atlassian
              //         to achieve greater efficiency, collaboration, and
              //         productivity
              //       </p>
              //     </div>
              //   </div>
              // </div> */}
            <>
              <div style={{ width: "100%", height: "500px" }}>
                <iframe
                  src="/case-study.pdf"
                  title="PDF Document"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                />
              </div>
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
