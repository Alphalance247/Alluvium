import { GoArrowRight } from "react-icons/go";
import styles from "../../styles/eventblog.module.scss";

export default function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GoArrowRight
      // style={{
      //   ...style,
      //   display: "block",
      //   background: "white",
      //   position: "absolute",
      //   right: "2rem",
      //   top: "6rem",
      //   cursor: "pointer",
      //   color: "#004080",
      //   borderRadius: "50%",
      //   width: "35px",
      //   height: "35px",
      //   fontSize: "12px",
      //   padding: ".5rem",
      // }}
      onClick={onClick}
      className={styles.arrowRightStyle}
    />
  );
}
