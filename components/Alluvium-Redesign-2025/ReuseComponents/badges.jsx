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
      {badges.map((item, i) => {
        return (
          <Image
            src={item?.img}
            width={item?.width}
            height={item?.height}
            alt={item?.alt}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Badges;
