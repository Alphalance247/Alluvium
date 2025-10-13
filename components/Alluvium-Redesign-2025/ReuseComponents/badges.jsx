import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/badges.module.scss";
import Image from "next/image";

const Badges = ({ variant, badgesData = [] }) => {
  return (
    <div
      className={`${styles.cert__section} ${
        styles[`cert__section--${variant}`]
      }`}
    >
      {/* [...badges, ...badges, ...badges, ...badges, ...badges] */}
      <div className={styles.scroll__wrapper}>
        {badgesData.map((item, i) => {
          return (
            <div className={styles.imageWrapper} key={i}>
              <Image
                src={item.img}
                width={item.width}
                height={item.height}
                alt={item.alt}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Badges;
