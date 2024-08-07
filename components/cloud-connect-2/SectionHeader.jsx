import styles from "../../styles/cloudconnect.module.scss";

const SectionHeader = ({
  heading,
  description,
  button1,
  button2,
  width = "medium", // small, medium, fullWidth
  size, // small, normal, large
  variant = "default", // default, dark
}) => {
  const widthClass =
    width === "fullWidth"
      ? styles["sectionHeader--full-width"]
      : width === "small"
      ? styles["sectionHeader--small-width"]
      : styles["sectionHeader--normal-width"];

  const sizeClass =
    size === "small"
      ? styles["sectionHeader--small"]
      : size === "large"
      ? styles["sectionHeader--large"]
      : styles["sectionHeader--normal"];

  const variantClass = variant === "dark" ? styles["sectionHeader--dark"] : "";

  return (
    <div
      className={`${styles.sectionHeader} ${widthClass} ${sizeClass} ${variantClass}`}
    >
      <h2 className={`${styles.sectionHeader__heading}`}>{heading}</h2>

      {description && (
        <p className={`${styles.sectionHeader__description}`}>{description}</p>
      )}

      {(button1 || button2) && (
        <div className={styles.sectionHeader__buttons}>
          {button1}
          {button2}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
