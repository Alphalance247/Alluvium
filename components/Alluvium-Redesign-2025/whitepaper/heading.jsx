import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";

const HeadingText = ({
  heading = false,
  subhead = false,
  paragraph,
  text1,
  text2,
  text3,
}) => {
  return (
    <>
      {heading && <h2 className={styles.h2}>{text1}</h2>}
      {subhead && <h4 className={styles.h4}>{text2}</h4>}
      {paragraph && <p className={styles.ptag}>{text3}</p>}
    </>
  );
};

export default HeadingText;
