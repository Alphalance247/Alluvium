import styles from "../../styles/blogpost.module.scss";
import Image from "next/image";
import { Articledata } from "./informationItem";
import Link from "next/link";
import BlogCard from "./blogCard";
const Articles = () => {
  return (
    <section className={`${styles.Articles}`}>
      <div className={`${styles.articlediv}`}>
        {Articledata.map((el) => {
          return (
            <BlogCard el={el} key={el.id} />
            // <Link href="/blogs" passHref>
            //   <div className={styles.articlencap} key={el.id}>
            //     <div className={styles.imgs}>
            //       <Image
            //         src={el.image}
            //         alt="casestudyImg"
            //         width={389}
            //         height={229}
            //       />
            //       <p>{el.artcleName}</p>
            //     </div>
            //     <div className={styles.articleContent}>
            //       <a>{el.heading}</a>
            //       <p className={styles.articleName}>{el.publisherName}</p>

            //       <p>{el.publishedDate}</p>
            //     </div>
            //   </div>
            // </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
