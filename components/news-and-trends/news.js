import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../../styles/news.module.scss";
import NewsHeader from "./newsHeader";
import Trendlist from './trendList';

const News = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios.get("https://blog.alluvium.net/wp-json/wp/v2/posts").then(res => {
			setNews(res.data)
		}).catch(err => {
			console.log(err.message);
		});
	}, [])

	return (
		<div className={`container-fluid p-md-0 m-0 ${styles.news}`}>
			<div className='container mx-auto'>
				<NewsHeader />
				{(news.length > 0) ? <Trendlist trends={news.slice(0, 3)} /> : ""}
			</div>
		</div>
	);
};

export default News;
