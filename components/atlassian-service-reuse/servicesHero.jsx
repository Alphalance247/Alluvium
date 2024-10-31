import AutoPlay from "pages/atlassian-services/autoplay";
import styles from "../../styles/licence.module.scss";

const ServicesHero = ({
  contentsheading,
  contentsheading1,
  contentsheading2,
  withSlide = false,
  button1,
  button2,
  variant = "default",
  fonts = "default",
  width = "default",
}) => {
  return (
    <div
      className={`container-fluid ${styles.licencelayout} ${
        styles[`licencelayout--${variant}`]
      }`}
    >
      <div
        className={`container mx-auto ${styles.licencehero} ${
          styles[`licencehero--${width}`]
        }`}
      >
        <p className={styles.textlicence}>{contentsheading}</p>
        <h1
          className={`${styles.services__head} ${
            styles[`services__head--${fonts}`]
          }`}
        >
          {contentsheading1}
        </h1>
        <p
          className={`${styles.services__subhead} ${
            styles[`services__subhead--${fonts}`]
          }`}
        >
          {contentsheading2}
        </p>

        {(button1 || button2) && (
          <div>
            {button1}
            {button2}
          </div>
        )}
      </div>
      {withSlide && (
        <>
          <div className={`container mx-auto ${styles.infinitesscrollstyling}`}>
            <div className={styles.overlaylicence}></div>
            <AutoPlay />
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesHero;
