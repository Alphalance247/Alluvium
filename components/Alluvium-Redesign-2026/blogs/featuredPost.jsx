import React from "react";
import styles from "../../../styles/AlluviumRedesign2026/blogs/featured-post.module.scss";
import Image from "next/image";
import Link from "next/link";

const FeaturedPost = ({
  img,
  tags,
  date,
  readTime,
  title,
  summary,
  author,
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.innerContainer}>
        <Link href={`/blogs/aipolicy`} passHref>
          <article className={styles.featuredCard}>
            <div className={styles.imageSection}>
              <Image
                width={581}
                height={408}
                src={img || "/assets/Alluvium-Redesign-2026/blogs/blog1.png"}
                alt="Shadow AI Technical Preview"
              />
            </div>

            <div className={styles.contentSection}>
              {/* Tags (Using the same style as before but nested in Module) */}
              {/* Tag Row */}

              <div className={styles.tagContainer}>
                {tags.map((tag, index) => (
                  <span className={styles.tag} key={index}>
                    {tag}
                  </span>
                ))}
                {/* <span className={styles.tag}>AI</span>
              <span className={styles.tag}>Whitepaper</span>
              <span className={styles.tag}>Project & work management</span> */}
              </div>

              <div className={styles.metaRow}>
                <span>{date || "Sept 15th, 2024"}</span>
                <span className={styles.divider}>|</span>
                <span>{readTime || "2 MIN READ"}</span>
              </div>

              <div>
                <h2 className={styles.mainTitle}>
                  {title ||
                    "Shadow AI: Risks, Implications, and Strategic Mitigation Approaches"}
                </h2>
                <p className={styles.summaryText}>
                  {summary ||
                    "The proliferation of artificial intelligence technologies has given rise to a critical emerging challenge: Shadow AI. This phenomenon represents the unauthorized, unmanaged, and often untracked deployment of AI."}
                </p>
              </div>

              <div className={styles.authorRow}>
                <img src="https://placehold.co/24x24" alt="Tumobi Adelaja" />
                <span>{author || "Tumobi Adelaja"}</span>
              </div>

              {/* The Badge: Absolute on desktop, relative flow on mobile */}
              <div className={styles.featuredBadge}>FEATURED post</div>
            </div>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedPost;
