import styles from "../../styles/newsTrends.module.scss";
import ActiveTrend from "./activeTrend";
import Trendlist from "./trendList";

const NewsTrends = (props) => {
  return (
    <div className={styles.newstrends}>
      <ActiveTrend activeNews={props.data[0]} />
      <Trendlist trends={props.data.slice(1,4)} />
    </div>
  );
};

export default NewsTrends;
