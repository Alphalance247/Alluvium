import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/sub-section-card.module.scss";
import Image from "next/image";

const SubSectionCard = ({
  gridArray,
  heading = true,
  variant = "primary",
  border = "",
  iconImageSwitch = true,
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
            {/* Switching between icon and image */}
            {iconImageSwitch ? (
              <div className={styles.iconContainer}>{item.icon}</div>
            ) : (
              <Image src={item?.icon} width={40} height={40} alt="icon" />
            )}

            {heading && <h5 className={styles.heading5}>{item?.title}</h5>}
            <p
              className={`${styles.sub__heading} ${
                styles[`sub__heading--${variant}`]
              }`}
            >
              {item?.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSectionCard;
