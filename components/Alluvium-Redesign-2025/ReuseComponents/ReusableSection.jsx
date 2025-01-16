import Image from "next/image";
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
}) => {
  return (
    <div className={`${styles.card} ${isColumn ? styles.column : styles.row}`}>
      {icon && (
        <div className={styles.icon}>
          <Image src={icon} alt={title} width={width} height={height} />
        </div>
      )}

      {!isColumn && <div className={styles.vertical} />}

      <div className={styles.content}>
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
