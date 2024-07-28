import styles from "../../../styles/licence.module.scss";
import Link from "next/link";
import Image from "next/image";
import AutoPlay from "pages/atlassian-product/atlassian-services/autoplay";

const LicenceHero = ({
  contentsheading,
  contentsheading1,
  contentsheading2,
  withrequest = true,
  buttontext,
  withSlide = false,
}) => {
  return (
    <div className={`container-fluid ${styles.licencelayout}`}>
      <div className={`container mx-auto ${styles.licencehero}`}>
        <p className={styles.textlicence}>{contentsheading}</p>
        <h3>{contentsheading1}</h3>
        <p>{contentsheading2}</p>
        <div>
          <Link href="/atlassian-licence/licence-request">
            <button className={styles.button1}>{buttontext}</button>
          </Link>

          {withrequest && (
            <button className={styles.button2}>Request Site Audit</button>
          )}
        </div>
      </div>
      {withSlide && (
        <>
          <div className={`container mx-auto ${styles.infinitesscrollstyling}`}>
            <div className={styles.overlaylicence}></div>
            {/* <Image
              src="/assets/licence-image/infiniteimage.svg"
              width={967}
              height={79}
              alt=""
            /> */}
            <AutoPlay />
          </div>
        </>
      )}
    </div>
  );
};

export default LicenceHero;
