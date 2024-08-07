import styles from "../../styles/cloudconnect.module.scss";

const SectionHeader = ({
  heading,
  description,
  button1,
  button2,
  widthFull = false,
}) => {
  const widthClass = widthFull
    ? styles["section-header--full-width"]
    : styles["section-header--limited-width"];

  return (
    <div className={`${styles["section-header"]} ${widthClass}`}>
      <h2 className={styles["section-header__heading"]}>{heading}</h2>

      {description && (
        <p className={styles["section-header__description"]}>{description}</p>
      )}

      {(button1 || button2) && (
        <div className={styles["section-header__buttons"]}>
          {button1}
          {button2}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
