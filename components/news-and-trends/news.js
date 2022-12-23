import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../../styles/news.module.scss";
import NewsTrends from "./newsTrends";
import NewsHeader from "./newsHeader";

const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios.get("https://blog.alluvium.net/wp-json/wp/v2/posts").then(res => {
			setNews(res.data)
		})
	}, [])

	return (
		<div className={`container ${styles.news}`}>
		<NewsHeader />
		{ (news.length > 0) ? <NewsTrends data={news} /> : "" }
		</div>
	);
};

export default News;
