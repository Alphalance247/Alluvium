import { FaCheckCircle } from "react-icons/fa";
import styles from "../../styles/AlluviumRedesign2025/policy and cookies/policy.module.scss";
import Link from "next/link";

const List = ({ heading, content }) => {
  return (
    <section className={styles.privacy__policy}>
      <div className={styles.privacy__policy__container}>
        <h1 className={styles.privacy__policy__heading}>{heading}</h1>

        <div className={styles.privacy__policy__content}>
          {content.map((item, i) => {
            return (
              <div key={i} className={styles.privacy__policy__content__text}>
                <div>
                  <h3>{item.head}</h3>

                  {item?.paragraph?.map((para, i) => {
                    if (para.type === "paragraphandLink") {
                      return (
                        <p key={i}>
                          {para.text}
                          {para?.isLinkAvailable && (
                            <span key={i} className={styles.url__span}>
                              <Link href={para?.url}>{para.linkText}</Link>
                            </span>
                          )}
                          {para.textCont}
                        </p>
                      );
                    }

                    if (para.type === "paragraphWithBoldText") {
                      return (
                        <p key={i}>
                          {para?.subhead}
                          <span>{para?.subheadBold}</span>
                          {para?.subheadCont}
                        </p>
                      );
                    }

                    if (para?.type === "list") {
                      return (
                        <div className={styles.privacy__list} key={i}>
                          <ul>
                            <li>
                              {para?.isBold && (
                                <span className={styles.boldSpan}>
                                  {para?.boldText}
                                </span>
                              )}{" "}
                              {para?.list}
                            </li>
                          </ul>
                        </div>
                      );
                    }

                    if (para?.type === "linkWithList") {
                      return (
                        <div className={styles.privacy__list} key={i}>
                          <ul>
                            <li>
                              {para?.linkListText}
                              <span key={i}>
                                <Link href={para?.linkUrl}>
                                  {para?.linkText}
                                </Link>
                              </span>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default List;
