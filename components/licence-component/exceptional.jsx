import Image from "next/legacy/image";
import styles from "../../styles/licence.module.scss";

const Exceptional = ({
  categoryTitle,
  heading,
  paragraphs,
  image,
  redesignStyle = false,
  variantPadding = "primary",
  variantPadd = "primary",
  width = 424,
  height = 113,
}) => {
  return (
    <div className={`${redesignStyle ? styles.redesign__style : styles.prev}`}>
      <div
        className={`${
          redesignStyle ? styles.container__redesign : `container mx-auto`
        } ${styles.exception}`}
      >
        <div
          className={`${styles.imageContainer} ${
            styles[`imageContainer--${variantPadding}`]
          }`}
        >
          <Image src={image} alt="certs" width={width} height={height} />
        </div>

        <div
          className={`${styles.content} ${styles[`content--${variantPadd}`]}`}
        >
          {categoryTitle && <p className={styles.manage}>{categoryTitle}</p>}
          <h5>{heading}</h5>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={styles.lorem}
              style={{ marginBottom: "1rem" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
