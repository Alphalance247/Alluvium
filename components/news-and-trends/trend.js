import styles from "../../styles/trend.module.scss";
import Image from "next/image";
import Link from "next/link";
import { dateFormat } from "lib/ga";
import moment from "moment";

const Trend = (props) => {
	const { trendNews, index } = props;
	console.log(trendNews.jetpack_featured_media_url);
	return (
		<Link href={trendNews.link}>
			<a target="_blank" rel="norefferer">
				<div className={styles.trend} key={index}>
					<div className={styles.imageStyle} style={{background: `url(${trendNews.jetpack_featured_media_url})`, backgroundPosition: 'center', backgroundSize: 'contain', height: '209px'}}>
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
