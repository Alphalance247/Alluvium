import styles from "../../styles/trendlist.module.scss";
import Trend from "./trend";

const Trendlist = (props) => {
  const { trends } = props;

  return (
    <div className={styles.trendlist}>
      {trends.map((value, index) => {
        return (
          <div key={index}>
            <Trend index={index} trendNews={value} /> 
          </div>
        );
      })}
    </div>
  );
};

export default Trendlist;
