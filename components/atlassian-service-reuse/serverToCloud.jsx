import styles from "../../styles/licence.module.scss";
import Image from "next/image";

const ServerToCloud = ({
  image1 = false,
  image2 = false,
  heading,
  paragraph,
  image2Url,
  image1Url,
  alt2,
  alt1,
}) => {
  return (
    <section className={`container ${styles.servercloudstyles}`}>
      {image1 && (
        <div>
          <Image src={image1Url} alt={alt2} width={500} height={500} />
        </div>
      )}
      <div>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
      {image2 && (
        <div>
          <Image src={image2Url} alt={alt1} width={500} height={500} />
        </div>
      )}
    </section>
  );
};

export default ServerToCloud;
