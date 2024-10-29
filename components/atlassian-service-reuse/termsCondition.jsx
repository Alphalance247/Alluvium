import styles from "../../styles/atlassian-services-style/TermsAndCondtions.module.scss";
import Link from "next/link";

const Conditions = ({ data, headings, paragraphs, subhead = false }) => {
  return (
    <section className={`container ${styles.terms__section}`}>
      <div className={styles.terms__header}>
        <h1>{headings}</h1>
        <p>{paragraphs}</p>
      </div>
      <div className={styles.content__section__head}>
        {data.map((el) => {
          return (
            <div className={`${styles.content__section}`} key={el.id}>
              <h1>
                {el.id}. {el.heading}
              </h1>

              {el.paragraph.map((item, i) => {
                return (
                  <div key={i}>
                    {subhead && <span>{item?.sub}</span>}
                    {Array.isArray(item?.highlight) ? (
                      item.highlight.map((highlightText, index) => (
                        <p
                          key={index}
                          style={{
                            marginBottom:
                              index === item.highlight.length - 1
                                ? null
                                : "1.5rem",
                          }}
                        >
                          <span>{highlightText?.numb}</span>
                          <span className={styles.bold__text}>
                            {highlightText?.boldText}
                          </span>
                          {highlightText?.text}

                          <Link href={`${highlightText?.subtextUrl}`}>
                            <span className={styles.highlightText__style}>
                              {highlightText?.subtext}
                            </span>
                          </Link>

                          <a href={highlightText?.url2}>
                            <span className={styles.highlightText__style}>
                              {highlightText?.subtext1}
                            </span>
                          </a>

                          <span className={styles.bold__text}>
                            {highlightText?.boldText2}
                          </span>
                          <a href={highlightText?.url3}>
                            <span className={styles.highlightText__style}>
                              {highlightText?.subtext2}
                            </span>
                          </a>
                        </p>
                      ))
                    ) : (
                      <p>{item.highlight}</p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Conditions;
