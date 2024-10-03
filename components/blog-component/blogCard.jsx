import styles from "../../styles/blogpost.module.scss";
import Image from "next/image";
import { Articledata } from "./informationItem";
import Link from "next/link";

const BlogCard = ({ el }) => {
  return (
    <Link href={`/blogs/${el.id}`} passHref>
      <div className={styles.articlencap} key={el.id}>
        <div className={styles.imgs}>
          <Image src={el.image} alt="casestudyImg" width={389} height={229} />
          <p>{el.artcleName}</p>
        </div>
        <div className={styles.articleContent}>
          <a>{el.heading}</a>
          <p className={styles.articleName}>{el.publisherName}</p>

          <p>{el.publishedDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
