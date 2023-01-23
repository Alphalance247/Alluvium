import styles from "../../styles/trend.module.scss";
import Image from "next/image";
import Link from "next/link";
import { dateFormat } from "lib/ga";
import moment from "moment";

const Trend = (props) => {
	const { trendNews, index } = props;
	return (
		<Link href={trendNews.link}>
			<a target="_blank" rel="norefferer">
				<div className={styles.trend} key={index}>
					<div className={styles.imageStyle}>
						{
							(trendNews.jetpack_featured_media_url == "") ? "" : <Image priority loading="eager" layout="responsive" src={trendNews.jetpack_featured_media_url} height={209} width={228} alt={trendNews.slug} />
						}
					</div>
					<div className={styles.trendContent}>

						<span dangerouslySetInnerHTML={{ __html: trendNews.title.rendered }} className={styles.title}></span>
						<span className={styles.date}>{moment(trendNews.date).format("MMM Do, YYYY")}</span>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Trend;
