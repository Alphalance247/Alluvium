import styles from "../../styles/blogpost.module.scss";
import AssetImg from "./socialimage";

const HeroBlog = () => {
  return (
    <section className={`${styles.heroblogstyles} container-fluid`}>
      <div className={`container m-auto`}>
        <h1>Why Hire Us as Your Atlassian Partner</h1>

        <div className={`${styles.blogdatastyle}`}>
          <div className={`${styles.contentstyling}`}>
            <p className={`${styles.contentname}`}>By Taiwo Ojo</p>
            <p className={`${styles.contentdate}`}>
              Sept 15th, 2024 <span>.</span> 5 mins read
            </p>
          </div>

          {/* <div className={`${styles.social}`}>
            <p className={`${styles.contentname}`}>Share This Article</p>
            <div className={styles.socialImg}>
              <div>
                <AssetImg
                  src="/assets/blogImages/facebook.svg"
                  alt="facebook"
                />
              </div>
              <div>
                <AssetImg src="/assets/blogImages/twitter.svg" alt="twitter" />
              </div>
              <div>
                <AssetImg
                  src="/assets/blogImages/linkedin.svg"
                  alt="linkedin"
                />
              </div>
              <div>
                <AssetImg src="/assets/blogImages/insta.svg" alt="instagram" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;
