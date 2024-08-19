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
  variant = "default",
  text = true,
  callToAction = true,
  display = "default",
}) => {
  return (
    <section
      className={`container-fluid ${styles.servercloudstylesMain} ${
        styles[`servercloudstylesMain--${variant}`]
      }`}
    >
      <div
        className={`container mx-auto ${styles.servercloudstyles} ${
          styles[`servercloudstyles--${display}`]
        }`}
      >
        {image1 && (
          <div>
            <Image src={image1Url} alt={alt2} width={439} height={416} />
          </div>
        )}
        <div>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          {(text || callToAction) && (
            <div>
              <p>{text}</p>
              {callToAction}
            </div>
          )}
        </div>
        {image2 && (
          <div>
            <Image src={image2Url} alt={alt1} width={439} height={416} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServerToCloud;
