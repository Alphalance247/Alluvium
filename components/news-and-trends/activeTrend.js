import styles from "../../styles/activetrends.module.scss";
import Image from "next/image";
import NewsLink from "./link";
import { dateFormat } from "lib/ga";

const ActiveTrend = (props) => {
  const { activeNews } = props;
  return (
    <div className={styles.activetrends}>
		{
			(activeNews.jetpack_featured_media_url == "") ? "" : <Image
			priority
			  className={styles.activeImage}
			  src={activeNews.jetpack_featured_media_url}
			  height={452}
			  width={617}
			  layout="responsive"
			  alt={activeNews.slug}
			/>
		}
      
      <div className={styles.postDetails}>
        <p className={styles.newsDate}>{dateFormat(activeNews.date)}</p>
		
        <h3 dangerouslySetInnerHTML={{ __html: activeNews.title.rendered }} className={styles.newstitle}></h3>

        <div dangerouslySetInnerHTML={{ __html: activeNews.excerpt.rendered }} className={styles.newsDescription}></div>
        <NewsLink
        className={styles.headerLink}
        title={"Read More"}
        src={activeNews.link}
        href={activeNews.link}
      />
      </div>
      
    </div>
  );
};

export default ActiveTrend;
