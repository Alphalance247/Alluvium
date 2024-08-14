import Link from "next/link";
import Image from "next/image";
import AutoPlay from "pages/atlassian-services/autoplay";
import styles from "../../styles/licence.module.scss";
import Button from "./Button";

const ServicesHero = ({
  contentsheading,
  contentsheading1,
  contentsheading2,
  withSlide = false,
  button1,
  button2,
}) => {
  return (
    <div className={`container-fluid ${styles.licencelayout}`}>
      <div className={`container mx-auto ${styles.licencehero}`}>
        <p className={styles.textlicence}>{contentsheading}</p>
        <h3>{contentsheading1}</h3>
        <p>{contentsheading2}</p>

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
