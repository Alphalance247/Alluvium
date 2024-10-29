import { GoArrowLeft } from "react-icons/go";
import styles from "../../styles/eventblog.module.scss";

export default function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <GoArrowLeft onClick={onClick} className={styles.arrowLeftStyle} />;
}
