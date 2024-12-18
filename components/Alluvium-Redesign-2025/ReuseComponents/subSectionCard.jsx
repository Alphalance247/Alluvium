import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/sub-section-card.module.scss";

const SubSectionCard = ({
  gridArray,
  heading = true,
  variant = "primary",
  border = "",
}) => {
  return (
    <div
      className={`${styles.section__encap} ${
        styles[`section__encap--${border}`]
      }`}
    >
      <div className={styles.gridContainer}>
        {gridArray.map((item, i) => (
          <div key={i} className={styles.gridItem}>
            <div className={styles.iconContainer}>{item.icon}</div>
            {heading && <h5 className={styles.heading5}>{item.title}</h5>}
            <p
              className={`${styles.sub__heading} ${
                styles[`sub__heading--${variant}`]
              }`}
            >
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSectionCard;
