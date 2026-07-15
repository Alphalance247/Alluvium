import Image from "next/legacy/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/ReusableSection.module.scss";

const ReusableSection = ({
  title,
  subtitle,
  description,
  icon,
  extraContent,
  isColumn,
  height,
  width,
  noLine = false,
  iconStyles,
  contentStyles,
  containerStyles,
}) => {
  return (
    <div
      className={`${styles.card} ${
        isColumn ? styles.column : styles.row
      } ${containerStyles}`}
    >
      {icon && (
        <div className={`${styles.icon} ${iconStyles}`}>
          <Image src={icon} alt={title} width={width} height={height} />
        </div>
      )}

      {!noLine && <div className={styles.vertical} />}

      <div className={`${styles.content} ${contentStyles}`}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {extraContent && (
          <div className={styles.extraContent}>{extraContent}</div>
        )}
      </div>
    </div>
  );
};

export default ReusableSection;
