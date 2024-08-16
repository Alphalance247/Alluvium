import Image from "next/image";
import styles from "../../styles/licence.module.scss";

const Exceptional = ({ heading, paragraphs, image }) => {
  return (
    <div className="container-fluid" style={{ background: "#f9fafb" }}>
      <div className={`container mx-auto ${styles.exception}`}>
        <div className={styles.imageContainer}>
          <Image src={image} alt="certs" width={424} height={113} />
        </div>

        <div className={styles.content}>
          <p className={styles.manage}>LICENSE MANAGEMENT</p>
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
