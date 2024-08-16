import Link from "next/link";
import styles from "../../styles/licence.module.scss";
import Button from "./Button";

const FeatureCard = ({
  number,
  heading,
  description,
  buttonText,
  link,
  buttonVariant = "default",
  icon,
  variant = "default",
  style,
  listItems,
}) => {
  const cardClass =
    styles[`card${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <div className={`${styles.cardContainer} ${cardClass}`} style={style}>
      <div>
        {icon && <img src={icon} className={styles.icon} alt="Feature icon" />}
        {number && (
          <h4 className={styles.number}>
            {number.toString().padStart(2, "0")}
          </h4>
        )}
        <div className={styles.content}>
          <h3>{heading}</h3>
          {Array.isArray(description) ? (
            description.map((paragraph, index) => (
              <p key={index} className={styles.description}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.description}>{description}</p>
          )}
          {listItems && listItems.length > 0 && (
            <ul className={styles.featureList}>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {buttonText && link && (
          <Link href={link} className={styles.link}>
            <Button variant={buttonVariant}>{buttonText}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
