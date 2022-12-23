import styles from "../../styles/trend.module.scss";
import Image from "next/image";
import NewsLink from "./link";
import { dateFormat } from "lib/ga";

const Trend = (props) => {
	const { trendNews, index } = props;
	return (
		<div className={styles.trend} key={index}>
			<div className={styles.imageStyle}>
				{
					(trendNews.jetpack_featured_media_url == "") ? "" : <Image priority loading="eager" layout="fill" src={trendNews.jetpack_featured_media_url} height={209} width={228} alt={trendNews.slug} />
				}
			</div>
			<div className={styles.trendContent}>
				<span className={styles.date}>{dateFormat(trendNews.date)}</span>
				<span dangerouslySetInnerHTML={{ __html: trendNews.title.rendered }} className={styles.title}></span>
				<NewsLink
				className={styles.headerlink}
				title={"Read More"}
				src={trendNews.link}
				href={trendNews.link}
				/>
			</div>
		</div>
	);
};

export default Trend;
