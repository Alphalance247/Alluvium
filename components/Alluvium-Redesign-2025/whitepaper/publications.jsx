import WhitePaperCard from "./card";
import styles from "../../../styles/AlluviumRedesign2025/whitepaper/whitepaper.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { environment } from "env/env.local";

const Publications = () => {
  // Whitepaper data - can be moved to a data file or fetched from API
  const whitepapers = [
    {
      id: 1,
      title: "Regulatory Supremacy and Competitive Edge",
      author: "TAIWO OJO",
      date: "NOVEMBER 13, 2025",
      handsImage: "/assets/redesign-2025/whitepaper/white-paper-1.png", // Robotic and human hands
      url: "/whitepaper/regulatory-supremacy-and-competitive-edge",
    },
  ];

  const [data, setData] = useState([]);

  console.log(data, "data");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get(`${environment?.baseUrl}api/blog/posts/`);

      const postsData = res.data;

      if (res.status !== 200 || !postsData) {
        setError(true);
        return;
      }

      setData(postsData?.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    } finally {
      console.log("done");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles?.publication__main}>
      <div>
        <h2 className={styles?.h2}>Latest Publications</h2>

        <div className={styles.cardsGrid}>
          {whitepapers.map((whitepaper) => (
            <WhitePaperCard
              key={whitepaper.id}
              url={whitepaper?.url}
              title={whitepaper.title}
              author={whitepaper.author}
              date={whitepaper.date}
              handsImage={whitepaper.handsImage}
            />
          ))}
          {data?.map((whitepaper) => (
            <WhitePaperCard
              key={whitepaper.id}
              url={"/blogs/" + whitepaper?.slug}
              title={whitepaper?.title}
              author={
                whitepaper?.author?.first_name +
                " " +
                whitepaper?.author?.last_name
              }
              date={whitepaper?.date}
              handsImage={whitepaper?.featured_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
