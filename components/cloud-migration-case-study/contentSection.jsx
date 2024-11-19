import Button from "components/atlassian-service-reuse/Button";
import styles from "../../styles/cloud-migration-case-study/migartionmain.module.scss";
import Image from "next/image";

const ContentSection = ({ item }) => {
  return (
    <section
      className={`container mx-auto ${styles.case__study__feedbacks__heading}`}
    >
      <div className={styles.case__study__feedbacks} key={item.title}>
        <div className={styles.summary__section}>
          <div style={{ marginBottom: "1rem" }}>
            {item.title === "dhcs" ? (
              <p className={styles.summary__head}>{item?.industryFeedback}</p>
            ) : (
              <Image
                src={item?.industryIcon}
                width={item?.width}
                height={item?.height}
                alt="industryicon"
              />
            )}
          </div>

          <div className={styles.summary}>
            <p className={styles.summary__p}>
              {item?.industryFeedbackSubcontent}
            </p>
            <div className=" d-flex flex-column gap-3">
              {item?.industry?.map((el, i) => {
                return (
                  <div key={i}>
                    <p className={styles.heading__styles}>{el?.heading}</p>
                    <p className={`${styles.subHeading__styles}`} key={i}>
                      {el?.subHead}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <Button size="large">Contact Our Sales Team</Button>
            </div>
          </div>
        </div>

        <div className={`d-flex flex-column ${styles.content__display}`}>
          <div>
            {item?.paragragh?.map((el, i) => {
              return (
                <p className={styles.paragraph__content} key={i}>
                  {el}
                </p>
              );
            })}
          </div>

          <div className={styles.quote__section}>
            <p className={styles.quote__words}>{item?.quote}</p>
            {item?.quoter && (
              <>
                <span>{item?.quoter}</span> <br />
                <br />
              </>
            )}
            <span className={styles.quote__name}>{item?.quotename}</span>
          </div>

          {item?.highlight?.map((el, i) => {
            return (
              <div key={i}>
                <h5 className={styles.rest__heading}>{el?.highlightHeading}</h5>
                {el?.Highlightpargraph?.map((item) => {
                  return <p className={styles.paragraph__content}>{item}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
