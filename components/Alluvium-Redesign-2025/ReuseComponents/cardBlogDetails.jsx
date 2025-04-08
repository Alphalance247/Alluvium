import { IoMdTime } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import styles from "../../../styles/Blogs/blogs.module.scss";

const CardBlogDetails = ({ variant = "primary", name, blogDate, minRead }) => {
  return (
    <div className={`${styles.blog__details} `}>
      <p className={styles.author}>{name || "James Akinlabi"}</p>
      <p
        className={`${styles.blog__date__time} ${
          styles[`blog__date__time--${variant}`]
        }`}
      >
        <span style={{ marginRight: ".3rem" }}>
          {blogDate || "Sept 15th, 2024"}
        </span>{" "}
        <span style={{ marginBottom: ".2rem" }}>
          <LuDot />
        </span>
        <span style={{ marginLeft: ".3rem", marginBottom: ".3rem" }}>
          <IoMdTime />
        </span>{" "}
        <span style={{ marginLeft: ".2rem" }}>{minRead || "5 mins read"}</span>{" "}
      </p>
    </div>
  );
};

export default CardBlogDetails;
