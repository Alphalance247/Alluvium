import styles from "../../styles/blogpost.module.scss";
import Image from "next/legacy/image";
import { Articledata } from "./informationItem";
import Link from "next/link";

const BlogCard = ({ el }) => {
  return (
    <Link href={`/blogs/${el.pageTitle}`}>
      <div className={styles.articlencap} key={el.id}>
        <div className={styles.imgs}>
          <Image src={el.image} alt="casestudyImg" width={389} height={229} />
          <p>{el.artcleName}</p>
        </div>
        <div className={styles.articleContent}>
          <h5>{el.heading}</h5>
          <p className={styles.articleName}>{el.publisherName}</p>

          <p>{el.publishedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
