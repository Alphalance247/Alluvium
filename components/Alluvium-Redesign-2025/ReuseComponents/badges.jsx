import { badges } from "data";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/badges.module.scss";
import Image from "next/image";

const Badges = ({ variant }) => {
  return (
    <div
      className={`${styles.cert__section} ${
        styles[`cert__section--${variant}`]
      }`}
    >
      <div className={styles.scroll__wrapper}>
        {[...badges, ...badges, ...badges, ...badges, ...badges].map(
          (item, i) => {
            return (
              <div className={styles.imageWrapper} key={i}>
                <Image
                  src={item.img}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Badges;
