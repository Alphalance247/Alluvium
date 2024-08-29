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
  showWithImage = true,
  paragraphs = false,
  para1,
  para2,
  imageContent = false,
  listItem = false,
  softwareList,
}) => {
  return (
    <section
      className={`container-fluid ${styles.servercloudstylesMain} ${
        styles[`servercloudstylesMain--${variant}`]
      }`}
    >
      {showWithImage ? (
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
            {imageContent && (
              <div>
                <Image
                  src="/assets/licence-image/alignjira.svg"
                  alt=""
                  width={143}
                  height={83}
                />
              </div>
            )}

            <h2>{heading}</h2>
            <p>{paragraph}</p>
            {listItem && (
              <ul>
                {softwareList.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
              </ul>
            )}

            {paragraphs && (
              <>
                <p>{para1}</p>
                <p>{para2}</p>
              </>
            )}

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
      ) : (
        <div
          className={`container mx-auto ${styles.servercloudstyles} ${
            styles[`servercloudstyles--${display}`]
          }`}
        >
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      )}
    </section>
  );
};

export default ServerToCloud;
