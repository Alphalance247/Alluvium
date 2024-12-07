import { FaArrowRightLong } from "react-icons/fa6";
import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/readmore.module.scss";

const ReadMore = ({ content }) => {
  return (
    <button className={styles.readmore}>
      {content}
      <span>
        <FaArrowRightLong />
      </span>
    </button>
  );
};
export default ReadMore;
