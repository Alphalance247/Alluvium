import styles from "../../styles/blogpost.module.scss";
import Image from "next/legacy/image";
import { Articledata } from "./informationItem";
import Link from "next/link";
import BlogCard from "./blogCard";
const Articles = () => {
  return (
    <section className={`${styles.Articles}`}>
      <div className={`${styles.articlediv}`}>
        {Articledata.map((el) => {
          return <BlogCard el={el} key={el.id} />;
        })}
      </div>
    </section>
  );
};

export default Articles;
