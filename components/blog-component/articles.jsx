import styles from "../../styles/blogpost.module.scss";
import Image from "next/image";
import articledata from "./blogdata";

const Articles = () => {
  return (
    <section className={`container-fluid ${styles.Articles}`}>
      <div className="container m-auto">
        <h2>Related Articles</h2>

        <div className={`${styles.articlediv}`}>
          {articledata.map((el) => {
            return (
              <div className={styles.articlencap} key={el.id}>
                <div className={styles.imgs}>
                  <Image
                    src={el.image}
                    alt="casestudyImg"
                    width={389}
                    height={229}
                  />
                  <p>{el.artcleName}</p>
                </div>
                <div className={styles.articleContent}>
                  <a href="#">{el.heading}</a>
                  <p className={styles.articleName}>{el.publisherName}</p>

                  <p>{el.publishedDate}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
