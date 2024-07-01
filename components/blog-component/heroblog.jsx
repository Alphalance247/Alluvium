import styles from "../../styles/blogpost.module.scss";
import Images from "./Images";

const HeroBlog = () => {
  return (
    <section className={`${styles.heroblog} container-fluid`}>
      <div className={`container m-auto`}>
        <h1>Why Hire Us as Your Atlassian Partner</h1>

        <div className={`${styles.blogdata}`}>
          <div className={`${styles.content}`}>
            <p className={`${styles.contentname}`}>By James Akinlabi</p>
            <p className={`${styles.contentdate}`}>
              Sept 15th, 2024 <span>.</span> 5 mins read
            </p>
          </div>

          <div className={`${styles.social}`}>
            <p className={`${styles.contentname}`}>Share This Article</p>
            <div className={styles.socialImg}>
              <div>
                <Images
                  src="/assets/blog-images/facebook.svg"
                  alt="facebook"
                  url="https://www.facebook.com/alluviumhq/?ti=as"
                  style={{ margin: "3rem" }}
                />
              </div>
              <div>
                <Images
                  src="/assets/blog-images/twitter.svg"
                  alt="twitter"
                  url="https://twitter.com/alluviumhq?s=08"
                />
              </div>
              <div>
                <Images
                  src="/assets/blog-images/linkedin.svg"
                  alt="linkedin"
                  url="https://www.linkedin.com/company/alluvium-hq/"
                />
              </div>
              <div>
                <Images
                  src="/assets/blog-images/insta.svg"
                  alt="instagram"
                  url="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;
