import styles from "../../styles/AlluviumRedesign2025/redesign.module.scss";

const Heading = ({
  title,
  titleVariant,
  heading,
  subhead,
  variant = "default",
  paragraph = true,
}) => {
  return (
    <div
      className={`${styles.services__heading} ${
        styles[`services__heading--${variant}`]
      }`}
    >
      <p
        className={`${styles.how__we__help} ${
          styles[`how__we__help--${titleVariant}`]
        } `}
      >
        {title}
      </p>
      <h2>{heading}</h2>
      {paragraph && <p className={styles.discover__business}>{subhead}</p>}
    </div>
  );
};

export default Heading;
