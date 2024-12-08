import styles from "../../../styles/AlluviumRedesign2025/ReuseAbleComponent/highlight.module.scss";

const HighLight = ({ text, i }) => {
  return (
    <p className={styles.blog__p} key={i}>
      {text}
    </p>
  );
};

export default HighLight;
