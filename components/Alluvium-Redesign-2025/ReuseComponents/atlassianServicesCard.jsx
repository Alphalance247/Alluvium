import Image from "next/image";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/atlassianservicescard.module.scss";

const AtlassianServicesCard = ({
  title,
  description,
  list,
  withList = false,
  img,
  width,
  height,
  headingVariant = "default",
  subHeadingVariant = "default",
  marginVariant = "marginDefault",
  removeBorder = false,
}) => {
  return (
    <div
      className={`${styles.card} ${
        removeBorder ? styles.noBorder : styles.withBorder
      }`}
    >
      <Image width={width} height={height} src={img} alt="icons" />

      <h6
        className={`${styles.heading} ${styles[`heading--${headingVariant}`]} ${
          styles[`heading--${marginVariant}`]
        }`}
      >
        {title}
      </h6>

      {description?.map((el, i) => (
        <p
          className={`${styles.sub__head} ${
            styles[`sub__head--${subHeadingVariant}`]
          }`}
          key={i}
        >
          {el?.text}{" "}
          {el?.withLink && (
            <a href={el?.url}>
              {" "}
              <span>{el?.urlText}</span>
              {"."}
            </a>
          )}
        </p>
      ))}

      {withList && (
        <ul>
          {list?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AtlassianServicesCard;
